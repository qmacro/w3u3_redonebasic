sap.ui.controller("com.opensap.Login", {

    oSMPModel: null,

    loginTap: function(oEvent) {

        var oAppData = sap.ui.getCore().getModel("app").getData();

        if (!this.oSMPModel) {
            this.oSMPModel = new sap.ui.model.odata.ODataModel(
                oAppData.BaseURL + "/odata/applications/latest/" + oAppData.AppName
            );
        }

        this.oSMPModel.create('/Connections', { DeviceType: "Android" }, null, 
            jQuery.proxy(function(mResult) {
                sap.ui.getCore().getModel("app").setData({AppCID: mResult.ApplicationConnectionId}, true);
                localStorage['APPCID'] = mResult.ApplicationConnectionId;
                this.showProducts();
            }, this),
            jQuery.proxy(function(oError) {
                jQuery.sap.log.error("Connection creation failed");
                // Bypass if we already have an id
                if (/an application connection with the same id already exists/.test(oError.response.body)) {
                    jQuery.sap.log.info("Bypassing failure: already have a connection");
                    sap.ui.getCore().getModel("app").setData({AppCID: localStorage['APPCID']}, true);
                    this.showProducts();
                }
            }, this)
        );

    },

    showProducts: function() {

        var oAppData = sap.ui.getCore().getModel("app").getData();
        var oModel = new sap.ui.model.odata.ODataModel(
            oAppData.BaseURL + "/" + oAppData.AppName,
            { 'X-SUP-APPCID': oAppData.AppCID }
        );
        sap.ui.getCore().setModel(oModel);

        var oApp = this.getView().getParent();
        oApp.to("ProductList");

    }

});
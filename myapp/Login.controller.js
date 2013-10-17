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
                localStorage['APPCID'] = mResult.ApplicationConnectionId;
                this.showProducts(mResult.ApplicationConnectionId);
            }, this),
            jQuery.proxy(function(oError) {
                jQuery.sap.log.error("Connection creation failed");
                // Bypass if we already have an id
                if (/an application connection with the same id already exists/.test(oError.response.body)) {
                    jQuery.sap.log.info("Bypassing failure: already have a connection");
                    this.showProducts(localStorage['APPCID']);
                }
            }, this)
        );

    },

    showProducts: function(sAPPCID) {

        var oAppData = sap.ui.getCore().getModel("app").getData();
        var oModel = new sap.ui.model.odata.ODataModel(
            oAppData.BaseURL + "/" + oAppData.AppName,
            { 'X-SUP-APPCID': sAPPCID }
        );
        sap.ui.getCore().setModel(oModel);

        var oApp = this.getView().getParent();
        oApp.to("ProductList");

    }

});
sap.ui.jsview("com.opensap.SupplierDetail", {

    getControllerName: function() {
        return "com.opensap.SupplierDetail";
    },

    onBeforeShow: function(oEvent) {
        if (oEvent.data.context) {
            this.setBindingContext(oEvent.data.context);
        }
    },

    createContent: function(oController) {

        var oPage = new sap.m.Page({
            title: "{CompanyName}",
            showNavButton: true,
            navButtonPress: [oController.handleNavButtonPress, oController],
            content: [
                new sap.m.List({
                    items: [
                        new sap.m.DisplayListItem({
                            label: "Company Name",
                            value: "{CompanyName}"
                        }),
                        new sap.m.DisplayListItem({
                            label: "Web Address",
                            value: "{WebAddress}"
                        }),
                        new sap.m.DisplayListItem({
                            label: "Phone Number",
                            value: "{PhoneNumber}"
                        })
                    ]
                })
            ]
        });

        oPage.bindElement("Supplier");
        return oPage;

    }
    
});
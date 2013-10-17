sap.ui.jsview("com.opensap.ProductDetail", {

    getControllerName: function() {
        return "com.opensap.ProductDetail";
    },

    onBeforeShow: function(oEvent) {
        if (oEvent.data.context) {
            this.setBindingContext(oEvent.data.context);
        }
    },

    createContent: function(oController) {

        return new sap.m.Page({
            title: "{Name}",
            showNavButton: true,
            navButtonPress: [oController.handleNavButtonPress, oController],
            content: [
                new sap.m.List({
                    items: [
                        new sap.m.DisplayListItem({
                            label: "Name",
                            value: "{Name}"
                        }),
                        new sap.m.DisplayListItem({
                            label: "Description",
                            value: "{Description}"
                        }),
                        new sap.m.DisplayListItem({
                            label: "Price",
                            value: "{Price} {CurrencyCode}"
                        }),
                        new sap.m.StandardListItem({
                            title: "Supplier",
                            description: "{SupplierName}",
                            type: sap.m.ListType.Navigation,
                            press: [oController.handleSupplierPress, oController]
                        })
                    ]
                }),
                new sap.m.VBox({
                    alignItems: sap.m.FlexAlignItems.Center,
                    items: [
                        new sap.m.Image({
                            src: "{app>/ES1Root}{ProductPicUrl}",
                            decorative: true,
                            densityAware: false
                        })
                    ]
                })
            ]
        });

    }
    
});
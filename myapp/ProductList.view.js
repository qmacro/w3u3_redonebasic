sap.ui.jsview("com.opensap.ProductList", {

    getControllerName: function() {
        return "com.opensap.ProductList";
    },

    createContent: function(oController) {

        return new sap.m.Page("ProductPage", {
            title: "Products",
            content: [
                new sap.m.List({
                    headerText: "Product Overview",
                    items: {
                        path: "/ProductCollection",
                        template: new sap.m.StandardListItem({
                            title: "{Name}",
                            description: "{Description}",
                            type: sap.m.ListType.Navigation,
                            press: [oController.handleProductListItemPress, oController]
                        })
                    }
                })
            ]
        });
        
    }

});
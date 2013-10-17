sap.ui.jsview("com.opensap.ProductList", {

    getControllerName: function() {
        return "com.opensap.ProductList";
    },

    createContent: function(oController) {

        var oList = new sap.m.List({
            inset: false,
            type: sap.m.ListType.DetailAndActive,
            headerText: "Product Overview",
        });

        oList.bindItems({
            path: "/ProductCollection",
            template: new sap.m.StandardListItem({
                title: "{Name}",
                description: "{Description}",
                type: sap.m.ListType.Navigation,
                press: [oController.handleProductListItemPress, oController]
            }),
        });

        return new sap.m.Page("ProductPage", {
            title: "Products",
            content: [ oList ]
        })

    }

});
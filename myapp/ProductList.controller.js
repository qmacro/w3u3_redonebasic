sap.ui.controller("com.opensap.ProductList", {
    
    handleProductListItemPress: function(oEvent) {

        sap.ui.getCore().getEventBus().publish("nav", "to", {
            id : "ProductDetail",
            context: oEvent.getSource().getBindingContext()
        });

    }

});
sap.ui.controller("com.opensap.ProductList", {
    
    handleProductListItemPress: function(oEvent) {

        this.getView().getParent().to("ProductDetail", {
            context: oEvent.getSource().getBindingContext()
        });

    }

});
sap.ui.controller("com.opensap.ProductList", {
    
    handleProductListItemTap: function(oEvent) {

        this.getView().getParent().to("ProductDetail", {
            context: oEvent.getSource().getBindingContext()
        });

    }

});
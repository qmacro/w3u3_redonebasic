sap.ui.controller("com.opensap.ProductDetail", {
    
    handleNavButtonTap: function(oEvent) {
        this.getView().getParent().back();
    },

    handleSupplierTap: function(oEvent) {
        this.getView().getParent().to("SupplierDetail", {
            context: oEvent.getSource().getBindingContext()
        });
    }

});
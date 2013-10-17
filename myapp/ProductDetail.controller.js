sap.ui.controller("com.opensap.ProductDetail", {
    
    handleNavButtonPress: function(oEvent) {
        this.getView().getParent().back();
    },

    handleSupplierPress: function(oEvent) {
        this.getView().getParent().to("SupplierDetail", {
            context: oEvent.getSource().getBindingContext()
        });
    }

});
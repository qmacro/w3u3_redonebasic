sap.ui.controller("com.opensap.SupplierDetail", {
    
    handleNavButtonPress: function(oEvent) {
        this.getView().getParent().back();
    }

})
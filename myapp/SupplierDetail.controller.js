sap.ui.controller("com.opensap.SupplierDetail", {
    
    handleNavButtonTap: function(oEvent) {
        this.getView().getParent().back();
    }

})
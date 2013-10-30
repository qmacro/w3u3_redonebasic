sap.ui.controller("com.opensap.ProductDetail", {
    
    onInit: function() {
        this.getView().addDelegate({
            onBeforeShow: function(evt) {
                evt.to.setBindingContext(evt.data);
            }
        });
    },

    handleNavButtonPress: function(oEvent) {
        sap.ui.getCore().getEventBus().publish("nav", "back");
    },

    handleSupplierPress: function(oEvent) {
        sap.ui.getCore().getEventBus().publish("nav", "to", {
            id : "SupplierDetail",
            context: oEvent.getSource().getBindingContext()
        });
    }


});
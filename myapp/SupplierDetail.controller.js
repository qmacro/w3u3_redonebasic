sap.ui.controller("com.opensap.SupplierDetail", {
    
    onInit: function() {
        this.getView().addDelegate({
            onBeforeShow: jQuery.proxy(function(evt) {
                evt.to.setBindingContext(evt.data);
                this.getView().byId("Supplier").bindElement("Supplier");
            }, this)
        });
    },

    handleNavButtonPress: function(oEvent) {
        sap.ui.getCore().getEventBus().publish("nav", "back");
    },

});
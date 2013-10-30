sap.ui.controller("com.opensap.App", {

    onInit: function() {
        sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel("model/app.json"), "app");

        // Set up navigation handling
        var oBus = sap.ui.getCore().getEventBus();
        oBus.subscribe("nav", "to", this.navToHandler, this);
        oBus.subscribe("nav", "back", this.navBackHandler, this);

    },

    navToHandler : function(channelId, eventId, data) {
        var oView = this.getView();
        var oApp = oView.byId("app");
        oApp.to(oView.byId(data.id), data.context);
    },

    navBackHandler : function(channelId, eventId, data) {
        var oView = this.getView();
        var oApp = oView.byId("app");
        oApp.back();
    }
    
});
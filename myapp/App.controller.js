sap.ui.controller("com.opensap.App", {

    onInit: function() {
        sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel("model/app.json"), "app");
    }
    
});
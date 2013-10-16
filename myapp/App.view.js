sap.ui.jsview("com.opensap.App", {

    getControllerName: function() {
        return "com.opensap.App";
    },
    
    createContent: function(oController) {

        var oApp = new sap.m.App("idApp", {
            pages: [
                sap.ui.jsview("Login", "com.opensap.Login"),
                sap.ui.jsview("ProductList", "com.opensap.ProductList"),
                sap.ui.jsview("ProductDetail", "com.opensap.ProductDetail"),
                sap.ui.jsview("SupplierDetail", "com.opensap.SupplierDetail")
            ]
        });

        return oApp;

    }

});
sap.ui.jsview("com.opensap.Login", {

    getControllerName: function() {
        return "com.opensap.Login";
    },

    createContent: function(oController) {

        return new sap.m.Page({
            title: "Login",
            showNavButton: false,
            footer: new sap.m.Bar({
                contentMiddle: [
                    new sap.m.Button({
                        text: "Login",
                        tap: [oController.loginTap, oController]
                    }),
                ]
            }),
            content: [
                new sap.m.List({
                    items: [
                        new sap.m.InputListItem({
                            label: "Username",
                            content: new sap.m.Input({ value: "{app>/Username}" })
                        }),
                        new sap.m.InputListItem({
                            label: "Password",
                            content: new sap.m.Input({ value: "{app>/Password}", type: sap.m.InputType.Password })
                        })
                    ]
                })
            ]
        });

    }

});
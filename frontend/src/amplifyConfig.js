// src/amplifyConfig.js
import { Amplify } from "aws-amplify";

export function configureAmplify() {
  Amplify.configure({
    Auth: {
      Cognito: {
        userPoolId: "us-east-2_3sTzqaET8",
        userPoolClientId: "36fk9vns52pbma5n0brs54c2vc",
        identityPoolId:
          "us-east-2:7800eaa8-5aca-45df-a462-d07f49038270",

        // how users log in – email is fine because you’re using Hosted UI
        loginWith: {
          email: true,
        },

        // we only care about signed-in users for this app
        allowGuestAccess: false,
      },
    },

    // No Storage section needed because we pass bucket in options
  });
}

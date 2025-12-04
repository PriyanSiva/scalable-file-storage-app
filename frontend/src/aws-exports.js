// const awsconfig = {
//   Auth: {
//     region: "us-east-2",
//     userPoolId: "us-east-2_V9i10HMTb",
//     userPoolWebClientId: "7fhhf73hpstdu0fdrc313n4v9t",
//   },
// };

// export default awsconfig;
// src/aws-exports.js

const awsconfig = {
  Auth: {
    Cognito: {
      // 👇 your actual values from Cognito
      userPoolId: "us-east-2_V9i10HMTb",
      userPoolClientId: "7fhhf73hpstdu0fdrc313n4v9t",

      // 👇 tell Amplify how users log in
      loginWith: {
        email: true,   // we use email for login
      },
    },
  },
};

export default awsconfig;

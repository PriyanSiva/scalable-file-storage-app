const awsconfig = {
  Auth: {
    Cognito: {
      region: "us-east-2",
      userPoolId: "us-east-2_V9i10HMTb",
      userPoolClientId: "7fhhf73hpstdu0fdrc313n4v9t",
      loginWith: {
        email: true,
        username: false,
      },
    },
  },
};

export default awsconfig;

export default {
    s3: {
        REGION: "us-east-2",
        BUCKET: "notes-app-api-prod-serverlessdeploymentbucket-x5889j7vbett"
    },
    apiGateway: {
        REGION: "us-east-2",
        URL: "https://18ju4g90x2.execute-api.us-east-2.amazonaws.com/prod"

    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_zmfOIBOIo",
        APP_CLIENT_ID: "mvtnqmnsr1vjbgj16khkulr0r",
        IDENTITY_POOL_ID: "us-east-2:2501990f-7be4-49cf-acd7-0a1ca92ddf3a"
    }
};
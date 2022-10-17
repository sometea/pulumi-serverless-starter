import * as aws from "@pulumi/aws";
import * as apigateway from "@pulumi/aws-apigateway";
import { hello } from "../functions/hello";

export function createApiGateway() {
  // Define an endpoint that invokes a lambda to handle requests
  const api = new apigateway.RestAPI("api", {
    routes: [
      {
        path: "/",
        method: "GET",
        eventHandler: new aws.lambda.CallbackFunction("hello-handler", { callback: hello }),
      },
    ],
  });

  return api.url;
}
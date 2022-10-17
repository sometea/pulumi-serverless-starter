import * as aws from "@pulumi/aws";
import { createApiGateway } from "./pulumi/apigateway";
import { createStaticSite } from "./pulumi/staticsite";

// Create an AWS resource (S3 Bucket)
const bucket = new aws.s3.Bucket("my-bucket");

// Export the name of the bucket
export const bucketName = bucket.id;

export const apiUrl = createApiGateway();
export const frontendUrl = createStaticSite();
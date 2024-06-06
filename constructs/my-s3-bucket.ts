
import * as s3 from '@aws-cdk/aws-s3';
import * as cdk from '@aws-cdk/core';

export interface MyS3BucketProps {
  bucketName: string;
  versioned?: boolean;
}

export class MyS3Bucket extends cdk.Construct {
  public readonly bucket: s3.Bucket;

  constructor(scope: cdk.Construct, id: string, props: MyS3BucketProps) {
    super(scope, id);

    this.bucket = new s3.Bucket(this, 'MyBucket', {
      bucketName: props.bucketName,
      versioned: props.versioned ?? false,
      removalPolicy: cdk.RemovalPolicy.DESTROY, // NOT recommended for production code
      autoDeleteObjects: true, // NOT recommended for production code
    });
  }
}

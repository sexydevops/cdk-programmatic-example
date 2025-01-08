import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';

type Props = cdk.StackProps & {
  bucketName: string,
}
export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);
    console.log(33333333333333333333333)
    console.log(props.bucketName);
    console.log(33333333333333333333333)
    new s3.Bucket(this, props.bucketName, {removalPolicy: cdk.RemovalPolicy.DESTROY});
  }
}

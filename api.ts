import {AwsCdkCli} from "@aws-cdk/cli-lib-alpha";
import {ICloudAssemblyDirectoryProducer} from "@aws-cdk/cli-lib-alpha";
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkStack } from './lib/cdk-stack';

const stackName = "MyCDKStack1337";
const context: Record<string, any> = {
  bucketName: "MyBucket1337",
};

class MyProducer implements ICloudAssemblyDirectoryProducer {
    async produce(context: Record<string, any>) {
      const app = new cdk.App();
      console.log(context['bucketName']);
      new CdkStack(app, stackName, {
        // Set your account id and region, in the project, I am using env vars
        env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
        bucketName: context['bucketName'],
      });
      return app.synth().directory;
    }
}
const cli = AwsCdkCli.fromCloudAssemblyDirectoryProducer(new MyProducer());

// // Bootstrap a project like a normal CDK project if needed
// cli.bootstrap().then(console.log).catch(console.error);

// List all stacks
cli.list().then(console.log).catch(console.error);

// // Synth
// cli.synth({
//   stacks: [stackName],
//   context,
// }).then(console.log).catch(console.error);

// Deploy
cli.deploy({
  stacks: [stackName],
  context, // <- pass the context here
}).then(console.log).catch(console.error);

// // Destroy
// cli.destroy({
//   stacks: [stackName],
//   context,
// }).then(console.log).catch(console.error);
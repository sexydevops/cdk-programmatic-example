
# Welcome

This project uses the **@aws-cdk/cli-lib-alpha** module to programmatically interact with AWS CDK. For more information, check the official documentation: [AWS CDK CLI Library Alpha](https://docs.aws.amazon.com/cdk/api/v2/docs/cli-lib-alpha-readme.html#cloud-assembly-directory-producer).

> [!IMPORTANT]   
> You should have a basic understanding of CDK.

> [!WARNING]
> Checkout the issue https://github.com/aws/aws-cdk-rfcs/issues/300 to see the current status of the library: **@aws-cdk/cli-lib-alpha**

## Features

Take a look at the `api.ts` file to see how to use the library. It’s simple and straightforward! For this demo, I’ve implemented functions like:
| Command | Description                     |
|---------|---------------------------------|
| list    | To list available resources.   |
| deploy  | To deploy resources.           |
| destroy | To delete deployed resources.  |


## Install node modules
```bash
npm i
```

## Running the Project

To run the project, use the following command:
```bash
npx ts-node api.ts
```
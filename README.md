# AWS Lambda Node.js Function

This project contains a Node.js function for AWS Lambda, demonstrating cryptographic operations using `tweetnacl`.

## Project Setup

### Prerequisites

- Node.js and npm installed
- AWS CLI configured with necessary permissions

### Steps

1. **Install Dependencies**:
   - Install required npm packages:
     ```bash
     npm install
     ```

2. **Zip Project**:
   - Zip the contents of the project directory, including `node_modules`:
     ```bash
     zip -r ed25519-script-ls.zip .
     ```

3. **Upload to AWS Lambda**:
   - Use AWS CLI or AWS Management Console to upload `ed25519-script-ls.zip` to your Lambda function.

## Deployment

- Navigate to the Lambda section in AWS Console.
- Create a new Lambda function or update an existing one with the uploaded `ed25519-script-ls.zip`.
- Set the handler and runtime settings as required for your Node.js function.

## Usage

Invoke the Lambda function using AWS SDKs, AWS CLI, or through triggers set up in the AWS environment.

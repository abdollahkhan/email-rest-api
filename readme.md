# Node.js Email Sending API
This is a simple Node.js project that exposes a REST API endpoint to send emails to users. The endpoint accepts one parameters, **`recipient email`** of type string, and sends an email to the specified user.
## Pre Requisite
To run this application, you will need to have Node.js version `18.13.0` or higher installed on your system.

You can check your current version of Node.js by running the following command in your terminal:
```sh
node --version
```
If your version of Node.js is below `18.13.0`, you can download the latest version from the official Node.js website: https://nodejs.org/en/download/

Once you have installed Node.js, you can check your version again to confirm that it has been updated.

## Installation
To install this project, clone the repository from git bundle and run the following commands:
### clone repository
```sh
$ git clone -b master /path/to/bundle/file.bundle sonar
```
### install required packages

```sh
$ yarn install
```
### Providing SMTP Server Credentials
To provide the SMTP server credentials, you will need to create an `.env` file in the root directory of this project. This file should contain the following information:

```sh
SENDER_EMAIL=<sender_email_address>
SMTP_SERVER_HOST=<your_smtp_server_host>
SMTP_SERVER_PORT=<your_smtp_server_port>
SMTP_SERVER_USERNAME=<your_smtp_server_username>
SMTP_SERVER_PASSWORD=<your_smtp_server_password>
```

## Testing SMTP Server
To test the SMTP server, run the following command:

```sh
$ yarn test
```

This will run the test suite and verify that the SMTP server is working properly. If the tests pass, you will see a message indicating that the tests were successful. If the tests fail, you will see an error message indicating which test failed.

## Usage
To start the server in watching mode, run the following command:

```sh
$ npx nodemon
```
By default, the server will start on port 4000. You can change the port by setting the PORT environment variable.

To send an email, make a POST request to the **`/`** endpoint with the recipient parameters in the request body.

#### Example request:

```sh
POST /
Content-Type: application/json

{
    "recipient": "johndoe@example.com",
}
```
#### Example response (success):

```sh
HTTP/1.1 200 OK
Content-Type: application/json

{
    "status": "success",
    "message": "Email sent successfully"
}
```
#### Example response (error):

```sh
HTTP/1.1 500 Internal Server Error
Content-Type: application/json

{
    "status": "error",
    "message": "Failed to send email"
}
```

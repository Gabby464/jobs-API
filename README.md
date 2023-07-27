# Jobs API

Welcome to the Jobs API! 

## Table of Contents

1. [Introduction](#introduction)
2. [Endpoints](#endpoints)
3. [Authorization](#authorization)
4. [Response Format](#response-format)
5. [Error Handling](#error-handling)
6. [Sample Data](#sample-data)

## Introduction

The Jobs API is a RESTful API built using NODE JS and Express.js. Its purpose is to provide a basic platform to retrieve, create, update, and delete job listings. This project is designed for educational purposes, so it may not include all the advanced features of a production-level API.

Feel free to contribute to the project by adding new features, improving existing functionality, or fixing any bugs you may come across.

The API is currently hosted on: *[Render](https://jobster-4rrx.onrender.com)*


## Endpoints

The Jobs API provides the following endpoints:
### Jobs
1. `GET /jobs`: Retrieve a list of all available jobs. 
2. `GET /jobs/{job_id}`: Get detailed information about a specific job.
3. `POST /jobs`: Create a new job listing. | Authorization header necessary
4. `PATCH /jobs/{job_id}`: Update an existing job listing. | Authorization header necessary
5. `DELETE /jobs/{job_id}`: Delete a job listing. | Authorization header necessary
### Auth
6. `POST /auth/register`: Register a new user account.
7. `POST /auth/login`: Log in an existing user.

Each endpoint serves a specific purpose and follows RESTful conventions.

## Authorization

For user-specific actions like creating a job application or saving a job, you'll need to use token-based authentication. Upon successful user registration or login, the API will provide an access token that should be included in the request headers for authorized endpoints.

This API uses OAuth 2 Bearer token.

The bearer token is sent in the request like this:

```curl {BASEURI} -H 'Authorization: Bearer {OAUTH_TOKEN}'
GET / HTTP/1.1
Host: {HOST}
Authorization: Bearer {OAUTH_TOKEN}
```

## Response Format

The API returns responses in JSON format. When you make a request to any of the endpoints, you will receive a JSON object containing the relevant data. The response will include a status code, data, and possibly additional information.

Example Response:

```json
"job": {
    "_id":"64b4363f3cc29b2a6ffba74a"
    "title":"Software Engineer"
    "location":"Sofia, Bulgaria"
    "category":"Design & Engineering"
    "description":"We are seeking a talented Software Engineer to join our development team. You will be responsible for designing, coding, and testing software solutions to meet customer requirements. The ideal candidate should have strong programming skills, a passion for problem-solving, and a desire to contribute to the success of our software products."
    "createdOn":"2023-07-16T18:26:07.993Z"
}
```

## Error Handling

The API handles errors gracefully and returns meaningful error responses in JSON format. Each error response includes a status code and a message describing the encountered issue.

Example Error Response:

```json
{
  "msg": "Invalid Authentication"
}
```

## Sample Data

Jobs API comes with some sample data. This data is used for testing and populating the initial job listings. Feel free to modify or extend the sample data to suit your needs.


Happy coding!

## Project Title

nextjs-template

---

## Getting Started

Follow these instructions to get the project up and running on your local machine for development and testing purposes.

## Prerequisites

Ensure you have the following installed on your local setup:

- **Node.js (v18.17.1)**
- **npm**

To install all the dependencies, run:

> npm install

## Running Locally

To run the project locally, you can use the following commands:

To run the local environment, use:

> npm run local

To run the development environment, use:

> npm run dev

To run the staging environment on development, use:

> npm run dev:stg

To run the production environment on development, use:

> npm run dev:prd

## Building for Deployment

To build the project for deployment, you can use the following commands:

To build for development, use:

> npm run build:dev

To build for staging, use:

> npm run build:stg

To build for production, use:

> npm run build:prd

## Starting the Project

> npm run start

## Docker Build and Run

You can also build and run the project using Docker. Follow the instructions below:

### Docker Build

To build a Docker image, use:

> docker build -t Docker_Image_Name:[TAG] .

Example:

> docker build -t nextjs-template:0.1 .

You can build with different BUILD_ENV targets using the following commands:

For development:

> docker build --build-arg BUILD_ENV=dev -t nextjs-template-dev:[TAG]

For staging:

> docker build --build-arg BUILD_ENV=stg -t nextjs-template-stg:[TAG]

For production:

> docker build --build-arg BUILD_ENV=prd -t nextjs-template-prd:[TAG]

### Run Container

To run the Docker container, use:

> docker run -p 3000:3000 Docker_Image_Name:[TAG]

Example:

> docker run -p 3000:3000 nextjs-template:0.1
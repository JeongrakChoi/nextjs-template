# nextjs-template

next.js (react) UI작업용 템플릿

## Prerequisites
- **Node.js (v18.17.1)**
- **npm**


## Local

local

> npm run local

dev

> npm run dev

dev:stg

> npm run dev:stg

dev:prd

> npm run dev:prd

## Building for Deployment

dev

> npm run build:dev

stg

> npm run build:stg

prd

> npm run build:prd

## Starting the Project

> npm run start

<!-- ## Docker Build and Run

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

> docker run -p 3000:3000 nextjs-template:0.1 -->
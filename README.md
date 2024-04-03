# Titanic Data Analysis Project

## Overview

This project is a comprehensive data analysis tool for the Titanic dataset. It includes a React frontend and a FastAPI backend, all containerized with Docker.

## Prerequisites

- Docker
- Docker Compose

## Getting Started

To get this project up and running on your local machine, follow these steps:

1. **Clone the Repository**

    ```bash
    git clone https://github.com/dimitri-hoareau/project_titanic.git
    cd project_titanic
    ```

2. **Environment Setup**

    Before running the project, ensure you have Docker and Docker Compose installed on your system.

3. **Running with Docker Compose**

    In the project root directory, run the following command:

    ```bash
    docker-compose up --build
    ```

    This command will build the images and start the containers for both the backend and frontend services.

4. **Accessing the Application**

    - The frontend should now be accessible at `http://localhost`.
    - The backend API can be accessed at `http://localhost:8000`.

## Using the Application

Once the application is running, you can navigate to the frontend URL to interact with the data visualization tools. The backend API endpoints can be accessed for data fetching and manipulation.

## Stopping the Application

To stop the application, press `CTRL+C` in the terminal where Docker Compose is running, or run the following command in the project root directory:

```bash
docker-compose down
```

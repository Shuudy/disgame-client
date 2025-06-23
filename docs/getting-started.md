---
title: Getting Started
---

# Getting Started

This guide will help you set up and start using Disgame quickly.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18.x or higher)
- **npm** (version 10.x or higher) or **yarn** (version 1.x or higher)
- A modern web browser (e.g., Chrome, Firefox, Edge)

## Server Installation

1. Clone the server repository:
    ```bash
    git clone https://github.com/Shuudy/disgame-server.git
    ```

2. Navigate to the server project directory:
    ```bash
    cd disgame-server
    ```

3. Install server dependencies:
    ```bash
    npm install
    ```

4. Copy the `.env-example` file to `.env`:
    ```bash
    cp .env-example .env
    ```

5. Open the `.env` file and fill in the required environment variables:
    ```txt
    PORT=3000 # The port on which the server will run
    CORS_ORIGIN=http://127.0.0.1:3001 The allowed origin for CORS (set to "*" for development)
    JWT_SECRET=your_jwt_secret # Secret key used to sign JSON Web Tokens

    # Database connection variables
    DB_HOST=localhost # The hostname of the database server
    DB_PORT=3306 # The port number for the database (default for MySQL is 3306)
    DB_USER=root # The username for the database
    DB_PASS=your_database_password # The password for the database user
    DB_NAME=disgame # The name of the database
    ```

    > **Note**: Ensure that the database connection variables (`DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASS`, `DB_NAME`) are correctly configured for your MySQL database.

6. Start the server:
    ```bash
    npm run start
    ```

## Client Installation

1. Clone the client repository:
    ```bash
    git clone https://github.com/Shuudy/disgame-client.git
    ```

2. Navigate to the client project directory:
    ```bash
    cd disgame-client
    ```

3. Install client dependencies:
    ```bash
    npm install
    ```

4. Copy the `.env-example` file to `.env`:
    ```bash
    cp .env-example .env
    ```

5. Open the `.env` file and fill in the required environment variables:
    ```txt
    VITE_API_URL=http://localhost:3000
    VITE_SOCKET_URL=http://localhost:3000
    ```

6. Start the client:
   ```bash
   npm run dev
   ```

7. Open your browser and navigate to:
   ```sh
   http://localhost:5173
   ```

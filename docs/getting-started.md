---
title: Getting Started
---

# Getting Started

Welcome to the Disgame documentation! This guide will help you set up and start using Disgame quickly.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 16.x or higher)
- **npm** (version 8.x or higher) or **yarn** (version 1.x or higher)
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
    PORT=3000
    CORS_ORIGIN=http://127.0.0.1:3001
    JWT_SECRET=your_jwt_secret

    DB_HOST=
    DB_PORT=
    DB_USER=
    DB_PASS=
    DB_NAME=
    ```

    > **Note**: By default, if the `NODE_ENV` variable is not set to `production`, the database used will be SQLite. In this case, you do not need to fill in the `DB_` variables.

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
   
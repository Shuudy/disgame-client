---
title: Deployment Process
---

# Deployment Process

This guide explains how the automated deployment process works for Disgame, ensuring that the application is deployed seamlessly to the production server after changes are merged into the `main` branch.

## Prerequisites

Before setting up the deployment process, ensure the following secrets are configured in your GitHub repository:

- `SSH_HOST`: The IP or hostname of your production server.
- `SSH_PORT`: The SSH port (default is `22`).
- `SSH_USER`: The username for SSH access.
- `SSH_PRIVATE_KEY`: The private SSH key for authentication.
- `O2SWITCH_USER`: Your o2switch username.
- `O2SWITCH_PASSWORD`: Your o2switch password.
- `O2SWITCH_HOST`: The o2switch host for IP whitelisting.

## How Deployment Works

1. **Feature Development**:
   - Developers create feature branches (e.g., `feature/add-new-feature`) from `develop`.
   - Once the feature is complete, a Pull Request (PR) is opened to merge the feature branch into `develop`.

2. **Release Preparation**:
   - When the `develop` branch is ready for a release, a **release branch** is created (e.g., `release/1.0.0`).
   - The release branch is tested and finalized. Any necessary fixes are committed directly to the release branch.

3. **Merging to `main`**:
   - Once the release branch is finalized, it is merged into `main`.
   - The deployment process is triggered automatically when changes are pushed to `main`.

4. **Deployment Steps**:
   - The workflow connects to the production server via SSH.
   - It pulls the latest code from the `main` branch.
   - Dependencies are installed, and the project is built.

## Workflow Configuration

The deployment process is defined in the GitHub Actions workflow file:  
[`.github/workflows/nodejs-ci-cd.yml`](https://github.com/Shuudy/disgame-client/blob/main/.github/workflows/nodejs-ci-cd.yml)

This file contains the configuration for linting, testing, and deploying the application automatically.

> **Note**: The server-side deployment process follows a similar workflow and uses the same configuration file structure.

---

This deployment process ensures a smooth and automated workflow, adhering to Git Flow principles and maintaining high code quality.
# Netlify Deployment Guide for Instant8.dev

This guide provides instructions for deploying the Instant8.dev frontend to Netlify.

## Prerequisites

1. A Netlify account (sign up at [netlify.com](https://netlify.com) if you don't have one)
2. Your Instant8.dev repository pushed to GitHub, GitLab, or Bitbucket

## Deployment Steps

### Option 1: Deploy via Netlify UI

1. Log in to your Netlify account
2. Click "Add new site" > "Import an existing project"
3. Connect to your Git provider (GitHub, GitLab, or Bitbucket)
4. Select the Instant8.dev repository
5. Configure the deployment settings:
   - Owner: Your team or personal account
   - Branch to deploy: `main` (or your preferred branch)
   - Build command: The netlify.toml file already contains this
   - Publish directory: The netlify.toml file already contains this
6. Click "Deploy site"

### Option 2: Deploy via Netlify CLI

1. Install the Netlify CLI:
   ```
   npm install -g netlify-cli
   ```

2. Navigate to your project directory:
   ```
   cd /path/to/Instant8.dev
   ```

3. Login to Netlify:
   ```
   netlify login
   ```

4. Initialize Netlify in your project:
   ```
   netlify init
   ```

5. Follow the prompts to either:
   - Create & configure a new site
   - Link to an existing site

6. Deploy your site:
   ```
   netlify deploy --prod
   ```

## Environment Variables

For the frontend to connect to your backend API, you'll need to set environment variables in Netlify:

1. Go to your site settings in Netlify
2. Navigate to "Site settings" > "Build & deploy" > "Environment"
3. Add the following environment variables:
   - `VITE_API_URL`: URL of your backend API (e.g., https://your-backend-api.com)

## Backend Considerations

The Netlify deployment only covers the frontend. For the backend:

1. Deploy your NestJS backend to a service like:
   - Heroku
   - DigitalOcean
   - AWS
   - Google Cloud Platform
   - Azure

2. Set up a PostgreSQL database:
   - Use a managed service like AWS RDS, Google Cloud SQL, or Azure Database
   - Or set up your own PostgreSQL server

3. Update the frontend's API URL to point to your deployed backend

## Custom Domain

To set up a custom domain:

1. Go to your site settings in Netlify
2. Navigate to "Domain settings" > "Custom domains"
3. Click "Add custom domain"
4. Follow the instructions to configure your domain

## Continuous Deployment

Netlify automatically sets up continuous deployment from your Git repository. Any push to your specified branch will trigger a new build and deployment.

## Troubleshooting

If you encounter issues with your deployment:

1. Check the Netlify build logs for errors
2. Verify that all environment variables are correctly set
3. Ensure your backend API is accessible from the deployed frontend
4. Check that the Netlify configuration in netlify.toml is correct

For more help, refer to the [Netlify documentation](https://docs.netlify.com/).

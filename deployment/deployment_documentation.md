# Instant8.dev Deployment Documentation

## Overview
This document provides information about the Instant8.dev application deployment, including setup instructions, access details, and configuration information.

## Deployment Status

The Instant8.dev application has been successfully deployed with the following components:

- **Frontend**: React application with Material UI
- **Backend**: NestJS API server
- **Database**: PostgreSQL database

## Access Information

- **Frontend Application**: http://localhost:3000
- **Backend API Server**: http://localhost:3001
- **API Documentation**: http://localhost:3001/api

## Database Configuration

A PostgreSQL database has been set up with the following credentials:

- **Database Name**: instant8db
- **Username**: instant8
- **Password**: instant8password
- **Host**: localhost
- **Port**: 5432
- **Connection String**: postgres://instant8:instant8password@localhost:5432/instant8db

## Environment Variables

The backend server is configured with the following environment variables:

```
BCRYPT_SALT=10
COMPOSE_PROJECT_NAME=amp_cmb5pom860tfwjwsid70h4126
DB_NAME=instant8db
DB_PASSWORD=instant8password
DB_PORT=5432
DB_URL=postgres://instant8:instant8password@localhost:5432/instant8db
DB_USER=instant8
PORT=3000
```

## Cloud Service Credentials

The application is configured with the following cloud service credentials:

- **Azure OpenAI**:
  - Key 1: DSYrbpVM3dLY3MQ1fo7C5Qv4CRy9OPa3QNon4AFdntdjDWPqTk8bJQQJ99BEACYeBjFXJ3w3AAABACOG1An7
  - Key 2: 6xQ19jiAJrFilBRP3Mr3iS22YDKdKoZ2gGYNJ116ZCAr19tNlNApJQQJ99BEACYeBjFXJ3w3AAABACOGpUvz
  - Endpoint: https://lightiam.openai.azure.com/

- **Pulumi**:
  - Access Token: pul-12c056b7af91a9892ba74be9cc3c0418b09f3929

- **Google Cloud Platform**:
  - Credentials file: /home/ubuntu/Instant8.dev/config/gcp-credentials.json

## Known Issues

1. **Port Conflict**: There was a port conflict during deployment as both the frontend and backend were configured to use port 3000. The deployment script has been updated to run the frontend on port 3000 and the backend on port 3001.

## Starting and Stopping the Application

The application can be started and stopped using the provided scripts:

- **Start**: `/home/ubuntu/Instant8.dev/deployment/start_services.sh`
- **Stop**: `/home/ubuntu/Instant8.dev/deployment/stop_services.sh`

## Application Features

The integrated application includes the following features:

1. **Authentication System**: Login/Signup functionality
2. **Dashboard**: Overview of deployments and system metrics
3. **Deployments Management**: Create, view, and manage deployments
4. **Providers Connection**: Connect and manage cloud providers
5. **Activity/Audit Tracking**: Monitor system activities
6. **Settings/Profile Management**: Configure application settings

## Next Steps

For a production deployment, consider:

1. Setting up proper SSL/TLS certificates
2. Configuring a reverse proxy (Nginx/Apache)
3. Implementing proper authentication and authorization
4. Setting up regular database backups
5. Implementing monitoring and logging solutions

## Support

For any issues or questions regarding the deployment, please contact the development team.

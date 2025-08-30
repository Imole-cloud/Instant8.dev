#!/bin/bash

# Deployment script for Instant8.dev
# This script sets up and starts both backend and frontend services

echo "Starting Instant8.dev deployment..."

# Set environment variables
export PULUMI_ACCESS_TOKEN="pul-12c056b7af91a9892ba74be9cc3c0418b09f3929"
export AZURE_OPENAI_KEY1="DSYrbpVM3dLY3MQ1fo7C5Qv4CRy9OPa3QNon4AFdntdjDWPqTk8bJQQJ99BEACYeBjFXJ3w3AAABACOG1An7"
export AZURE_OPENAI_KEY2="6xQ19jiAJrFilBRP3Mr3iS22YDKdKoZ2gGYNJ116ZCAr19tNlNApJQQJ99BEACYeBjFXJ3w3AAABACOGpUvz"
export AZURE_OPENAI_ENDPOINT="https://lightiam.openai.azure.com/"
export GOOGLE_APPLICATION_CREDENTIALS="/home/ubuntu/Instant8.dev/config/gcp-credentials.json"

# Create dist directory for frontend
mkdir -p /home/ubuntu/Instant8.dev/deployment/dist

# Copy frontend build to deployment directory
cp -r /home/ubuntu/Instant8.dev/apps/frontend/dist/* /home/ubuntu/Instant8.dev/deployment/dist/

# Start backend server
echo "Starting backend server..."
cd /home/ubuntu/Instant8.dev/apps/user-service-server
npm start &
BACKEND_PID=$!
echo "Backend server started with PID: $BACKEND_PID"

# Wait for backend to initialize
echo "Waiting for backend to initialize..."
sleep 10

# Serve frontend
echo "Starting frontend server..."
cd /home/ubuntu/Instant8.dev/deployment
npx serve -s dist -l 3000 &
FRONTEND_PID=$!
echo "Frontend server started with PID: $FRONTEND_PID"

echo "Deployment complete! Services are running."
echo "Backend server: http://localhost:3001"
echo "Frontend application: http://localhost:3000"

# Save PIDs for later shutdown
echo "$BACKEND_PID" > /home/ubuntu/Instant8.dev/deployment/backend.pid
echo "$FRONTEND_PID" > /home/ubuntu/Instant8.dev/deployment/frontend.pid

echo "To stop the services, run: ./stop_services.sh"

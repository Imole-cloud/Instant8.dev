#!/bin/bash

# Stop script for Instant8.dev services
# This script stops the backend and frontend services

echo "Stopping Instant8.dev services..."

# Check if PID files exist
if [ -f /home/ubuntu/Instant8.dev/deployment/backend.pid ]; then
    BACKEND_PID=$(cat /home/ubuntu/Instant8.dev/deployment/backend.pid)
    echo "Stopping backend server with PID: $BACKEND_PID"
    kill -15 $BACKEND_PID 2>/dev/null || echo "Backend process not found"
    rm /home/ubuntu/Instant8.dev/deployment/backend.pid
else
    echo "Backend PID file not found"
fi

if [ -f /home/ubuntu/Instant8.dev/deployment/frontend.pid ]; then
    FRONTEND_PID=$(cat /home/ubuntu/Instant8.dev/deployment/frontend.pid)
    echo "Stopping frontend server with PID: $FRONTEND_PID"
    kill -15 $FRONTEND_PID 2>/dev/null || echo "Frontend process not found"
    rm /home/ubuntu/Instant8.dev/deployment/frontend.pid
else
    echo "Frontend PID file not found"
fi

echo "All services stopped"

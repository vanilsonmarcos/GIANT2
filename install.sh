#!/bin/sh

echo "Installing Seguradora in development environment"
echo "Starting instalation..."
docker-compose down --rmi all
docker-compose build --no-cache
docker-compose up -d
echo "Ending instalation"
# Dockerfile
FROM    node:17-alpine

# Install the app
WORKDIR /app
COPY    package.json .
RUN     npm install --silent

# Build the app
COPY    . .
EXPOSE  3000
# ENV     REACT_APP_BACKEND_URL=http://localhost:8000
CMD     ["npm", "start"]
# RUN     npm run-script build

# # Create nginx server and copy build there
# FROM    nginx:1.19-alpine
# COPY    --from=build-step /app/build /usr/share/nginx/html
# COPY    ./docker/docker-entrypoint.sh /docker-entrypoint.sh
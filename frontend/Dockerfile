FROM    node:17-alpine

WORKDIR /app
COPY    package.json .
RUN     npm install

COPY    . .
EXPOSE  3000
CMD     ["npm", "start"]

# RUN     npm run-script build

# FROM    nginx:1.19-alpine
# COPY    --from=build-step /app/build /usr/share/nginx/html
# COPY    ./docker/docker-entrypoint.sh /docker-entrypoint.sh
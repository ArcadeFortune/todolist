FROM node:20.3-alpine

WORKDIR /backend

ENV PATH /backend/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install --unsafe-perm=true --allow-root

COPY . ./

RUN chown -R 1000:0 /backend && chmod -R ug+rwx /backend
RUN chown -R 1013180000:0 "/.npm"
USER 1000

CMD ["npm", "startdev"]

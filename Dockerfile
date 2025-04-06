FROM node:18-alpine

EXPOSE 8080
WORKDIR /website

COPY public/ /website/public
COPY src/ /website/src
COPY index.html /website
COPY package.json /website/
COPY vite.config.js /website
COPY tailwind.config.js /website

RUN npm install

CMD ["npm", "run", "dev", "--", "--host"]

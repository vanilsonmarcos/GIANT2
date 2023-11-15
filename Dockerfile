FROM node:18.12.1

# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "npm", "run" , "dev"]
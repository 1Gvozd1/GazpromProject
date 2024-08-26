FROM ubuntu:22.04

RUN apt-get update && \
    apt-get install -y curl gnupg2 && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs


RUN npm install -g prisma

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm list express


COPY . .

RUN npx prisma generate

EXPOSE 8000

CMD ["npm", "start"]

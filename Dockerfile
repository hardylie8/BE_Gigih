FROM node:18

WORKDIR /app
COPY . .
RUN npm install --production

EXPOSE 3000

# ENV APP_PORT=5000
# ENV DATABASE_URL=mongodb://localhost:27017/
# ENV DATABASE_NAME=tokoplay
CMD ["npm", "run", "start"]
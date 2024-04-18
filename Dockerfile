FROM node:lts-alpine3.19
WORKDIR /app-money
ENV PORT=4500
COPY ./ .
EXPOSE ${PORT}
RUN chown -R node .
USER node
CMD ["npm", "start"]
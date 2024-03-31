FROM quay.io/xelectra/xasena:latest
RUN git clone https://github.com/Xcelsama/WEB-QR-2/root/Xcelsama
WORKDIR /root/WEB-QR-2/
RUN npm install npm@latest
RUN yarn install --network-concurrency 1
EXPOSE 8000
CMD ["npm", "start"]
FROM node:alpine

WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .


ENV GOOGLE_CLIENT_ID="1054598005588-q1cvrkildap2smvbbbccrgc6gi0sie7d.apps.googleusercontent.com"
ENV GOOGLE_CLIENT_SECRET="TRDwnBTQWWHZxfi8-E2000px"
ENV AWS_ACCESS_KEY_ID="AKIA2RSCBZVAYKCV6B5D"
ENV AWS_SECRET_ACCESS_KEY="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"

ENV MONGO_URL="mongodb+srv://Anas:Anas@cluster0.jjjmp.mongodb.net/Cluster0?retryWrites=true&w=majority"
ENV MAILGUN_API_KEY="f67c77ba62f391d0a9314dba463065fd-156db0f1-f4a0991e"
ENV MAILGUN_DOMAIN="https://app.mailgun.com/app/sending/domains/sandboxdc8a07ed6c2948269eb12ab796f426c5.mailgun.org"
ENV RAZORPAY_ID="rzp_test_zcwfqi31t8eqTR"
ENV RAZORPAY_SECRET="3H7zxNwgbs1EAB4Fgg2kcxuD"
ENV NODE_ENV=production
ENV PORT=4000



CMD ["npm", "run", "start"]
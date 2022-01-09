import express from 'express';
import router from './routes';
const { Kafka } = require('kafkajs')

const app = express();


const kafka = new Kafka({
    clientId: 'api',
    brokers: ['kafka:9092']
});

app.use(router);

const producer = kafka.producer()

async function run() {
    await producer.connect();

    app.listen(3000);


}

run().catch(console.errr)




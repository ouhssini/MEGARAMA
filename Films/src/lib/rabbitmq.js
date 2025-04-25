import amqp from "amqplib";

const RABBITMQ_URL = process.env.RABBITMQ_URL || 'amqp://localhost';
const QUEUE_NAME = process.env.RABBITMQ_QUEUE || 'messages';

let channel;

export const connect = async () => {
  const connection = await amqp.connect(RABBITMQ_URL);
  channel = await connection.createChannel();
  await channel.assertQueue(QUEUE_NAME);
  console.log('✅ Connected to RabbitMQ');
}

export const sendMessage = async (film) => {
  if (!channel) await connect();
  channel.sendToQueue(QUEUE_NAME, Buffer.from(JSON.stringify(film)), {
    persistent: true
  });
}


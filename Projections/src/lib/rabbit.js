import amqp from "amqplib";

const RABBITMQ_URL = process.env.RABBITMQ_URL || 'amqp://guest:guest@localhost';
const QUEUE_NAME = process.env.RABBITMQ_QUEUE || 'messages';

let channel;

export const connect = async () => {
  const connection = await amqp.connect(RABBITMQ_URL);
  channel = await connection.createChannel();
  await channel.assertQueue(QUEUE_NAME);
  console.log('✅ Connected to RabbitMQ');
}

let films = [];

export const consumeFilms = async () => {
  if (!channel) await connect()
  try {
    await channel.consume(QUEUE_NAME, (msg) => {
      if (msg !== null) {
        if (msg !== null) {
          const film = JSON.parse(msg.content.toString());
          console.log('📽️  Received film:', film);
          films.push(film);
          channel.ack(msg);
        }
      }
    });

  } catch (error) {
    console.error('❌ Error consuming messages:', error);
  }
}



export const getFilms = () => {
  return films;
}

export const getWeeklyPlanning = () => {
  const now = new Date();
  const nextWeek = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);

  return films.filter(film => {
    const projectionDate = new Date(film.project);
    return projectionDate >= now && projectionDate <= nextWeek;
  }).sort((a, b) => new Date(a.project) - new Date(b.project));
}
import express from 'express';
import cors from 'cors';
import Connection from './database/connection';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

console.log('\x1b[33m-Starting servers --------------------');
app.listen(3333, () => {
  console.log('\x1b[32m-Server express started on port 3333. \x1b[0m');
}).on('error', (error) => {
  console.log(`\x1b[31m-Error connecting to Express server: ${error} \x1b[0m`);
});

Connection.mongodbConnection().then(() => {
  console.log('\x1b[32m-Server MongoDB started... \x1b[0m');
}).catch((error) => {
  console.log(`\x1b[31m-Error when establishing database connection MongoDB: ${error} \x1b[0m`);
})

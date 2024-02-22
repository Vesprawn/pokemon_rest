import { default as express } from 'express';

const PORT = 9151

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/pokemon/:id', (req, res) => {
    res.send({
        id: 6,
        name: 'Charizard',
        type: ['Fire', 'Flying'],
        height_m: 1.7,
        weight_kg: 90.5,
        weakness: ['Water', 'Electric', 'Rock']
    })
});

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});
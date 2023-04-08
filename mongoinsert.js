
const { MongoClient } = require('mongodb');

const userName = 'holowaychuk';
const password = 'express';
const hostname = 'mongodb.com';

const url = `mongodb+srv://emilygailasay:<password>@startup.9qpc7no.mongodb.net/`;

async function main() {
const client = new MongoClient(url);

    const scoreCollection = await client.db('startup').collection('score').insertMany(data);

console.log('Inserted ${scoreCollection.insertedCount} docs')

scores = [
    { name: 'Emily', score: 350 },
    { name: 'Eli', score: 400 },
];

scoreCollection.insertOce(score[0]);
scoreCollection.insertMany(scores);

}

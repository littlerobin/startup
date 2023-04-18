const { MongoClient } = require('mongodb');
const data = require('../listingData');

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

if (!userName) {
    throw Error("Database not configured. Set environment variables");
  }

const dbName = 'bnb';
const colName = 'listings';

const url = 'mongodb+srv://emilygailasay:wXw7RcqGiZeCLkWv@startup.9qpc7no.mongodb.net/bnb';

async function main() {
    const client = new MongoClient(url);

    try {
        await client.connect();

        const result = await client.db(dbName).collection(colName).insertMany(data);

        console.log('inserted ${result.insertedCount} docs');
    } finally {
        await client.close();
    }
}

main().catch(console.error);
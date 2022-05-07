import { connectToDatabase } from '../../util/mongodb'
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'GET': {
            return getAllComments(req, res);
        }

        case 'POST': {
            return postAComment(req, res);
        }
    }
}

async function getAllComments(request, response) {
    try {
        let { db } = await connectToDatabase();

        let comments = await db.collection('comments').find({}).toArray()

        return response.json(
            {
                message: JSON.parse(JSON.stringify(comments)),
                success: true,
            }
        )
    } catch (error) {
        console.log(error)
    }
}

async function postAComment(request, response) {
    try {
        let { db } = await connectToDatabase();

        console.log('here again')
        await db.collection('comments').inserOne(JSON.parse(req.body))

        return response.json(
            {
                message: 'Post added successfully',
                success: true,
            }
        )
    } catch (error) {
        return response.json(
            {message: new Error(error).message,
            sucess: false}
        )
    }
}
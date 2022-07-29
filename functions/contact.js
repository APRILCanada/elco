const SibApiV3Sdk = require('sib-api-v3-sdk');
require('dotenv').config()

exports.handler = async (event) => {
    try {
        if (event.httpMethod !== 'POST') {
            return {
                statusCode: 405,
                body: 'Method not allowed'
            }
        }

        const data = JSON.parse(event.body)
        console.log('data', data)

    } catch (err) {
        console.error(err)
        return {
            statusCode: 500,
            body: `Message unsucessfully send, error: ${err}`
        }
    }
}
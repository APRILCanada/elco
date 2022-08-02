const Sib = require('sib-api-v3-sdk');
require('dotenv').config()

exports.handler = async (event) => {
    try {
        if (event.httpMethod !== 'POST') {
            return {
                statusCode: 405,
                body: 'Method not allowed'
            }
        }

        // get form data
        const { email, phone, subject, message } = JSON.parse(event.body)

        const client = Sib.ApiClient.instance
        const apiKey = client.authentications['api-key']
        apiKey.apiKey = process.env.SIB_API_KEY

        const tranEmailApi = new Sib.TransactionalEmailsApi()
        const sender = {
            email
        }
        const receiver = [
            {
                email: 'p.leroy.mtl@gmail.com'
            }
        ]

        const response = await tranEmailApi
            .sendTransacEmail({
                sender,
                to: receiver,
                subject: `${subject}`,
                htmlContent: `
                    <h2>Un nouveau message depuis le site d'Elco!</h2>
                    <p>Message: ${message}</p>
                    <p>Téléphone: ${phone}</p>
                `
            })

        if (response) return { statusCode: 200, success: true }

    } catch (err) {
        console.error(err)
        return {
            statusCode: 500,
            body: `Message unsucessfully send, error: ${err}`
        }
    }
}
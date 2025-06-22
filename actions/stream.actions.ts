"use server"

import { currentUser } from "@clerk/nextjs/server"
import { StreamClient } from "@stream-io/node-sdk"

// for stream api 

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY
const apiSecrets = process.env.NEXT_STREAM_API_SECRET

export const tokenProvider = async () => {
    const user = await currentUser(); // gives information about client 

    if(!user) throw new Error('User is not Authenticated')
    if(!apiKey) throw new Error('API key is not found')
    if(!apiSecrets) throw new Error('API Secret is not found')


    // we have to spin a node server 
    // do no inherit streamClient from default resources --> it should be cane from node/sdk resource
    // npm install @stream-io/node-sdk

    const client = new StreamClient(apiKey,apiSecrets)


    // validity is optional (by default the token is valid for an hour)
    const vailidity = 60 * 60;




    const token = client.generateUserToken({user_id:user.id, validity_in_seconds: vailidity})

    return token
}
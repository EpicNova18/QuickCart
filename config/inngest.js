import { Inngest } from "inngest";
import connectdb from "./db";
import User from "@/models/User";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "quickcart-next" });

// Inngest function to save user to the database
export const syncUserCreation = inngest.createFunction(
    {
        id:'sync-user-from-clerk'
    },
    { event: 'clerk/user.created' },
    async ({event}) => {
        const { id, first_name, last_name, email_address, image_url} = event.data
        const userData = {
            _id:id,
            email: email_address[0].email_address,
            name: first_name + ' ' + last_name,
            image_Url: image_url
        }
        await connectdb()
        await User.create(userData)
    }
)

// Inngest function to update user's data in database
export const syncUserUpdate = inngest.createFunction(
    {
        id:'sync-user-from-clerk'
    },
    { event: 'clerk/user.updated' },
    async ({event}) => {
        const { id, first_name, last_name, email_address, image_url} = event.data
        const updatedUserData = {
            email: email_address[0].email_address,
            name: first_name +' ' + last_name,
            image_Url: image_url
        }
        await connectdb()
        await User.findByIdAndUpdate(id, updatedUserData, {new: true})
    },
    await connectdb(),
    await User.findByIdAndUpdate(id, updatedUserData)
)

// Inngest function to delete user from database
export const syncUserDeletion = inngest.createFunction(
    {
        id:'delete-user-from-clerk'
    },
    { event: 'clerk/user.deleted' },
    async ({event}) => {
        const { id } = event.data
        await connectdb()
        await User.findByIdAndDelete(id)
    }
)

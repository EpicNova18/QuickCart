import { EmailAddress } from "@clerk/nextjs/dist/types/server";
import { Inngest } from "inngest";
import connectDB from "./db";
import User from "@/models/User";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "quickcart-next" });

// Inngest Function to save user  data to a data
export const syncUserCreation = Inngest.createFunction(
    {
        id:'sync-user-clerk'
    },
    { event: 'clerk/user.created'  },
    async ({event}) => {
        const { id, first_name, last_name, image_url } = event.data
        const userData = {
            _id:id,
            email: email_address[0].email_address,
            name: first_name + ' '+last_name,
            image_Url:image_url
        }
        await connectDB()
        await User.create(userData)
    }
)

// Inngest Function ro update user data in database
export const syncUserUpdation = inngest.createFunction(
    {
        id:'update-user-from-clerk'
    },
    { event: 'clerk/user.update' },
    async ({event}) => {
        const userData = {
            _id:id,
            email: email_address[0].email_address,
            name: first_name + ' '+last_name,
            image_Url:image_url
        }
        await connectDB()
        await User.findByIdAndUpdate(id,userData)
    }
)

// Innfest Function to delete user from database
export const syncUserDeletion = inngest.createFunction(
    {
        id:'delete-user-with-clerk'
    },
    { event: 'clerk/user.deleted' },
    async ({event}) => {
        const {id} = event.data

        await connectDB()
        await User.findByIdAndDelete(id)
    }
)

import { Inngest } from "inngest";
<<<<<<< HEAD
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
=======
import connectDB from "./db";
import User from "@/models/User";

// Create an Inngest client
export const inngest = new Inngest({ id: "quickcart-next" });

// Inngest function to save user data to the database
export const syncUserCreation = inngest.createFunction(
    {
        id: "sync-user-clerk",
    },
    { event: "clerk/user.created" },
    async ({ event }) => {
        const { id, first_name, last_name, image_url, email_addresses } = event.data;

        const userData = {
            _id: id,
            email: email_addresses[0].email_address,
            name: `${first_name} ${last_name}`,
            imageUrl: image_url, 
        };

        await connectDB();
        await User.create(userData);
    }
);

// Inngest function to update user data in the database
export const syncUserUpdation = inngest.createFunction(
    {
        id: "update-user-from-clerk",
    },
    { event: "clerk/user.updated" },
    async ({ event }) => {
        const { id, first_name, last_name, image_url, email_addresses } = event.data;

        const userData = {
            _id: id,
            email: email_addresses[0].email_address, 
            name: `${first_name} ${last_name}`,
            imageUrl: image_url,
        };

        await connectDB();
        await User.findByIdAndUpdate(id, userData);
    }
);
>>>>>>> 343e6e5cc96736f5511fa9f76ac4a20626a73396

// Inngest function to delete user from database
export const syncUserDeletion = inngest.createFunction(
    {
<<<<<<< HEAD
        id:'delete-user-from-clerk'
    },
    { event: 'clerk/user.deleted' },
    async ({event}) => {
        const { id } = event.data
        await connectdb()
        await User.findByIdAndDelete(id)
    }
)
=======
        id: "delete-user-with-clerk",
    },
    { event: "clerk/user.deleted" },
    async ({ event }) => {
        const { id } = event.data;

        await connectDB();
        await User.findByIdAndDelete(id);
    }
);
>>>>>>> 343e6e5cc96736f5511fa9f76ac4a20626a73396

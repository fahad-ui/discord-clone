import { auth } from "@clerk/nextjs";
import { db } from "./db";


export const CurrentProfile = async() => {
    const {userId} =  auth()

    if(!userId) return null //meaning we cannot find the current profile

    const profile = await db.profile.findUnique({
        where:{
            userId
        }
    })

    return profile
}
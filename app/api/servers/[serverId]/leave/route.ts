import { CurrentProfile } from "@/lib/current-profile"
import { db } from "@/lib/db"
import { NextResponse } from "next/server"

export async function PATCH(req:Request,{params}:{params:{serverId:string}}) {
    try{
        const profile = await CurrentProfile()

        if(!profile){
            return new NextResponse("Unauthorized",{status:401})
        }

        if(!params.serverId){
            return new NextResponse("Server ID missing",{status:400})
        }

        
        const server = await db.server.update({
            where:{
                id: params.serverId, //we are updating the server which matched server id
                profileId:{
                    not: profile.id //we are only doing this if a person leaving the server is not the person who created this server
                },
                members: { //we are confirming the person is actually the part of the members
                    some: {
                        profileId:profile.id
                    }
                }
            },
            data:{
                members:{ //we are deleting the member using the matching profile id
                    deleteMany:{
                        profileId:profile.id
                    }
                }
            }
        })

        return NextResponse.json(server)
    }catch(err){
        console.log("Server Id Leaver Error",err)
        return new NextResponse("Internal Error",{status:500})
    }
}
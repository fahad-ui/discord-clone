import { CurrentProfile } from "@/lib/current-profile"
import { db } from "@/lib/db"
import { MemberRole } from "@prisma/client"
import { NextResponse } from "next/server"

export async function POST(req:Request) {
    try{
        const profile = await CurrentProfile()
        const { name, type} = await req.json() 

        const {searchParams} = new URL(req.url)     
        const serverId = searchParams.get("serverId")
        console.log(serverId)

        
        if(!profile){
            return new NextResponse("Unauthorized",{status:401})
        }

        if(!serverId){
            return new NextResponse("Server Id Missing",{status:400})
        }

        if(name === "general") {
            return new NextResponse("Name cannot be general",{status:400})
        }

        //only a member can add a new channel
        const server = await db.server.update({
            where:{
                id:serverId,
                members:{
                    some:{
                        profileId: profile.id,
                        role:{
                            in: [MemberRole.ADMIN, MemberRole.MODERATOR ]
                        }
                    }
                }
            },
            //data which we want to update
            data:{
                channels:{
                    create:{
                        profileId:profile.id,
                        name,
                        type
                    }
                }
            }
        })

        return NextResponse.json(server)    
    }catch(err) {
        console.log('create channels post error',err)
        return new NextResponse("Internal Error", { status:500 } )
    }
}
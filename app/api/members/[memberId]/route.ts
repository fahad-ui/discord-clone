import { CurrentProfile } from "@/lib/current-profile"
import { db } from "@/lib/db"
import { NextResponse } from "next/server"

export async function DELETE(req:Request,{params}:{params: { memberId:string } }) {
    try{
        const profile = await CurrentProfile()
        const {searchParams} = new URL(req.url)

        const serverId = searchParams.get("serverId")

        if(!profile) {
            return new NextResponse("Unauthorized", {status:401} )
        }

        if(!serverId) {
            return new NextResponse("Server Id Missing",{status:400})
        }

        if(!params.memberId) {
            return new NextResponse("Member Id Missing",{status:400})
        }

        const server = await db.server.update({
            where:{
                id:serverId,
                profileId:profile.id
            },
            data:{
                members:{
                    deleteMany:{
                        id: params.memberId,
                        profileId:{
                            //we dont want admin to accidentally kick themselves
                            not: profile.id
                        }
                    }
                }
            },
            include:{
                members:{
                    include:{
                        profile:true
                    },
                    orderBy:{
                        role:"asc"
                    }
                }
            }
        })

        return NextResponse.json(server)

    } catch(err){
        console.log('unable to delete member',err)
        return new NextResponse("Internal Error",{status:500})

    }
}


export async function PATCH(req:Request,{params}:{params: { memberId:string } }){
    try{
        const profile = await CurrentProfile()

        const { searchParams } = new URL(req.url)
        const { role } = await req.json()

        const serverId = searchParams.get("serverId") //get ? searchParams by serverId, we are passing this in our members.modal.tsx

        if(!profile) {
            return new NextResponse("Unauthorized", {status:401} )
        }

        if(!serverId) {
            return new NextResponse("Server Id Missing",{status:400})
        }

        if(!params.memberId) {
            return new NextResponse("Member Id Missing",{status:400})
        }

        const server = await db.server.update({
            where:{
                id:serverId,
                profileId:profile.id //to confirm its admin
            },
            data:{
                members:{
                    update:{
                        where:{
                            id: params.memberId,
                            profileId:{
                                not: profile.id //to make sure it doesn't accedentally update admin
                            }
                        },
                        //it updates the role
                        data:{
                            role
                        }
                    }
                }
            },
            include:{
                members:{
                    include:{
                        profile:true
                    },
                    orderBy:{
                        role:'asc'
                    }
                }
            }

        })

        return NextResponse.json(server)

    } catch(err) {
        console.log("[MEMBERS_ID_PATCH]",err)
        return new NextResponse("Internal Error",{status:500})
    }
}
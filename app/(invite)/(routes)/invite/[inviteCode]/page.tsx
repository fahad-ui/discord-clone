import { CurrentProfile } from "@/lib/current-profile"
import { db } from "@/lib/db"
import { redirectToSignIn } from "@clerk/nextjs"
import { redirect } from "next/navigation"

interface InviteCodePageProps {
    params: {inviteCode:string}
}


const InviteCode = async({params}:InviteCodePageProps) => {
    const profile = await CurrentProfile()

    if(!profile){
        return redirectToSignIn()
    }

    if(!params.inviteCode){
        return redirect("/")
    }

    const existingPersonInServer = await db.server.findFirst({
        where:{
            inviteCode:params.inviteCode,
            members:{
                some:{
                    profileId:profile.id
                }
            }
        }
    })

    if(existingPersonInServer){
        return redirect(`/servers/${existingPersonInServer.id}`)
    }

    const server = await db.server.update({
        where:{
            inviteCode:params.inviteCode
        },
        data:{
            //creating a new member who want to join
            members:{
                create: [ {profileId:profile.id} ]
            }
        }
    })

    if(server) {
        return redirect(`/servers/${server.id}`)
    }

    return null
}

export default InviteCode
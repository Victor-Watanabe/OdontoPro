import getSession from "@/lib/getSession"
import { redirect } from "next/navigation"
import { getUserData } from "./_data-acess/get-info-user"

export default async function Profile(){
    const session = await getSession()
   
       if(!session) {
           redirect('/')
       }
    
    const user = await getUserData({ userId: session.user?.id })
    console.log("getUserData: ", user)
    
        if(!session) {
            redirect('/')
        }

    return(
        <div>
            <h1>Página de Perfil</h1>
        </div>
    )
}
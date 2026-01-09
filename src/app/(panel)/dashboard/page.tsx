import getSession from "@/lib/getSession"
import { redirect } from "next/navigation"

export default async function Dashboard(){
    const session = await getSession()

    if(!session) {
        redirect('/')
    }

    return(
        <div>
            <h1>Página Dashboard</h1>

            <div className="w-full h-150 bg-gray-300 mb-10"></div>
            
            <div className="w-full h-150 bg-gray-700 mb-10"></div>

            <div className="w-full h-150 bg-gray-100 mb-10"></div>
        </div>
    )
}
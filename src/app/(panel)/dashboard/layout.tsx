import { SidebarDashoard } from "./_components/sidebar"

export default function DashboardLayout({
    children,
} : {
    children: React.ReactNode
}){
    return(
        <>
            <SidebarDashoard>
             {children}
            </SidebarDashoard>
        </>
    )
}
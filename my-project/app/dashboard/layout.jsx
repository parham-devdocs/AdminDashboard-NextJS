import Navbar from "@/components/dashboard/navbar";
import Sidebar from "@/components/dashboard/sidebar";
export default function DashboardLayout({children}) {
    return (
        <div>
            <div></div>
            <div>
                <Navbar />
                <Sidebar/>
                { children }
            </div>
        </div>
    )
}
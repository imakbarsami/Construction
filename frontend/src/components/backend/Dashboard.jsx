import Footer from "../Common/Footer"
import Header from "../Common/Header"
import { apiUrl, token } from "../Common/Http"
import Sidebar from "../Common/Sidebar"
import { useEffect, useState } from "react"

const Dashboard = () => {


    const [dashboard, setDashboard] = useState([])

    const fetchDashboardData = async () => {
        const resp = await fetch(apiUrl + "dashboard", {
            method: "GET",
            application: "json",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token()
            }
        })

        const result = await resp.json()
        if (result.status) {
            setDashboard(result.data)
        }
    }

    useEffect(() => {
        fetchDashboardData()
    }, [])

    return (
        <>
            <Header />

            <main>
                <div className="container my-5">
                    <div className="row">

                        <div className="col-md-3">
                            {/* sidebar */}
                            <Sidebar />

                        </div>

                        <div className="col-md-9 dashboard">
                            {/* Welcome */}
                            <div className="text-center mb-4">
                                <h4 className="fw-bold">Welcome To Admin Panel</h4>
                            </div>

                            {/* Cards Grid */}
                            <div className="row g-4">
                                {[
                                    {
                                        title: "Services",
                                        active: dashboard.active_services,
                                        inactive:dashboard.inactive_services,
                                        bg: "linear-gradient(135deg, #6EE7B7, #3B82F6)",
                                        isSimple: false,
                                    },
                                    {
                                        title: "Projects",
                                        active: dashboard.active_projects,
                                        inactive:dashboard.inactive_projects,
                                        bg: "linear-gradient(135deg, #FDE68A, #F59E0B)",
                                        isSimple: false,
                                    },
                                    {
                                        title: "Articles",
                                        active: dashboard.active_articles,
                                        inactive:dashboard.inactive_articles,
                                        bg: "linear-gradient(135deg, #A5B4FC, #6366F1)",
                                        isSimple: false,
                                    },
                                    {
                                        title: "Testimonials",
                                        active:dashboard.active_testimonials,
                                        inactive:dashboard.inactive_testimonials,
                                        bg: "linear-gradient(135deg, #FCA5A5, #EF4444)",
                                        isSimple: false,
                                    },
                                    {
                                        title: "Members",
                                        active:dashboard.active_members,
                                        inactive:dashboard.inactive_members,
                                        bg: "linear-gradient(135deg, #C4B5FD, #8B5CF6)",
                                        isSimple: false,
                                    },
                                    {
                                        title: "Users",
                                        count:dashboard.users,
                                        bg: "linear-gradient(135deg, #F9A8D4, #DB2777)",
                                        isSimple: true,
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="col-12 col-sm-6 col-lg-4">
                                        <div
                                            className="text-dark shadow-sm p-4"
                                            style={{
                                                background: item.bg,
                                                borderRadius: "16px",
                                                height: "170px",
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "space-between",
                                                boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
                                            }}
                                        >
                                            <div className="fs-5 fw-bold">{item.title}</div>
                                            {item.isSimple ? (
                                                <div className="mt-auto">
                                                    <div className="d-flex justify-content-between mt-3">
                                                        <span className="fs-6">Total</span>
                                                        <span className="fw-bold">{item.count}</span>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="mt-auto">
                                                    <div className="d-flex justify-content-between mt-3">
                                                        <span className="fs-6">Active</span>
                                                        <span className="fw-bold">{item.active}</span>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <span className="fs-6">Block</span>
                                                        <span className="fw-bold">{item.inactive}</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>


                    </div>
                </div>

            </main>
            <Footer />
        </>
    )
}

export default Dashboard
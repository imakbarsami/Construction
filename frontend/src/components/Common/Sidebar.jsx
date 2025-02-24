import { useContext } from "react"
import { AuthContext } from "../backend/context/Auth"
import { Link } from "react-router-dom"

const Sidebar = () => {

    const {logout}=useContext(AuthContext)
    return (
        <>
            {/* sidebar */}
            <div className="card border-0 shadow">
                <div className="card-body p-4 sidebar">
                    <h4>Slidebar</h4>

                    <ul>
                        <li><Link to="/admin/dashboard">Dashboard</Link></li>
                        <li><Link to="/admin/services">Services</Link></li>
                        <li><Link to="/admin/projects">Projects</Link></li>
                        <li><Link to="/admin/articles">Articles</Link></li>
                        <li><Link to="/admin/testimonials">Testimonials</Link></li>
                        <li><Link to="/admin/members">Members</Link></li>
                        <li>
                            <button onClick={logout} className="btn btn-primary mt-4">Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </>


    )
}

export default Sidebar
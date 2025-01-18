import { useEffect, useState } from "react"
import Footer from "../../Common/Footer"
import Header from "../../Common/Header"
import Sidebar from "../../Common/Sidebar"
import { apiUrl, token } from "../../Common/Http"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify";


const Show = () => {

    const [services, setServices] = useState([])

    const fetchService = async () => {
        const res = await fetch(apiUrl + 'services', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token()}`
            }
        })

        const result = await res.json()
        setServices(result.data)

    }

    useEffect(() => {
        fetchService()
    }, [])


    const navigate=useNavigate()

    const removeService=async(id)=>{

        if(confirm('Are you sure to remove this service?')){
            const res=await fetch(apiUrl+'service/'+id,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${token()}`
                    }
                }
            )

            const result=await res.json()

            if(result.status){
                const newServices=services.filter(service=>service.id!==id)
                setServices(newServices)
                toast.success(result.message)
            }else{
                toast.error(result.message)
            }
        }
    }

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


                        <div className="col-md-9 ">
                            {/* Dashboard */}
                            <div className="card border-0 shadow">
                                <div className="card-body p-4">
                                    <div className="d-flex justify-content-between">
                                        <h4 className="h5">Services</h4>
                                        <Link to="/admin/service/create" className="btn btn-primary">Create</Link>
                                    </div>
                                    <hr />

                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Slug</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>

                                        <tbody>

                                            {
                                                services && services.map(services => {
                                                    return (
                                                        <tr key={`service-${services.id}`}>
                                                            <td>{services.id}</td>
                                                            <td>{services.title}</td>
                                                            <td>{services.slug}</td>
                                                            <td>
                                                                {
                                                                    services.status == 1 ?
                                                                        <span className="badge bg-success">Active</span>
                                                                        :
                                                                        <span className="badge bg-danger">Block</span>
                                                                }
                                                            </td>
                                                            <td>
                                                                <Link to={`/admin/service/edit/${services.id}`} className="btn btn-primary btn-sm mx-2">Edit</Link>
                                                                <Link to="#" onClick={()=> removeService(services.id)} className="btn btn-secondary btn-sm">Remove</Link>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </>
    )
}

export default Show
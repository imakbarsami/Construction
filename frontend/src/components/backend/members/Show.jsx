import { useEffect, useState } from 'react'
import { apiUrl, token } from '../../Common/Http'
import Footer from "../../Common/Footer"
import Header from "../../Common/Header"
import Sidebar from "../../Common/Sidebar"
import { Link } from "react-router-dom"
import { toast } from 'react-toastify'

const Show = () => {

    const [members, setMembers] = useState([])

    const fetchMembers = async () => {
        const resp = await fetch(apiUrl + 'members', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token()}`
            }
        })

        const result=await resp.json()

        setMembers(result.data)
    }

    const removeMember=async(id)=>{

        if(confirm('Are you sure you want to delete member?')){
        const resp = await fetch(apiUrl + 'member/'+id, {
            method: 'Delete',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token()}`
            }
        })

        const result=await resp.json()

        if(result.status){
            const laterMembers=members.filter(members=>members.id!==id)
            setMembers(laterMembers)
            toast.success(result.message)
        }else
           toast.error(result.data.message)
    }
    }


    useEffect(()=>{
        fetchMembers()
    },[])

    return (
        <>
        <Header/>
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
                                            <h4 className="h5">Members</h4>
                                            <Link to="/admin/member/create" className="btn btn-primary">Create</Link>
                                        </div>
                                        <hr />
    
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Name</th>
                                                    <th>Job Title</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
    
                                            <tbody>
    
                                                {
                                                    members && members.map(member => {
                                                        return (
                                                            <tr key={`member-${member.id}`}>
                                                                <td>{member.id}</td>
                                                                <td>{member.name}</td>
                                                                <td>{member.job_title}</td>
                                                                <td>
                                                                    {
                                                                        member.status == 1 ?
                                                                            <span className="badge bg-success">Active</span>
                                                                            :
                                                                            <span className="badge bg-danger">Block</span>
                                                                    }
                                                                </td>
                                                                <td>
                                                                    <Link to={`/admin/member/edit/${member.id}`} className="btn btn-primary btn-sm mx-2">Edit</Link>
                                                                    <Link to="#" onClick={()=>removeMember(member.id)} className="btn btn-secondary btn-sm">Remove</Link>
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
        <Footer/>
        </>
    )
}

export default Show
import Footer from "../../Common/Footer"
import Header from "../../Common/Header"
import { Link } from "react-router-dom"
import Sidebar from "../../Common/Sidebar"
import { useEffect, useState } from "react"
import { apiUrl, token } from "../../Common/Http"
import { toast } from "react-toastify"


const Show = () => {

  const [project, setProjects] = useState([])

  const fetchPrject=async ()=>{
    const response=await fetch(apiUrl+'projects',{
        method:'GET',
        headers:{
            'Content-Type':'application/json',
            'Accept':'application/json',
            'Authorization':`Bearer ${token()}`
      }
    })

    const result=await response.json()
    setProjects(result.data)
  }

  const removeProject=async (id)=>{

      if(confirm('Are you sure to remove this project?')){
        const response=await fetch(apiUrl+'project/'+id,{
          method:'DELETE',
          headers:{
              'Content-Type':'application/json',
              'Accept':'application/json',
              'Authorization':`Bearer ${token()}`
          }
      })

      const result=await response.json()
      if(result.status){
        const newProject=project.filter(project=>project.id!==id)
        setProjects(newProject)
        toast.success(result.message)
      }else{
        toast.error(result.message)
      }
    }
  }

  useEffect(()=>{
    fetchPrject()
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
                                        <h4 className="h5">project</h4>
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
                                                project && project.map(project => {
                                                    return (
                                                        <tr key={`service-${project.id}`}>
                                                            <td>{project.id}</td>
                                                            <td>{project.title}</td>
                                                            <td>{project.slug}</td>
                                                            <td>
                                                                {
                                                                    project.status == 1 ?
                                                                        <span className="badge bg-success">Active</span>
                                                                        :
                                                                        <span className="badge bg-danger">Block</span>
                                                                }
                                                            </td>
                                                            <td>
                                                                <Link to={`/admin/project/edit/${project.id}`} className="btn btn-primary btn-sm mx-2">Edit</Link>
                                                                <Link to="#" onClick={()=>removeProject(project.id)} className="btn btn-secondary btn-sm">Remove</Link>
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
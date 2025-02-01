import Footer from "../../Common/Footer"
import Header from "../../Common/Header"
import { Link } from "react-router-dom"
import Sidebar from "../../Common/Sidebar"
import { useEffect, useState } from "react"
import { apiUrl, token } from "../../Common/Http"
import { toast } from "react-toastify"


const Show = () => {

  const [testimonials, setTestimonials   ] = useState([])

  const fetchTestimonials=async ()=>{
    const response=await fetch(apiUrl+'testimonials',{
        method:'GET',
        headers:{
            'Content-Type':'application/json',
            'Accept':'application/json',
            'Authorization':`Bearer ${token()}`
      }
    })

    const result=await response.json()
    setTestimonials(result.data)
  }

  const removeArticle=async (id)=>{

      if(confirm('Are you sure to remove this testimonial?')){
        const response=await fetch(apiUrl+'testimonial/'+id,{
          method:'DELETE',
          headers:{
              'Content-Type':'application/json',
              'Accept':'application/json',
              'Authorization':`Bearer ${token()}`
          }
      })

      const result=await response.json()
      if(result.status){
        const newTestimonials=testimonials.filter(testimonials=>testimonials.id!==id)
        setTestimonials(newTestimonials)
        toast.success(result.message)
      }else{
        toast.error(result.message)
      }
    }
  }

  useEffect(()=>{
    fetchTestimonials()
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
                                        <h4 className="h5">Testimonials</h4>
                                        <Link to="/admin/testimonials/create" className="btn btn-primary">Create</Link>
                                    </div>
                                    <hr />

                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Testimonial</th>
                                                <th>Citation</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>

                                        <tbody>

                                            {
                                                testimonials && testimonials.map(testimonial => {
                                                    return (
                                                        <tr key={`service-${testimonial.id}`}>
                                                            <td>{testimonial.id}</td>
                                                            <td>{testimonial.testimonial}</td>
                                                            <td>{testimonial.citation}</td>
                                                            <td>
                                                                {
                                                                    testimonial.status == 1 ?
                                                                        <span className="badge bg-success">Active</span>
                                                                        :
                                                                        <span className="badge bg-danger">Block</span>
                                                                }
                                                            </td>
                                                            <td>
                                                                <Link to={`/admin/testimonial/edit/${testimonial.id}`} className="btn btn-primary btn-sm mx-2">Edit</Link>
                                                                <Link to="#" onClick={()=>removeArticle(testimonial.id)} className="btn btn-secondary btn-sm">Remove</Link>
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
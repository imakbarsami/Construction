import Footer from "../../Common/Footer"
import Header from "../../Common/Header"
import { Link } from "react-router-dom"
import Sidebar from "../../Common/Sidebar"
import { useEffect, useState } from "react"
import { apiUrl, token } from "../../Common/Http"
import { toast } from "react-toastify"


const Show = () => {

  const [article, setArticle    ] = useState([])

  const fetchArticle=async ()=>{
    const response=await fetch(apiUrl+'articles',{
        method:'GET',
        headers:{
            'Content-Type':'application/json',
            'Accept':'application/json',
            'Authorization':`Bearer ${token()}`
      }
    })

    const result=await response.json()
    setArticle(result.data)
  }

  const removeArticle=async (id)=>{

      if(confirm('Are you sure to remove this article?')){
        const response=await fetch(apiUrl+'article/'+id,{
          method:'DELETE',
          headers:{
              'Content-Type':'application/json',
              'Accept':'application/json',
              'Authorization':`Bearer ${token()}`
          }
      })

      const result=await response.json()
      if(result.status){
        const newArticle=article.filter(article=>article.id!==id)
        setArticle(newArticle)
        toast.success(result.message)
      }else{
        toast.error(result.message)
      }
    }
  }

  useEffect(()=>{
    fetchArticle()
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
                                        <h4 className="h5">Article</h4>
                                        <Link to="/admin/article/create" className="btn btn-primary">Create</Link>
                                    </div>
                                    <hr />

                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Title</th>
                                                <th>Slug</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>

                                        <tbody>

                                            {
                                                article && article.map(article => {
                                                    return (
                                                        <tr key={`service-${article.id}`}>
                                                            <td>{article.id}</td>
                                                            <td>{article.title}</td>
                                                            <td>{article.slug}</td>
                                                            <td>
                                                                {
                                                                    article.status == 1 ?
                                                                        <span className="badge bg-success">Active</span>
                                                                        :
                                                                        <span className="badge bg-danger">Block</span>
                                                                }
                                                            </td>
                                                            <td>
                                                                <Link to={`/admin/article/edit/${article.id}`} className="btn btn-primary btn-sm mx-2">Edit</Link>
                                                                <Link to="#" onClick={()=>removeArticle(article.id)} className="btn btn-secondary btn-sm">Remove</Link>
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
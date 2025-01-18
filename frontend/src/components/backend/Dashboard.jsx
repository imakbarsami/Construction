import Footer from "../Common/Footer"
import Header from "../Common/Header"
import Sidebar from "../Common/Sidebar"

const Dashboard = () => {
  return (
    <>
    <Header/>

    <main>
        <div className="container my-5">
        <div className="row">
            
            <div className="col-md-3">
                {/* sidebar */}
                <Sidebar/>

            </div>

             
            <div className="col-md-9 dashboard">
                {/* Dashboard */}
                <div className="card border-0 shadow">
                    <div className="card-body d-flex justify-content-center align-items-center">
                        <h4>Welcome To Admin Panel</h4>
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

export default Dashboard
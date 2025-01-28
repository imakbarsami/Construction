import { apiUrl, fileUrl } from "../Common/Http";
import { useEffect, useState } from 'react';


const LatestProjects = () => {

    const [projects, setProjects] = useState([]);

    const fetchLatestProjects=async()=>{

        const resp = await fetch(apiUrl+'get-latest-projects?limit=3');
        const result = await resp.json();
        setProjects(result.data);
    }

    useEffect(()=>{
        fetchLatestProjects();
    },[])

  return (
    <main>

    <section className='section-3 bg-light py-5'>
        <div className="container py-5">
            <div className="section-header text-center">

                <span>Our Projects</span>

                <h2>Discover our diverse range of Projects</h2>

                <p>
                    Explore our diverse range of projects, each reflecting our commitment to
                    excellence and innovation in construction.
                </p>
            </div>

            <div className="row pt-4">
                {
                   projects && projects.map((projects, i) => {
                    return (
                        <div className="col-md-4 col-lg-4" key={i}>
                            <div className="item">
                                <div className="service-image">
                                    <img src={`${fileUrl}upload/projects/small/${projects.image}`} alt="" className="w-100" />
                                </div>
                                <div className="service-body">
                                    <div className="service-title">
                                        <h3>{projects.title}</h3>
                                    </div>
                                    <div className="service-content">
                                        <p>
                                            {projects.short_description}
                                        </p>
                                    </div>
                                    <a href="" className="btn btn-primary large">Read more</a>
                                </div>
                            </div>
                        </div>
                    )
                })
                }

            </div>

        </div>
    </section>
</main>
  )
}

export default LatestProjects
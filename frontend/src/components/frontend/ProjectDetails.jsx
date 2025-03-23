import Footer from '../Common/Footer';
import Header from '../Common/Header';
import Hero from '../Common/Hero';
import { apiUrl, fileUrl } from '../Common/Http';
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Testimonial from '../frontend/Testimonial';

const ProjectDetails = () => {
  const [getProject, setProjectDetails] = useState({});
  const [projects, setProjects] = useState([]);
  const param = useParams();

  useEffect(() => {
    const fetchProjectDetail = async () => {
      const resp = await fetch(`${apiUrl}get-project/${param.id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });
      const result = await resp.json();
      setProjectDetails(result.data);
    };

    const fetchProjects = async () => {
      const resp = await fetch(`${apiUrl}get-projects`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });
      const result = await resp.json();
      setProjects(result.data);
    };

    fetchProjectDetail();
    fetchProjects();
  }, [param.id]);

  return (
    <>
      <Header />

      <main>
        <section className="py-5">
          {/* Hero Section */}
          <Hero preHeading="Quality, Integrity, Value." heading={getProject.title || "Project Details"} />

          <div className="container">
            <div className="row">
              {/* Sidebar - Project List */}
              <div className="col-md-3">
                <div className="card shadow-sm border-0">
                  <div className="card-body">
                    <h4 className="text-dark mb-3">Our Projects</h4>
                    <ul className="list-group">
                      {projects.map((project) => (
                        <li key={project.id} className="list-group-item border-0">
                          <Link to={`/project/${project.id}`} className="text-decoration-none text-dark">
                            {project.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="col-md-9">
                {/* Project Image */}
                <div className="mb-4">
                  <img
                    src={`${fileUrl}upload/projects/large/${getProject.image}`}
                    alt={getProject.title}
                    className="img-fluid rounded shadow-sm "
                  />
                </div>

                {/* Title */}
                <h3 className="text-dark">{getProject.title}</h3>

                {/* Project Info */}
                <div className="card shadow-sm border-0 my-4">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-4">
                        <p className="text-muted mb-1">Construction Type</p>
                        <p className="fw-semibold">{getProject.construction_type || 'N/A'}</p>
                      </div>
                      <div className="col-md-4">
                        <p className="text-muted mb-1">Sector</p>
                        <p className="fw-semibold">{getProject.sector || 'N/A'}</p>
                      </div>
                      <div className="col-md-4">
                        <p className="text-muted mb-1">Location</p>
                        <p className="fw-semibold">{getProject.location || 'N/A'}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="card shadow-sm border-0 p-4">
                  <div dangerouslySetInnerHTML={{ __html: getProject.content }} />
                </div>
              </div>
            </div>

            {/* Testimonial Section */}
            <div className="mt-5">
              <Testimonial />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ProjectDetails;

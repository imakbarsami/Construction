import Footer from '../Common/Footer';
import Header from '../Common/Header';
import Hero from '../Common/Hero';
import { apiUrl, fileUrl } from '../Common/Http';
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import Testimonial from '../frontend/Testimonial';
import { get } from 'react-hook-form';

const BlogDetails = () => {

    const [getBlog, setBlogDetail] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const param = useParams();
    const fetchBlogDetail = async () => {
        const resp = await fetch(`${apiUrl}get-article/${param.id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = await resp.json();
        setBlogDetail(result.data);
        console.log(result.data);
    }


    const fetchBlogs = async () => {
        const resp = await fetch(`${apiUrl}get-articles`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const result = await resp.json();
        setBlogs(result.data);

    }


    useEffect(() => {
        fetchBlogDetail();
        fetchBlogs();
    }, [param.id]);


    const formatDate = (dateStr) => {
        if (!dateStr) return '';
        const date = new Date(dateStr);
        const options = {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        };
        return date.toLocaleString('en-US', options);
      }
      

    return (
        <>
            <Header />

            <main>
                <section className='section-10'>

                    <Hero
                        preHeading='Quality,Integrity,Value.'
                        heading={`${getBlog.title}`}
                        text=''
                    />

                    <div className="container py-5">
                        <div className="row">
                            <div className="col-md-3">

                                <div className="card shadow border-0 sidebar">
                                    <div className="card-body px-4 py-4">
                                        <h3 className='mt-2 mb-3'>Articles</h3>
                                        <ul>

                                            {
                                                blogs.map((blog) => {
                                                    return (
                                                        <li key={blog.id}>
                                                            <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-9">

                                <div>
                                    <img src={`${fileUrl}upload/articles/large/${getBlog.image}`} alt="" className='w-100' />
                                </div>

                                <h3 className='py-3'>{getBlog.title}</h3>
                                {/* Author and Date Info */}
                                <div className="py-3">
                                    <p className="mb-1"><strong>Author:</strong> {getBlog.author}</p>
                                    <p className="mb-1 text-muted"><strong>Published:</strong> {formatDate(getBlog.created_at)}</p>
                                    {
                                        getBlog.created_at !== getBlog.updated_at &&
                                        <p className="mb-3 text-muted"><strong>Updated:</strong> {formatDate(getBlog.updated_at)}</p>
                                    }
                                </div>



                                <div dangerouslySetInnerHTML={{ __html: getBlog.content }}>

                                </div>
                            </div>
                        </div>

                        <div className="container mt-5">
                            <div className="col-md-12">
                                <Testimonial />
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}

export default BlogDetails
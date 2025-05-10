import { Link } from 'react-router-dom'
import { apiUrl, fileUrl } from '../Common/Http'
import { useEffect, useState } from 'react'

const LatestBlogs = () => {

    const [articles, setArticle] = useState([])

    const fetchLatestArticles = async () => {
        const resp = await fetch(apiUrl + 'get-latest-articles?limit=3')
        const result = await resp.json()
        setArticle(result.data)
    }

    useEffect(() => {
        fetchLatestArticles()
    }, [])

    return (
        <main>

            <section className='section-3 bg-light py-5'>
                <div className="container py-5">
                    <div className="section-header text-center">

                        <span>Blogs & News</span>

                        <h2>Insights,Updates and Industry Trends</h2>

                        <p>
                        Stay informed with the latest updates from ElevateWorks. From construction tips and project highlights 
                        to industry trends and sustainability insightswe share valuable knowledge to keep you inspired and informed.
                        </p>
                    </div>

                    <div className="row pt-4">
                        {
                            articles && articles.map((article, i) => {
                                return (
                                    <div className="col-md-4 col-lg-4" key={i}>
                                        <div className="item">
                                            <div className="service-image">
                                                <img src={`${fileUrl}upload/articles/small/${article.image}`} alt="" className="w-100" />
                                            </div>
                                            <div className="service-body">
                                                <div className="service-title">
                                                    <h3>{article.title}</h3>
                                                </div>
                                                <div className="service-content">
                                                    {article.content &&
                                                        article.content
                                                            .split(' ')
                                                            .slice(0, 10)
                                                            .join(' ')
                                                            .replace(/(<([^>]+)>)/gi, '') +
                                                        (article.content.split(' ').length > 10 ? '...' : '')
                                                    }
                                                </div>

                                                <Link to={`/blog/${article.id}`} className="btn btn-primary large">Read more</Link>
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

export default LatestBlogs
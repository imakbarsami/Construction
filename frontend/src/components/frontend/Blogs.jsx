import { Link } from "react-router-dom"
import Footer from "../Common/Footer"
import Header from "../Common/Header"
import Hero from "../Common/Hero"
import { apiUrl, fileUrl } from "../Common/Http"
import { useEffect, useState } from "react"

const Blogs = () => {

    const [articles, setArticle] = useState([])

    const getArticles = async () => {

        const res = await fetch(apiUrl + 'get-articles')
        const result = await res.json()
        setArticle(result.data)
    }

    useEffect(() => {
        getArticles()
    }, [])

    return (
        <>
            <Header />

            <main>

                <Hero

                    preHeading='Quality,Integrity,Value.'
                    heading='Blogs'
                    text='We are dedicated to delivering exceptional construction services,<br> ensuring the highest quality and precision in every project we undertake.'

                />

                <section className='section-3 bg-light py-5'>
                    <div className="container py-5">
                        <div className="section-header text-center">

                            <span>Blogs & News</span>

                            <h2>Article & Blog posts</h2>

                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
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

            <Footer />
        </>
    )
}

export default Blogs
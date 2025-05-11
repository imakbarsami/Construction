import { Swiper, SwiperSlide } from 'swiper/react';
import { apiUrl, fileUrl } from '../Common/Http';
import { useEffect, useState } from 'react';
import 'swiper/css';
import { FaLinkedin } from 'react-icons/fa';

const Teams = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const resp = await fetch(apiUrl + 'get-members');
                const result = await resp.json();
                if (result.status) {
                    setMembers(result.data);
                }
            } catch (error) {
                console.error("Error fetching members:", error);
            }
        };
        fetchMembers();
    }, []);

    return (
        <section className="py-5 bg-light">
            <div className="container">
                <div className="text-center mb-5">
                    <h5 className="text-dark text-uppercase fw-bold">Team</h5>
                    <h2 className="fw-bold">Our Team</h2>
                    <p className="text-dark">
                        Our team is a blend of creativity, expertise, and passion, dedicated to delivering the best results for our clients.
                    </p>
                </div>

                <Swiper spaceBetween={20} slidesPerView={1} breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 5 } }}>

                    {
                        members && members.map((member, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className="bg-white p-4 rounded-3 shadow-sm text-center h-100">
                                        <div className="mb-3">
                                            <img
                                                src={`${fileUrl}upload/members/small/${member.image}`}
                                                alt={member.name}
                                                className="rounded-circle"
                                                style={{ width: '80px', height: '80px', objectFit: 'cover', margin: '0 auto' }}
                                            />
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center gap-2 mb-2">
                                            <a
                                                href={member.linkdin_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-decoration-none"
                                            >
                                                <FaLinkedin size={18} color="#0077b5" />
                                            </a>
                                            <h5 className="mb-0 fw-bold">{member.name}</h5>
                                        </div>
                                        <p className="text-muted mb-0">{member.job_title}</p>
                                    </div>
                                </SwiperSlide>
                            );
                        })
                    }

                </Swiper>
            </div>
        </section>
    );
};

export default Teams;

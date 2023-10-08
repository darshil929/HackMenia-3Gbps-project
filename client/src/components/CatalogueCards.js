import React from 'react';
import VideoCards from './VideoCards'
import img from '../images/2468081.png';
import img2 from '../images/4029013.png';
import img3 from '../images/88167.png';
import img4 from '../images/942800.png';
import img5 from '../images/quiz.png';
import img6 from '../images/5351504.png';

const Services = () => {

    const handleCardClick = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <div id="catalogue" className="bg-gray-100 pt-16" >
                <section data-aos="zoom-in-down">
                    <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Catalog</h2>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-black-900">We are deeply committed to the growth and improvement.</h2>
                    </div>

                    <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-5 place-content-center">

                            <div title='courses' onClick={() => handleCardClick('courses')} className="catalogue-card bg-whitetransition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="catalogue-img-card m-2 text-justify text-sm">
                                    <img alt="card img" className="catalogue-img rounded-t group-hover:scale-[1.05] transition duration-1000 ease-in-out" src={img} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Courses</h2>

                                </div>
                            </div>

                            <a href="https://www.youtube.com/podcasts" target='_blank'>
                            <div title='podcasts' onClick={() => handleCardClick('podcasts')} className="catalogue-card bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="catalogue-img-card m-2 text-justify text-sm">
                                    <img alt="card img" className="catalogue-img rounded-t group-hover:scale-[1.05] transition duration-1000 ease-in-out" src={img2} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Podcasts</h2>

                                </div>
                            </div>
                            </a>

                            <a href="https://psychcentral.com/blog" target='_blank'>
                            <div title='articles' onClick={() => handleCardClick('articles')} className="catalogue-card bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="catalogue-img-card m-2 text-justify text-sm">
                                    <img alt="card img" className="catalogue-img rounded-t group-hover:scale-[1.05] transition duration-1000 ease-in-out" src={img3} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Articles</h2>

                                </div>
                            </div>
                            </a>

                            <div title='jobs' onClick={() => handleCardClick('jobs')} className="catalogue-card bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="catalogue-img-card m-2 text-justify text-sm">
                                    <img alt="card img" className="catalogue-img rounded-t group-hover:scale-[1.05] transition duration-1000 ease-in-out" src={img4} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Jobs</h2>

                                </div>
                            </div>

                            <a href="https://forms.gle/Q3NnhJGPZvo5mYnt9" target='_blank'>
                            <div title='quiz' onClick={() => handleCardClick('quiz')} className="catalogue-card bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="catalogue-img-card m-2 text-justify text-sm">
                                    <img alt="card img" className="catalogue-img rounded-t group-hover:scale-[1.05] transition duration-1000 ease-in-out" src={img5} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Quizzes</h2>

                                </div>
                            </div>
                            </a>

                            <a href="/get-demo">
                            <div title='webinar' onClick={() => handleCardClick('webinar')} className="catalogue-card bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="catalogue-img-card m-2 text-justify text-sm">
                                    <img alt="card img" className="catalogue-img rounded-t group-hover:scale-[1.05] transition duration-1000 ease-in-out" src={img6} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Upcoming Webinars</h2>

                                </div>
                            </div>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
            <section>
                <VideoCards />
            </section>
        </div>
    )
}

export default Services;
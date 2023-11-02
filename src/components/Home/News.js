import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Physics from "../../images/physics.png"
import { Link } from 'react-router-dom';
const News = (props) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <>
            <div className='h-auto relative w-full mt-36 mb-24'>
                <h1 className='text-center text-4xl font-bold pb-5'> About latest tips,news and course </h1>
                <p className='text-center w-96 text-md font-semibold py-5' style={{ margin: '0 auto' }}> Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum ultrices </p>
                <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    // autoPlay={props.deviceType !== "mobile" ? true : false}
                    // autoPlaySpeed={5}
                    keyBoardControl={true}
                    // customTransition="all 10s"
                    // transitionDuration={5}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    className='mt-20 pb-12 px-12 relative'
                >
                    <div>
                        <Link className="card card-compact w-96 shadow-xl bg-transparent">
                            <figure><img src={Physics} alt="Shoes" /></figure>
                            <div className="card-body">
                                <p className='Text-center font-bold text-2xl pt-5'>If a dog chews shoes whose shoes does he choose?</p>
                                <p className='text-md font-normal text-gray-300 text-start py-5'> 9,April-2023 </p>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link className="card card-compact w-96 shadow-xl bg-transparent">
                            <figure><img src={Physics} alt="Shoes" /></figure>
                            <div className="card-body">
                                <p className='Text-center font-bold text-2xl pt-5'>If a dog chews shoes whose shoes does he choose?</p>
                                <p className='text-md font-normal text-gray-300 text-start py-5'> 9,April-2023 </p>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link className="card card-compact w-96 shadow-xl bg-transparent">
                            <figure><img src={Physics} alt="Shoes" /></figure>
                            <div className="card-body">
                                <p className='Text-center font-bold text-2xl pt-5'>If a dog chews shoes whose shoes does he choose?</p>
                                <p className='text-md font-normal text-gray-300 text-start py-5'> 9,April-2023 </p>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link className="card card-compact w-96 shadow-xl bg-transparent">
                            <figure><img src={Physics} alt="Shoes" /></figure>
                            <div className="card-body">
                                <p className='Text-center font-bold text-2xl pt-5'>If a dog chews shoes whose shoes does he choose?</p>
                                <p className='text-md font-normal text-gray-300 text-start py-5'> 9,April-2023 </p>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link className="card card-compact w-96 shadow-xl bg-transparent">
                            <figure><img src={Physics} alt="Shoes" /></figure>
                            <div className="card-body">
                                <p className='Text-center font-bold text-2xl pt-5'>If a dog chews shoes whose shoes does he choose?</p>
                                <p className='text-md font-normal text-gray-300 text-start py-5'> 9,April-2023 </p>
                            </div>
                        </Link>
                    </div>

                </Carousel>
                <div style={{ width: '300px', height: '500px', margin: '0 auto' }} className="hidden lg;inline md:inline absolute bottom-0 right-0 left-0 top-auto blur-3xl  opacity-20 bg-blue-400 -skew-y-12">

                </div>
            </div>
        </>
    );
};

export default News;
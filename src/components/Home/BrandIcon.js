import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import group1 from "../../images/brand/Group (1).png";
import group2 from "../../images/brand/Group (2).png";
import group3 from "../../images/brand/Group 512822.png";
import group4 from "../../images/brand/Group 512823.png";
import group5 from "../../images/brand/Group.png";
const BrandIcon = (props) => {
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
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
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
                className='mt-24 pb-12 px-12'
            >
                <div>
                    <img src={group1} alt="" />
                </div>
                <div>
                    <img src={group2} alt="" />
                </div>
                <div>
                    <img src={group3} alt="" />
                </div>
                <div>
                    <img src={group4} alt="" />
                </div>
                <div>
                    <img src={group5} alt="" />
                </div>

            </Carousel>
        </>
    );
};

export default BrandIcon;
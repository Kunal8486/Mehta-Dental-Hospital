import React from 'react'
import './Testimonial.scss'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import imgOne from '../../assets/testimonial/1.png'
import imgTwo from '../../assets/testimonial/2.png'
import imgThree from '../../assets/testimonial/3.png'
import TestimoniCard from '../../components/TestimoniCard/TestimoniCard'
import { AiFillStar } from "react-icons/ai"
import Slider from "react-slick"

const Testimonial = () => {

const testimonails = [
{
img: imgOne,
name: 'Rahul Verma',
description: 'The clinic is very neat and clean. The doctor explained everything patiently. Totally satisfied with the treatment.',
ratings: [<AiFillStar />, <AiFillStar />, <AiFillStar />, <AiFillStar />, <AiFillStar />]
},
{
img: imgTwo,
name: 'Anjali Mehra',
description: 'Best dental experience I’ve ever had. The staff was friendly, and my root canal was painless.',
ratings: [<AiFillStar />, <AiFillStar />, <AiFillStar />, <AiFillStar />, <AiFillStar />]
},
{
img: imgThree,
name: 'Vikram Patel',
description: 'Very professional setup. I came in for a teeth cleaning, and it was smooth and quick. Highly recommend!',
ratings: [<AiFillStar />, <AiFillStar />, <AiFillStar />, <AiFillStar />, <AiFillStar />]
},
{
img: imgOne,
name: 'Sneha Sharma',
description: 'Thanks to the team for helping me get rid of my dental fear. The treatment was gentle and effective.',
ratings: [<AiFillStar />, <AiFillStar />, <AiFillStar />, <AiFillStar />, <AiFillStar />]
}
]

const settings = {
dots: false,
infinite: true,
speed: 500,
slidesToShow: 3,
slidesToScroll: 1,
responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 3,
slidesToScroll: 1
}
},
{
breakpoint: 767,
settings: {
slidesToShow: 2,
initialSlide: 2
}
},
{
breakpoint: 575,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}
}
]
}

return (
<section className='testimonail-section section-bg section-common pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
<div className="container">
<div className="row">
<div className="col-lg-6">
<SectionTitle 
subTitle="TESTIMONIAL"
title="What our patients say"
/>
</div>
<div className="col-lg-6">
<p className="pt-5">Our patients across India trust us with their smiles. Here's what they have to say about their experience with our dental care team.</p>
</div>
</div>
<Slider {...settings} className="testimoni-slider">
{
testimonails.map((testimonail, index) => <TestimoniCard key={index} testimonail={testimonail} />)
}
</Slider>
</div>
</section>
)
}

export default Testimonial

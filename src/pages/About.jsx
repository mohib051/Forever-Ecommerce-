import React from 'react'
import Title from '../components/Title'
import { assets as frontEndAssets } from "../assets/frontend_assets/assets";
import NewsLetter from '../components/NewsLetter';
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
            <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
              <img className='w-full md:max-w-[450px]' src={frontEndAssets.about_img} alt="" />
              <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                      <p>At Forever, we believe fashion is more than just clothing; it’s an expression of identity. Our journey began with a passion for delivering high-quality, trendy apparel at affordable prices. From casual wear to chic, timeless pieces, we curate collections that allow every individual to feel confident and stylish, no matter the occasion.</p>
                      <p>With a customer-first approach, we focus on providing a seamless shopping experience that reflects our commitment to quality and service. Whether you’re looking for the latest trends or wardrobe essentials, Forever ensures that every piece is crafted with care and attention to detail.</p>
                      <b className='text-gray-800'>Our Mission</b>
                      <p>Our mission is simple: to inspire confidence through fashion. We aim to empower individuals with clothing that speaks to their unique style while maintaining the highest standards of quality and sustainability. At Forever, we believe everyone deserves to look and feel their best, and we’re here to make that possible.</p>
              </div>
      </div>
      <div className='text-4xl py-4'>
            <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Quality Assurance:</b>
                    <p className='text-gray-600'>We meticulously source fabrics and materials to ensure our clothes meet the highest quality standards, so you can enjoy fashion that lasts.</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Convenience:</b>
                    <p className='text-gray-600'>With an easy-to-navigate online store and a variety of payment options, we make shopping for your favorite styles a breeze.</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Exceptional Customer Service:</b>
                    <p className='text-gray-600'>Our dedicated support team is here to ensure you have the best shopping experience, from browsing to checkout and beyond.</p>
            </div>
      </div>
      <NewsLetter/>
    </div>
  )
}

export default About;

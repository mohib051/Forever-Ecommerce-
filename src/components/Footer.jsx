import React from 'react'
import { assets as frontEndAssets } from "../assets/frontend_assets/assets";
const Footer = () => {
  return (
    <div className=''>
            <div className='flex flex-col justify-center sm:flex-row  gap-14 my-10 mt-40 text-sm'>
                    <div className=''>
                            <img src={frontEndAssets.logo} className='mb-5 w-32' alt="" />
                            <p className='w-full md:w-2/3 text-gray-600'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus enim eaque hic corrupti quaerat obcaecati dolor est earum esse error optio officia, eius quidem inventore nostrum accusantium impedit tempora. Adipisci!
                            </p>
                    </div>
                    <div className=' '>
                        <p className='text-xl font-medium mb-5 '>COMPANY</p>
                        <ul className='flex flex-col gap-1 text-gray-600'>
                                <li>Home</li>
                                <li>About us</li>
                                <li>Delivery</li>
                                <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div>
                        <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                        <ul className='flex flex-col gap-1 text-gray-600'>
                            <li>+91 7210055791</li>
                            <li>contact@foreveryou.com</li>

                        </ul>
                    </div>
                    
            </div>
            <div className=''>
                        <hr />
                        <p className='py-5 text-sm text-center '>Copyright 2024 @forever.com -All Rights Reserved.</p>
                    </div>  
    </div>
  )
}

export default Footer
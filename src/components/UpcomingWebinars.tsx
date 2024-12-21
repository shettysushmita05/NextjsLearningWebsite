'use client'
import React from 'react'
import Link from 'next/link';
import { HoverEffect } from "./ui/card-hover-effect";
function UpcomingWebinars() {

    const featuredWedinars =[
            {
                "title": "Introduction to Front-End Development",
                "description": "Learn the fundamentals of HTML, CSS, and JavaScript to build modern websites.",
                "slug": "introduction-to-front-end-development",
                "isFeatured": true,
            },
            {
                "title": "Back-End Development with Node.js",
                "description": "Master the back-end of web development by learning Node.js and server-side programming.",
                "slug": "back-end-development-with-nodejs",
                "isFeatured": true,
            },
            {
                "title": "iOS App Development with Swift",
                "description": "Learn how to create iOS applications using Swift and the iOS SDK.",
                "slug": "ios-app-development-with-swift",
                "isFeatured": true,
            },
            {
                "title": "Mastering Python for Data Science",
                "description": "Learn Python programming for data analysis and machine learning applications.",
                "slug": "mastering-python-for-data-science",
                "isFeatured": true,
            },
            {
                "title": "Building REST APIs with Express.js",
                "description": "Learn to build and deploy REST APIs using Express.js and Node.js.",
                "slug": "building-rest-apis-with-expressjs",
                "isFeatured": true,
            },
            {
                "title": "JavaScript for Web Development",
                "description": "A complete course on JavaScript, including DOM manipulation, asynchronous programming, and more.",
                "slug": "javascript-for-web-development",
                "isFeatured": true,
            },
        ]
        
    


  return (
    <div className='p-12 bg-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>

            <div className='text-center'>
                <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>
                    FEATURED WEBINARS
                </h2>
                <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>
                    Enhance your musical Journey 
                </p>
            </div>
            <div className='mt-10'>
                <HoverEffect 
                items={featuredWedinars.map(webinar =>(
                    {
                        title: webinar.title,
                        description: webinar.description,
                        link:'/'
                    }
                ))} />


            </div>
            <div className='mt-20 text-center'>
            <Link href={"/"} 
            className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200' 
            >
            View all Webinars
            </Link>

        </div>

        </div>
    </div>
  )
}

export default UpcomingWebinars
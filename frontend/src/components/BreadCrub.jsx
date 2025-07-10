import React from 'react'
import { ChevronRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';

function BreadCrub() {
    const location = useLocation();

    const getPathName = () => {
        const pathname = location.pathname.slice(1); // Remove leading slash
        switch (pathname){
            case "/":
                return "Home"
                break
            case "about-us":
                return "About Us"
            case "contact-us":
                return "Contact Us"
            case "blog":
                return "Blog"
            case "showcase":
                return "Showcase"
            case "terms-and-condition":
                return "Terms And Conditions"
            case "privacy-policy":
                return "Privacy Policy"
            default :
                return null
        } 
        // return decodeURIComponent(pathname) // Decode %20 to space
        //     .split('/') // Split path by '/'
        //     .map(word => word.charAt(0).toUpperCase() +  word.slice(1)) // Capitalize each word
        //     .join(' '); // Join words with space
    };

    return (
        <div className='flex justify-center bg-navyblue md:pt-40 md:py-28 pt-28 py-20 items-center'>
            <div className='flex flex-col items-center gap-2'>
                <h1 className='text-white text-4xl md:text-5xl font-semibold'>{getPathName()}</h1>
                <div className='flex items-center gap-2'>
                    <span className='text-white font-semibold'>Home</span>
                    <span className='text-golden'><ChevronRight /></span>
                    <span className='text-gray-200 font-semibold'>{getPathName()}</span>
                </div>
            </div>
        </div>
    );
}

export default BreadCrub;
import React from 'react';
import BreadCrub from '../../components/BreadCrub';
import { useNavigate } from 'react-router-dom';
import { blogs } from './Blogdata'; // Import the blogs array

function Blog() {
    const navigate = useNavigate();
    const handleNavigate = (id) => {
        navigate(`/blog/${id}`); // Navigate to blog details page
    };

    return (
        <div className="min-h-screen pb-20 text-navyblue relative bg-white">
            <BreadCrub></BreadCrub>
            <div className="flex justify-center px-4 py-12">
                <div className="max-w-6xl w-full">
                    {/* Grid layout for blogs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {blogs.map((blog, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-md cursor-pointer overflow-hidden"
                                onClick={() => handleNavigate(blog.id)}
                            >
                                {/* Blog Image */}
                                <img className="w-full h-48 object-cover" src={blog.img} alt={blog.title} />
                                {/* Blog Content */}
                                <div className="p-4 h-[230px]">
                                    <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
                                    <p className="text-gray-700 line-clamp-4">{blog.content}</p>
                                </div>
                                <p className="text-gray-500 text-sm border-gray-400 border-t p-4">{blog.date}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;
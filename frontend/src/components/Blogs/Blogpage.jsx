import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogs } from './Blogdata'; // Import the blogs array

function Blogpage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const handleNavigate = (id) => {
        navigate(`/blog/${id}`); // Navigate to blog details page
    };

    // Find the specific blog based on the ID
    const blog = blogs.find((b) => b.id === parseInt(id));

    if (!blog) {
        return <p className="text-center text-xl">Blog not found</p>;
    }

    // Get the latest Blogs (excluding the current blog)
    const latestBlog = blogs.filter((b) => b.id !== parseInt(id)).slice(0, 3);

    return (
        <div className="min-h-screen bg-gray-100 text-navyblue-900">
            {/* Hero Section */}
            <div className="bg-navyblue text-white md:pt-40 md:py-28 pt-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-20 text-center">
                {/* Responsive Title */}
                <h1 className="text-2xl mb-4 sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-bold">
                    {blog.title}
                </h1>
                {/* Responsive Author and Date */}
                <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-2">
                    By {blog.author} | {blog.date}
                </p>
            </div>

            {/* Blog Content and Sidebar */}
            <div className="container mx-auto px-4 py-10 max-w-[1180px] flex flex-col md:flex-row gap-8">
                {/* Blog Content */}
                <div className="flex-1 bg-white shadow-lg rounded-lg">
                    <img src={blog.img} alt={blog.title} className="p-6 w-full h-80 object-cover rounded-t-md" />
                    <div className="p-6">
                        <p className="text-gray-700 text-justify whitespace-pre-line">{blog.content}</p>
                    </div>
                </div>

                {/* Latest Blogs Sidebar */}
                <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-bold mb-4">Other Blogs</h2>
                    {latestBlog.map((post) => (
                        <div key={post.id} className="mb-6 p-2 cursor-pointer"
                            onClick={() => handleNavigate(post.id)}
                        >
                            <img src={post.img} alt={post.title} className="w-full h-32 object-cover rounded-md" />
                            <h3 className="text-lg font-semibold mt-2">{post.title}</h3>
                            <p className="text-sm text-gray-500">{post.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Blogpage;
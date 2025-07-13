import React, { useState } from "react";

//importing components
import BreadCrub from "../../components/BreadCrub";

import axios from "axios";

//Importing icons
import { LoaderCircle } from "lucide-react";
import { toast } from "react-toastify";

//Importing images
import CONTACT from "../../assets/contactform.jpg";

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactno: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateData = () => {
    const emailRegax = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.contactno)
      newErrors.contactno = "Contact number is required.";
    if (formData.contactno.length !== 10)
      newErrors.contactno = "Contact number is not valid.";
    if (!emailRegax.test(formData.email))
      newErrors.email = "Email address is not valid.";
    if (!formData.email) newErrors.email = "Email addres is required.";
    if (!formData.message) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateData()) {
      try {
        setLoading(true);
        await axios.post(
          `${import.meta.env.VITE_API_BASE_URL}/contact`,
          formData
        );
        setFormData({
          name: "",
          contactno: "",
          email: "",
          message: "",
        });
        toast.success(
          "Congratulations!! Our Representative Will Call You Shortly"
        );
      } catch (err) {
        toast.error(err.response.data?.message || "Something went wrong.");
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="flex pb-8 flex-col gap-10">
      <BreadCrub></BreadCrub>
      <div className="w-full flex items-center justify-center px-4">
        <div className="max-w-6xl w-full">
          <div className="grid md:grid-cols-2 border rounded-lg grid-cols-1 gap-8 items-center">
            {/* Left side - Image */}
            <div className="w-full">
              <img
                src={CONTACT}
                alt="Woman in yellow sweater working"
                className="w-full rounded-lg"
              />
            </div>

            {/* Right side - Contact Info */}
            <div className="space-y-6 px-4">
              <h1 className="text-5xl font-bold text-gray-900">Contact</h1>

              <div className="space-y-4">
                <h2 className="text-2xl font-medium text-gray-900">
                  Communication Address
                </h2>

                <p className="text-gray-800 font-normal text-lg">
                  402, Shangrila Arcade, near Shyamal Cross Road,
                  <br />
                  Shyamal cross road, Ahmedabad, Gujarat
                  <br />
                  380015
                </p>

                {/* Phone */}
                <p className="text-gray-900 font-medium text-lg">
                  +91 95583 77556
                </p>

                {/* Email */}
                <p className="text-gray-900 font-medium text-lg">
                  info@stylic.ai
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* contact form */}
      <div className="w-full flex items-center justify-center p-4">
        <div className="w-full md:w-3/4 bg-white p-8 md:p-12 border border-gray-200">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            Get In Touch
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="text-gray-600 text-lg">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-col gap-1">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name here"
                    required
                    className="p-3 border border-gray-200 rounded-md text-black focus:outline-none focus:border-blue-500"
                    onChange={handleChange}
                    value={formData.name}
                  />
                  {errors.name && (
                    <span className="text-sm text-red-500">{errors.name}</span>
                  )}
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-gray-600 text-lg">
                  Your Email <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-col gap-1">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email here"
                    required
                    className="p-3 border border-gray-200 rounded-md text-black focus:outline-none focus:border-blue-500"
                    onChange={handleChange}
                    value={formData.email}
                  />
                  {errors.email && (
                    <span className="text-sm text-red-500">{errors.email}</span>
                  )}
                </div>
              </div>

              {/* Phone Field */}
              <div className="space-y-2">
                <label className="text-gray-600 text-lg">
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-col gap-1">
                  <input
                    type="tel"
                    name="contactno"
                    placeholder="Your phone here"
                    className="p-3 border border-gray-200 rounded-md text-black focus:outline-none focus:border-blue-500"
                    onChange={handleChange}
                    value={formData.contactno}
                  />
                  {errors.contactno && (
                    <span className="text-sm text-red-500">
                      {errors.contactno}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label className="text-gray-600 text-lg">
                Message <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-col gap-1">
                <textarea
                  name="message"
                  placeholder="Tell us a few words"
                  required
                  rows={6}
                  className="w-full p-3 border border-gray-200 rounded-md text-black focus:outline-none focus:border-blue-500"
                  onChange={handleChange}
                  value={formData.message}
                />
                {errors.message && (
                  <span className="text-sm text-red-500">{errors.message}</span>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button
              disabled={loading}
              type="submit"
              className="bg-golden hover:bg-golden text-white font-medium px-8 py-3 rounded-md transition-colors duration-300 uppercase text-sm tracking-wider"
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <span>
                    <LoaderCircle className="animate-spin"></LoaderCircle>
                  </span>
                  <span>Loading</span>
                </div>
              ) : (
                <span>Submit</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;

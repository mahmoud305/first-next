"use client"
import Star from "@/HelperCompomnents/star/page";
import { ChangeEvent, FormEvent, useState } from "react";
interface FormData {
    name: string;
    email: string;
    phoneNumber: string;
    message: string;
  }
const page = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phoneNumber: '',
        message: '',
      });

    const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
      const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <>
       <h1 className='text-3xl md:text-5xl  font-extrabold tracking-wide baseColor text-center pt-10'> Contact</h1>
      <Star starColor="#2c3e50" />
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto mb-8 p-8 shadow-md ">
      <label className="block mb-4 greenColor">
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="NAME"
          className="w-full px-4 py-2 mt-2 placeholder:tracking-widest focus:border-0 tracking-wider  border border-0 border-b-2 border-[#1abc9c]  bg-transparent"
        />
      </label>

      <label className="block mb-4 greenColor">
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="EMAIL"
          className="w-full px-4 py-2 mt-2 placeholder:tracking-widest focus:border-0 tracking-wider  border border-0 border-b-2 border-[#1abc9c]  bg-transparent"
        />
      </label>

      <label className="block mb-4 greenColor">
        Phone Number:
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="PHONE NUMBER"
          className="w-full px-4 py-2 mt-2 placeholder:tracking-widest focus:border-0 tracking-wider  border border-0 border-b-2 border-[#1abc9c]  bg-transparent"
        />
      </label>

      <label className="block mb-4 greenColor">
        Message:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="MESSAGE"
          className="w-full px-4 py-2 mt-2 placeholder:tracking-widest focus:border-0 tracking-wider  border border-1 border-b-2 border-[#1abc9c]  bg-transparent"
        />
      </label>

      <button
        type="submit"
        className="w-full px-4 py-2 mt-4 bggreen  -500 text-white rounded-md focus:outline-none focus:shadow-outline-green"
      >
        Submit
      </button>
    </form>
        </>
           )
  }

  
  export default page;
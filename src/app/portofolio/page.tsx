import Star from "@/HelperCompomnents/star/page";

import Image from 'next/image';
import pic1 from "../../../public/images/1.png";
import pic2 from "../../../public/images/2.png";
import pic3 from "../../../public/images/3.png";
import pic4 from "../../../public/images/4.png";
import pic5 from "../../../public/images/5.png";
import pic6 from "../../../public/images/6.png";
import ImageBox from "@/HelperCompomnents/imageBox/ImageBox";


const page = () => {
  const images= [pic1,pic2,pic3,pic4,pic5,pic6];
  return (
    <div>
      <h1 className='text-3xl md:text-5xl  font-extrabold tracking-wide baseColor text-center pt-10'> Portofolio</h1>
      <Star starColor="#2c3e50" />
      <div className=" grid grid-cols-[repeat(auto-fit,350px)] justify-center mx-auto gap-5 py-8 bg-slate-300 ">
        {/* //////////////////////// */}
        {
images.map( (image,index)=> <ImageBox key={index} image={image}/> )
        }
        {/* <ImageBox image={pic1}/> */}
      </div>

    </div>
  )
}
export default page;
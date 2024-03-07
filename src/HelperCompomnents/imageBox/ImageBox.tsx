import React from 'react'
import Image, { StaticImageData } from 'next/image';
import pic from "../../../public/images/1.png";
import IPlus from "../../../public/images/plus240.png"
function ImageBox({image}:{image:StaticImageData}) {
    return (
        <div className='  rounded-lg  max-w-[350px]  min-h-[300px]  bg-gray-900 '>
            <div className='w-full h-full relative rounded-lg items-center justify-center justify-self-center'>
                <Image src={image} alt='image1' fill className="rounded-lg peer bg-cover bg-center w-full h-full" />
                <div id="my-draft" className=" absolute my-draft m-auto items-center justify-center justify-self-center   h-0 peer-hover:h-full hover:h-full  transition-['height'] w-full  duration-300 rounded-lg bggreen   overflow-hidden">
                    <Image className="m-auto justify-self-center items-center justify-center 
         peer-[#my-draft]:-hover:opacity-100 hover:opacity-100 opacity-0 transition-opacity delay-200 duration-500" src={IPlus} alt="plus Icon" />
                </div>

            </div>
        </div>
    )
}
export default ImageBox;
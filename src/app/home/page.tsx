import Image from "next/image";
import smileBoy from "../../../public/images/home.svg"
import Star from "../../HelperCompomnents/star/page"
const page = () => {
    return (
        <div className=" text-center bggreen flex justify-center   py-10 text-white">
            <div className="">
                <Image src={smileBoy} className="m-auto"  alt="personal avatar"/>
                <h1 className="text-3xl lg:text-5xl my-4  font-extrabold text-white tracking-wide">Start Next</h1>
                <Star/>
                <h3 className="font-bold text-2xl">Graphic Designer - Web Designer - Illustrator</h3>
            </div>


        </div>
    )
}

export default page;
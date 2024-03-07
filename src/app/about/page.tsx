import Star from "../../HelperCompomnents/star/page"
const page = () => {
  return (
    <div className="bggreen flex justify-center items-center flex-col">
      <h1 className=" text-4xl md:text-5xl font-extrabold text-white tracking-wide uppercase pt-20">ABOUT</h1>
      <Star />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 mx-auto px-5  pb-10 text-white  md:text-xl">
        <p className="lg:col-start-2 ">Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
      </div>
    </div>

  )
}

export default page;
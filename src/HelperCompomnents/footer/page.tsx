import React from 'react'

const Footer = () => {
  console.log("");
  
  return (<>
    <div className='lg:p-20 text-center flex justify-around bgBaseColor text-white flex-wrap '>
      <div className='m-2 lg:basis-[30%]  '> <h3 className='text-2xl lg:text-3xl my-5 mx-2'>Location </h3>
        <p>2215 John Daniel Drive Clark, MO 65243</p>
      </div>
      <div className='m-2 lg:basis-[30%]  '>
        <h3 className='text-2xl lg:text-3xl my-5 mx-2'>AROUND THE WEB</h3>

      </div>
      <div className='m-2 lg:basis-[30%]  '>
        <h3 className='text-2xl lg:text-3xl my-5 mx-2'>ABOUT FREELANCER </h3>
        <p>Freelance is a free to use, MIT licensed Tailwind theme created by Mahmoud Abo-Hgr .</p>
      </div>
    </div>
    <div className='p-5 text-center  text-white text-sm bgBaseColor '>  Copyright © Your Website 2024</div>
  </>
  )
}

export default Footer
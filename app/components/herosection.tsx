import Footer from "./footer"
import Nav from "./navbar"
import Image from "next/image"
export default function HeroSection() {
  return (
    <div>
      <Nav />
      
      
      
        


<div className="text-gray-400 bg-black body-font">

  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
 
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      
      <Image src="/bgimg.png" width={400} height={600} className="object-cover object-center rounded border-spacing-2 ml-40" alt="hero"   />
    </div>
    
  
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
    
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">About Me</h1>
      <p className="mb-8 leading-relaxed mr-44 text-justify">Hi! and welcome! I m Rana Shahid Ikram, a passionate Front / Backend Developer with a dedication to Next.js/node. Throughout my career, I ve cultivated a unique blend of Backend Developer and a relentless commitment to Frontend / Backend Developement..</p>
      <div className="flex w-full md:justify-start justify-center items-end">
       
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mb-6">Download CV</button>
      </div>
      <div className="flex lg:flex-row md:flex-col text-gray-300">
        <button className="bg-gray-800 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-700 hover:text-white focus:outline-none">
          
          <span className="ml-4 flex items-start flex-col leading-none">
            <span className="text-xs text-gray-400 mb-1">GET IT ON</span>
            <span className="title-font font-medium">Google Play</span>
          </span>
        </button>
        <button className="bg-gray-800 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-700 hover:text-white focus:outline-none lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0">
          
          <span className="ml-4 flex items-start flex-col leading-none">
            <span className="text-xs text-gray-400 mb-1">Download on the</span>
            <span className="title-font font-medium">App Store</span>
          </span>
        </button>
      </div>
    </div>
  </div>
</div>

<Footer/>
    </div>
  )
}

import Image from "next/image"
import Link from "next/link"

export default function Nav () {
    return (
        <div>

         <div className=" bg-indigo-500 text-gray-300 body-font">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0" >
        <Image src="/pic1.JPG" width={40} height={40} alt="mono" className="  fill-gray-500 hover:fill-red-400 cursor-pointer rounded-full"/>
     
      <span className="ml-3 text-xl">Rana Shahid Ikram</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a href="http://localhost:3000/portfolio" className="mr-5 hover:text-white cursor-pointer">Home</a>
      <a href="http://localhost:3000/portfolio" className="mr-5 hover:text-white cursor-pointer">About</a>
      <a href="http://localhost:3000/portfolio/blog" className="mr-5 hover:text-white cursor-pointer">Blog</a>
      <a href="http://localhost:3000/portfolio/contact" className="mr-5 hover:text-white cursor-pointer">Contact</a>

    </nav>
    <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</div>

            
             </div>
              
              )
}
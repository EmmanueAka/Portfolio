import React from 'react'

const ListedProjects = () => {
    return (
        <div className='project-preview px-6 gap-4 flex-wrap'>
            <div className='px-4 mt-4 h-[400px] w-[350px] flex-wrap flex bg-gray-800 rounded-xl'>
                <div className='bg-gray-800 p-1 w-32 mb-2 rounded-md'><h3>3D Portfolio</h3></div>
                <iframe src='https://build3d-model.vercel.app' width="350" height="200" className='rounded-md border-4 border-gray-600  '></iframe>
                <div className='text-[10px] font-normal'>3D Portfolio, Built with React, GSAP, Tailwindcss, React Three.js </div>
                <div>
                    <a href='https://build3d-model.vercel.app' className='primary text-[10px] bg-gray-700 rounded-md h-12 p-2'>Visit Site</a>
                </div>
            </div>

            <div className='px-4 mt-4 h-[400px] w-[350px] flex-wrap flex bg-gray-800 rounded-xl'>
                <div className='bg-gray-800 p-1 w-full mb-2 rounded-md'><h3>Simple Greetings Card</h3></div>
                <iframe src='https://message-pi-three.vercel.app' width="350" height="200" className='rounded-md border-4 border-gray-600  '></iframe>
                <div className='text-[10px] font-normal'>Simple greetings, designed with NextJs, it collects your data and pass a greetings to you according to the time of the day</div>
                <div>
                    <a href='https://message-pi-three.vercel.app' className='primary text-[10px] bg-gray-700 rounded-md h-12 p-2'>Visit Site</a>
                </div>
            </div>

            <div className='px-4 mt-4 h-[400px] w-[350px] flex-wrap flex bg-gray-800 rounded-xl'>
                <div className='bg-gray-800 p-1 w-full mb-2 rounded-md'><h3>Law Firm Website</h3></div>
                <iframe src='https://lawfirm-tan.vercel.app/' width="350" height="200" className='rounded-md border-4 border-gray-600  '></iframe>
                <div className='text-[10px] font-normal'>Designed with precision, professionalism and dedication, a contact point to legal advices and legal bookings</div>
                <div>
                    <a href='https://lawfirm-tan.vercel.app/' className='primary text-[10px] bg-gray-700 rounded-md h-12 p-2'>Visit Site</a>
                </div>
            </div>

            <div className='px-4 mt-4 h-[400px] w-[350px] flex-wrap flex bg-gray-800 rounded-xl'>
                <div className='bg-gray-800 p-1 w-full mb-2 rounded-md'><h3>Gaming Website</h3></div>
                <iframe src='https://redefinegamin-v39l.vercel.app' width="350" height="200" className='rounded-md border-4 border-gray-600  '></iframe>
                <div className='text-[10px] font-normal'>Designed with React, ThreeJs, Tailwindcss, for Gaming and 3D animations</div>
                <div>
                    <a href='https://redefinegamin-v39l.vercel.app' className='primary text-[10px] bg-gray-700 rounded-md h-12 p-2'>Visit Site</a>
                </div>
            </div>

            <div className='px-4 mt-4 h-[400px] w-[350px] flex-wrap flex bg-gray-800 rounded-xl'>
                <div className='bg-gray-800 p-1 w-full mb-2 rounded-md'><h3>Mini E-Commerce Site</h3></div>
                <iframe src='https://youkay-fashion.vercel.app/' width="350" height="200" className='rounded-md border-4 border-gray-600  '></iframe>
                <div className='text-[10px] font-normal'>Designed with NextJs, Framer-Motion, Tailwindcss, for buying of wears and accessories</div>
                <div>
                    <a href='https://youkay-fashion.vercel.app/' className='primary text-[10px] bg-gray-700 rounded-md h-12 p-2'>Visit Site</a>
                </div>
            </div>

            <div className='px-4 mt-4 h-[400px] w-[350px] flex-wrap flex bg-gray-800 rounded-xl'>
                <div className='bg-gray-800 p-1 w-full mb-2 rounded-md'><h3>Security Architecture</h3></div>
                <iframe src='https://dogotracker.vercel.app' width="350" height="200" className='rounded-md border-4 border-gray-600  '></iframe>
                <div className='text-[10px] font-normal'>Designed with NextJs, Framer-Motion, Tailwindcss, Node, Better-Auth, MongoDB, for checking breaches, Phone, Email and Socials</div>
                <div>
                    <a href='https://dogotracker.vercel.app' className='primary text-[10px] bg-gray-700 rounded-md h-12 p-2'>Visit Site</a>
                </div>
            </div>

        </div>
    )


}
export default ListedProjects

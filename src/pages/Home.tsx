import React, { useRef, useEffect } from 'react'
import heroimg from '../assets/HeroSection.jpg'
import heroimg2 from '../assets/HeroSection2.jpg'
import { motion, useAnimation, useInView } from 'framer-motion'

const Home = () => {

    const animateRef = useRef<any>(null)

    const isInview = useInView(animateRef, { once:true })
    const serviceControls = useAnimation()

    useEffect(() => {
        if(isInview)
        {
            serviceControls.start("visible")
        }
    }, [isInview])

    const variants = (x:number, y:number, duration:number ) => {
        return {
            hidden: {
                x: `${x}vw`,
                y:`${y}vh`,
                opacity:0,
            },
            visible: {
                x:0,
                y:0,
                opacity:1,
                transition: {
                    type: 'spring',

                    duration: duration
                }
            }
        }
    }

    return (
        <div className='w-[100%]'>
            <div className='w-[100%] bg-[#DAC0A3] flex items-center justify-center pb-6 sm:pb-0 flex-col sm:h-[610px] pt-10'>
                <div className='w-[100%] sm:flex items-center justify-between sm:relative'>
                    <div className='border-l-0 sm:w-[60%] flex items-center justify-center rounded-r-full border-[16px] border-black mb-8 bg-[#C5C5C5]'>
                        <div className='w-[50%] flex flex-col justify-start items-start text-gray-600 py-4'>
                            <motion.h1 className='sm:text-7xl text-3xl sm:w-[30%] text-center sm:text-left' 
                             variants={variants(-30, 0,1.5)}
                             initial="hidden"
                             animate="visible"
                            >Web Development Agency in Dhaka That Delievers</motion.h1>
                            <motion.button className='text-xl font-semibold px-5 py-1 rounded-full bg-[var(--secondary-color)] font-[Montserrat] tracking-tight m-auto sm:mx-0 mt-4 text-white'
                            variants={variants(0, -30, 1.5)}
                            initial="hidden"
                            animate="visible"
                            >Hire Us</motion.button>
                        </div>

                    </div>




                    <div className='sm:w-[40%] flex items-center justify-center'>
                        <div className='relative'>
                            <motion.img 
                             variants={variants(0, 30, 1.5)}
                             initial="hidden"
                             animate="visible"
                             className='h-[300px] absolute sm:left-28 left-12 top-12 sm:top-12 rounded-xl z-20'  src={heroimg} alt="" />
                            <motion.img
                            variants={variants(30, 0, 1.5)}
                            initial="hidden"
                            animate="visible"
                             className='animateImg h-[300px] sm:w-[250px] rounded-xl z-10' src={heroimg2} alt="" />
                        </div>
                    </div>
                </div>
            </div>










            <div className='w-[100%] flex flex-col items-center'>
                <h1 className='sm:text-7xl text-3xl m-auto text-black mt-32 mb-4'>Our Services</h1>
                <div className='w-[80%] bg-serviceBg bg-no-repeat bg-center bg-cover relative bg-opacity-5 h-[500px]'>
                    <div className='absolute bg-black w-[100%] h-[100%] bg-opacity-[.9] flex items-center justify-center'>
                        <motion.div ref={animateRef} className='grid sm:grid-cols-2 grid-cols-1'
                         variants={variants(0, 0, 0)}
                         initial="hidden"
                         animate={serviceControls}
                        >
                            <div className={`  border-r border-b flex items-center justify-center`}>
                                <motion.h1 variants={variants(-10, 0, 1.5)} className='text-white sm:text-7xl  text-3xl p-10'>Web design</motion.h1>
                            </div>
                            <div className={`   border-l border-b flex items-center justify-center`}>
                                <motion.h1 variants={variants(10, 0, 1.5)} className='text-white sm:text-7xl text-3xl p-10'>Web Development</motion.h1>
                            </div>
                            <div className={`   border-r border-t flex items-center justify-center`}>
                                <motion.h1 variants={variants(-10, 0, 1.5)} className='text-white sm:text-7xl text-3xl p-10'>Meta Marketing</motion.h1>
                            </div>
                            <div className={`   border-l border-t flex items-center justify-center`}>
                                <motion.h1 variants={variants(10, 0, 1.5)} className='text-white sm:text-7xl text-3xl p-10'>SEO</motion.h1>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>)
}

export default Home
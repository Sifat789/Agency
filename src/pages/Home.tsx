import React, { useRef, useEffect, useState } from 'react'
import heroimg from '../assets/HeroSection.jpg'
import heroimg2 from '../assets/HeroSection2.jpg'
import { motion, useAnimation, useInView } from 'framer-motion'
import introPic from '../assets/IntroSection.jpg'
import introPic2 from '../assets/Intro2.jpg'
import introPic3 from '../assets/intro3.jpg'
import WhyHireCard from '../components/WhyHireCard'
import ClockIcon from '../assets/ClockIcon'
import SupportIcon from '../assets/SupportIcon'
import SatisfiedIcon from '../assets/SatisfiedIcon'
import QualityIcon from '../assets/QualityIcon'
import DesignIcon from '../assets/DesignIcon'
import DevIcon from '../assets/DevIcon'
import SeoIcon from '../assets/SeoIcon'
import LaunchIcon from '../assets/LaunchIcon'
import SupportIcon2 from '../assets/SupportIcon2'
import htmlIcon from '../assets/html.png'
import cssIcon from '../assets/css.png'
import jsIcon from '../assets/js.png'
import tsIcon from '../assets/typescript.png'
import tailwindIcon from '../assets/tailwindCss.png'
import wordpressIcon from '../assets/wordpress.png'
import elementorIcon from '../assets/elementor.png'
import reactIcon from '../assets/react.png'
import arrowIcon from '../assets/rightArrow.png'
import PhoneIcon from '../assets/PhoneIcon'
import EmailIcon from '../assets/EmailIcon'
import fbIcon from '../assets/facebook.png'
import instaIcon from '../assets/instagram.png'
import xIcon from '../assets/twitter.png'
import copyRightIcon from '../assets/copyright.png'

const Home = () => {



    const variants = (x: number, y: number, duration: number) => {
        return {
            hidden: {
                x: `${x}vw`,
                y: `${y}vh`,
                opacity: 0,
            },
            visible: {
                x: 0,
                y: 0,
                opacity: 1,
                transition: {
                    type: 'spring', //duration dont matter with spring type
                    stiffness: 170,
                    duration: duration
                }
            }
        }
    }

    const ContainerVariants = {
        hidden: {
            opacity: 1
        },

        visible: {
            opacity: 1,
            transition: {
                staggerChildren: .1
            }
        },

    }

    const altContainerVariants = {
        hidden: {
            opacity: 1
        },

        visible: {
            opacity: 1,
            transition: {
                staggerChildren: .5
            }
        },

    }

    const testimonialGridRef = useRef<HTMLDivElement>(null)
    const faq1Ref = useRef<HTMLDivElement>(null)
    const faq2Ref = useRef<HTMLDivElement>(null)
    const faq3Ref = useRef<HTMLDivElement>(null)
    const [testimonialSliderUnit, settestimonialSliderUnit] = useState<number>(0)

    const handleTestimonialSlider = (key: string) => {
        if (!testimonialGridRef.current) return


        if (key === 'right') {
            if (testimonialSliderUnit === -80) {
                testimonialGridRef.current.style.transform = `translateX(0%)`
                settestimonialSliderUnit(0);
                return
            }
            testimonialGridRef.current.style.transform = `translateX(${testimonialSliderUnit - 20}%)`
            settestimonialSliderUnit(prev => prev - 20);
        }
        else {
            if (testimonialSliderUnit === 0) return
            testimonialGridRef.current.style.transform = `translateX(${testimonialSliderUnit + 20}%)`
            settestimonialSliderUnit(prev => prev + 20);
        }

        console.log(testimonialGridRef.current.style.transform, testimonialSliderUnit)
    }

    console.log(document.activeElement)


    return (
        <div className='w-[100%]'>
            <div className='w-[100%] bg-[var(--biege)] flex items-center justify-center pb-6 sm:pb-0 flex-col sm:h-[610px] pt-10'>
                <div className='w-[100%] sm:flex items-center justify-between sm:relative'>
                    <div className='border-l-0 sm:w-[60%] flex items-center justify-center rounded-r-full border-[16px] border-black mb-8 bg-[var(--silver)]'>
                        <div className='w-[50%] flex flex-col justify-start items-start text-gray-600 py-4'>
                            <motion.h1 className='sm:text-7xl text-3xl sm:w-[30%] text-center sm:text-left'
                                variants={variants(0, -30, 2)}
                                initial="hidden"
                                animate="visible"
                            >Web Development Agency in Dhaka That Delievers</motion.h1>
                            <motion.button className='text-xl font-semibold px-5 py-1 rounded-full bg-[var(--secondary-color)] font-[Montserrat] tracking-tight m-auto sm:mx-0 mt-4 text-white'
                                variants={variants(0, 30, 2)}
                                initial="hidden"
                                animate="visible"
                            >Hire Us</motion.button>
                        </div>

                    </div>




                    <div className='sm:w-[40%] flex items-center justify-center'>
                        <div className='relative'>
                            <motion.img
                                variants={variants(0, 30, 2)}
                                initial="hidden"
                                animate="visible"
                                className='h-[300px] absolute sm:left-28 left-12 top-12 sm:top-12 rounded-xl z-20' src={heroimg} alt="" />
                            <motion.img
                                variants={variants(0, -30, 2)}
                                initial="hidden"
                                animate="visible"
                                className='animateImg h-[300px] sm:w-[250px] rounded-xl z-10' src={heroimg2} alt="" />
                        </div>
                    </div>
                </div>
            </div>




            <div className='w-[100%] flex flex-col items-center mt-24 sm:mt-36'>
                <h1 className='sm:text-7xl text-3xl m-auto text-black  mb-4'>Our Services</h1>
                <div className='w-[80%] bg-serviceBg bg-no-repeat bg-center bg-cover relative bg-opacity-5 h-[500px]'>
                    <div className='absolute bg-black w-[100%] h-[100%] bg-opacity-[.9] flex items-center justify-center'>
                        <motion.div className='grid sm:grid-cols-2 grid-cols-1'
                            variants={variants(0, 0, 0)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: .5 }}
                        >
                            <div className={`  border-r border-b flex items-center justify-center`}>
                                <motion.h1 variants={variants(-10, 0, 2)} className='text-white sm:text-7xl  text-3xl p-10'>Web design</motion.h1>
                            </div>
                            <div className={`   border-l border-b flex items-center justify-center`}>
                                <motion.h1 variants={variants(10, 0, 2)} className='text-white sm:text-7xl text-3xl p-10'>Web Development</motion.h1>
                            </div>
                            <div className={`   border-r border-t flex items-center justify-center`}>
                                <motion.h1 variants={variants(-10, 0, 2)} className='text-white sm:text-7xl text-3xl p-10'>Meta Marketing</motion.h1>
                            </div>
                            <div className={`   border-l border-t flex items-center justify-center`}>
                                <motion.h1 variants={variants(10, 0, 2)} className='text-white sm:text-7xl text-3xl p-10'>SEO</motion.h1>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>


            <div className='w-[100%] flex items-center justify-center mt-24 sm:mt-36'>
                <motion.div className='flex flex-col sm:flex-row  w-[80%] items-center justify-between'
                    variants={variants(0, 0, 0)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: .2 }}
                >
                    <motion.div className='sm:w-[50%] flex items-start'
                        variants={variants(0, 30, 2)}
                    >
                        <img className='rounded-lg h-[300px]' src={introPic3} alt="" />
                    </motion.div>

                    <motion.div className='sm:w-[50%] flex flex-col justify-around space-y-6 self-start'>
                        <h1 className='sm:text-6xl text-3xl text-center sm:text-left mt-4 sm:mt-0'>Lorem Ipsum</h1>
                        <p className='sm:text-xl text-center sm:text-left font-[Montserrat] font-medium'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto dolores voluptas nulla, quo autem cum recusandae est odit id doloribus, architecto tempore. Iure quaerat dolores nesciunt porro similique obcaecati fuga impedit dignissimos voluptatibus. Delectus temporibus officia dolor minima adipisci inventore aspernatur ad aliquam vero cupiditate dicta illum, enim blanditiis consequatur.</p>
                    </motion.div>
                </motion.div>
            </div>



            <div className='w-[100%] flex items-center justify-center mt-24 sm:mt-36'>
                <div className='w-[80%] flex flex-col items-center justify-center'>
                    <h1 className='sm:text-5xl text-3xl mb-8'>Why Should You Hire Us?</h1>
                    <motion.div className='grid sm:grid-cols-4 sm:gap-10 gap-4'
                        variants={ContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: .2 }}
                    >
                        <WhyHireCard icon={<ClockIcon />} text={'Long Exprerience'} />
                        <WhyHireCard icon={<SupportIcon />} text={'Quick Support'} />
                        <WhyHireCard icon={<QualityIcon />} text={'Execellent Quality'} />
                        <WhyHireCard icon={<SatisfiedIcon />} text={'Guaranteed Satisfaction'} />
                    </motion.div>
                </div>
            </div>




            <div className='w-[100%] flex items-center justify-center mt-24 sm:mt-36'>
                <div className='w-[80%] flex flex-col items-center justify-center'>
                    <h1 className='sm:text-5xl text-3xl mb-8'>Our Working Process</h1>
                    <motion.div className='w-[100%]'
                        variants={ContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: .2 }}
                    >

                        <div className='flex w-[100%] justify-center'>
                            <motion.div className='flex bg-white rounded-lg sm:w-[30%] w-[40%] py-2 items-center justify-center space-x-3 border-2 border-[var(--biege)] text-[var(--biege)] flex-col sm:flex-row'
                                variants={variants(-10, 0, 2)}
                            >
                                <LaunchIcon /> <h1 className='text-base sm:text-4xl'>Launch</h1>
                            </motion.div>
                        </div>



                        <div className='flex w-[100%] justify-evenly'>
                            <motion.div className='flex bg-white rounded-lg sm:w-[30%] w-[40%] py-2 items-center justify-center space-x-3 border-2 border-[var(--biege)] text-[var(--biege)] flex-col sm:flex-row'
                                variants={variants(-10, 0, 2)}
                            >
                                <DevIcon /> <h1 className='text-base sm:text-4xl'>Development</h1>
                            </motion.div>

                            <motion.div className='flex bg-white rounded-lg sm:w-[30%] w-[40%] py-2 items-center justify-center space-x-3 border-2 border-[var(--biege)] text-[var(--biege)] flex-col sm:flex-row'
                                variants={variants(-10, 0, 2)}
                            >
                                <SeoIcon /> <h1 className='text-base sm:text-4xl'>SEO</h1>
                            </motion.div>
                        </div>




                        <div className='flex w-[100%] justify-between'>
                            <motion.div className='flex bg-white rounded-lg sm:w-[30%] w-[40%] py-2 items-center justify-center space-x-3 border-2 border-[var(--biege)] text-[var(--biege)] flex-col sm:flex-row'
                                variants={variants(-10, 0, 2)}
                            >
                                <DesignIcon /> <h1 className='text-base sm:text-4xl'>Design</h1>
                            </motion.div>

                            <motion.div className='flex bg-white rounded-lg sm:w-[30%] w-[40%] py-2 items-center justify-center space-x-3 border-2 border-[var(--biege)] text-[var(--biege)] flex-col sm:flex-row'
                                variants={variants(-10, 0, 2)}
                            >
                                <SupportIcon2 /> <h1 className='text-base sm:text-4xl'>Support</h1>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>


            <div className='w-[100%] flex items-center justify-center mt-24 sm:mt-36'>
                <div className='w-[80%] flex flex-col items-center justify-center'>
                    <h1 className='sm:text-5xl text-3xl mb-8 text-center'>Technologies We work with</h1>
                    <motion.div className='w-[100%]'
                        variants={altContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: .2 }}
                    >
                        <motion.div className='flex justify-evenly w-[100%]'
                            variants={ContainerVariants}
                        >
                            <div className='sm:flex sm:justify-around sm:w-[50%]'>
                                <motion.img className='h-14 w-14' src={htmlIcon} alt=""
                                    variants={variants(0, 10, 2)}
                                />
                                <motion.img className='h-14 w-14 mt-4 sm:mt-0' src={cssIcon} alt=""
                                    variants={variants(0, 10, 2)}
                                />
                            </div>
                            <div className='sm:flex sm:justify-around sm:w-[50%]'>
                                <motion.img className='h-14 w-14' src={jsIcon} alt=""
                                    variants={variants(0, 10, 2)}
                                />
                                <motion.img className='h-14 w-14 mt-4 sm:mt-0' src={tsIcon} alt=""
                                    variants={variants(0, 10, 2)}
                                />
                            </div>
                        </motion.div>

                        <motion.div className='flex justify-evenly w-[100%] mt-4 sm:mt-6'
                            variants={ContainerVariants}
                        >
                            <div className='sm:flex sm:justify-around sm:w-[50%]'>
                                <motion.img className='h-14 w-14' src={reactIcon} alt=""
                                    variants={variants(0, 10, 2)}
                                />
                                <motion.img className='h-14 w-14 mt-4 sm:mt-0' src={tailwindIcon} alt=""
                                    variants={variants(0, 10, 2)}
                                />
                            </div>
                            <div className='sm:flex sm:justify-around sm:w-[50%]'>
                                <motion.img className='h-14 w-14' src={wordpressIcon} alt=""
                                    variants={variants(0, 10, 2)}
                                />
                                <motion.img className='h-14 w-14 mt-4 sm:mt-0' src={elementorIcon} alt=""
                                    variants={variants(0, 10, 2)}
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>


            <div className='w-[100%] flex items-center justify-center mt-24 sm:mt-36'>
                <div className='w-[80%] flex flex-col items-center justify-center'>
                    <h1 className='sm:text-5xl text-3xl mb-8'>Testimonials</h1>
                    <div className='bg-gray-50 px-10 py-8 rounded-lg relative w-[100%]'>
                        <button onClick={() => { handleTestimonialSlider('') }}> <img className='h-10 w-10 absolute left-0 rotate-180 opacity-80 top-[50%]' src={arrowIcon} alt="" /> </button>

                        <div className='w-[100%] grid grid-flow-col overflow-hidden'>
                            <div ref={testimonialGridRef} className='w-[100%] grid grid-flow-col transition-transform duration-500'>
                                <div className='sm:w-[72vw] w-[57vw]  mr-1'>
                                    <p className='w-[100%] text-center text-sm sm:text-base font-[Montserrat]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est sit nam quia rerum neque vitae, minus eligendi illo unde voluptas et. Sint dolorem esse iusto minima, animi cupiditate et distinctio! Et illum ratione veniam aperiam debitis tenetur esse totam, id ex dolores dolorum ducimus in doloribus nulla quidem delectus laudantium eius ea temporibus minus itaque incidunt, sint quos? Rem consequatur sit enim quo iste minima, iure et voluptas aliquam sapiente ipsum corporis, ad ex? Optio.</p>
                                    <h1 className='text-right text-xl'>-David</h1>
                                </div>


                                <div className='sm:w-[72vw] w-[57vw] mr-1'>
                                    <p className='w-[100%] text-center text-sm sm:text-base font-[Montserrat]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est sit nam quia rerum neque vitae, minus eligendi illo unde voluptas et. Sint dolorem esse iusto minima, animi cupiditate et distinctio! Et illum ratione veniam aperiam debitis tenetur esse totam, id ex dolores dolorum ducimus in doloribus nulla quidem delectus laudantium eius ea temporibus minus itaque incidunt, sint quos? Rem consequatur sit enim quo iste minima, iure et voluptas aliquam sapiente ipsum corporis, ad ex? Optio.</p>
                                    <h1 className='text-right text-xl'>-Stacy</h1>
                                </div>

                                <div className='sm:w-[72vw] w-[57vw]  mr-1'>
                                    <p className='w-[100%] text-center text-sm sm:text-base font-[Montserrat]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est sit nam quia rerum neque vitae, minus eligendi illo unde voluptas et. Sint dolorem esse iusto minima, animi cupiditate et distinctio! Et illum ratione veniam aperiam debitis tenetur esse totam, id ex dolores dolorum ducimus in doloribus nulla quidem delectus laudantium eius ea temporibus minus itaque incidunt, sint quos? Rem consequatur sit enim quo iste minima, iure et voluptas aliquam sapiente ipsum corporis, ad ex? Optio.</p>
                                    <h1 className='text-right text-xl'>-Jon</h1>
                                </div>

                                <div className='sm:w-[72vw] w-[57vw]  mr-1'>
                                    <p className='w-[100%] text-center text-sm sm:text-base font-[Montserrat]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est sit nam quia rerum neque vitae, minus eligendi illo unde voluptas et. Sint dolorem esse iusto minima, animi cupiditate et distinctio! Et illum ratione veniam aperiam debitis tenetur esse totam, id ex dolores dolorum ducimus in doloribus nulla quidem delectus laudantium eius ea temporibus minus itaque incidunt, sint quos? Rem consequatur sit enim quo iste minima, iure et voluptas aliquam sapiente ipsum corporis, ad ex? Optio.</p>
                                    <h1 className='text-right text-xl'>-Sansa</h1>
                                </div>

                                <div className='sm:w-[72vw] w-[57vw] mr-1'>
                                    <p className='w-[100%] text-center text-sm sm:text-base font-[Montserrat]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est sit nam quia rerum neque vitae, minus eligendi illo unde voluptas et. Sint dolorem esse iusto minima, animi cupiditate et distinctio! Et illum ratione veniam aperiam debitis tenetur esse totam, id ex dolores dolorum ducimus in doloribus nulla quidem delectus laudantium eius ea temporibus minus itaque incidunt, sint quos? Rem consequatur sit enim quo iste minima, iure et voluptas aliquam sapiente ipsum corporis, ad ex? Optio.</p>
                                    <h1 className='text-right text-xl'>-Arya</h1>
                                </div>
                            </div>
                        </div>

                        <button onClick={() => { handleTestimonialSlider('right') }}> <img className='h-10 w-10 absolute right-0 opacity-80 top-[50%]' src={arrowIcon} alt="" /> </button>
                    </div>
                </div>
            </div>


            <div className='w-[100%] flex items-center justify-center mt-24 sm:mt-36'>
                <div className='w-[80%] flex flex-col items-center justify-center'>
                    <h1 className='sm:text-5xl text-3xl mb-8'>Frequently asked questions</h1>

                    <div className='bg-white sm:w-[70%] mb-16  sm:px-9 sm:py-4 py-2 flex flex-col space-y-4'>
                        <button className='group bg-white sm:hover:scale-110 transition-transform duration-300 ease-out w-[100%] flex flex-col justify-between items-center px-6 py-2 relative border-b border-black z-30'>
                            <div className='w-[100%] flex justify-between pointer-events-none'>
                                <h1 className='text-base sm:text-2xl'>What does ss dev do?</h1>
                                <button className='pointer-events-none group-focus:pointer-events-auto'>
                                    <img className='sm:h-6 sm:w-6 h-5 w-5 rotate-90 transition-transform duration-300 group-focus:-rotate-90' src={arrowIcon} alt="" />
                                </button>
                            </div>

                            <div ref={faq1Ref} className='h-0 overflow-hidden group-focus:h-[100px] transition-[height] duration-300 relative bg-white'>
                                <p className='text-left mt-4 font-[Montserrat] font-semibold text-sm sm:text-base'>We will listen to your requirements and according to that we offer web design, development and digital marketing to meet your requirements.</p>
                            </div>
                        </button>


                        <button className='group bg-white sm:hover:scale-110 transition-transform duration-300 ease-out w-[100%] flex flex-col justify-between items-center px-6 py-2 relative border-b border-black z-20'>
                            <div className='w-[100%] flex justify-between pointer-events-none'>
                                <h1 className='text-base sm:text-2xl'>Do I need to bring my own design?</h1>
                                <button className='pointer-events-none group-focus:pointer-events-auto'>
                                    <img className='sm:h-6 sm:w-6 h-5 w-5 rotate-90 transition-transform duration-300 group-focus:-rotate-90' src={arrowIcon} alt="" />
                                </button>
                            </div>

                            <div ref={faq1Ref} className='h-0 overflow-hidden group-focus:h-[100px] transition-[height] duration-300 relative bg-white'>
                                <p className='text-left mt-4 font-[Montserrat] font-semibold text-sm sm:text-base'>You can bring your own design or order a design from us.</p>
                            </div>
                        </button>


                        <button className='group bg-white sm:hover:scale-110 transition-transform duration-300 ease-out w-[100%] flex flex-col justify-between items-center px-6 py-2 relative border-b border-black z-10'>
                            <div className='w-[100%] flex justify-between pointer-events-none'>
                                <h1 className='text-base sm:text-2xl'>Do i need to pay extra for the design?</h1>
                                <button className='pointer-events-none group-focus:pointer-events-auto'>
                                    <img className='sm:h-6 sm:w-6 h-5 w-5 rotate-90 transition-transform duration-300 group-focus:-rotate-90' src={arrowIcon} alt="" />
                                </button>
                            </div>

                            <div ref={faq1Ref} className='h-0 overflow-hidden group-focus:h-[100px] transition-[height] duration-300 relative bg-white'>
                                <p className='text-left mt-4 font-[Montserrat] font-semibold text-sm sm:text-base'>Yes. If you order a design from us then you will have to pay for it separately.</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>


            <div className='w-[100%] flex items-center justify-center mt-24 sm:mt-36 bg-[var(--biege)] pt-5 pb-4'>
                <div className='w-[100%] flex flex-col items-center justify-center'>
                    <h1 className='sm:text-5xl text-3xl mb-8'>Contact us</h1>
                    <div className='flex w-[100%]'>
                        <div className='w-[50%]'>
                            <iframe className='h-52 sm:h-[40vw] w-[96%] rounded-r-full' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d233667.4993026096!2d90.25487326543086!3d23.78106723878862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1695721297260!5m2!1sen!2sbd" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>


                        <div className='w-[50%] flex flex-col justify-center sm:ml-8 text-gray-700'>
                            <h1 className='sm:text-4xl text-2xl mb-8 text-right sm:text-left mr-2 sm:mr-0'>Give us a knock</h1>

                            <div className='flex flex-col sm:flex-row items-center'>
                                <div className='w-[50%]'>
                                    <div className='text-lg'>
                                        <p className='sm:text-xl text-lg'>CAll</p>
                                        <span className='flex space-x-2'><PhoneIcon /> <span>017XXXXXXXX</span></span>
                                    </div>

                                    <div className='mt-4'>
                                        <p className='sm:text-xl text-lg'>email</p>
                                        <span className='flex sm:space-x-2'><EmailIcon /> <span className='font-[Montserrat] text-sm font-semibold'>abcd@gmail.com</span></span>
                                    </div>
                                </div>


                                <div className='flex space-x-2 items-center w-[50%] mt-4 sm:mt-0'>
                                    <img className='h-6 w-6 sm:h-10 sm:w-10' src={fbIcon} alt="" />
                                    <img className='h-6 w-6 sm:h-10 sm:w-10' src={instaIcon} alt="" />
                                    <img className='h-6 w-6 sm:h-10 sm:w-10 rounded-full' src={xIcon} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-[var(--biege)] border-t border-black pt-2 flex items-center justify-center'>
                <h1 className='flex items-center justify-center space-x-2'><img className='h-4 w-4 relative sm:static bottom-2 left-6' src={copyRightIcon} alt="" /> <span className='text-xs sm:text-base text-center'>Copyright 2013 ss dev. All Images and vectors are designed by contributors</span> </h1>
            </div>


        </div>)
}

export default Home
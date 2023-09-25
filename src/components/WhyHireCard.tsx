import React from 'react'
import ClockIcon from '../assets/ClockIcon'
import { motion } from 'framer-motion'

interface WhyHireCardType {
    icon: JSX.Element
    text: string
}

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

const WhyHireCard:React.FC<WhyHireCardType> = ({icon, text}) => {
    return (
        <motion.div className='bg-[white] rounded-lg h-[160px] w-[230px] flex flex-col justify-around items-center] shadow-xl'
        variants={variants(-10,0,1)}
        >
            <div className='flex items-center justify-center'>
                <span className=' flex justify-center items-center p-1 rounded-full'>
                    {icon}
                </span>
            </div>

            <h1 className='text-xl text-center text-gray-800 border-y-2 border-[var(--bg)] px-1'>{text}</h1>
        </motion.div>
    )
}

export default WhyHireCard
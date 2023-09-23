import React from 'react'

interface MenuOptionType {
    name: string
    isArrow: boolean
}

const MenuOption: React.FC<MenuOptionType> = ({ name, isArrow }) => {
    return (
        <button className='flex justify-between text-white font-semibold space-x-1'>
            <h1 className='tracking-[2px] text-lg'>{name}</h1>
            {
                isArrow && (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hidden sm:block">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>)
            }

        </button>
    )
}

export default MenuOption
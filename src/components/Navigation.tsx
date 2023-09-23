import React, { useRef } from 'react'
import MenuOption from './MenuOption'
import MenuIcon from '../assets/MenuIcon'
import CrossIcon from '../assets/CrossIcon'

const Navigation: React.FC = () => {

  const threeBarsMenu = useRef<HTMLButtonElement>(null)

  return (
    <div className='contain bg-black  h-12 tracking-[1px] relative'>
      <div className='w-[85%] flex items-center justify-between'>
        <div className='text-xl font-bold text-white'>
          SS DEV
        </div>














        {/* menu that works perfectly in resposive situation */}
        <div className='sm:flex justify-between space-x-12 hidden'>
          <MenuOption name={'Home'} isArrow={false} />
          <MenuOption name={'Services'} isArrow={true} />
          <MenuOption name={'Contact Us'} isArrow={false} />
        </div>

        <button ref={threeBarsMenu} className='group sm:hidden'>
        <div onClick={() => {
              threeBarsMenu.current?.blur()
        }} className='hidden group-focus:block'><CrossIcon/></div>
          <div className='group-focus:hidden'><MenuIcon /></div>
          
          <div id='animatedMenu' className='h-0 overflow-hidden group-focus:h-[300px] group-focus-within:h-[300px] transition-[height] duration-300 absolute top-[100%] left-0 z-10'>
            <div className='bg-[black] border border-red-500 py-2 w-[100vw] flex space-y-2 flex-col items-center'>
              <MenuOption name={'Home'} isArrow={false} />
              <MenuOption name={'Services'} isArrow={true} />
              <MenuOption name={'Contact Us'} isArrow={false} />
            </div>
          </div>
        </button>
        {/* menu ends */}















      </div>
    </div>
  )
}

export default Navigation
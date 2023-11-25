import React from 'react'
import menu from '../../assets/svg/menu.svg'
import logo from '../../assets/svg/logoBlack.svg'
import mainchatlogo from '../../assets/mainchatai.png'

const MainChat = () => {
  return (
    <section className='px-6 pt-5'>
      <header className='flex justify-between items-center'>
        <img src={menu} alt="menu-icon" />
        <img src={logo} alt="logo-icon" />
        <div></div>
      </header>
    </section>
  )
}

export default MainChat
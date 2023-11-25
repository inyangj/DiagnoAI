import React, { useState } from 'react'
import SideBar from '../components/chatComponent/SideBar'
import MainChat from '../components/chatComponent/MainChat'

const Chat = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };


  return (
    <main className={`${darkMode ? ' text-white' : ' text-black'} ${darkMode ? 'bg-[#282828]' : 'bg-[#fff]'}`}>
        <SideBar  darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <MainChat darkMode={darkMode} />
    </main>
  )
}

export default Chat
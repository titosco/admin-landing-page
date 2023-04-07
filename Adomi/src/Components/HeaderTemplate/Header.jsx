import React, { useContext } from 'react'
import { ThemeContext } from '../../ThemeContext'
import './Header.css'

import {BiSearch} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {TbMessages} from 'react-icons/tb'
import {VscGraphLine} from 'react-icons/vsc'
import {BiMoon} from 'react-icons/bi'
import {RiSettingsLine} from 'react-icons/ri'
import {FiLogOut} from 'react-icons/fi'

import image from '../../assets/image.jpg'
import { signOut } from 'firebase/auth'
import { auth } from '../../Firebase'

const Header = () => {
    const {DarkTheme, setDarkTheme} = useContext(ThemeContext)

    function changeTheme(){
      setDarkTheme(!DarkTheme)
    }

    const logout = () =>{
      signOut(auth)
    }
  return (
    <header className={`${DarkTheme && "dark"}`}>
        <div className="search-bar">
            <input type="text" placeholder='search...' />
            <BiSearch className="icon"/>
        </div>

        <div className="tools">
            <AiOutlineUser className="icon"/>
            <TbMessages className="icon"/>
            <VscGraphLine className="icon"/>

            <div className="divider"></div>

            <BiMoon className="icon" onClick={changeTheme}/>
            <RiSettingsLine className="icon"/>
            <FiLogOut className="icon" onClick={logout}/>

            <div className="divider"></div>

            <div className="user">
            <img src={image} alt="user-img" className='profile-img'
            />
            </div>
        </div>
    </header>
  )
}

export default Header
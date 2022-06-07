import React, { useEffect, useState } from "react"
import s from "./Nav.module.css"
import cn from "classnames"
import Img from "next/image"
import logo from '../../public/logo-app-masters.svg'
import Link from "next/link"
import Button from '../Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"


const Nav: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);


    return (
        <header className={s.header}>
<div className="container">

            <nav className={cn(s.nav)}>
                <Img src={logo}></Img>
                <ul className={s.menu}>
                    <li><Link href="https://appmasters.io">About Us</Link> </li>
                    <li><Link href="/program">The Program</Link></li>
                    <li><Link href="/program">FAQ</Link></li>
                    <li><Link href="/program"><Button>Book a call</Button></Link></li>
                </ul>
                    <button className="visible sm:hidden" onClick={() => { setIsOpen(true) }}>
                        <FontAwesomeIcon icon={faBars} size="2x" className="px-4" />
                    </button>

            </nav>

            <aside className={cn(s.offsetMenu, isOpen ?  'translate-x-0' :'translate-x-full')}>
                <button onClick={() => { setIsOpen(false) }}>
                    <FontAwesomeIcon icon={faTimes} size="2x" className="px-4" />
                </button>
            </aside>
</div>
        </header>

    )
}

export default Nav;



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import React, { ComponentProps, ReactNode } from 'react'
import s from './Button.module.css'

interface ButtonInterface {
    children?: ReactNode
}


const Button: React.FC<ButtonInterface> = ({ children }) => {
    return (
        <button className={s.button}>
            <FontAwesomeIcon icon={faMessage} className="pr-2"/>
            {children}
        </button>
    )
}

export default Button;
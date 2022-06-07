import { faChevronCircleRight, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactNode, useState } from 'react';
import s from './Collapse.module.css';
import cn from 'classnames'


interface CollapseProps {
    title: string
    content: ReactNode | ReactNode[]
    className?: string;
}

const Collapse: React.FC<CollapseProps> = ({ title, content, className }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={cn(s.main, className)}>
            <div onClick={() => { setIsOpen(!isOpen) }} className={s.header}>
                <h3>{title}</h3>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
            <p className={cn(s.content, { 'hidden': !isOpen })}>{content}</p>
        </div>
    )



}

export default Collapse;
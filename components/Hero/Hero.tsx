import React from "react"
import s from "./Hero.module.css"
import cn from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

interface HeroProps {
    title: string
}

const Hero: React.FC<HeroProps> = ({ title }) => {
    return (
        <div className={s.main}>
            <div className={cn("container", s.wrapper)}>
                <h2 className={s.title}>{title}</h2>
                <p className="max-w-xl leading-8 mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam bibendum turpis eu suscipit viverra.</p>
                <span className={s.flow}>
                    <h4>4 steps to get your idea done</h4>
                    <button>
                        <FontAwesomeIcon icon={faArrowDown} />
                    </button>
                </span>
            </div>
        </div>
    )
}

export default Hero;
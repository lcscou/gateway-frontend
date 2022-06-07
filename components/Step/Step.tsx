import s from './Step.module.css'
import Image, { ImageProps } from 'next/image';
import ilustration from '../../public/img/ilustration-set-your-goals.png'
import Collapse from '../Collapse/Collapse';
import cn from 'classnames';
import classNames from 'classnames';
import { ReactNode } from 'react';

interface StepProps {
    reverse?: boolean;
    title: string;
    number: number;
    description: string;
    children: ReactNode | ReactNode[];
    image: string | ImageProps;

}

const Step: React.FC<StepProps> = ({ title, number, reverse, description, children, image }) => {
    return (
        <div className={s.main}>
            <div className="container">
                <div className={s.gridWrapper}>
                    {/* First Col */}
                    <div>
                        <h2 className={s.title}>
                            <span>{number}</span>{' '}
                            {title}
                        </h2>
                        <p className={s.description}>{description}</p>
                        {children}
                    </div>
                    {/* Second Col */}
                    <div className={cn(s.img, { 'order-first': reverse })}>
                        <Image
                            src={image}
                            objectFit='contain'
                            alt={title + " Ilustration"}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Step;
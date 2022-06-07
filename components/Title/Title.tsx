import s from './Title.module.css'
import cn from 'classnames';

interface TitleProps {
    title: string;
    align?: 'start' | 'center' | 'end';
    variant?: 'default' | 'white';
}

const Title: React.FC<TitleProps> = ({ title, align = 'center', variant = 'default' }) => {
    return (
        <div className={cn(s.main, 'justify-' + align )}>
            <h2 className={cn({'after:border-white text-white': variant === 'white'})}>{title}</h2>
        </div >
    )
}

export default Title;
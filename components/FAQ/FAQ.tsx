import { ReactNode } from 'react';
import Collapse from '../Collapse/Collapse';
import s from './FAQ.module.css'

interface FAQProps{
    question: string;
    answer: ReactNode | ReactNode[];
}

const FAQ:React.FC<FAQProps> = ({question, answer})=>{
    return(
        <div className={s.main}>
            <Collapse 
            className='bg-white'
            title={question}
            content={answer}
            />
        </div>
    )
}


export default FAQ;

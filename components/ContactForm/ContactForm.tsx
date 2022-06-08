import { MouseEvent, useState } from "react"

const ContactForm: React.FC = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [company, setCompany] = useState('')
    const [budget, setBudget] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [submitLabel, setSubmitLabel] = useState('Send')
    const [FormErr, setFormErr] = useState(false)


    const handleSubmit = (e: MouseEvent<HTMLInputElement, globalThis.MouseEvent>) => {
        setSubmitLabel('Sending...')
        e.preventDefault()
        console.log('Sending')
        let data = {
            name,
            email,
            company,
            budget,
            message
        }

        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('Response received')
            console.log(e)
            if ((res.status === 200)) {
                e.target?.form?.reset()
                console.log('Response Succeded')
                setSubmitted(true)
                setName('')
                setEmail('')
                setCompany('')
                setBudget('')
                setMessage('')
            }
            setSubmitLabel('Send')
        })
    }

    return (
        <div className='md:p-20 px-5 py-10'>
            <form >
                <input onChange={(e) => { setName(e.target.value) }} type="text" name="name" placeholder='Name' id="name" />
                <input onChange={(e) => { setEmail(e.target.value) }} type='email' name="email" placeholder='Email' id="email" />
                <input onChange={(e) => { setCompany(e.target.value) }} type='text' name="company" placeholder='Company' id="company" />
                <select onChange={(e) => { setBudget(e.target.value) }} name="budget" placeholder='Company' id="budget">
                    <option value="+10000">$50,000{'>'} $300,000</option>
                    <option value="+10000">$300,000{'>'} $750,000</option>
                    <option value="+10000">$750,000+</option>
                </select >
                <textarea onChange={(e) => { setMessage(e.target.value) }} placeholder="Tell us about your project" name="message" id="message" cols="30" rows="7"></textarea>
                <input onClick={(e) => { handleSubmit(e) }} type='submit' value={submitLabel} />
            </form>
            {submitted && (
                <div className="rounded-sm text-green-800 bg-green-50 p-2 flex justify-center">Your Message was sent</div>
            )}
        </div>
    )
}
export default ContactForm;
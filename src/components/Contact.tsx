import { useState } from 'react'
import type { FormEvent } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: ''
  })

  const [isFormValid, setIsFormValid] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    const newFormData = { ...formData, [name]: value }
    setFormData(newFormData)
    
    // Check if all fields are filled
    const isValid = newFormData.fullname.trim() !== '' && 
                   newFormData.email.trim() !== '' && 
                   newFormData.message.trim() !== ''
    setIsFormValid(isValid)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (isFormValid) {
      // Handle form submission logic here
      console.log('Form submitted:', formData)
      alert('Message sent successfully!')
      // Reset form
      setFormData({ fullname: '', email: '', message: '' })
      setIsFormValid(false)
    }
  }

  return (
    <article className="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form className="form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input 
              type="text" 
              name="fullname" 
              className="form-input" 
              placeholder="Full name" 
              required 
              value={formData.fullname}
              onChange={handleInputChange}
            />

            <input 
              type="email" 
              name="email" 
              className="form-input" 
              placeholder="Email address" 
              required 
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <textarea 
            name="message" 
            className="form-input" 
            placeholder="Your Message" 
            required 
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>

          <button 
            className="form-btn" 
            type="submit" 
            disabled={!isFormValid}
          >
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  )
}

export default Contact

import { useState } from 'react'

const About = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedTestimonial, setSelectedTestimonial] = useState<any>(null)

  const services = [
    {
      icon: '/Portfolio-1/assets/images/icon-design.svg',
      title: 'Web design',
      description: 'Experience cutting-edge design crafted with the highest quality and professional expertise.'
    },
    {
      icon: '/Portfolio-1/assets/images/icon-dev.svg',
      title: 'Web development',
      description: 'Specialized in the high-quality, professional development of websites, ensuring every project is executed to the highest standards.'
    },
    {
      icon: '/Portfolio-1/assets/images/icon-app.svg',
      title: 'Mobile apps',
      description: 'I specialize in the professional development of mobile applications, creating seamless and engaging experiences for both iOS and Android platforms.'
    },
    {
      icon: '/Portfolio-1/assets/images/icon-photo.svg',
      title: 'Hackathons / Workshops',
      description: 'I actively organize hackathons and workshops that bring together bright minds to collaborate, learn, and solve real-world challenges.'
    }
  ]

  const testimonials = [
    {
      avatar: '/Portfolio-1/assets/images/avatar-1.png',
      name: 'Saurabh Jha',
      text: "Sachin's leadership qualities were evident both inside and outside the classroom. He always took the initiative to organize group projects, and his natural ability to inspire and motivate others ensured the success of our team efforts."
    },
    {
      avatar: '/Portfolio-1/assets/images/avatar-2.png',
      name: 'Akshita Mishra',
      text: "I had the pleasure of studying alongside Sachin during our time at Kendriya Vidyalaya. Sachin consistently demonstrated a strong commitment to his studies and displayed exceptional diligence in all his endeavors. His dedication to academic excellence and his ability to collaborate effectively with peers made him stand out among his classmates."
    }
  ]

  const openModal = (testimonial: any) => {
    setSelectedTestimonial(testimonial)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setSelectedTestimonial(null)
  }

  return (
    <article className="about active">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          As Chairperson of IEEE JSSATE'N and Core Lead at StarkSeek India, I drive innovation by bridging academia and industry, creating a dynamic ecosystem for technological growth. 
          Through organizing hackathons and workshops, we empower students and professionals to enhance skills and seize opportunities.
        </p>

        <p>
          Currently pursuing a B.Tech at JSS Academy, my technical expertise and leadership in programming, along with experience leading cross-functional teams, fuel my passion for advancing technology. 
          A 5-time Hackathon winner, I am committed to continuous learning and creating impactful user experiences.
        </p>
      </section>

      {/* Services */}
      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>

        <ul className="service-list">
          {services.map((service, index) => (
            <li key={index} className="service-item">
              <div className="service-icon-box">
                <img src={service.icon} alt={`${service.title} icon`} width="40" />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">{service.title}</h4>
                <p className="service-item-text">{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((testimonial, index) => (
            <li key={index} className="testimonials-item">
              <div 
                className="content-card" 
                onClick={() => openModal(testimonial)}
                style={{ cursor: 'pointer' }}
              >
                <figure className="testimonials-avatar-box">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    width="60" 
                  />
                </figure>

                <h4 className="h4 testimonials-item-title">{testimonial.name}</h4>

                <div className="testimonials-text">
                  <p>{testimonial.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Testimonials Modal */}
      {modalOpen && selectedTestimonial && (
        <div className={`modal-container ${modalOpen ? 'active' : ''}`}>
          <div 
            className={`overlay ${modalOpen ? 'active' : ''}`}
            onClick={closeModal}
          ></div>

          <section className="testimonials-modal">
            <button className="modal-close-btn" onClick={closeModal}>
              <ion-icon name="close-outline"></ion-icon>
            </button>

            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">
                <img 
                  src={selectedTestimonial.avatar} 
                  alt={selectedTestimonial.name} 
                  width="80" 
                />
              </figure>
              <img src="/Portfolio-1/assets/images/icon-quote.svg" alt="quote icon" />
            </div>

            <div className="modal-content">
              <h4 className="h3 modal-title">{selectedTestimonial.name}</h4>
              <time dateTime="2023-06-14">14 June, 2023</time>
              <div>
                <p>{selectedTestimonial.text}</p>
              </div>
            </div>
          </section>
        </div>
      )}
    </article>
  )
}

export default About

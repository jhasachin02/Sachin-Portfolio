import React, { useState } from 'react';
import { Palette, Code, Smartphone, Users, X, Quote } from 'lucide-react';

const About: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState<any>(null);

  const services = [
    {
      icon: <Palette size={32} />,
      title: 'Web design',
      description: 'Experience cutting-edge design crafted with the highest quality and professional expertise.'
    },
    {
      icon: <Code size={32} />,
      title: 'Web development',
      description: 'Specialized in the high-quality, professional development of websites, ensuring every project is executed to the highest standards.'
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Mobile apps',
      description: 'I specialize in the professional development of mobile applications, creating seamless and engaging experiences for both iOS and Android platforms.'
    },
    {
      icon: <Users size={32} />,
      title: 'Hackathons / Workshops',
      description: 'I actively organize hackathons and workshops that bring together bright minds to collaborate, learn, and solve real-world challenges.'
    }
  ];

  const testimonials = [
    {
      avatar: 'SJ',
      name: 'Saurabh Jha',
      text: "Sachin's leadership qualities were evident both inside and outside the classroom. He always took the initiative to organize group projects, and his natural ability to inspire and motivate others ensured the success of our team efforts."
    },
    {
      avatar: 'AM',
      name: 'Akshita Mishra',
      text: "I had the pleasure of studying alongside Sachin during our time at Kendriya Vidyalaya. Sachin consistently demonstrated a strong commitment to his studies and displayed exceptional diligence in all his endeavors. His dedication to academic excellence and his ability to collaborate effectively with peers made him stand out among his classmates."
    }
  ];

  const openModal = (testimonial: any) => {
    setSelectedTestimonial(testimonial);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedTestimonial(null);
  };

  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I'm a Creative Developer from Darbhanga, Bihar, working in web development and print media.
          I enjoy turning complex problems into simple, beautiful and intuitive designs.
        </p>

        <p>
          My job is to build your website so that it is functional and user-friendly but at the same time attractive.
          Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use.
          My aim is to bring across your message and identity in the most creative way.
          I created web design for many famous brand companies.
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What I'm doing</h3>

        <ul className="service-list">
          {services.map((service, index) => (
            <li key={index} className="service-item">
              <div className="service-icon-box">
                {service.icon}
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">{service.title}</h4>
                <p className="service-item-text">{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((testimonial, index) => (
            <li key={index} className="testimonials-item" onClick={() => openModal(testimonial)}>
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <div className="testimonial-avatar-placeholder">
                    <div className="testimonial-avatar-initial">{testimonial.avatar}</div>
                  </div>
                </figure>

                <h4 className="h4 testimonials-item-title" data-testimonials-title>
                  {testimonial.name}
                </h4>

                <div className="testimonials-text" data-testimonials-text>
                  <p>{testimonial.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Modal */}
      {isModalOpen && selectedTestimonial && (
        <>
          <div className="overlay active" onClick={closeModal}></div>
          <section className="modal-container active">
            <div className="testimonials-modal">
              <button className="modal-close-btn" onClick={closeModal}>
                <X size={20} />
              </button>

              <div className="modal-img-wrapper">
                <figure className="modal-avatar-box">
                  <div className="testimonial-avatar-placeholder">
                    <div className="testimonial-avatar-initial">{selectedTestimonial.avatar}</div>
                  </div>
                </figure>
                <Quote size={24} />
              </div>

              <div className="modal-content">
                <h4 className="h3 modal-title">{selectedTestimonial.name}</h4>
                <time dateTime="2023-06-14">14 June, 2023</time>
                <div>
                  <p>{selectedTestimonial.text}</p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </article>
  );
};

export default About;

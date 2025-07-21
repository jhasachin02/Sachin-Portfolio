import React, { useState } from 'react';
import { Mail, Phone, Calendar, MapPin, Linkedin, Twitter, Instagram, ChevronDown } from 'lucide-react';

const Sidebar: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <aside className={`sidebar ${isActive ? 'active' : ''}`}>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <div className="avatar-placeholder">
            <div className="avatar-initial">SJ</div>
          </div>
        </figure>

        <div className="info-content">
          <h1 className="name" title="Sachin Jha">Sachin Jha</h1>
          <p className="title">Software Developer</p>
        </div>

        <button 
          className="info_more-btn"
          onClick={() => setIsActive(!isActive)}
        >
          <span>Show Contacts</span>
          <ChevronDown size={16} />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <Mail size={16} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:jhasachin1307@gmail.com" className="contact-link">
                jhasachin1307@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <Phone size={16} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+919199915068" className="contact-link">
                +91 91999 15068
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <Calendar size={16} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="2001-07-13">July 13, 2001</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <MapPin size={16} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Darbhanga, Bihar, India</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href="https://www.linkedin.com/in/sachin-jha-/" className="social-link">
              <Linkedin size={16} />
            </a>
          </li>
          <li className="social-item">
            <a href="https://x.com/sachinjha02" className="social-link">
              <Twitter size={16} />
            </a>
          </li>
          <li className="social-item">
            <a href="https://www.instagram.com/sachin_jha_02/" className="social-link">
              <Instagram size={16} />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;

import React from 'react'
import { Element } from 'react-scroll'
function Services() {
  return (
    <div>
        <Element name="Services">
        <section className="services">
      <div className="container">
        <h1 className="section-title">Legal Services</h1>
        <p className="section-intro">
         I offer a wide range of specialized legal services designed to meet the unique needs of my clients. With a focus on cybersecurity, business intelligence, civil litigation, criminal litigation, and real estate law, I am dedicated to providing expert legal counsel and strategic representation.
        </p>
        
        <div className="service-list">
          <div className="service-item">
            <h2>Cybersecurity Law</h2>
            <p>
             I help businesses navigate complex cybersecurity regulations, ensuring compliance and protecting sensitive data from cyber threats. My expertise includes data breach response, regulatory compliance, and privacy issues.
            </p>
          </div>

          <div className="service-item">
            <h2>Business Intelligence Law</h2>
            <p>
              With a deep understanding of business intelligence, i provide legal guidance on data-driven decision-making, intellectual property protection, and ensuring competitive advantage while remaining compliant with legal standards.
            </p>
          </div>

          <div className="service-item">
            <h2>Civil Litigation</h2>
            <p>
            I have extensive experience in handling a variety of civil disputes, from contract disputes to personal injury claims. My goal is to resolve conflicts efficiently through negotiation, mediation, or litigation when necessary.
            </p>
          </div>

          <div className="service-item">
            <h2>Criminal Litigation</h2>
            <p>
              As a seasoned criminal litigator, I defend individuals and businesses facing criminal charges, ensuring a robust defense and the protection of her clients' rights in both state and federal courts.
            </p>
          </div>

          <div className="service-item">
            <h2>Real Estate Law</h2>
            <p>
              I provide legal services in real estate transactions, property disputes, and land use regulations, ensuring that my clients' real estate investments are protected and legally sound.
            </p>
          </div>
        </div>
      </div>
    </section>
        </Element>
    </div>
  )
}

export default Services
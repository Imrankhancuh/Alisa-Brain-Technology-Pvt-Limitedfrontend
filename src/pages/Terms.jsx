import React, { useState } from 'react';
import './Terms.css';

const Terms = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  const sections = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'definitions', label: 'Definitions' },
    { id: 'services', label: 'Services & Payments' },
    { id: 'intellectual-property', label: 'Intellectual Property' },
    { id: 'confidentiality', label: 'Confidentiality' },
    { id: 'liability', label: 'Liability & Warranties' },
    { id: 'termination', label: 'Termination' },
    { id: 'disputes', label: 'Dispute Resolution' },
    { id: 'general', label: 'General Terms' },
    { id: 'contact', label: 'Contact Information' }
  ];

  const lastUpdated = "January 15, 2024";

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="terms-container">
      {/* Header */}
      <header className="terms-header">
        <div className="container">
          <div className="terms-header-content">
            <h1 className="terms-title">Terms of Service</h1>
            <p className="terms-subtitle">Last updated: {lastUpdated}</p>
            <p className="terms-description">
              Please read these terms and conditions carefully before using our services.
              By accessing or using any services provided by me, you agree to be bound by these terms.
            </p>
            <div className="terms-meta">
              <div className="meta-item">
                <span className="meta-label">Effective Date:</span>
                <span className="meta-value">{lastUpdated}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Applicable To:</span>
                <span className="meta-value">All Clients & Users</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="terms-main">
        <div className="container">
          <div className="terms-layout">
            {/* Sidebar Navigation */}
            <aside className="terms-sidebar">
              <div className="sidebar-content">
                <h3 className="sidebar-title">Table of Contents</h3>
                <nav className="terms-nav">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      className={`nav-item ${activeSection === section.id ? 'active' : ''}`}
                      onClick={() => scrollToSection(section.id)}
                    >
                      {section.label}
                    </button>
                  ))}
                </nav>
                <div className="sidebar-actions">
                  <a href="/privacy-policy" className="sidebar-link">
                    View Privacy Policy
                  </a>
                  <button 
                    className="print-button"
                    onClick={() => window.print()}
                  >
                    Print Terms
                  </button>
                </div>
              </div>
            </aside>

            {/* Content Area */}
            <main className="terms-content">
              <div className="content-wrapper">
                {/* Introduction Section */}
                <section id="introduction" className="terms-section">
                  <div className="section-header">
                    <h2 className="section-title">1. Introduction</h2>
                    <span className="section-badge">General</span>
                  </div>
                  <div className="section-content">
                    <p className="section-paragraph">
                      Welcome to my portfolio and services. These Terms of Service ("Terms") govern your access to 
                      and use of my website, services, and any related applications (collectively, the "Services"). 
                      These Terms constitute a legally binding agreement between you and me.
                    </p>
                    <p className="section-paragraph">
                      By accessing or using my Services, you acknowledge that you have read, understood, and agree 
                      to be bound by these Terms. If you are entering into these Terms on behalf of a company or 
                      other legal entity, you represent that you have the authority to bind such entity to these Terms.
                    </p>
                    <div className="notice-box important">
                      <div className="notice-icon">⚠️</div>
                      <div className="notice-content">
                        <h4 className="notice-title">Important Notice</h4>
                        <p className="notice-text">
                          If you do not agree with any part of these Terms, you must not access or use my Services.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Definitions Section */}
                <section id="definitions" className="terms-section">
                  <div className="section-header">
                    <h2 className="section-title">2. Definitions</h2>
                    <span className="section-badge">Legal Terms</span>
                  </div>
                  <div className="section-content">
                    <p className="section-paragraph">
                      For the purposes of these Terms, the following definitions apply:
                    </p>
                    <div className="definitions-grid">
                      <div className="definition-item">
                        <h4 className="definition-term">"Services"</h4>
                        <p className="definition-description">
                          Refers to all web development, design, consulting, and related services provided by me.
                        </p>
                      </div>
                      <div className="definition-item">
                        <h4 className="definition-term">"Client" / "You"</h4>
                        <p className="definition-description">
                          Any individual or entity that engages my Services or accesses my website.
                        </p>
                      </div>
                      <div className="definition-item">
                        <h4 className="definition-term">"Project"</h4>
                        <p className="definition-description">
                          A specific set of Services agreed upon between you and me, outlined in a project proposal.
                        </p>
                      </div>
                      <div className="definition-item">
                        <h4 className="definition-term">"Deliverables"</h4>
                        <p className="definition-description">
                          The final products, code, designs, or other materials provided as part of the Services.
                        </p>
                      </div>
                      <div className="definition-item">
                        <h4 className="definition-term">"Intellectual Property"</h4>
                        <p className="definition-description">
                          Copyrights, trademarks, patents, trade secrets, and other proprietary rights.
                        </p>
                      </div>
                      <div className="definition-item">
                        <h4 className="definition-term">"Confidential Information"</h4>
                        <p className="definition-description">
                          Any non-public information disclosed during the course of our engagement.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Services & Payments Section */}
                <section id="services" className="terms-section">
                  <div className="section-header">
                    <h2 className="section-title">3. Services & Payments</h2>
                    <span className="section-badge">Financial</span>
                  </div>
                  <div className="section-content">
                    <h3 className="subsection-title">3.1 Service Engagement</h3>
                    <p className="section-paragraph">
                      All Services are provided based on a written proposal or agreement that outlines:
                    </p>
                    <ul className="terms-list">
                      <li>Scope of work and deliverables</li>
                      <li>Project timeline and milestones</li>
                      <li>Pricing and payment terms</li>
                      <li>Acceptance criteria</li>
                      <li>Change order procedures</li>
                    </ul>

                    <h3 className="subsection-title">3.2 Payment Terms</h3>
                    <div className="payment-terms">
                      <div className="payment-method">
                        <h4>Standard Payment Structure:</h4>
                        <ul className="terms-list">
                          <li>50% deposit upon project initiation</li>
                          <li>25% upon milestone completion</li>
                          <li>25% upon final delivery and acceptance</li>
                        </ul>
                      </div>
                      <div className="payment-method">
                        <h4>Retainer Agreements:</h4>
                        <ul className="terms-list">
                          <li>Monthly billing for ongoing services</li>
                          <li>Invoiced at the beginning of each month</li>
                          <li>Net 15 payment terms</li>
                        </ul>
                      </div>
                    </div>

                    <div className="notice-box warning">
                      <div className="notice-icon">💳</div>
                      <div className="notice-content">
                        <h4 className="notice-title">Late Payments</h4>
                        <p className="notice-text">
                          Payments overdue by more than 30 days may result in suspension of Services. 
                          A late fee of 1.5% per month may be applied to overdue balances.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Intellectual Property Section */}
                <section id="intellectual-property" className="terms-section">
                  <div className="section-header">
                    <h2 className="section-title">4. Intellectual Property Rights</h2>
                    <span className="section-badge">Copyright</span>
                  </div>
                  <div className="section-content">
                    <h3 className="subsection-title">4.1 Client Materials</h3>
                    <p className="section-paragraph">
                      You retain all rights to any materials, logos, content, or other intellectual property 
                      that you provide to me for use in the Project.
                    </p>

                    <h3 className="subsection-title">4.2 Deliverables</h3>
                    <p className="section-paragraph">
                      Upon full payment of all fees, I will transfer ownership of the Deliverables to you, 
                      subject to the following conditions:
                    </p>
                    <ul className="terms-list">
                      <li>I retain the right to display the work in my portfolio and marketing materials</li>
                      <li>I retain rights to any reusable code libraries, frameworks, or tools developed separately</li>
                      <li>Third-party components remain subject to their original licenses</li>
                    </ul>

                    <h3 className="subsection-title">4.3 My Intellectual Property</h3>
                    <p className="section-paragraph">
                      Any pre-existing code, templates, tools, or methodologies that I own and incorporate 
                      into the Project remain my intellectual property and are licensed to you for use 
                      within the specific Project only.
                    </p>
                  </div>
                </section>

                {/* Confidentiality Section */}
                <section id="confidentiality" className="terms-section">
                  <div className="section-header">
                    <h2 className="section-title">5. Confidentiality</h2>
                    <span className="section-badge">Privacy</span>
                  </div>
                  <div className="section-content">
                    <p className="section-paragraph">
                      Both parties agree to maintain the confidentiality of any proprietary or confidential 
                      information disclosed during the course of the engagement.
                    </p>
                    
                    <div className="confidentiality-grid">
                      <div className="confidentiality-item">
                        <div className="confidentiality-icon">🤝</div>
                        <h4>Mutual NDA</h4>
                        <p>All discussions and documents are treated as confidential</p>
                      </div>
                      <div className="confidentiality-item">
                        <div className="confidentiality-icon">🔒</div>
                        <h4>Data Security</h4>
                        <p>Industry-standard security measures are implemented</p>
                      </div>
                      <div className="confidentiality-item">
                        <div className="confidentiality-icon">📄</div>
                        <h4>Documentation</h4>
                        <p>Confidential information is clearly marked as such</p>
                      </div>
                    </div>

                    <div className="notice-box info">
                      <div className="notice-icon">ℹ️</div>
                      <div className="notice-content">
                        <h4 className="notice-title">Confidentiality Exceptions</h4>
                        <p className="notice-text">
                          Confidentiality obligations do not apply to information that is publicly available, 
                          independently developed, or required to be disclosed by law.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Liability & Warranties Section */}
                <section id="liability" className="terms-section">
                  <div className="section-header">
                    <h2 className="section-title">6. Liability & Warranties</h2>
                    <span className="section-badge">Legal</span>
                  </div>
                  <div className="section-content">
                    <h3 className="subsection-title">6.1 Warranties</h3>
                    <p className="section-paragraph">
                      I warrant that the Services will be performed in a professional and workmanlike manner, 
                      consistent with generally accepted industry standards.
                    </p>

                    <h3 className="subsection-title">6.2 Limitation of Liability</h3>
                    <p className="section-paragraph">
                      To the maximum extent permitted by law, my total liability for any claims arising from 
                      or related to the Services shall not exceed the total fees paid by you for the specific 
                      Project giving rise to the claim.
                    </p>

                    <h3 className="subsection-title">6.3 Exclusions</h3>
                    <p className="section-paragraph">
                      I shall not be liable for:
                    </p>
                    <ul className="terms-list">
                      <li>Indirect, incidental, or consequential damages</li>
                      <li>Loss of data, profits, or business opportunities</li>
                      <li>Issues arising from third-party services or platforms</li>
                      <li>Client modifications to the Deliverables</li>
                    </ul>

                    <div className="notice-box important">
                      <div className="notice-icon">⚖️</div>
                      <div className="notice-content">
                        <h4 className="notice-title">Important Limitation</h4>
                        <p className="notice-text">
                          This limitation of liability applies even if I have been advised of the possibility 
                          of such damages and regardless of the form of action.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Termination Section */}
                <section id="termination" className="terms-section">
                  <div className="section-header">
                    <h2 className="section-title">7. Termination</h2>
                    <span className="section-badge">Agreement</span>
                  </div>
                  <div className="section-content">
                    <h3 className="subsection-title">7.1 Termination Rights</h3>
                    <p className="section-paragraph">
                      Either party may terminate the engagement by providing written notice if:
                    </p>
                    <ul className="terms-list">
                      <li>The other party breaches these Terms and fails to cure within 30 days</li>
                      <li>The other party becomes insolvent or ceases business operations</li>
                      <li>For convenience, with 30 days written notice</li>
                    </ul>

                    <h3 className="subsection-title">7.2 Effect of Termination</h3>
                    <p className="section-paragraph">
                      Upon termination:
                    </p>
                    <ul className="terms-list">
                      <li>You will pay for all Services rendered up to the termination date</li>
                      <li>I will deliver all completed work to date</li>
                      <li>Confidentiality obligations shall survive termination</li>
                    </ul>
                  </div>
                </section>

                {/* Dispute Resolution Section */}
                <section id="disputes" className="terms-section">
                  <div className="section-header">
                    <h2 className="section-title">8. Dispute Resolution</h2>
                    <span className="section-badge">Legal</span>
                  </div>
                  <div className="section-content">
                    <h3 className="subsection-title">8.1 Informal Resolution</h3>
                    <p className="section-paragraph">
                      Both parties agree to attempt to resolve any disputes informally before initiating 
                      formal proceedings. This includes:
                    </p>
                    <ul className="terms-list">
                      <li>Direct negotiation between the parties</li>
                      <li>Mediation with a mutually agreed-upon mediator</li>
                    </ul>

                    <h3 className="subsection-title">8.2 Governing Law</h3>
                    <p className="section-paragraph">
                      These Terms shall be governed by and construed in accordance with the laws of 
                      [Your Country/State], without regard to its conflict of law principles.
                    </p>

                    <h3 className="subsection-title">8.3 Arbitration</h3>
                    <p className="section-paragraph">
                      Any disputes not resolved informally shall be settled by binding arbitration in 
                      accordance with the rules of the [Arbitration Association]. The arbitration shall 
                      take place in [City, State], and the decision shall be final and binding.
                    </p>
                  </div>
                </section>

                {/* General Terms Section */}
                <section id="general" className="terms-section">
                  <div className="section-header">
                    <h2 className="section-title">9. General Terms</h2>
                    <span className="section-badge">Miscellaneous</span>
                  </div>
                  <div className="section-content">
                    <h3 className="subsection-title">9.1 Entire Agreement</h3>
                    <p className="section-paragraph">
                      These Terms, together with any project proposal or agreement, constitute the entire 
                      agreement between you and me regarding the Services.
                    </p>

                    <h3 className="subsection-title">9.2 Amendments</h3>
                    <p className="section-paragraph">
                      I reserve the right to modify these Terms at any time. Continued use of my Services 
                      after changes constitutes acceptance of the modified Terms.
                    </p>

                    <h3 className="subsection-title">9.3 Severability</h3>
                    <p className="section-paragraph">
                      If any provision of these Terms is found to be unenforceable, the remaining provisions 
                      will remain in full force and effect.
                    </p>

                    <h3 className="subsection-title">9.4 Assignment</h3>
                    <p className="section-paragraph">
                      You may not assign your rights or obligations under these Terms without my prior written 
                      consent. I may assign my rights and obligations to any successor or affiliate.
                    </p>
                  </div>
                </section>

                {/* Contact Information Section */}
                <section id="contact" className="terms-section">
                  <div className="section-header">
                    <h2 className="section-title">10. Contact Information</h2>
                    <span className="section-badge">Communication</span>
                  </div>
                  <div className="section-content">
                    <p className="section-paragraph">
                      For any questions about these Terms or to exercise your rights, please contact me:
                    </p>
                    
                    <div className="contact-info">
                      <div className="contact-item">
                        <span className="contact-label">Email:</span>
                        <a href="mailto:legal@yourdomain.com" className="contact-value">
                          legal@yourdomain.com
                        </a>
                      </div>
                      <div className="contact-item">
                        <span className="contact-label">Response Time:</span>
                        <span className="contact-value">Within 3-5 business days</span>
                      </div>
                      <div className="contact-item">
                        <span className="contact-label">Updates:</span>
                        <span className="contact-value">Check this page for latest terms</span>
                      </div>
                    </div>

                    <div className="acceptance-box">
                      <div className="acceptance-content">
                        <h4 className="acceptance-title">Acceptance of Terms</h4>
                        <p className="acceptance-text">
                          By using my Services, you acknowledge that you have read, understood, and agree 
                          to be bound by these Terms of Service.
                        </p>
                        <div className="acceptance-date">
                          <strong>Last Updated:</strong> {lastUpdated}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Footer Actions */}
                <div className="terms-footer-actions">
                  <button className="btn btn-primary" onClick={() => window.print()}>
                    Print Terms
                  </button>
                  <a href="/contact" className="btn btn-secondary">
                    Contact for Questions
                  </a>
                  <a href="/privacy-policy" className="btn btn-outline">
                    View Privacy Policy
                  </a>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
import React, { useState, useCallback, memo } from 'react';
import { AnimatedSection } from '../components';
import { CONTACT_INFO, INTEREST_OPTIONS, COLORS } from '../utils/constants';

const initialForm = { name: '', email: '', org: '', interest: '', message: '' };
const initialErrors = {};

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Name is required';
  if (!form.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email';
  }
  if (!form.message.trim()) errors.message = 'Message is required';
  return errors;
}

const ContactPage = memo(() => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next[name];
      return next;
    });
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  }, [form]);

  const handleReset = useCallback(() => {
    setForm(initialForm);
    setErrors(initialErrors);
    setSubmitted(false);
  }, []);

  return (
    <main id="main-content" role="main">
      {/* ── Header ── */}
      <section
        style={{
          paddingTop: 140,
          paddingBottom: 80,
          background: 'linear-gradient(180deg, var(--color-cream) 0%, var(--color-white) 100%)',
        }}
      >
        <div className="container">
          <AnimatedSection>
            <span className="section-label">Get in Touch</span>
            <h1 className="heading-xl" style={{ marginBottom: 24, maxWidth: 600 }}>
              Let's start with a conversation
            </h1>
            <p className="body-lg" style={{ maxWidth: 560 }}>
              No pitch decks. No pressure. Tell us what you're working on and we'll figure out how (or if) we can help.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Contact Grid ── */}
      <section className="section-padding" style={{ background: 'var(--color-white)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'flex-start' }}>
            {/* Left: Contact Info */}
            <AnimatedSection>
              <div>
                <h2 className="heading-md" style={{ marginBottom: 32 }}>Reach us directly</h2>

                {CONTACT_INFO.map((info) => (
                  <div
                    key={info.label}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 16,
                      marginBottom: 28,
                      padding: 24,
                      background: 'var(--color-cream)',
                      borderRadius: 'var(--border-radius-md)',
                    }}
                  >
                    <span style={{ fontSize: 24, lineHeight: 1 }} aria-hidden="true">{info.icon}</span>
                    <div>
                      <p className="label" style={{ color: COLORS.ink, marginBottom: 4 }}>{info.label}</p>
                      <p className="body-md" style={{ fontWeight: 500, color: COLORS.ink }}>{info.value}</p>
                    </div>
                  </div>
                ))}

                {/* Map placeholder */}
                <div
                  style={{
                    marginTop: 32,
                    height: 180,
                    borderRadius: 'var(--border-radius-lg)',
                    background: `linear-gradient(135deg, ${COLORS.electric}10, ${COLORS.mint}10)`,
                    border: '1px solid var(--color-light-gray)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: COLORS.slate,
                    fontFamily: 'var(--font-body)',
                    fontSize: 14,
                  }}
                  role="img"
                  aria-label="Map showing InnoMission location in Hyderabad"
                >
                  <span>📍 Hyderabad, Telangana, India</span>
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Form */}
            <AnimatedSection delay={0.15}>
              {submitted ? (
                <div className="success-message" role="alert">
                  <div style={{ fontSize: 48, marginBottom: 20 }} aria-hidden="true">🎉</div>
                  <h3 className="heading-sm" style={{ marginBottom: 12 }}>Message sent!</h3>
                  <p className="body-md" style={{ marginBottom: 28 }}>
                    Thanks for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button onClick={handleReset} className="btn btn-outline">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div className="form-wrapper">
                  <h2 className="heading-sm" style={{ marginBottom: 28 }}>Send us a message</h2>

                  <div role="form" aria-label="Contact form">
                    {/* Name */}
                    <div className="form-group">
                      <label htmlFor="contact-name" className="form-label">
                        Full Name <span className="required" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        className="form-input"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        autoComplete="name"
                      />
                      {errors.name && (
                        <p id="name-error" role="alert" style={{ color: COLORS.coral, fontSize: 13, marginTop: 4 }}>
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="form-group">
                      <label htmlFor="contact-email" className="form-label">
                        Email <span className="required" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        className="form-input"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        required
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        autoComplete="email"
                      />
                      {errors.email && (
                        <p id="email-error" role="alert" style={{ color: COLORS.coral, fontSize: 13, marginTop: 4 }}>
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Organization */}
                    <div className="form-group">
                      <label htmlFor="contact-org" className="form-label">Organization</label>
                      <input
                        id="contact-org"
                        name="org"
                        type="text"
                        className="form-input"
                        value={form.org}
                        onChange={handleChange}
                        placeholder="Company or institution"
                        autoComplete="organization"
                      />
                    </div>

                    {/* Interest */}
                    <div className="form-group">
                      <label htmlFor="contact-interest" className="form-label">Area of Interest</label>
                      <select
                        id="contact-interest"
                        name="interest"
                        className="form-select"
                        value={form.interest}
                        onChange={handleChange}
                      >
                        <option value="">Select an area...</option>
                        {INTEREST_OPTIONS.map((opt) => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div className="form-group">
                      <label htmlFor="contact-message" className="form-label">
                        Message <span className="required" aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        className="form-textarea"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your goals, challenges, or how we can help..."
                        rows={5}
                        required
                        aria-required="true"
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                      />
                      {errors.message && (
                        <p id="message-error" role="alert" style={{ color: COLORS.coral, fontSize: 13, marginTop: 4 }}>
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="btn btn-electric"
                      style={{ width: '100%', marginTop: 8 }}
                    >
                      Send Message →
                    </button>
                  </div>
                </div>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
});

ContactPage.displayName = 'ContactPage';

export default ContactPage;

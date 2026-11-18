import React, { useCallback, useState } from 'react';
import { CONTACT_INFO, INTEREST_OPTIONS } from '../../utils/constants';
import { Accent, Button, PageHero, Reveal } from '../ui';

const initialForm = { name: '', email: '', org: '', interest: '', message: '' };

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Name is required';
  if (!form.email.trim()) errors.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Please enter a valid email';
  if (!form.message.trim()) errors.message = 'Message is required';
  return errors;
}

const Field = ({ id, label, required, error, children }) => (
  <div className="rd-field">
    <label htmlFor={id}>{label}{required && <span aria-hidden="true"> *</span>}</label>
    {children}
    {error && <p id={`${id}-error`} className="rd-field__error" role="alert">{error}</p>}
  </div>
);

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((er) => { const n = { ...er }; delete n[name]; return n; });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  };

  const aria = (n) => ({ 'aria-invalid': !!errors[n], 'aria-describedby': errors[n] ? `contact-${n}-error` : undefined });

  return (
    <main id="main-content">
      <PageHero
        title={<>Let’s start with a <Accent>conversation</Accent></>}
        intro="No pitch decks. No pressure. Tell us what you’re working on and we’ll figure out how — or if — we can help."
      />

      <section className="rd-section rd-section--flush">
        <div className="rd-wrap rd-contact">
          <Reveal>
            <h2 className="rd-h3">Reach us directly</h2>
            <dl className="rd-contact__info">
              {CONTACT_INFO.map((c) => (
                <div key={c.label}>
                  <dt>{c.label}</dt>
                  <dd>{c.label === 'Email' ? <a href={`mailto:${c.value}`}>{c.value}</a> : c.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.1}>
            {submitted ? (
              <div className="rd-formcard rd-formcard--done" role="status">
                <h2 className="rd-h3">Message sent</h2>
                <p className="rd-body">Thanks for reaching out. We’ll get back to you within 24 hours.</p>
                <Button variant="outline" onClick={() => { setForm(initialForm); setSubmitted(false); }}>Send another message</Button>
              </div>
            ) : (
              <form className="rd-formcard" onSubmit={onSubmit} noValidate aria-label="Contact form">
                <h2 className="rd-h3">Send us a message</h2>
                <Field id="contact-name" label="Full name" required error={errors.name}>
                  <input id="contact-name" name="name" value={form.name} onChange={onChange} autoComplete="name" required {...aria('name')} />
                </Field>
                <Field id="contact-email" label="Email" required error={errors.email}>
                  <input id="contact-email" name="email" type="email" value={form.email} onChange={onChange} autoComplete="email" required {...aria('email')} />
                </Field>
                <Field id="contact-org" label="Organisation">
                  <input id="contact-org" name="org" value={form.org} onChange={onChange} autoComplete="organization" />
                </Field>
                <Field id="contact-interest" label="Area of interest">
                  <select id="contact-interest" name="interest" value={form.interest} onChange={onChange}>
                    <option value="">Select an area…</option>
                    {INTEREST_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                  </select>
                </Field>
                <Field id="contact-message" label="Message" required error={errors.message}>
                  <textarea id="contact-message" name="message" rows={5} value={form.message} onChange={onChange} required {...aria('message')} />
                </Field>
                <button type="submit" className="rd-btn rd-btn--primary rd-btn--block">Send message</button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </main>
  );
}

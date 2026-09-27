import { useState } from 'react';
import Button from './Button';

const initialState = { name: '', email: '', phone: '', message: '' };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Name is required';
  if (!values.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Enter a valid email';
  }
  if (values.phone && !/^[+]?[\d\s()-]{7,15}$/.test(values.phone)) {
    errors.phone = 'Enter a valid phone number';
  }
  if (!values.message.trim()) {
    errors.message = 'Message is required';
  } else if (values.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const fieldErrors = validate({ ...values, [name]: value });
      setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] || '' }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const fieldErrors = validate(values);
    setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] || '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fieldErrors = validate(values);
    setErrors(fieldErrors);
    setTouched({ name: true, email: true, phone: true, message: true });

    if (Object.keys(fieldErrors).length === 0) {
      setSubmitted(true);
      setValues(initialState);
      setTouched({});
      setErrors({});
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const inputClasses =
    'w-full bg-iron-black border border-iron-border px-4 py-3 text-iron-white placeholder:text-iron-grey/50 focus:outline-none focus:border-iron-accent transition-colors';
  const errorClasses = 'text-iron-accent text-sm mt-1';

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm text-iron-grey mb-2">Name *</label>
        <input
          type="text" id="name" name="name"
          value={values.name} onChange={handleChange} onBlur={handleBlur}
          placeholder="Your full name"
          className={inputClasses}
        />
        {touched.name && errors.name && <p className={errorClasses}>{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm text-iron-grey mb-2">Email *</label>
        <input
          type="email" id="email" name="email"
          value={values.email} onChange={handleChange} onBlur={handleBlur}
          placeholder="your@email.com"
          className={inputClasses}
        />
        {touched.email && errors.email && <p className={errorClasses}>{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm text-iron-grey mb-2">Phone</label>
        <input
          type="tel" id="phone" name="phone"
          value={values.phone} onChange={handleChange} onBlur={handleBlur}
          placeholder="+1 (555) 000-0000"
          className={inputClasses}
        />
        {touched.phone && errors.phone && <p className={errorClasses}>{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-iron-grey mb-2">Message *</label>
        <textarea
          id="message" name="message" rows="4"
          value={values.message} onChange={handleChange} onBlur={handleBlur}
          placeholder="Tell us about your fitness goals..."
          className={`${inputClasses} resize-none`}
        />
        {touched.message && errors.message && <p className={errorClasses}>{errors.message}</p>}
      </div>

      <Button type="submit" variant="primary" size="md" className="w-full">
        Send Message
      </Button>

      {submitted && (
        <p className="text-green-400 text-center font-medium">
          Message sent successfully! We'll get back to you soon.
        </p>
      )}
    </form>
  );
}

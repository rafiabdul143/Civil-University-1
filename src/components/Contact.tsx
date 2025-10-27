import { useState } from 'react';
import { Send } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Contact = () => {
  const [ref, isInView] = useInView();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 text-black" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <h2
          className={`text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16 ${
            isInView ? 'animate-slideUp' : 'opacity-0'
          }`}
        >
          Get In Touch
        </h2>

        <form
          onSubmit={handleSubmit}
          className={`space-y-6 ${isInView ? 'animate-slideUp' : 'opacity-0'}`}
          style={{ animationDelay: '200ms' }}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-black bg-transparent focus:outline-none focus:border-black/60 transition-colors"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-black bg-transparent focus:outline-none focus:border-black/60 transition-colors"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-semibold mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-black bg-transparent focus:outline-none focus:border-black/60 transition-colors"
              placeholder="How can we help you?"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 border-2 border-black bg-transparent focus:outline-none focus:border-black/60 transition-colors resize-none"
              placeholder="Tell us more about your inquiry..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-4 font-semibold text-lg hover:bg-black/90 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span>Submit</span>
            <Send size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

import { useState, useEffect } from 'react';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [emailjs, setEmailjs] = useState<any>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // ✅ EmailJS Credentials
  const EMAILJS_CONFIG = {
    serviceId: 'service_md671t9',
    publicKey: 'vYMhk4-JNw6cZxNGI',
    adminTemplate: 'template_r74xeyo',
    userTemplate: 'template_kbk2kbr'
  };

  // Initialize EmailJS
  useEffect(() => {
    const init = async () => {
      try {
        const module = await import('@emailjs/browser');
        module.init(EMAILJS_CONFIG.publicKey);
        setEmailjs(module);
      } catch (err) {
        console.error('Failed to load EmailJS:', err);
      }
    };
    init();
  }, []);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!emailjs) {
      setError('Email service not available. Please try again later.');
      return;
    }

    if (!formData.name.trim() || !formData.email.trim() || 
        !formData.subject.trim() || !formData.message.trim()) {
      setError('Please fill in all fields');
      return;
    }

    setIsLoading(true);

    try {
      // Send admin notification
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.adminTemplate,
        {
          to_email: 'buniyaadec@gmail.com', // Replace with your admin email
          name: formData.name,
          user_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: 'Website Contact Form',
        }
      );

      // Send user auto-reply
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.userTemplate,
        {
          to_email: formData.email,
          name: formData.name,
          title: formData.subject,
          user_message: formData.message.substring(0, 100),
        }
      );

      setIsSent(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setIsSent(false), 5000);

    } catch (err: any) {
      console.error('Email sending error:', err);
      
      let errorMsg = 'Failed to send message. ';
      if (err.text) {
        errorMsg += err.text;
      }
      
      setError(errorMsg);
      
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null);
  };

  if (!emailjs) {
    return (
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 text-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">Get In Touch</h2>
          <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <Loader2 className="w-12 h-12 text-blue-500 animate-spin mx-auto mb-4" />
            <p className="text-lg font-semibold text-blue-700">Loading contact form...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 text-black">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12">
          Get In Touch
        </h2>

        {/* Success Message */}
        {isSent && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5" />
              <div>
                <p className="font-semibold">Message Sent Successfully!</p>
                <p className="text-sm">We've received your message and will get back to you soon.</p>
              </div>
            </div>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-5 h-5" />
              <div>
                <p className="font-semibold">Error</p>
                <p className="text-sm">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Name *</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={isLoading}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 focus:border-black focus:outline-none transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={isLoading}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 focus:border-black focus:outline-none transition-colors"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Subject *</label>
            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              disabled={isLoading}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 focus:border-black focus:outline-none transition-colors"
              placeholder="How can we help?"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Message *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              disabled={isLoading}
              required
              rows={6}
              className="w-full px-4 py-3 border-2 border-gray-300 focus:border-black focus:outline-none transition-colors resize-none"
              placeholder="Tell us more about your inquiry..."
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-black text-white py-4 flex items-center justify-center gap-2 hover:bg-gray-800 disabled:bg-gray-400 transition-colors font-semibold"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" /> Sending Message...
              </>
            ) : (
              <>
                Send Message <Send className="w-5 h-5" />
              </>
            )}
          </button>
        </form>

        {/* Additional Info */}
        <div className="mt-12 text-center text-gray-600">
          <p className="text-sm">
            We typically respond within 24 hours. For urgent matters, please call our support line.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
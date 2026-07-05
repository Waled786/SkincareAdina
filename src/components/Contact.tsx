import { Phone, MessageCircle, MapPin } from 'lucide-react';

const contactMethods = [
  {
    icon: Phone,
    title: 'Phone',
    detail: '+92 314 6090365 ',
    action: 'tel:+923146090365',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    detail: '+92 307 9873642',
    action: 'https://wa.me/923079873642',
  },
  {
    icon: MapPin,
    title: 'Clinic Address',
    detail: 'Mochi Wala Road, Street No. 6, near Riaz Parvez Workshop, Gojra',
    action: 'https://maps.app.goo.gl/PfZ9CmTCRKzyh8X38?g_st=aw',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title mt-3 mb-4">Contact Us</h2>
          <p className="text-paragraph max-w-2xl mx-auto">
            Ready to start your skincare journey? Reach out to us through any of the
            following channels and our team will assist you promptly.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.action}
              target={method.action.startsWith('http') ? '_blank' : undefined}
              rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="card text-center group hover:bg-primary transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5
                            group-hover:bg-white/20 transition-colors duration-300">
                <method.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-heading mb-2 group-hover:text-white transition-colors duration-300">
                {method.title}
              </h3>
              <p className="text-paragraph text-sm group-hover:text-white/90 transition-colors duration-300">
                {method.detail}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;

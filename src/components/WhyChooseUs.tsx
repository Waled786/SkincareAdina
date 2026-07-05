import { Microscope, Shield, Sparkles, Clock, CheckCircle2 } from 'lucide-react';

const reasons = [
  {
    icon: Microscope,
    title: 'Expert Dermatologists',
    description: 'Board-certified specialists with years of experience in aesthetic medicine.',
  },
  {
    icon: Shield,
    title: 'Safe & Certified',
    description: 'All treatments performed by licensed professionals in a sterile environment.',
  },
  {
    icon: Sparkles,
    title: 'Premium Equipment',
    description: 'State-of-the-art technology and FDA-approved devices for optimal results.',
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'Convenient appointment times including evenings and weekends.',
  },
];

const WhyChooseUs = () => {
  const benefits = [
    'Free comprehensive skin analysis',
    'Personalized treatment recommendations',
    'No hidden fees or surprise charges',
    'Post-treatment care support',
    'Satisfaction guarantee on all services',
  ];

  return (
    <section id="why-us" className="section-padding bg-background">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <div>
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-title mt-3 mb-6">
              The Lumière Difference
            </h2>
            <p className="text-paragraph leading-relaxed mb-8">
              We combine medical expertise with luxury spa experiences,
              ensuring every visit leaves you feeling pampered and confident
              in your skin's future.
            </p>

            {/* Benefits List */}
            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-paragraph">{benefit}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary inline-flex">
              Schedule Free Consultation
            </a>
          </div>

          {/* Cards Side */}
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="card group hover:bg-primary hover:text-white transition-all duration-300"
              >
                <div className="w-14 h-14 bg-hover rounded-2xl flex items-center justify-center mb-5
                              group-hover:bg-white/20 transition-colors duration-300">
                  <reason.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-heading mb-2 group-hover:text-white transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-paragraph text-sm group-hover:text-white/90 transition-colors duration-300">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

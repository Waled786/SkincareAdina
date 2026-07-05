import { Award, Users, Heart, Leaf } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '10,000+',
    label: 'Happy Customers',
  },
  {
    icon: Award,
    value: '25,000+',
    label: 'Procedures Completed',
  },
  {
    icon: Heart,
    value: '15+',
    label: 'Years Experience',
  },
  {
    icon: Leaf,
    value: '50+',
    label: 'Professional Treatments',
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label">About Us</span>
          <h2 className="section-title mt-3 mb-6">
            Pioneering Excellence in Skincare
          </h2>
          <p className="text-paragraph leading-relaxed">
            At Skincare by <span className="text-primary">Dr. Adina</span> clinic, we believe that radiant skin is not just about
            aesthetics—it's about confidence, health, and self-care. Our mission
            is to deliver transformative skincare experiences backed by science
            and delivered with compassion.
          </p>
          <p className="text-paragraph leading-relaxed mt-4">
            From cutting-edge treatments to personalized care,
            every service we offer is designed to help you achieve your skin goals
            in a luxurious, relaxing environment.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="card bg-background text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="text-3xl font-bold text-heading mb-1">{stat.value}</p>
              <p className="text-sm text-paragraph">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

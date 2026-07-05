import { Droplets, Sun, Syringe, Zap, Activity, FlaskConical } from 'lucide-react';

interface Procedure {
  id: number;
  name: string;
  description: string;
  duration: string;
  image: string;
  icon: React.ElementType;
  badge?: string;
}

const procedures: Procedure[] = [
  {
    id: 1,
    name: 'Hydra Facial',
    description: 'Deep cleansing and hydration treatment for radiant, refreshed skin.',
    duration: '60 min',
    image: 'https://images.pexels.com/photos/3757951/pexels-photo-3757951.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: Droplets,
    badge: 'Most Popular',
  },
  {
    id: 2,
    name: 'Skin Whitening',
    description: 'Advanced brightening treatment for a more even, luminous complexion.',
    duration: '45 min',
    image: 'https://images.pexels.com/photos/4041056/pexels-photo-4041056.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: Sun,
  },
  {
    id: 3,
    name: 'PRP Therapy',
    description: 'Platelet-rich plasma treatment for natural skin rejuvenation.',
    duration: '90 min',
    image: 'https://images.pexels.com/photos/4162579/pexels-photo-4162579.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: Syringe,
    badge: 'Advanced',
  },
  {
    id: 4,
    name: 'Laser Hair Removal',
    description: 'Long-lasting hair reduction with state-of-the-art laser technology.',
    duration: '30-60 min',
    image: 'https://images.pexels.com/photos/3757951/pexels-photo-3757951.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: Zap,
  },
  {
    id: 5,
    name: 'Acne Treatment',
    description: 'Targeted solutions for acne-prone skin with visible results.',
    duration: '45 min',
    image: 'https://images.pexels.com/photos/4041390/pexels-photo-4041390.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: Activity,
    badge: 'New',
  },
  {
    id: 6,
    name: 'Chemical Peel',
    description: 'Professional exfoliation treatment for smoother, renewed skin.',
    duration: '30 min',
    image: 'https://images.pexels.com/photos/4041389/pexels-photo-4041389.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: FlaskConical,
  },
];

const ProcedureCard = ({ procedure }: { procedure: Procedure }) => {
  return (
    <div className="card group cursor-pointer p-0 overflow-hidden">
      {/* Procedure Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={procedure.image}
          alt={procedure.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {procedure.badge && (
          <span className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
            {procedure.badge}
          </span>
        )}
        <div className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg
                      opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0
                      transition-all duration-300">
          <procedure.icon className="w-5 h-5 text-primary" />
        </div>
      </div>

      {/* Procedure Info */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <procedure.icon className="w-5 h-5 text-primary" />
          <span className="text-sm text-paragraph/70">{procedure.duration}</span>
        </div>
        <h3 className="text-lg font-semibold text-heading mb-2">{procedure.name}</h3>
        <p className="text-sm text-paragraph">{procedure.description}</p>
      </div>
    </div>
  );
};

const Procedures = () => {
  return (
    <section id="procedures" className="section-padding bg-background">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-label">Our Services</span>
          <h2 className="section-title mt-3 mb-4">Procedures</h2>
          <p className="text-paragraph max-w-2xl mx-auto">
            Discover our comprehensive range of professional skincare treatments,
            each designed to help you achieve your unique skin goals.
          </p>
        </div>

        {/* Procedures Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {procedures.map((procedure) => (
            <ProcedureCard key={procedure.id} procedure={procedure} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Procedures;

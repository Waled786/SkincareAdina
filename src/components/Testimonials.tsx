interface VideoTestimonial {
  id: number;
  name: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
}

const testimonials: VideoTestimonial[] = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    title: 'Hydra Facial Treatment',
    description: 'My skin has never looked better. The team at Lumière truly transformed my complexion.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 2,
    name: 'Emily Chen',
    title: 'Acne Treatment Journey',
    description: 'After years of struggling with acne, Lumière gave me the clear skin I always dreamed of.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 3,
    name: 'Jessica Williams',
    title: 'Anti-Aging Protocol',
    description: 'The results speak for themselves. I look years younger and feel incredible.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

const VideoTestimonialCard = ({ testimonial }: { testimonial: VideoTestimonial }) => {
  return (
    <div className="card flex flex-col h-full">
      {/* Video Container */}
      <div className="relative aspect-video rounded-xl overflow-hidden bg-heading/5">
        <iframe
          src={testimonial.videoUrl}
          title={`${testimonial.name}'s testimonial`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="pt-6 text-center flex-grow flex flex-col justify-center">
        <h4 className="font-semibold text-heading text-lg mb-1">{testimonial.name}</h4>
        <p className="text-sm text-primary font-medium mb-2">{testimonial.title}</p>
        <p className="text-sm text-paragraph/80">{testimonial.description}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-white overflow-hidden">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title mt-3 mb-4">Video Testimonials</h2>
          <p className="text-paragraph max-w-2xl mx-auto">
            Hear directly from our clients about their transformative experiences
            at Lumière Skin Clinic.
          </p>
        </div>

        {/* Video Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <VideoTestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

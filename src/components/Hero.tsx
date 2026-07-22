import { Users, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-section-mobile md:pb-section-desktop overflow-hidden"
    >
      <div className="container-max px-6 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="order-2 lg:order-1">
            {/* Tagline */}
            <div className="animate-fade-in">
              <span className="section-label">Premium Skincare Clinic</span>
            </div>

            {/* Headline */}
            <h1 className="section-title mt-4 mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Reveal Your Skin's Natural Radiance
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-paragraph/90 mb-10 leading-relaxed max-w-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Experience transformative skincare treatments designed by expert dermatologists.
              Your journey to luminous, healthy skin begins here.
            </p>

            {/* Statistics Cards */}
            <div className="grid grid-cols-2 gap-6 max-w-md animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="card bg-white p-6 text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <p className="text-3xl font-bold text-heading mb-1">10k+</p>
                <p className="text-sm text-paragraph">Happy Customers</p>
              </div>
              <div className="card bg-white p-6 text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-7 h-7 text-primary" />
                </div>
                <p className="text-3xl font-bold text-heading mb-1">25k+</p>
                <p className="text-sm text-paragraph">Procedures Completed</p>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-full max-w-lg lg:max-w-xl">
              <div className="animate-float">
                <img
                  src="/Hero.jpg"
                  alt="Premium skincare treatment at Lumière Skin Clinic"
                  className="w-full h-auto rounded-card shadow-2xl object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;

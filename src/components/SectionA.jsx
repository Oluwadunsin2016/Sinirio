import { Star, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import banner from '../assets/images/banner2.png';

function SectionA() {
      const textArray = ["County", "City", "Community"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const intervalDelay = 5000; 

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false); // Reset text animation
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
        setAnimate(true); // Restart text animation
      }, 50); // Small delay to reset animation
    }, intervalDelay);

    return () => clearInterval(interval);
  }, [textArray.length]);


  return (
    <section id='about' className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg')] bg-cover bg-center opacity-10"></div>
      {/* <div className="absolute inset-0 bg-[url('https://mldvwwasb8tu.i.optimole.com/cb:7ZGO.6206b/w:1100/h:734/q:90/f:best/ig:avif/https://travelaway.me/wp-content/uploads/2013/04/cochem-town-germany.jpg')] bg-cover bg-center opacity-10"></div> */}

      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
        {/* <div className="text-center mb-16">
      
          <p className="text-xl lg:text-2xl font-light leading-relaxed max-w-5xl mx-auto text-gray-200">
            The Next-Gen AI-Powered Social Economy Built for Every County → City → Community
          </p>
        </div> */}

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-8">
            {/* <div>
              <h2 className="text-3xl font-semibold mb-6 text-blue-300">A single platform combining:</h2>
              <div className="space-y-4">
                {[
                  'Creator Monetization',
                  'Hyper-Local Commerce',
                  'Safe, Escrow-Protected Transactions',
                  'AI-Powered City Communities'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10 hover:border-blue-400/50 transition-all">
                    <Star className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                    <span className="text-lg font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div> */}
            <div>
 <h2 className="text-2xl md:text-4xl font-bold mb-6 text-blue-300">The Next-Gen AI-Powered Social Economy <span className='text-yellow-500'>App</span> <br /> Built for Every <span
         className={` text-green-300 inline-block text-outline-white-sm ${
          animate ? "animate__animated animate__slideInUp" : ""
        }`}
      >
        {textArray[currentIndex]}
      </span>
 </h2>
  {/* <div className="flex items-start gap-3 bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10 hover:border-blue-400/50 transition-all">
                    <Star className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                    <span className="text-lg font-medium">County → City → Community</span>
                  </div> */}
            </div>
            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm p-6 rounded-xl border border-blue-400/30">
              <p className="text-lg leading-relaxed">
                Cities App is redefining how people <span className="text-blue-300 font-semibold">earn</span>, <span className="text-cyan-300 font-semibold">connect</span>, <span className="text-green-300 font-semibold">buy/sell</span>, and <span className="text-yellow-300 font-semibold">build trust</span> within their city.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                // src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                // src="https://mldvwwasb8tu.i.optimole.com/cb:7ZGO.6206b/w:1100/h:734/q:90/f:best/ig:avif/https://travelaway.me/wp-content/uploads/2013/04/cochem-town-germany.jpg"
                src={banner}
                alt="City connections"
                className="w-full object-cover"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div> */}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 backdrop-blur-md border border-green-400/30 rounded-2xl p-8 lg:p-12 shadow-2xl">
          <div className="flex items-center gap-4 mb-6">
            <TrendingUp className="w-12 h-12 text-green-400" />
            <h3 className="text-3xl lg:text-4xl font-bold text-green-300">Raising: $5M Seed Round</h3>
          </div>

          <p className="text-lg text-gray-200 mb-6">
            Use of Funds → Scale engineering, AI systems, escrow compliance, and multi-city expansion.
          </p>

          <button className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold text-lg rounded-full hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-green-500/50 hover:scale-105">
            <span className="flex items-center gap-2">
              Click to invest now. Get equity
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
    </section>
  );
}

export default SectionA;

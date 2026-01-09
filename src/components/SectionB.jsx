// import { AlertTriangle, Ban, DollarSign, ShoppingBag, Users, Building2, MapPin, Check } from 'lucide-react';

// function SectionB() {
//   return (
//     <section id='problems' className="relative min-h-screen bg-gradient-to-br from-slate-50 via-gray-100 to-slate-100 py-20 lg:py-28">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="text-center mb-16">
//           {/* <div className="inline-flex items-center gap-3 bg-red-100 text-red-700 px-6 py-3 rounded-full mb-6">
//             <AlertTriangle className="w-6 h-6" />
//             <span className="font-semibold text-lg">THE PROBLEMS</span>
//           </div> */}
//           <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
//             Today's digital platforms <span className="text-blue-400">do not serve</span>
//           </h2>
//           <p className="text-xl lg:text-2xl font-semibold text-gray-700">
//             real cities, counties and community
//           </p>
//         </div>

//         <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
//           <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
//             <div className="flex items-center gap-3 mb-6">
//               <Users className="w-8 h-8 text-orange-500" />
//               <h3 className="text-xl font-bold text-gray-900">Creators</h3>
//             </div>
//             <ul className="space-y-4">
//               <li className="flex items-start gap-3">
//                 <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
//                 <span className="text-gray-700 text-lg">Earn nothing from the engagement they generate</span>
//               </li>
//               <li className="flex items-start gap-3">
//                 <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
//                 <span className="text-gray-700 text-lg">Suffer silent <span className="font-semibold text-gray-900">shadow bans</span> without explanation</span>
//               </li>
//               <li className="flex items-start gap-3">
//                 <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
//                 <span className="text-gray-700 text-lg">Watch their images & videos stolen or reposted</span>
//               </li>
//             </ul>
//           </div>

//           <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
//             <div className="flex items-center gap-3 mb-6">
//               <Building2 className="w-8 h-8 text-blue-500" />
//               <h3 className="text-xl font-bold text-gray-900">Local businesses</h3>
//             </div>
//             <ul className="space-y-4">
//               <li className="flex items-start gap-3">
//                 <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
//                 <span className="text-gray-700 text-lg">Pay for <span className="font-semibold text-gray-900">expensive, broad ads</span></span>
//               </li>
//               <li className="flex items-start gap-3">
//                 <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
//                 <span className="text-gray-700 text-lg">Cannot target actual city-based customers</span>
//               </li>
//             </ul>
//           </div>

//           <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
//             <div className="flex items-center gap-3 mb-6">
//               <ShoppingBag className="w-8 h-8 text-green-500" />
//               <h3 className="text-xl font-bold text-gray-900">Buyers & Sellers</h3>
//             </div>
//             <ul className="space-y-4">
//               <li className="flex items-start gap-3">
//                 <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
//                 <span className="text-gray-700 text-lg">Face high fraud risks</span>
//               </li>
//               <li className="flex items-start gap-3">
//                 <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
//                 <span className="text-gray-700 text-lg">No escrow protection</span>
//               </li>
//               <li className="flex items-start gap-3">
//                 <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
//                 <span className="text-gray-700 text-lg">No identity or content verification</span>
//               </li>
//             </ul>
//           </div>

//           <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
//             <div className="flex items-center gap-3 mb-6">
//               <MapPin className="w-8 h-8 text-cyan-500" />
//               <h3 className="text-xl font-bold text-gray-900">Cities</h3>
//             </div>
//             <div className="mb-4">
//               <p className="text-gray-700 text-lg mb-4">
//                 There is <span className="font-bold text-blue-400">no platform</span> that unites a city's:
//               </p>
//               <ul className="space-y-3">
//                 {['People', 'Creators', 'Businesses', 'Marketplace', 'Local economy'].map((item, index) => (
//                   <li key={index} className="flex items-center gap-3">
//                     <Check className="w-5 h-5 text-cyan-500" />
//                     <span className="text-gray-700 text-lg font-medium">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div className="bg-gradient-to-r from-gray-900 to-slate-800 rounded-3xl p-10 text-center shadow-2xl">
//           <p className="text-2xl lg:text-3xl font-bold text-white mb-2">
//             All in one <span className="text-blue-400">safe, AI-protected</span> digital ecosystem.
//           </p>
//         </div>

//         <div className='mt-10 flex items-center justify-center'>
//            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-bold text-lg rounded-full hover:from-blue-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:scale-105">
//             <span className="flex items-center gap-2">
//               Invest now
//               <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//               </svg>
//             </span>
//           </button>
// </div>
//       </div>
//     </section>
//   );
// }

// export default SectionB;




import { AlertTriangle, Ban, DollarSign, ShoppingBag, Users, Building2, MapPin, Check, ShieldX, Target, Lock, Users2, TrendingDown, AlertCircle } from 'lucide-react';

function SectionB() {
  const problems = [
    {
      category: 'Creators',
      icon: Users,
      color: 'orange',
      issues: [
        {
          text: 'Earn nothing from engagement',
          description: 'Content generates billions of views but creators see zero revenue',
          severity: 'high'
        },
        {
          text: 'Shadow bans without explanation',
          description: 'Algorithms silently limit reach with no transparency',
          severity: 'high'
        },
        {
          text: 'Content theft and reposting',
          description: 'Videos and images stolen across platforms daily',
          severity: 'medium'
        }
      ],
      gradient: 'from-orange-500 to-amber-500',
      bg: 'bg-orange-500/10'
    },
    {
      category: 'Local Businesses',
      icon: Building2,
      color: 'blue',
      issues: [
        {
          text: 'Expensive, broad advertising',
          description: 'Pay for national reach but need local customers',
          severity: 'medium'
        },
        {
          text: 'Cannot target city customers',
          description: 'No platform for hyper-local business promotion',
          severity: 'high'
        },
        {
          text: 'High customer acquisition costs',
          description: 'Up to 90% of ad spend reaches irrelevant audiences',
          severity: 'medium'
        }
      ],
      gradient: 'from-blue-500 to-cyan-500',
      bg: 'bg-blue-500/10'
    },
    {
      category: 'Buyers & Sellers',
      icon: ShoppingBag,
      color: 'emerald',
      issues: [
        {
          text: 'High fraud risks',
          description: 'No protection against scams and fake listings',
          severity: 'high'
        },
        {
          text: 'No escrow protection',
          description: 'Transactions happen without any safety net',
          severity: 'high'
        },
        {
          text: 'No identity verification',
          description: 'Deal with anonymous, unverified users',
          severity: 'medium'
        }
      ],
      gradient: 'from-emerald-500 to-teal-500',
      bg: 'bg-emerald-500/10'
    },
    {
      category: 'Cities',
      icon: MapPin,
      color: 'cyan',
      issues: [
        {
          text: 'Fragmented digital presence',
          description: 'No unified platform connecting city ecosystems',
          severity: 'high'
        },
        {
          text: 'Disconnected communities',
          description: 'People, businesses, and creators operate in silos',
          severity: 'medium'
        },
        {
          text: 'No local economic integration',
          description: 'Digital economy benefits global platforms, not local communities',
          severity: 'high'
        }
      ],
      gradient: 'from-cyan-500 to-blue-500',
      bg: 'bg-cyan-500/10'
    }
  ];

  const severityIcons = {
    high: <AlertCircle className="w-4 h-4 text-red-500" />,
    medium: <AlertTriangle className="w-4 h-4 text-amber-500" />
  };

  return (
    <section id='problems' className="relative py-32 overflow-hidden bg-gradient-to-br from-gray-950 via-black to-gray-950">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-red-900/10 to-orange-900/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-900/10 to-cyan-900/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-900/10 to-teal-900/10 rounded-full blur-3xl opacity-20"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-emerald-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center mb-20">
          {/* <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/30 px-4 py-2 rounded-full mb-6">
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span className="text-sm font-medium text-red-300 uppercase tracking-wider">
              The Critical Problems
            </span>
          </div> */}
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="text-white">Today's Platforms</span>
            <br />
            <span className="bg-gradient-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
              Fail Communities
            </span>
          </h1>
          
          <div className="inline-block relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-orange-500/20 blur-xl opacity-50"></div>
            <p className="relative text-2xl md:text-3xl text-gray-300">
              They don't serve real cities, counties, and communities
            </p>
          </div>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            const delay = index * 100;

            return (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${delay}ms` }}
              >
                {/* Background glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${problem.gradient.replace('from', 'from').replace('to', 'to')}/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl`}></div>
                
                <div className="relative h-full bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-3xl p-8 hover:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:shadow-black/50 group-hover:scale-[1.02]">
                  {/* Icon header */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${problem.gradient} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Category title */}
                  <h3 className="text-2xl font-bold text-white mb-6">
                    {problem.category}
                  </h3>
                  
                  {/* Issues list */}
                  <div className="space-y-6">
                    {problem.issues.map((issue, issueIndex) => (
                      <div
                        key={issueIndex}
                        className="relative pl-10"
                      >
                        {/* Issue indicator */}
                        <div className="absolute left-0 top-1">
                          <div className={`w-6 h-6 rounded-full ${problem.bg} border border-gray-700 flex items-center justify-center`}>
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${problem.gradient}`}></div>
                          </div>
                        </div>
                        
                        {/* Issue content */}
                        <div>
                          <div className="flex items-start justify-between mb-1">
                            <h4 className="text-lg font-semibold text-white leading-tight">
                              {issue.text}
                            </h4>
                            {severityIcons[issue.severity]}
                          </div>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {issue.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-gray-700 rounded-tr-2xl"></div>
                </div>
              </div>
            );
          })}
        </div>

                <div className='mt-10 flex items-center justify-center'>
           <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-bold text-lg rounded-full hover:from-blue-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:scale-105">
            <span className="flex items-center gap-2">
              Invest now
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
</div>

        {/* Unified Cities Problem */}
        {/* <div className="relative mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 to-blue-900/10 rounded-3xl blur-3xl opacity-50"></div>
          
          <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-800 rounded-3xl p-10 overflow-hidden">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-2xl">
                      <MapPin className="w-16 h-16 text-white" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center shadow-xl">
                      <Ban className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-6 py-3 rounded-full mb-6">
                    <ShieldX className="w-5 h-5 text-cyan-400" />
                    <span className="text-cyan-300 font-semibold">The Core Problem</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                    There is <span className="text-cyan-400">no unified platform</span> that connects
                    <br />
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      Entire City Ecosystems
                    </span>
                  </h2>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                    {['People', 'Creators', 'Businesses', 'Marketplace', 'Local Economy', 'Community'].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 bg-gray-800/50 border border-gray-700 rounded-xl p-4">
                        <Check className="w-5 h-5 text-cyan-500" />
                        <span className="text-gray-300 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-xl text-gray-300">
                    Cities remain digitally fragmented, with no single platform serving their complete needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Solution Statement */}
        {/* <div className="text-center relative">
          <div className="absolute -inset-6 bg-gradient-to-r from-blue-600/10 via-cyan-600/10 to-emerald-600/10 rounded-3xl blur-3xl opacity-50"></div>
          
          <div className="relative bg-gradient-to-r from-blue-900/30 to-cyan-900/30 backdrop-blur-sm border border-blue-500/30 rounded-3xl p-12">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 px-6 py-3 rounded-full mb-8">
              <Target className="w-5 h-5 text-blue-400" />
              <span className="text-blue-300 font-semibold">The Solution</span>
            </div>
            
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              One <span className="text-blue-400">Safe, AI-Protected</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Digital Ecosystem
              </span>
            </h3>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              A unified platform that solves all these problems while protecting users, rewarding creators, 
              and building stronger city communities.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-gray-300">Creator-First Economy</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <span className="text-gray-300">Fraud-Proof Transactions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                <span className="text-gray-300">Hyper-Local Focus</span>
              </div>
            </div>
            
            <button className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105">
              <span className="relative z-10 flex items-center gap-3">
                Invest in the Solution
                <svg
                  className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </button>
            
            <p className="mt-6 text-sm text-gray-400">
              Join us in building the future of city digital ecosystems
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default SectionB;
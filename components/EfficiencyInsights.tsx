
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TABS = [
  "Recover Refunds",
  "Defend Scrutiny",
  "ED & PMLA Support",
  "CBI Case Liaison",
  "Record Reconstruction"
];

const TAB_DATA = {
  "Recover Refunds": {
    heading: "Recover withheld and delayed refunds",
    points: [
      "Get clear insights into Section 245 adjustments and AIS/26AS mismatches.",
      "Meticulous documentation to resolve high-value verification alerts swiftly."
    ],
    resultStat: "15% increase in recovery rate",
    resultDesc: "W7 forensic reconstruction identifies forgotten claims across past assessment years.",
    stats: [
      { label: 'TOTAL RECOVERED', val: '₹106.5Cr' },
      { label: 'PROCESSED', val: '₹95.0Cr', sub: '(89.4%)' },
      { label: 'AVG DURATION', val: '45 Days' }
    ],
    chartLabels: { left: "Refund Flow", right: "Claim Type" },
    chartValue: "78%",
    chartSub: "Valid"
  },
  "Defend Scrutiny": {
    heading: "Convert scrutiny into a controlled process",
    points: [
      "Expert handling of limited, complete, and faceless assessment notices.",
      "Strategic drafting of replies backed by the latest judicial precedents."
    ],
    resultStat: "92% demand reduction",
    resultDesc: "Case-law driven submissions significantly lower high-pitch assessment risks.",
    stats: [
      { label: 'TOTAL DEMANDS', val: '₹12.4Cr' },
      { label: 'REDUCED', val: '₹11.2Cr', sub: '(90.3%)' },
      { label: 'NOTICE CYCLE', val: '18 Days' }
    ],
    chartLabels: { left: "Demand Gap", right: "Risk Status" },
    chartValue: "92%",
    chartSub: "Reduced"
  },
  "ED & PMLA Support": {
    heading: "Structured defense for PMLA proceedings",
    points: [
      "Confidential guidance for summons, statements, and attachment proceedings.",
      "Building Proceeds of Crime (PoC) defense with forensic financial trails."
    ],
    resultStat: "100% Confidentiality",
    resultDesc: "Absolute data shielding for high-stakes enforcement and attachment matters.",
    stats: [
      { label: 'TOTAL ASSETS', val: '₹450Cr' },
      { label: 'PROTECTED', val: '₹450Cr', sub: '(100%)' },
      { label: 'DEFENSE AGE', val: '14 Mo' }
    ],
    chartLabels: { left: "Asset Flow", right: "Case Status" },
    chartValue: "100%",
    chartSub: "Secured"
  },
  "CBI Case Liaison": {
    heading: "Strategic support for federal investigations",
    points: [
      "Support for CBI summons, FIR responses, and bail applications.",
      "Forensic evidence analysis to counter investigation and trial allegations."
    ],
    resultStat: "24/7 Response Desk",
    resultDesc: "Urgent matter response within 24 hours for summons and search operations.",
    stats: [
      { label: 'ACTIVE CASES', val: '14' },
      { label: 'INQUIRIES', val: '9 Active', sub: '(64%)' },
      { label: 'RESOLUTION', val: 'High' }
    ],
    chartLabels: { left: "Trial Progress", right: "Legal Tier" },
    chartValue: "85%",
    chartSub: "Tier 1"
  },
  "Record Reconstruction": {
    heading: "Audit-ready financial reconstruction",
    points: [
      "Rebuilding records from incomplete data to satisfy high-scrutiny requirements.",
      "Deep audit trails to identify leakage and prepare for verification audits."
    ],
    resultStat: "20% reduction in risk",
    resultDesc: "W7 audit reconstruction uncovers missing documentation before authorities do.",
    stats: [
      { label: 'RECORDS AUDITED', val: '15,240' },
      { label: 'VERIFIED', val: '15,240', sub: '(100%)' },
      { label: 'ACCURACY', val: '99.9%' }
    ],
    chartLabels: { left: "RECON FLOW", right: "AUDIT TIER" },
    chartValue: "99.9%",
    chartSub: "Verified"
  }
};

const EfficiencyInsights: React.FC = () => {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  const currentData = (TAB_DATA as any)[activeTab] || TAB_DATA["Recover Refunds"];

  return (
    <section className="py-24 px-6 bg-white dark:bg-black relative transition-colors duration-500 overflow-hidden" id="insights">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-6xl font-bold font-display text-gray-900 dark:text-white mb-6 leading-tight max-w-4xl mx-auto transition-colors">
            Boost team productivity, profitability, <span className="text-accent italic">and</span> balance workloads
          </h2>
          <p className="text-gray-600 dark:text-white/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed transition-colors">
            Use data-driven and highly customizable reports to see where your team spends its time and pinpoint productivity and profitability gaps
          </p>
        </div>

        {/* Pill Tabs */}
        <div className="flex justify-center mb-12 animate-fade-up px-4" style={{ animationDelay: '100ms' }}>
          <div className="w-full max-w-fit overflow-x-auto scrollbar-hide">
            <div className="inline-flex whitespace-nowrap gap-2 p-1.5 bg-gray-100 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-full transition-colors flex-nowrap">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 flex-shrink-0 ${activeTab === tab
                    ? 'bg-accent text-white shadow-[0_0_20px_rgba(59,130,246,0.4)]'
                    : 'text-gray-500 dark:text-white/60 hover:text-gray-900 dark:hover:text-white hover:bg-white/10'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Feature Card - Updated Background to Blue-Black (#05070a) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative"
          >
            <div className="bg-[#05070a] border border-white/5 dark:border-white/10 rounded-[40px] overflow-hidden p-8 md:p-16 flex flex-col lg:flex-row gap-16 items-center shadow-2xl relative">

              {/* Subtle background effects for depth */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent/10 blur-[100px] pointer-events-none rounded-full" />

              {/* Left Content */}
              <div className="lg:w-2/5 space-y-12 relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold text-white font-display transition-colors">
                  {currentData.heading}
                </h3>

                <ul className="space-y-8">
                  {currentData.points.map((point: string, idx: number) => (
                    <li key={idx} className="flex gap-4">
                      <div className="mt-1 text-accent">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2L14.5 9.5H22L16 14.5L18.5 22L12 17L5.5 22L8 14.5L2 9.5H9.5L12 2Z" />
                        </svg>
                      </div>
                      <p className="text-white/70 text-lg leading-relaxed transition-colors">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>

                <div className="pt-12 border-t border-white/10 transition-colors">
                  <div className="text-3xl font-bold text-accent mb-2 tracking-tight">
                    {currentData.resultStat}
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed max-w-sm transition-colors">
                    {currentData.resultDesc}
                  </p>
                </div>
              </div>

              {/* Right Mockup (Dashboard Visualization) */}
              <div className="lg:w-3/5 w-full relative group z-10">
                <div className="bg-[#0a0c14] border border-white/5 rounded-2xl shadow-2xl p-6 overflow-hidden relative transition-colors">
                  {/* Header/Filter Mockup */}
                  <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/5 transition-colors">
                    <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest transition-colors">Active Filters:</span>
                    <div className="flex gap-2">
                      <span className="bg-accent/10 border border-accent/30 text-accent text-[11px] px-3 py-1 rounded-md flex items-center gap-2 uppercase font-bold tracking-tight">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(59,130,246,1)]"></span> Status: Active
                      </span>
                      <span className="text-white/20 text-[11px] font-bold mx-1 transition-colors">AND</span>
                      <span className="bg-white/5 border border-white/10 text-white/40 text-[11px] px-3 py-1 rounded-md uppercase font-bold tracking-tight transition-colors">
                        Priority: High
                      </span>
                    </div>
                  </div>

                  {/* Main Stats Row */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {currentData.stats.map((stat: any) => (
                      <div key={stat.label} className="bg-white/[0.02] border border-white/5 p-4 rounded-xl transition-colors">
                        <div className="text-[10px] font-bold text-white/20 mb-2 tracking-wide uppercase transition-colors">{stat.label}</div>
                        <div className="text-xl font-bold text-white tracking-tight transition-colors">
                          {stat.val} {stat.sub && <span className="text-accent text-[11px] font-medium ml-1">{stat.sub}</span>}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Charts Row */}
                  <div className="grid grid-cols-5 gap-6">
                    {/* Bar Chart Mockup */}
                    <div className="col-span-3 bg-white/[0.02] border border-white/5 rounded-xl p-5 transition-colors">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest transition-colors">{currentData.chartLabels.left}</span>
                        <span className="text-[9px] bg-accent/20 text-accent px-2 py-0.5 rounded uppercase font-bold border border-accent/30">Live Data</span>
                      </div>
                      <div className="flex items-end justify-between h-32 gap-1.5 pt-4">
                        {[30, 55, 100, 45, 20, 40, 30].map((h, i) => (
                          <div key={i} className="flex-1 flex flex-col items-center gap-2">
                            <motion.div
                              initial={{ height: 0 }}
                              whileInView={{ height: `${h}%` }}
                              className={`w-full rounded-t-sm transition-all duration-500 ${i === 2 ? 'bg-accent shadow-[0_0_20px_rgba(59,130,246,0.5)] border-t-2 border-accent' : 'bg-white/10'}`}
                            ></motion.div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pie Chart Mockup */}
                    <div className="col-span-2 bg-white/[0.02] border border-white/5 rounded-xl p-5 flex flex-col justify-center relative transition-colors">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest transition-colors">{currentData.chartLabels.right}</span>
                        <span className="text-[9px] text-white/10 uppercase font-bold transition-colors">Analyzing</span>
                      </div>
                      <div className="relative aspect-square flex items-center justify-center">
                        <div className="w-full h-full rounded-full border-[10px] border-white/5 flex items-center justify-center relative transition-colors">
                          <div className="absolute inset-0 rounded-full border-[10px] border-accent/60 border-r-transparent border-b-transparent -rotate-45 shadow-[inset_0_0_15px_rgba(59,130,246,0.2)]"></div>
                          <div className="text-center">
                            <div className="text-xl font-bold text-white tracking-tighter transition-colors">{currentData.chartValue}</div>
                            <div className="text-[8px] text-white/20 uppercase font-bold tracking-widest transition-colors">{currentData.chartSub}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Tooltip Mockup (Compliance Shield) */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="absolute bottom-6 right-6 bg-accent shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_20px_rgba(59,130,246,0.3)] rounded-2xl p-4 text-white min-w-[200px] z-20 border border-white/20"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center backdrop-blur-md">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider">Compliance Shield</span>
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-baseline">
                        <span className="text-[9px] text-white/60 font-bold uppercase tracking-widest">Precision Index</span>
                        <span className="text-lg font-black tracking-tighter">99.9%</span>
                      </div>
                      <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full w-[99.9%] bg-white"></div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Grid Overlay */}
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"></div>
                </div>

                {/* Backglow */}
                <div className="absolute -inset-10 bg-accent/20 blur-[120px] rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-1000 -z-10"></div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default EfficiencyInsights;

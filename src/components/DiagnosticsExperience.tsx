import React, { useState, useEffect } from 'react';
import { Activity, Zap, Flame, Wind, BatteryCharging, ShieldCheck, ArrowRight, Play, CheckCircle2, AlertTriangle, RefreshCw } from 'lucide-react';
import { DIAGNOSTIC_SYSTEMS } from '../data/faajiData';
import { DiagnosticSystem } from '../types';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface DiagnosticsExperienceProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const DiagnosticsExperience: React.FC<DiagnosticsExperienceProps> = ({ onOpenBooking }) => {
  const [selectedSystem, setSelectedSystem] = useState<DiagnosticSystem>(DIAGNOSTIC_SYSTEMS[0]);
  const [isScanning, setIsScanning] = useState(false);
  const [activeScanIndex, setActiveScanIndex] = useState(0);

  // Auto scan animation ticker
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScanIndex((prev) => (prev + 1) % DIAGNOSTIC_SYSTEMS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const triggerLiveDiagnosticScan = () => {
    setIsScanning(true);
    let step = 0;
    const scanInterval = setInterval(() => {
      if (step < DIAGNOSTIC_SYSTEMS.length) {
        setSelectedSystem(DIAGNOSTIC_SYSTEMS[step]);
        step++;
      } else {
        clearInterval(scanInterval);
        setIsScanning(false);
      }
    }, 600);
  };

  const getSystemIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame':
        return <Flame className="h-5 w-5" />;
      case 'Zap':
        return <Zap className="h-5 w-5" />;
      case 'Wind':
        return <Wind className="h-5 w-5" />;
      case 'BatteryCharging':
        return <BatteryCharging className="h-5 w-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="h-5 w-5" />;
      default:
        return <Activity className="h-5 w-5" />;
    }
  };

  return (
    <section id="diagnostics" className="py-24 bg-[#08090B] border-b border-[#222631] relative overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#C9A227]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/30 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-blue-400">
            <Activity className="h-3.5 w-3.5 animate-pulse" />
            <span>ADVANCED TELEMETRY & SCANNING</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F5F4F0] uppercase leading-[1.08]">
            YOUR CAR IS SPEAKING. <br />
            <span className="text-gold-gradient">WE KNOW HOW TO LISTEN.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#A7A9AC] leading-relaxed max-w-2xl">
            Modern vehicles rely on complex mechanical and electrical systems. Professional diagnostics help identify problems before they become bigger problems.
          </p>
        </div>

        {/* Technical Diagnostic Visualizer Console */}
        <div className="rounded-2xl border border-[#222631] bg-[#111318] shadow-2xl overflow-hidden">
          
          {/* Top Console Bar */}
          <div className="flex flex-wrap items-center justify-between border-b border-[#222631] bg-[#08090B] px-6 py-4 gap-4">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="font-mono text-xs text-[#A7A9AC] tracking-wider uppercase">
                FAAJI // OBD-II REAL-TIME SCANNER TERMINAL
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={triggerLiveDiagnosticScan}
                disabled={isScanning}
                className="flex items-center gap-1.5 rounded-md border border-blue-500/40 bg-blue-950/40 px-3 py-1.5 text-xs font-mono text-blue-300 hover:bg-blue-900/50 transition-colors disabled:opacity-50"
              >
                <RefreshCw className={`h-3 w-3 ${isScanning ? 'animate-spin' : ''}`} />
                <span>{isScanning ? 'SCANNING SYSTEMS...' : 'SIMULATE FULL SYSTEM SCAN'}</span>
              </button>
            </div>
          </div>

          {/* Console Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left 5 Cols: Interactive Diagnostic Selector */}
            <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-[#222631] p-6 space-y-3 bg-[#0D0F14]">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#A7A9AC] block mb-2">
                ACTIVE VEHICLE MONITORS
              </span>

              {DIAGNOSTIC_SYSTEMS.map((system, idx) => {
                const isSelected = selectedSystem.id === system.id;
                const isCurrentlyScanning = idx === activeScanIndex;

                return (
                  <button
                    key={system.id}
                    onClick={() => setSelectedSystem(system)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between ${
                      isSelected
                        ? 'border-[#C9A227] bg-[#171A21] shadow-lg shadow-[#C9A227]/10'
                        : 'border-[#222631] bg-[#111318]/60 hover:bg-[#171A21] hover:border-[#222631]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-lg border transition-colors ${
                          isSelected
                            ? 'border-[#C9A227] bg-[#C9A227] text-black'
                            : isCurrentlyScanning
                            ? 'border-blue-500 bg-blue-950 text-blue-400'
                            : 'border-[#222631] bg-[#171A21] text-[#A7A9AC]'
                        }`}
                      >
                        {getSystemIcon(system.icon)}
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#F5F4F0] block">
                          {system.name}
                        </span>
                        <span className="text-[10px] font-mono text-[#A7A9AC]">
                          {system.code}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`h-2 w-2 rounded-full ${
                          isSelected
                            ? 'bg-[#C9A227] animate-pulse'
                            : isCurrentlyScanning
                            ? 'bg-blue-400 animate-ping'
                            : 'bg-emerald-500'
                        }`}
                      />
                      <span className="text-[10px] font-mono text-[#A7A9AC] uppercase">
                        {isSelected ? 'ACTIVE' : system.status}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right 7 Cols: Detailed Scan Visualizer & Telemetry */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-[#111318]">
              
              {/* Top Details */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#222631] pb-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#C9A227]">
                      DIAGNOSTIC TARGET: {selectedSystem.code}
                    </span>
                    <h3 className="text-xl font-bold text-[#F5F4F0] uppercase mt-1">
                      {selectedSystem.name}
                    </h3>
                  </div>

                  <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-950/60 border border-emerald-500/40 px-3 py-1 text-xs font-mono text-emerald-400">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>FAAJI PROTOCOL READY</span>
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#A7A9AC] leading-relaxed">
                  {selectedSystem.description}
                </p>

                {/* Common Warning Signs */}
                <div className="rounded-xl border border-[#222631] bg-[#08090B] p-4 space-y-2.5">
                  <span className="text-[11px] font-mono text-[#C9A227] font-semibold uppercase tracking-wider flex items-center gap-1.5">
                    <AlertTriangle className="h-3.5 w-3.5" />
                    <span>When To Request Diagnostics Immediately:</span>
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedSystem.commonSigns.map((sign, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#F5F4F0]/90">
                        <span className="text-[#C9A227] font-mono font-bold">•</span>
                        <span>{sign}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Live Simulated Telemetry Meter */}
                <div className="grid grid-cols-3 gap-3 font-mono text-xs">
                  <div className="rounded-lg border border-[#222631] bg-[#171A21] p-3 text-center">
                    <span className="text-[10px] text-[#A7A9AC] block uppercase">Scan Accuracy</span>
                    <span className="text-sm font-bold text-white">99.8%</span>
                  </div>
                  <div className="rounded-lg border border-[#222631] bg-[#171A21] p-3 text-center">
                    <span className="text-[10px] text-[#A7A9AC] block uppercase">OBD-II & OEM</span>
                    <span className="text-sm font-bold text-blue-400">Multi-Protocol</span>
                  </div>
                  <div className="rounded-lg border border-[#222631] bg-[#171A21] p-3 text-center">
                    <span className="text-[10px] text-[#A7A9AC] block uppercase">Turnaround</span>
                    <span className="text-sm font-bold text-[#C9A227]">15 - 30 Mins</span>
                  </div>
                </div>
              </div>

              {/* Action Button Row */}
              <div className="pt-4 border-t border-[#222631] flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-[#A7A9AC]">
                  Located at Alausa, Ikeja, Lagos
                </span>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => onOpenBooking('VEHICLE DIAGNOSTICS')}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-md bg-[#C9A227] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black hover:bg-[#dbb335] transition-all shadow-md shadow-[#C9A227]/20"
                  >
                    <span>REQUEST DIAGNOSTICS</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

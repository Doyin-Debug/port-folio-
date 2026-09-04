import React, { useState, useEffect } from 'react';
import { Activity, Play, RotateCcw, Cpu, Zap, Server, Shield, Gauge, Check, BarChart3, Globe2 } from 'lucide-react';

export const LiveArchitectureSandbox: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ratelimit' | 'cache' | 'cdn'>('ratelimit');

  // Rate Limiter State
  const [tokens, setTokens] = useState(10);
  const maxCapacity = 10;
  const [rateLog, setRateLog] = useState<{ id: number; timestamp: string; status: 'ALLOW' | 'THROTTLE'; cost: number }[]>([]);
  const [isSpamming, setIsSpamming] = useState(false);

  // Cache Simulator State
  const [cacheQueryKey, setCacheQueryKey] = useState('user:session:99201');
  const [cacheResult, setCacheResult] = useState<{ layer: string; latency: number; hit: boolean } | null>(null);
  const [cacheStats, setCacheStats] = useState({ hits: 24, misses: 2 });

  // Token Refill Interval
  useEffect(() => {
    const timer = setInterval(() => {
      setTokens((prev) => Math.min(maxCapacity, prev + 1));
    }, 1200);
    return () => clearInterval(timer);
  }, []);

  // Request Trigger for Rate Limiter
  const handleSendRateRequest = (isBurst = false) => {
    const cost = isBurst ? 3 : 1;
    const now = new Date().toLocaleTimeString();
    
    if (tokens >= cost) {
      setTokens((prev) => prev - cost);
      setRateLog((prev) => [
        { id: Date.now(), timestamp: now, status: 'ALLOW', cost },
        ...prev.slice(0, 7)
      ]);
    } else {
      setRateLog((prev) => [
        { id: Date.now(), timestamp: now, status: 'THROTTLE', cost },
        ...prev.slice(0, 7)
      ]);
    }
  };

  const handleSimulateCacheLookup = (cached: boolean) => {
    if (cached) {
      setCacheResult({
        layer: 'L1 In-Memory Redis Cluster (Hot Tier)',
        latency: Math.floor(Math.random() * 2) + 1, // 1-2ms
        hit: true
      });
      setCacheStats(prev => ({ ...prev, hits: prev.hits + 1 }));
    } else {
      setCacheResult({
        layer: 'Cold NVMe PostgreSQL Database (Disk Query)',
        latency: Math.floor(Math.random() * 15) + 32, // 32-47ms
        hit: false
      });
      setCacheStats(prev => ({ ...prev, misses: prev.misses + 1 }));
    }
  };

  return (
    <section id="architecture-lab" className="py-20 relative border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#140a2b] border border-purple-500/30 text-purple-300 text-xs font-mono mb-3">
              <Cpu className="w-3.5 h-3.5 text-purple-400" />
              <span>06 // Interactive Engineering Sandbox</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
              Live Architecture &amp; Latency Lab
            </h2>
            <p className="text-purple-200/70 text-sm mt-2 max-w-2xl">
              Interact directly with live architectural simulations: test token-bucket traffic shaping, cache hierarchy response curves, and multi-region routing models.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center p-1 rounded-xl bg-[#120924] border border-purple-500/30">
            <button
              onClick={() => setActiveTab('ratelimit')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                activeTab === 'ratelimit'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-purple-300 hover:text-white'
              }`}
            >
              // Token Bucket
            </button>
            <button
              onClick={() => setActiveTab('cache')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                activeTab === 'cache'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-purple-300 hover:text-white'
              }`}
            >
              // Cache Hierarchy
            </button>
            <button
              onClick={() => setActiveTab('cdn')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                activeTab === 'cdn'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-purple-300 hover:text-white'
              }`}
            >
              // Global Multi-Region
            </button>
          </div>
        </div>

        {/* Interactive Lab Container */}
        <div className="rounded-2xl bg-[#0f071d] border border-purple-500/30 p-6 sm:p-8 shadow-2xl shadow-purple-950/50">
          
          {/* TAB 1: Token Bucket Rate Limiter */}
          {activeTab === 'ratelimit' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-purple-300">Bucket Capacity (Tokens Available):</span>
                    <span className="text-sm font-mono font-bold text-emerald-400">{tokens} / {maxCapacity} tokens</span>
                  </div>
                  {/* Visual Token Level Bar */}
                  <div className="w-full h-4 bg-[#1b0d36] rounded-full overflow-hidden p-0.5 border border-purple-500/30">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 via-purple-500 to-fuchsia-500 rounded-full transition-all duration-300"
                      style={{ width: `${(tokens / maxCapacity) * 100}%` }}
                    />
                  </div>
                  <div className="text-[11px] text-purple-300/70 font-mono mt-1.5 flex justify-between">
                    <span>Auto-refill: +1 token every 1.2s</span>
                    <span>Algorithm: Token Bucket with Burstable Ingress</span>
                  </div>
                </div>

                {/* Control Triggers */}
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => handleSendRateRequest(false)}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold font-mono transition-all shadow-md shadow-purple-600/30 active:scale-95"
                  >
                    <Zap className="w-3.5 h-3.5" />
                    <span>Send API Call (1 Token)</span>
                  </button>

                  <button
                    onClick={() => handleSendRateRequest(true)}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1d0e3b] hover:bg-purple-900/60 border border-purple-500/40 text-purple-200 text-xs font-semibold font-mono transition-all active:scale-95"
                  >
                    <Gauge className="w-3.5 h-3.5 text-amber-400" />
                    <span>Trigger Heavy Burst (3 Tokens)</span>
                  </button>

                  <button
                    onClick={() => setRateLog([])}
                    className="p-2.5 rounded-xl bg-[#170b30] hover:bg-purple-900/40 border border-purple-500/30 text-purple-300 text-xs transition-all"
                    title="Reset Logs"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-[#140a2b] border border-purple-500/20 text-xs text-purple-200/80 space-y-1">
                  <div className="font-bold text-white">// Architectural Insight:</div>
                  <p>In high-throughput Go and Node.js microservices, AK Digital implements distributed token buckets over Redis sliding windows to defend against DDoS and noisy neighbor bottlenecks while guaranteeing sub-millisecond overhead.</p>
                </div>
              </div>

              {/* Log Window */}
              <div className="lg:col-span-6 rounded-xl bg-[#090412] border border-purple-500/30 p-4 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-purple-500/20 text-purple-400 font-bold">
                  <span>// Live Rate Limiter Inspection Stream</span>
                  <span className="text-[10px] text-emerald-400">ACTIVE MONITOR</span>
                </div>

                <div className="space-y-2 min-h-[160px]">
                  {rateLog.length === 0 ? (
                    <div className="text-purple-400/50 text-center py-10">
                      Click "Send API Call" to dispatch simulated traffic across the ingress gateway.
                    </div>
                  ) : (
                    rateLog.map((item) => (
                      <div
                        key={item.id}
                        className={`flex items-center justify-between p-2 rounded-lg text-xs ${
                          item.status === 'ALLOW'
                            ? 'bg-emerald-950/30 border border-emerald-500/30 text-emerald-300'
                            : 'bg-rose-950/30 border border-rose-500/30 text-rose-300'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-purple-400 text-[10px]">{item.timestamp}</span>
                          <span className="font-bold">HTTP 200 /api/v1/stream</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px]">Cost: {item.cost}t</span>
                          <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                            item.status === 'ALLOW' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'
                          }`}>
                            {item.status === 'ALLOW' ? '200 OK' : '429 THROTTLED'}
                          </span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: Cache Hierarchy Simulator */}
          {activeTab === 'cache' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-6 space-y-5">
                <div>
                  <label className="block text-xs font-mono text-purple-300 mb-1.5">Query Key:</label>
                  <input
                    type="text"
                    value={cacheQueryKey}
                    onChange={(e) => setCacheQueryKey(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#140a2b] border border-purple-500/30 text-white font-mono text-xs focus:outline-none focus:border-purple-400"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleSimulateCacheLookup(true)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-semibold shadow transition-all"
                  >
                    Lookup Hot Cache (Hit ~1ms)
                  </button>

                  <button
                    onClick={() => handleSimulateCacheLookup(false)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-[#1a0e36] hover:bg-purple-900/40 border border-purple-500/30 text-purple-200 font-mono text-xs font-semibold transition-all"
                  >
                    Simulate Cache Miss (~38ms)
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-[#140a2b] border border-purple-500/20 text-center">
                    <span className="text-[10px] font-mono text-purple-300 block">HIT RATIO</span>
                    <span className="text-xl font-bold font-mono text-emerald-400">
                      {Math.round((cacheStats.hits / (cacheStats.hits + cacheStats.misses)) * 100)}%
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#140a2b] border border-purple-500/20 text-center">
                    <span className="text-[10px] font-mono text-purple-300 block">L1 REDIS LATENCY</span>
                    <span className="text-xl font-bold font-mono text-purple-300">1.2 ms</span>
                  </div>
                </div>
              </div>

              {/* Cache Inspection View */}
              <div className="lg:col-span-6 rounded-xl bg-[#090412] border border-purple-500/30 p-5 font-mono text-xs space-y-4">
                <div className="text-purple-400 font-bold border-b border-purple-500/20 pb-2">
                  // Cache Storage Hierarchy Result
                </div>

                {cacheResult ? (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-purple-300/70">Matched Target:</span>
                      <span className="text-white font-bold">{cacheResult.layer}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-purple-300/70">End-to-End Latency:</span>
                      <span className={`font-bold ${cacheResult.latency < 5 ? 'text-emerald-400' : 'text-amber-400'}`}>
                        {cacheResult.latency} ms
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-purple-300/70">Cache Status:</span>
                      <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                        cacheResult.hit ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'
                      }`}>
                        {cacheResult.hit ? 'HIT (SERVED IN-MEMORY)' : 'MISS (FALLBACK TO DISK)'}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="text-purple-400/50 text-center py-8">
                    Trigger a lookup to inspect the memory layer resolution.
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 3: Global Multi-Region Latency */}
          {activeTab === 'cdn' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
                
                <div className="p-4 rounded-xl bg-[#140a2b] border border-purple-500/30 space-y-2">
                  <div className="flex items-center justify-between text-purple-300 font-bold">
                    <span>US-East (N. Virginia)</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                  <div className="text-2xl font-bold text-emerald-400">12 ms</div>
                  <div className="text-[10px] text-purple-300/70">Edge Point of Presence: AWS us-east-1</div>
                </div>

                <div className="p-4 rounded-xl bg-[#140a2b] border border-purple-500/30 space-y-2">
                  <div className="flex items-center justify-between text-purple-300 font-bold">
                    <span>EU-Central (Frankfurt)</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                  <div className="text-2xl font-bold text-emerald-400">18 ms</div>
                  <div className="text-[10px] text-purple-300/70">Edge Point of Presence: GCP europe-west3</div>
                </div>

                <div className="p-4 rounded-xl bg-[#140a2b] border border-purple-500/30 space-y-2">
                  <div className="flex items-center justify-between text-purple-300 font-bold">
                    <span>Asia-East (Tokyo)</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                  <div className="text-2xl font-bold text-emerald-400">24 ms</div>
                  <div className="text-[10px] text-purple-300/70">Edge Point of Presence: Cloudflare NRT</div>
                </div>

                <div className="p-4 rounded-xl bg-[#140a2b] border border-purple-500/30 space-y-2">
                  <div className="flex items-center justify-between text-purple-300 font-bold">
                    <span>West Africa (Lagos)</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                  <div className="text-2xl font-bold text-emerald-400">31 ms</div>
                  <div className="text-[10px] text-purple-300/70">Edge Point of Presence: Cloudflare LOS</div>
                </div>

              </div>

              <div className="p-4 rounded-xl bg-[#140a2b] border border-purple-500/20 text-xs text-purple-200/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Globe2 className="w-5 h-5 text-purple-400 shrink-0" />
                  <span>AK Digital deploys edge workers and GeoDNS routing to guarantee sub-50ms response worldwide for all production systems.</span>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Wrench, 
  Sparkles, 
  ShieldCheck, 
  Phone, 
  MessageSquare, 
  ChevronRight, 
  Car, 
  Zap, 
  Wind, 
  Music, 
  Disc, 
  CheckCircle2, 
  ArrowRight,
  Clock,
  MapPin,
  Star,
  Award,
  Cpu,
  Flame,
  HelpCircle,
  Sliders,
  Check,
  Navigation
} from 'lucide-react';

// 自訂 Instagram SVG 圖示
const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function HomePage() {
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  // Google Maps 地址搜尋 / 導航連結 (更新為堡壘街地址)
  const googleMapUrl = "https://www.google.com/maps/search/?api=1&query=香港北角堡壘街10-16號A舖";
  const instagramUrl = "https://www.instagram.com/voguemotorshop";

  return (
    <div className="min-h-screen bg-[#070709] text-slate-100 font-sans selection:bg-amber-500/30 selection:text-amber-200 relative overflow-hidden">
      
      {/* 背景動態酷炫光暈 (Cyber/Neon Ambient Glows) */}
      <div className="fixed top-[-100px] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-amber-500/15 via-orange-600/5 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="fixed top-[40%] -left-[200px] w-[600px] h-[600px] bg-amber-600/10 blur-[160px] pointer-events-none -z-10" />
      <div className="fixed bottom-0 right-0 w-[700px] h-[700px] bg-amber-500/5 blur-[180px] pointer-events-none -z-10" />

      {/* 頂部賽車感導覽列 (Navbar) */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#070709]/80 border-b border-amber-500/15 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo 區塊 */}
          <Link href="/" className="flex items-center group">
            <img 
              src="/logo.png" 
              alt="VOGUE MOTORSHOP Logo" 
              className="h-10 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300" 
            />
          </Link>

          {/* 導覽連結 */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-bold tracking-widest uppercase text-slate-300">
            <Link href="#services" className="hover:text-amber-400 transition-colors">服務清單</Link>
            <Link href="#packages" className="hover:text-amber-400 transition-colors">熱門套餐</Link>
            <Link href="#faq" className="hover:text-amber-400 transition-colors">常見問題</Link>
            <Link href="#booking" className="hover:text-amber-400 transition-colors">即時預約</Link>
          </nav>

          {/* 右側聯絡、社群與預約 */}
          <div className="flex items-center gap-3">
            {/* Instagram (含文字顯示 voguemotorshop) */}
            <a 
              href={instagramUrl} 
              target="_blank" 
              rel="noreferrer"
              className="hidden lg:flex items-center gap-1.5 px-3 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 text-xs font-bold transition"
              title="Instagram @voguemotorshop"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>@voguemotorshop</span>
            </a>

            {/* 行動裝置圖示版 Instagram */}
            <a 
              href={instagramUrl} 
              target="_blank" 
              rel="noreferrer"
              className="lg:hidden p-2.5 rounded-full border border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 transition"
              title="Instagram @voguemotorshop"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            {/* 電話符號 + 電話號碼 61860112 */}
            <a 
              href="tel:61860112" 
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 text-xs font-bold tracking-wider transition backdrop-blur-sm"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>61860112</span>
            </a>

            {/* WhatsApp 按鈕與 Message 符號 */}
            <a 
              href="https://wa.me/85261860112" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 text-xs font-extrabold tracking-wider shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp 即時報價</span>
            </a>
          </div>
        </div>
      </header>

      {/* 🚀 【頂部全寬度門面 Banner 區塊】 */}
      <section className="pt-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden p-[1px] bg-gradient-to-r from-amber-500/50 via-orange-500/30 to-amber-500/50 shadow-2xl shadow-amber-500/20 group">
          <div className="relative h-64 sm:h-96 md:h-[420px] w-full rounded-[23px] overflow-hidden bg-black">
            <img 
              src="/banner.jpg" 
              alt="VOGUE MOTORSHOP 店面 Banner" 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070709]/60 via-transparent to-black/30" />

            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/40 bg-black/60 backdrop-blur-md text-amber-300 text-xs font-bold">
                <Flame className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                <span>VOGUE MOTORSHOP 旗艦門市</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero 區塊：主標題與控制台 */}
      <section className="relative pt-12 pb-20 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* 左側主文案 */}
          <div className="lg:col-span-7 space-y-8">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05]">
              注入超跑級細節 <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
                重塑極致駕馭質感
              </span>
            </h1>

            <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
              VOGUE MOTORSHOP 結合專業汽車性能維修、精密檢測、防刮車身貼膜、頂級結晶鍍膜與車廂無菌消毒。我們以極致細節與嚴謹工藝，為您的尊駕提供最完善的防護與升級。
            </p>

            {/* 按鈕組 */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a 
                href="#booking" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-black text-sm tracking-widest uppercase shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>即時預約工程服務</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href={googleMapUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white/[0.03] border border-amber-500/30 hover:bg-amber-500/10 text-amber-300 font-bold text-sm tracking-wider backdrop-blur-md transition-all"
              >
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>北角堡壘街10-16號A舖</span>
              </a>
            </div>

            {/* 儀表板數據 HUD */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-black text-amber-400">10,000+</div>
                <div className="text-[11px] text-slate-400 tracking-wider">服務車輛次數</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-black text-amber-400">99.8%</div>
                <div className="text-[11px] text-slate-400 tracking-wider">車主極高滿意度</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-black text-amber-400">100%</div>
                <div className="text-[11px] text-slate-400 tracking-wider">正牌原廠材料</div>
              </div>
            </div>

          </div>

          {/* 右側賽車風控制台面板 */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl p-[1px] bg-gradient-to-b from-amber-500/30 via-white/10 to-transparent shadow-xl">
              <div className="bg-[#0b0c10]/95 backdrop-blur-2xl rounded-[23px] p-6 sm:p-8 space-y-5 border border-white/5">
                
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div>
                    <span className="text-[10px] font-bold text-amber-400 tracking-widest uppercase">Quick Info</span>
                    <h3 className="text-lg font-bold text-white">VOGUE 快捷聯絡與地號</h3>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Cpu className="w-4 h-4 animate-pulse" />
                  </div>
                </div>

                <div className="space-y-2.5">
                  <a 
                    href={googleMapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] hover:bg-amber-500/10 border border-white/5 hover:border-amber-500/30 transition group"
                  >
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-amber-400" />
                      <span className="text-xs text-slate-300">門市地址</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs font-bold text-amber-300 group-hover:text-amber-200">
                      <span>北角堡壘街10-16號A舖</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </a>

                  <a 
                    href={instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] hover:bg-amber-500/10 border border-white/5 hover:border-amber-500/30 transition group"
                  >
                    <div className="flex items-center gap-3">
                      <InstagramIcon className="w-4 h-4 text-amber-400" />
                      <span className="text-xs text-slate-300">Instagram</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs font-bold text-amber-300 group-hover:text-amber-200">
                      <span>voguemotorshop</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </a>

                  <a 
                    href="tel:61860112"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] hover:bg-amber-500/10 border border-white/5 hover:border-amber-500/30 transition group"
                  >
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-amber-400" />
                      <span className="text-xs text-slate-300">查詢電話</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs font-bold text-amber-300 group-hover:text-amber-200">
                      <span>61860112</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </a>

                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-amber-400" />
                      <span className="text-xs text-slate-300">營業時間</span>
                    </div>
                    <span className="text-xs font-bold text-slate-200">一至六 09:30 - 19:30</span>
                  </div>
                </div>

                <a 
                  href="https://wa.me/85261860112"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emerald-600/20 border border-emerald-500/40 hover:bg-emerald-600/30 text-emerald-300 font-bold text-xs tracking-wider uppercase transition shadow-lg shadow-emerald-950/50"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp 發送相片即時報價</span>
                </a>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 8 大核心服務清單 */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative border-t border-white/10">
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-amber-400 font-bold">Services Breakdown</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white">全方位汽車服務範疇</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            我們以最精準的技術處理您愛車的每一項需求
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "汽車保養 & 檢測",
              desc: "定期機油濾清器更換、30+項全車電腦OBD-II深層診斷與安全檢查。",
              icon: ShieldCheck,
              tag: "Routine Care"
            },
            {
              title: "性能維修 & 改裝",
              desc: "引擎與波箱故障排查、煞車系統升級、底盤避震異響修復工程。",
              icon: Wrench,
              tag: "Performance"
            },
            {
              title: "車身鍍膜 (Ceramic)",
              desc: "多層結晶漆面保護、極致強效撥水、抗UV紫外線及防酸雨腐蝕。",
              icon: Disc,
              tag: "Protection"
            },
            {
              title: "防刮貼膜 (PPF / Wrap)",
              desc: "隱形車身保護膜（自癒功能）及多款個性化高質感改色膜施工。",
              icon: Car,
              tag: "Styling"
            },
            {
              title: "精細車身打臘",
              desc: "深層去氧化層、鏡面拋光修護、恢復新車般璀璨耀眼光澤。",
              icon: Sparkles,
              tag: "Detailing"
            },
            {
              title: "車廂高溫殺菌",
              desc: "醫療級蒸汽深層殺菌消毒、消除車廂異味、皮革滋養保養。",
              icon: Wind,
              tag: "Hygiene"
            },
            {
              title: "冷氣系統維護",
              desc: "雪種補充（R134a/R1234yf）、冷氣管路清洗、蒸發器異味修復。",
              icon: Zap,
              tag: "Climate"
            },
            {
              title: "高端音響改裝",
              desc: "客製化汽車音響升級、全車三層隔音工程及專業車內音場調校。",
              icon: Music,
              tag: "Audio Upgrade"
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="group relative rounded-2xl p-6 bg-white/[0.02] border border-white/10 hover:border-amber-500/50 hover:bg-gradient-to-b hover:from-amber-500/10 hover:to-transparent transition-all duration-300 backdrop-blur-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono tracking-wider text-slate-500 border border-white/5 px-2 py-1 rounded">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <a 
                href="https://wa.me/85261860112" 
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
              >
                <span>了解詳情</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 熱門套餐 (Packages / Pricing) */}
      <section id="packages" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-amber-400 font-bold">Featured Packages</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white">熱門一站式升級套餐</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            明碼實價，絕無隱藏收費，為不同需求的車主量身訂造
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              name: "全車定期保養套餐",
              desc: "適合日常車輛健康維護與基礎安全檢查",
              items: [
                "全合成頂級機油更換",
                "機油濾清器 (Oil Filter) 更換",
                "30+ 項全車電腦安全系統掃描",
                "煞車系統及底盤狀況檢查",
                "免費補充胎壓及基本清潔"
              ],
              popular: false
            },
            {
              name: "尊貴車身鍍膜護理套餐",
              desc: "給予車漆持久鏡面效果與極致防護",
              items: [
                "全車深層去鐵粉與泥塵清潔",
                "車身漆面鏡面拋光修復",
                "9H 雙層高硬度結晶鍍膜施工",
                "全車玻璃水珠撥水鍍膜",
                "輪圈專用高溫保護鍍膜"
              ],
              popular: true
            },
            {
              name: "車廂無菌深層清潔套餐",
              desc: "徹底消毒殺菌，還原新車級車廂環境",
              items: [
                "醫療級高溫蒸氣全車消毒",
                "車廂地氈及座椅深層抽洗",
                "皮革專用滋養與去污護理",
                "冷氣出風口管道殺菌除異味",
                "車廂臭氧 (O3) 淨化工程"
              ],
              popular: false
            }
          ].map((pkg, idx) => (
            <div 
              key={idx}
              className={`relative rounded-3xl p-8 backdrop-blur-xl border transition-all duration-300 ${
                pkg.popular 
                  ? 'bg-gradient-to-b from-amber-500/15 via-white/[0.04] to-transparent border-amber-500/50 shadow-2xl shadow-amber-500/10' 
                  : 'bg-white/[0.02] border-white/10 hover:border-white/20'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 font-black text-[10px] uppercase tracking-widest shadow-lg">
                  Most Popular · 店長推介
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
              <p className="text-xs text-slate-400 mb-6">{pkg.desc}</p>

              <div className="space-y-3 mb-8">
                {pkg.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <a 
                href="https://wa.me/85261860112" 
                target="_blank"
                rel="noreferrer"
                className={`w-full py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition ${
                  pkg.popular 
                    ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 hover:from-amber-300 hover:to-amber-500 shadow-lg shadow-amber-500/20' 
                    : 'bg-white/[0.05] border border-white/10 hover:bg-white/10 text-white'
                }`}
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp 查詢套餐優惠</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 常見問題 FAQ */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-white/10">
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-amber-400 font-bold">Got Questions?</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">常見問題 (FAQ)</h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "鍍膜 (Ceramic Coating) 與一般打臘有甚麼分別？",
              a: "打臘的效果一般只能維持 1 至 2 個月，主要提供短期光澤；而 9H 結晶鍍膜會在車漆表面形成硬化保護層，效果可維持 1 至 3 年以上，具有防刮、抗氧化及極佳的撥水抗污能力。"
            },
            {
              q: "汽車保養及電腦檢測需時多久？",
              a: "標準機油保養及 30+ 項全車電腦檢測通常可在 1.5 至 2 小時內完成。建議先經 WhatsApp 預約，以便我們為您安排專屬時段。"
            },
            {
              q: "Vogue Motorshop 是否提供代辦驗車服務？",
              a: "是的！我們提供一站式驗車前全車檢測、缺失修復，以及代辦 Transport Department 驗車服務，確保您的愛車順利通過。"
            }
          ].map((faq, index) => (
            <div key={index} className="rounded-2xl p-6 bg-white/[0.02] border border-white/5 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 線上預約 Form Section */}
      <section id="booking" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-amber-500/15 via-amber-600/5 to-transparent border border-amber-500/30 backdrop-blur-2xl shadow-2xl">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black text-white">預約專屬車藝護理</h2>
            <p className="text-slate-300 text-xs sm:text-sm">
              請填寫簡短資料，我們的專業顧問會於 30 分鐘內與您聯絡安排
            </p>

            {bookingSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 space-y-3">
                <CheckCircle2 className="w-12 h-12 mx-auto text-emerald-400 animate-bounce" />
                <h3 className="text-xl font-bold">預約要求已成功送出！</h3>
                <p className="text-xs text-emerald-400/80">我們的團隊將盡快經 WhatsApp 或電話回覆您。</p>
              </div>
            ) : (
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  setBookingSubmitted(true);
                }} 
                className="space-y-4 text-left"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">車主姓名 / 稱呼</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="例如: 陳先生"
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-amber-400 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">聯絡電話</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="例如: 61860112"
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-amber-400 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">主要所需服務</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-[#0b0c10] border border-white/10 text-white text-xs focus:outline-none focus:border-amber-400 transition">
                    <option value="maintenance">汽車保養 / 定期檢測 / 機械維修</option>
                    <option value="beauty">車身鍍膜 / 防刮貼膜 / 拋光打臘</option>
                    <option value="sterilization">車廂高溫蒸氣殺菌消毒</option>
                    <option value="audio">汽車冷氣系統 / 音響改裝</option>
                    <option value="other">其他客製化服務查詢</option>
                  </select>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-black text-xs tracking-widest uppercase shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition active:scale-[0.99]"
                >
                  確認提交預約要求
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 頁尾 Footer */}
      <footer className="border-t border-white/10 bg-[#040406] py-12 px-4 sm:px-6 lg:px-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <img 
              src="/logo.png" 
              alt="VOGUE MOTORSHOP Logo" 
              className="h-8 w-auto object-contain" 
            />
            <span className="hidden sm:inline text-slate-700">|</span>
            <span className="text-slate-400">香港北角堡壘街10-16號A舖</span>
          </div>

          <div className="flex items-center gap-6 text-slate-300">
            <a href={googleMapUrl} target="_blank" rel="noreferrer" className="hover:text-amber-400 transition flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Google Maps 導航</span>
            </a>
            <a href={instagramUrl} target="_blank" rel="noreferrer" className="hover:text-amber-400 transition flex items-center gap-1">
              <InstagramIcon className="w-3.5 h-3.5 text-amber-400" />
              <span>voguemotorshop</span>
            </a>
            <a href="tel:61860112" className="hover:text-amber-400 transition flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>61860112</span>
            </a>
          </div>

          <div className="text-center md:text-right text-slate-600">
            © {new Date().getFullYear()} VOGUE MOTORSHOP. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}
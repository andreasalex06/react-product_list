import { ArrowRight, Sparkles, Star, ShieldCheck, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative w-full bg-slate-950 text-white overflow-hidden lg:h-[calc(100vh-4rem)] lg:max-h-[850px] flex items-center">
      
      {/* Ambient Lighting Background */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-gradient-to-tr from-blue-600/25 to-indigo-500/15 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-20 right-0 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full h-full flex items-center py-8 lg:py-0">
        
        {/* Grid System */}
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-12 lg:items-center w-full">
          
          {/* LEFT COLUMN: Text Content (Span 7) */}
          <div className="lg:col-span-7 flex flex-col items-start justify-center">
            
            {/* Pill Tagline */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-medium text-blue-400 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Next Generation Essentials</span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.08]">
              Elevate Your <br />
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
                Everyday Lifestyle.
              </span>
            </h1>

            <p className="mt-4 max-w-lg text-sm sm:text-base text-slate-400 leading-relaxed">
              Temukan koleksi produk pilihan dengan desain minimalis dan kualitas premium. Dirancang khusus untuk memberikan kenyamanan maksimal setiap hari.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <Button
                asChild
                size="lg"
                className="group h-11 sm:h-12 rounded-full bg-blue-600 px-7 text-sm font-medium text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500 transition-all duration-300"
              >
                <Link to="/products" className="flex items-center justify-center gap-2">
                  Jelajahi Produk
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-11 sm:h-12 rounded-full border-slate-800 bg-slate-900/50 px-7 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white backdrop-blur-sm"
              >
                <Link to="/products">Lihat Koleksi</Link>
              </Button>
            </div>

            {/* Social Proof & Trust Badges */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 w-full flex flex-wrap items-center gap-4 sm:gap-6">
              
              <div className="flex items-center gap-2.5">
                <div className="flex -space-x-2 overflow-hidden">
                  <img className="inline-block h-7 w-7 rounded-full ring-2 ring-slate-950" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="User" />
                  <img className="inline-block h-7 w-7 rounded-full ring-2 ring-slate-950" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="User" />
                  <img className="inline-block h-7 w-7 rounded-full ring-2 ring-slate-950" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="User" />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star className="h-3 w-3 fill-amber-400" />
                    <span className="text-xs font-bold text-white">4.9/5.0</span>
                  </div>
                  <p className="text-[11px] text-slate-400">2k+ pembeli</p>
                </div>
              </div>

              <div className="hidden sm:block h-6 w-px bg-slate-800" />

              <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                <Truck className="h-3.5 w-3.5 text-blue-400" />
                <span>Gratis Ongkir</span>
              </div>

              <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                <ShieldCheck className="h-3.5 w-3.5 text-blue-400" />
                <span>Garansi Resmi</span>
              </div>

            </div>

          </div>

          {/* RIGHT COLUMN: Smaller Showcase Image (Span 5) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Lebar container dibatasi maksimum 320px agar ukuran gambar compact */}
            <div className="relative w-full max-w-[260px] sm:max-w-[280px] lg:max-w-[320px] rounded-2xl border border-slate-800 bg-slate-900/60 p-2 backdrop-blur-xl shadow-2xl">
              
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop"
                  alt="Product Showcase"
                  className="h-full w-full object-cover object-center"
                />

                {/* Badge Top Left */}
                <div className="absolute top-2.5 left-2.5 rounded-full border border-white/20 bg-black/50 px-2.5 py-0.5 backdrop-blur-md">
                  <span className="text-[10px] font-semibold text-white">🔥 Terlaris</span>
                </div>

                {/* Card Info Bottom */}
                <div className="absolute bottom-2.5 inset-x-2.5 rounded-lg border border-white/10 bg-slate-950/85 p-2.5 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[9px] text-slate-400">Headphone Wireless</p>
                      <h3 className="text-xs font-semibold text-white">Pro Audio Studio X</h3>
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] text-slate-400 line-through">Rp 2.999k</span>
                      <p className="text-xs font-bold text-blue-400">Rp 1.899k</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
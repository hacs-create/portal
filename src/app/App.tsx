import { 
  Building, 
  ShieldHalf, 
  Instagram, 
  MessageCircle,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20
    }
  }
};

export default function App() {
  return (
    <div className="min-h-screen flex justify-center bg-[#0A0A0A] text-white selection:bg-white/20">
      <style>{`
        /* --- Fonts & Base --- */
        :root {
          --c-bg: #0A0A0A;
        }

        body { 
          background-color: var(--c-bg);
          /* Dark noise texture */
          background-image: 
            url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E"),
            radial-gradient(circle at 50% 20%, #1a1a1a 0%, #0A0A0A 100%);
          background-size: cover;
          background-attachment: fixed;
        }
        
        .font-serif { 
          font-family: 'Shippori Mincho', serif; 
        }
        
        .font-en { 
          font-family: 'Cormorant Garamond', serif; 
        }

        /* --- Custom Utilities --- */
        .profile-img-box {
          position: relative;
          background: linear-gradient(135deg, #2A2A2A, #1E1E1E);
          box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.8),
                      0 0 0 1px rgba(255, 255, 255, 0.1);
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        
        .glass-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }
        
        .glass-card:active { 
          transform: scale(0.98); 
        }
        
        /* Instagram gradient */
        .instagram-gradient {
          background: linear-gradient(135deg, #f09433 0%, #dc2743 50%, #bc1888 100%);
        }

        /* LINE button dark */
        .line-button {
          background: linear-gradient(135deg, #2A2A2A 0%, #1E1E1E 100%);
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
        }
        
        .line-button:hover {
          background: linear-gradient(135deg, #333333 0%, #252525 100%);
          border-color: rgba(255, 255, 255, 0.25);
        }
      `}</style>

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full max-w-md min-h-screen pb-12 pt-12 px-5 flex flex-col items-center"
      >
        
        {/* Profile Header */}
        <motion.div variants={itemVariants} className="text-center w-full mb-8">
          <div className="w-24 h-24 mx-auto rounded-full profile-img-box flex items-center justify-center mb-4 border-2 border-white/20">
            <div className="text-3xl font-serif text-white tracking-wider font-black">
              HACS
            </div>
          </div>
          
          <h1 className="text-xl font-serif text-white tracking-widest mb-1 font-bold">
            合同会社 HACS
          </h1>
          <p className="text-xs text-gray-400 font-en tracking-wider mb-2 font-semibold">
            INNOVATIVE CRAFTSMANSHIP
          </p>
          <div className="text-xs text-[rgb(251,253,255)] leading-relaxed text-left font-[Noto_Sans_JP] mt-6 bg-white/5 p-4 rounded-lg border border-white/10">
            <p className="mb-4">
              <span className="font-bold border-b border-gray-600 pb-0.5 mb-1 inline-block">モバイル通信事業部</span><br />
              ・東海エリアを中心に活動中<br />
              ・携帯販売業やイベント企画を行なっております！<br />
              ・協業できる企業様募集中
            </p>
            <p>
              <span className="font-bold border-b border-gray-600 pb-0.5 mb-1 inline-block">WEB＆ITサポート事業部</span><br />
              ・東海の個人事業主・店舗向け<br />
              ・PC/ネット解決 → WEBで集客整備まで<br />
              ・訪問・遠隔OK | 見積無料
            </p>
          </div>
        </motion.div>

        {/* Links Section */}
        <motion.div variants={itemVariants} className="w-full space-y-4">

          {/* Corporate Site Link */}
          <a 
            href="https://h-a-c-s.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="glass-card w-full p-5 rounded-xl flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors border border-white/10">
              <Building className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <p className="text-[10px] text-gray-400 font-en tracking-wider font-bold">
                CORPORATE
              </p>
              <p className="text-sm text-white font-bold">
                合同会社HACS 公式サイト
              </p>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors" />
          </a>

          {/* NEXT-ONE Main Service Link */}
          <a 
            href="https://n-e-x-t-one.jp/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="glass-card w-full p-5 rounded-xl flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors border border-white/10">
              <ShieldHalf className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <p className="text-[10px] text-gray-400 font-en tracking-wider font-bold">
                MAIN SERVICE
              </p>
              <p className="text-lg font-serif text-white font-bold">
                NEXT-ONE 事業サイト
              </p>
              <p className="text-[10px] text-gray-400 mt-0.5">
                IT保守 / WEB制作 / 車両管理
              </p>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors" />
          </a>

          {/* Instagram Grid */}
          <div className="grid grid-cols-2 gap-3">
            <a 
              href="https://www.instagram.com/hacsbiz.jp/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card p-4 rounded-xl flex flex-col items-center justify-center gap-2 group"
            >
              <div className="w-12 h-12 rounded-full instagram-gradient text-white flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform">
                <Instagram className="w-6 h-6" />
              </div>
              <div className="text-center mt-1">
                <p className="text-[10px] text-gray-400 font-en tracking-widest mb-0.5">OFFICIAL</p>
                <p className="text-xs text-white font-bold">
                  @hacsbiz.jp
                </p>
              </div>
            </a>
            
            <a 
              href="https://www.instagram.com/nextone_tokai/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card p-4 rounded-xl flex flex-col items-center justify-center gap-2 group"
            >
              <div className="w-12 h-12 rounded-full instagram-gradient text-white flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform">
                <Instagram className="w-6 h-6" />
              </div>
              <div className="text-center mt-1">
                <p className="text-[10px] text-gray-400 font-en tracking-widest mb-0.5">SERVICE</p>
                <p className="text-xs text-white font-bold">
                  @nextone_tokai
                </p>
              </div>
            </a>
          </div>

          {/* LINE Contact Button */}
          <a 
            href="https://line.me/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="line-button w-full p-4 rounded-full text-white text-sm flex items-center justify-center gap-2 transition mt-6 font-bold group"
          >
            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            LINEで依頼・相談窓口
          </a>
          
          {/* Contact Form Link */}
          <a 
            href="#" 
            className="block text-center text-xs text-gray-500 mt-4 hover:text-white transition"
          >
            Webフォームからのお問い合わせ →
          </a>

        </motion.div>

        {/* Footer */}
        <motion.div variants={itemVariants} className="mt-auto pt-10 text-center">
          <p className="text-[10px] text-gray-600 font-en tracking-widest">
            &copy; 2026 HACS LLC.
          </p>
        </motion.div>

      </motion.div>
    </div>
  );
}

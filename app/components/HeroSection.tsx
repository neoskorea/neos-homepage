'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isViewportReady, setIsViewportReady] = useState(false);

  useEffect(() => {
    // 뷰포트 준비 상태 설정
    setIsViewportReady(true);
  }, []);

  return (
    <section
      id="hero-section"
      className={`flex items-center justify-center relative overflow-hidden bg-primary hero-section ${
        isViewportReady ? 'hero-ready' : 'hero-loading'
      }`}
    >
      <div className="text-center relative z-10 px-4">
        <div className="hero-content">
          {/* 로딩 애니메이션 (처음에만 표시) */}
          <div className="loading-container">
            <div className="loading-dots">
              <div className="loading-dot dot1"></div>
              <div className="loading-dot dot2"></div>
              <div className="loading-dot dot3"></div>
            </div>
          </div>

          {/* 타이핑 텍스트 */}
          <div className="typing-container">
            <div className="typing-line line1">
              <span className="typing-text text1" style={{ color: 'transparent' }}>CREATIVE MANAGEMENT</span>
            </div>
            <div className="typing-line line2">
              <span className="typing-text text2" style={{ color: 'transparent' }}>&amp; PRODUCTION</span>
            </div>
          </div>

          {/* 디자인적 배경 요소로 크게 들어가는 텍스트 */}
          <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none background-text" style={{ visibility: 'hidden' }}>
            <h1 className="text-white font-heading text-9xl sm:text-9xl font-bold opacity-5 select-none tracking-widest">
              CREATIVE MANAGEMENT &PRODUCTION
            </h1>
          </div>

          {/* 실제 로고 (나중에 나타남) */}
          <div className="logo-container" style={{ visibility: 'hidden', opacity: 0 }}>
            {/* 글로우 효과 배경 */}
            <div className="logo-glow"></div>
            <Image
              src="/images/neos-logo-white-trans.png"
              alt="neos logo"
              width={280}
              height={90}
              priority
              className="mx-auto px-4 sm:px-8 md:px-12 hero-logo w-48 sm:w-56 md:w-64 lg:w-72 h-auto relative z-10"
            />
          </div>
        </div>
      </div>
      {/* 스크롤 유도 버튼 */}
      <div className="absolute inset-x-0 z-20 flex flex-col items-center justify-center scroll-indicator" style={{ visibility: 'hidden' }}>
        <span className="text-white text-sm tracking-wide opacity-80 text-center">Scroll</span>
        <svg className="mt-1 w-5 h-5 text-white opacity-80" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      <style jsx>{`
        .hero-content {
          position: relative;
          min-height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          will-change: transform, opacity;
        }

        .loading-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 1;
          will-change: transform, opacity;
          animation: fadeOutLoading 0.3s ease-in-out 0.8s forwards;
        }

        .loading-dots {
          display: flex;
          gap: 0.5rem;
          align-items: center;
          justify-content: center;
        }

        .loading-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.9);
          animation: dotPulse 0.8s ease-in-out infinite;
        }

        .loading-dot.dot2 {
          animation-delay: 0.1s;
        }

        .loading-dot.dot3 {
          animation-delay: 0.2s;
        }

        .typing-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 0;
          animation: fadeInTyping 0.3s ease-out 1.1s forwards, fadeOutTyping 0.4s ease-in-out 4.1s forwards;
        }

        .typing-line {
          display: flex;
          justify-content: center;
          margin: 0.3rem 0;
        }

        .line1 {
          margin-bottom: 0.6rem;
        }

        .typing-text {
          color: transparent;
          font-size: 1.4rem;
          font-weight: 400;
          letter-spacing: 0.08em;
          font-family: var(--font-inter), system-ui, -apple-system, sans-serif;
          overflow: hidden;
          white-space: nowrap;
          width: 0;
        }

        .text1 {
          animation: showText1 0.1s ease-out 1.4s forwards, typing1 1.2s steps(18, end) 1.4s forwards;
        }

        .text2 {
          animation: showText2 0.1s ease-out 2.8s forwards, typing2 1.0s steps(12, end) 2.8s forwards;
        }

        .logo-container {
          visibility: hidden;
          opacity: 0;
          transform: scale(0.95);
          animation: fadeInLogo 0.6s ease-out 4.5s forwards;
          z-index: 10;
          position: relative;
        }

        .logo-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120%;
          height: 120%;
          background: radial-gradient(ellipse, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.15) 30%, transparent 70%);
          border-radius: 50%;
          opacity: 0.5;
          z-index: 1;
          animation: breathingGlow 3s ease-in-out 5.1s infinite;
        }

        .hero-logo {
          display: block;
        }

        /* 동적 뷰포트 높이 설정 */
        .hero-section {
          height: 100vh; /* 폴백 */
          height: 100dvh; /* dynamic viewport height */
          min-height: 100vh;
          min-height: 100dvh;
        }

        /* 로딩 상태일 때는 최소 높이 보장 */
        .hero-loading {
          min-height: 100vh;
          min-height: 100dvh;
        }

        /* 준비 완료 상태 */
        .hero-ready {
          height: 100vh;
          height: 100dvh;
        }

        /* 배경 텍스트 애니메이션 */
        .background-text {
          opacity: 0;
          animation: fadeInBackgroundText 0.8s ease-out 1.1s forwards;
        }

        /* 스크롤 버튼 위치 - 실제 보이는 영역 기준 */
        .scroll-indicator {
          bottom: 2rem;
          bottom: max(2rem, calc(env(safe-area-inset-bottom, 0px) + 1rem));
          visibility: hidden;
          animation: showScrollIndicator 0.5s ease-out 5.5s forwards, bounce 2s ease-in-out 6s infinite;
        }

        @keyframes fadeOutLoading {
          0% { 
            opacity: 1; 
            transform: translate(-50%, -50%) scale(1);
          }
          100% { 
            opacity: 0; 
            transform: translate(-50%, -50%) scale(0.9);
          }
        }

        @keyframes dotPulse {
          0%, 100% { 
            opacity: 0.3;
            transform: scale(0.8);
          }
          50% { 
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes fadeInTyping {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes showText1 {
          0% { color: transparent; }
          100% { color: rgba(255, 255, 255, 0.95); }
        }

        @keyframes showText2 {
          0% { color: transparent; }
          100% { color: rgba(255, 255, 255, 0.95); }
        }

        @keyframes typing1 {
          0% { width: 0; }
          100% { width: 100%; }
        }

        @keyframes typing2 {
          0% { width: 0; }
          100% { width: 100%; }
        }

        @keyframes fadeOutTyping {
          0% { 
            opacity: 1; 
            transform: translate(-50%, -50%) scale(1);
          }
          100% { 
            opacity: 0; 
            transform: translate(-50%, -50%) scale(1.05);
          }
        }

        @keyframes fadeInLogo {
          0% { 
            visibility: hidden;
            opacity: 0; 
            transform: scale(0.95);
          }
          1% {
            visibility: visible;
          }
          100% { 
            visibility: visible;
            opacity: 1; 
            transform: scale(1);
          }
        }

        @keyframes breathingGlow {
          0%, 100% { 
            opacity: 0.6;
            transform: translate(-50%, -50%) scale(1);
          }
          50% { 
            opacity: 0.9;
            transform: translate(-50%, -50%) scale(1.15);
          }
        }

        @keyframes fadeInBackgroundText {
          0% { 
            visibility: hidden;
            opacity: 0;
            transform: scale(0.95);
          }
          1% {
            visibility: visible;
          }
          100% { 
            visibility: visible;
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes showScrollIndicator {
          0% { 
            visibility: hidden;
            opacity: 0;
            transform: translateY(10px);
          }
          1% {
            visibility: visible;
          }
          100% { 
            visibility: visible;
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translate3d(0, 0, 0);
          }
          40%, 43% {
            transform: translate3d(0, -8px, 0);
          }
          70% {
            transform: translate3d(0, -4px, 0);
          }
          90% {
            transform: translate3d(0, -2px, 0);
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .hero-content {
            min-height: 100px;
          }

          .loading-dots {
            gap: 0.4rem;
          }

          .loading-dot {
            width: 6px;
            height: 6px;
          }

          .logo-glow {
            width: 130%;
            height: 130%;
          }
          
          .typing-text {
            font-size: 1.1rem;
            letter-spacing: 0.06em;
          }
          
          .line1 {
            margin-bottom: 0.4rem;
          }
        }

        @media (max-width: 480px) {
          .hero-content {
            min-height: 80px;
          }

          .loading-dots {
            gap: 0.3rem;
          }

          .loading-dot {
            width: 5px;
            height: 5px;
          }

          .logo-glow {
            width: 140%;
            height: 140%;
          }
            
          .typing-text {
            font-size: 0.9rem;
            letter-spacing: 0.04em;
          }
          
          .typing-line {
            margin: 0.2rem 0;
          }
          
          .line1 {
            margin-bottom: 0.3rem;
          }
        }
      `}</style>
    </section>
  );
} 
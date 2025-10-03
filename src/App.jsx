import { useEffect, useRef } from 'react';
import { Routes, Route } from "react-router-dom";

import { Footer } from "./components/footer/footer";
import { Hallo } from "./components/hallo/hallo";
import { Header } from "./components/header/head";
import { Hero } from "./components/Hero/hero";
import { LastProject } from "./components/last/last";
import { LastWords } from "./components/lastw/lastw";
import { Principles } from "./components/princ/principles";
import { Shop } from './components/shop/shop';

function App() {

  const scrollSpeed = 1.2;
  const currentScroll = useRef(0);
  const targetScroll = useRef(0);
  const animationFrame = useRef(null);

  useEffect(() => {
    currentScroll.current = window.scrollY;
    targetScroll.current = window.scrollY;

    const smoothScroll = () => {
      const diff = targetScroll.current - currentScroll.current;
      
      if (Math.abs(diff) > 0.5) {
        currentScroll.current += diff * 0.1;
        window.scrollTo(0, currentScroll.current);
        animationFrame.current = requestAnimationFrame(smoothScroll);
      } else {
        currentScroll.current = targetScroll.current;
        window.scrollTo(0, currentScroll.current);
        animationFrame.current = null;
      }
    };

    const handleWheel = (e) => {
      e.preventDefault();
      
      // Sync with actual scroll position when returning to page
      if (animationFrame.current === null) {
        currentScroll.current = window.scrollY;
        targetScroll.current = window.scrollY;
      }
      
      targetScroll.current += e.deltaY * scrollSpeed;
      
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      targetScroll.current = Math.max(0, Math.min(targetScroll.current, maxScroll));
      
      if (!animationFrame.current) {
        animationFrame.current = requestAnimationFrame(smoothScroll);
      }
    };

    const handleKeyDown = (e) => {
      const keyMap = {
        ArrowDown: 100,
        ArrowUp: -100,
        PageDown: 500,
        PageUp: -500,
        Space: 500
      };
      
      if (keyMap[e.key]) {
        e.preventDefault();
        
        // Sync with actual scroll position
        if (animationFrame.current === null) {
          currentScroll.current = window.scrollY;
          targetScroll.current = window.scrollY;
        }
        
        targetScroll.current += keyMap[e.key];
        
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        targetScroll.current = Math.max(0, Math.min(targetScroll.current, maxScroll));
        
        if (!animationFrame.current) {
          animationFrame.current = requestAnimationFrame(smoothScroll);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    
    // Re-sync scroll position when page becomes visible again
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        currentScroll.current = window.scrollY;
        targetScroll.current = window.scrollY;
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  const HomePage = () =>{
    return(<>
      <Header />
      <Hero />
      <Hallo />
      <Principles />
      <LastProject />
      <LastWords />
      <Footer />
    </>)
  }

  return (
    <>
    <Routes >
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<>
              <Header />
              <Shop />
              <Footer />
      </>} />
    </Routes>
    </>
  );
}

export default App;
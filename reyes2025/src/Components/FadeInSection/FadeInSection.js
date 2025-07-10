import React, { useRef, useState, useEffect } from 'react';
import './FadeInSection.css';

function FadeInSection({ children }) {
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const currentPageSectionRef = useRef(null);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        setIsSectionVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } 
    );

    if (currentPageSectionRef.current) {
      intersectionObserver.observe(currentPageSectionRef.current);
    }

    return () => {
      if (currentPageSectionRef.current) {
        intersectionObserver.unobserve(currentPageSectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={currentPageSectionRef}
      className={`fade-in-section ${isSectionVisible ? 'fade-in' : 'fade-out'}`}
    >
      {children}
    </div>
  );
}

export default FadeInSection;

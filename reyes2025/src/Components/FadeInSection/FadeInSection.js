import React, { useState, useEffect, useRef } from 'react';

function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      setVisible(entries[0].isIntersecting);
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    if(domRef.current){
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };

  }, []);

  return (
    <div 
      ref={domRef}
      className={`
        transition-all duration-700 ease-in-out transform
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        ${props.className || ''}
      `}>
      {props.children}
    </div>
  );
}

export default FadeInSection;

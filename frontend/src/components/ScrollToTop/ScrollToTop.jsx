// ScrollToTop.js (Reusable Component)
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // This will run AFTER the route changes and the new component renders
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // Optional: Smooth scrolling
    });
  }, [location]); // The [location] dependency is crucial

  return null; // This component doesn't render anything visible
}

export default ScrollToTop;
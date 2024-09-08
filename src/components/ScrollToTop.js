import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="top" className={`top ${isVisible ? 'show' : ''}`} onClick={scrollToTop}>
      <i className="fa-solid fa-arrow-up fa-bounce"></i>
    </div>
  );
};

export default ScrollToTop;

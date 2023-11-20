// src/hooks/useScrollToSection.tsx
import { useCallback } from 'react';

const useScrollToSection = () => {
  const handleScrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return handleScrollToSection;
};

export default useScrollToSection;

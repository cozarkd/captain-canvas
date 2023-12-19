// src/hooks/useScrollToSection.tsx
import { useCallback } from 'react'

const useScrollToSection = (offset = 70) => { // offset puede ser la altura de tu header sticky
  const handleScrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const sectionRect = section.getBoundingClientRect()
      const sectionTop = sectionRect.top + window.scrollY - offset
      window.scrollTo({ top: sectionTop, behavior: 'smooth' })
    }
  }, [offset])

  return handleScrollToSection
}

export default useScrollToSection

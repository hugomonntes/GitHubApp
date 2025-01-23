'use client'

import { useState, useEffect } from 'react'

export function useSlides(totalSlides: number) {
const [currentSlide, setCurrentSlide] = useState(0)

useEffect(() => {
const handleScroll = (e: WheelEvent) => {
    e.preventDefault()
    if (e.deltaY > 0 && currentSlide < totalSlides - 1) {
    setCurrentSlide(prev => prev + 1)
    } else if (e.deltaY < 0 && currentSlide > 0) {
    setCurrentSlide(prev => prev - 1)
    }
}

const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowDown' && currentSlide < totalSlides - 1) {
    setCurrentSlide(prev => prev + 1)
    } else if (e.key === 'ArrowUp' && currentSlide > 0) {
    setCurrentSlide(prev => prev - 1)
    }
}

window.addEventListener('wheel', handleScroll, { passive: false })
window.addEventListener('keydown', handleKeyDown)

return () => {
    window.removeEventListener('wheel', handleScroll)
    window.removeEventListener('keydown', handleKeyDown)
}
}, [currentSlide, totalSlides])

return { currentSlide }
}
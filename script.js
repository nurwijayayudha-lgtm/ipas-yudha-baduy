/**
 * Script for Cultural Heritage Page
 * Handles:
 * 1. Scroll animations (Intersection Observer)
 * 2. Warisan Budaya Slide transitions
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Fade-in on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-section').forEach(section => {
        observer.observe(section);
    });

    // 2. Warisan Budaya Slide Logic
    const slideTriggers = document.querySelectorAll('.warisan-trigger');
    const slides = document.querySelectorAll('.warisan-slide');

    function showSlide(slideId) {
        // Update Buttons
        slideTriggers.forEach(btn => {
            if (btn.getAttribute('data-target') === slideId) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Update Slides
        slides.forEach(slide => {
            if (slide.id === slideId) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }

    slideTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const targetId = trigger.getAttribute('data-target');
            showSlide(targetId);
        });
    });

    // Initialize first slide
    if (slideTriggers.length > 0) {
        showSlide(slideTriggers[0].getAttribute('data-target'));
    }
});

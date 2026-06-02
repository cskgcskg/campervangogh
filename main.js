/* ═══════════════════════════════════════════════════════
   CAMPER VAN GOGH — Main JavaScript
   ═══════════════════════════════════════════════════════ */

(function () {
    'use strict';

    /* ─── Parallax Hero ─────────────────────────────── */
    const heroParallax = document.querySelector('.hero__parallax');

    function handleParallax() {
        if (!heroParallax) return;
        const scrollY = window.scrollY;
        const heroH = window.innerHeight;
        if (scrollY > heroH) return;
        const offset = scrollY * 0.35;
        heroParallax.style.transform = `translate3d(0, ${offset}px, 0)`;
    }

    /* ─── Scroll-Reveal (IntersectionObserver) ──────── */
    function initReveal() {
        const reveals = document.querySelectorAll('.reveal');
        if (!reveals.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.12,
                rootMargin: '0px 0px -40px 0px',
            }
        );

        reveals.forEach((el) => observer.observe(el));
    }

    /* ─── Dock Navigation ───────────────────────────── */
    const dock = document.getElementById('dock');
    let dockVisible = false;

    function handleDock() {
        if (!dock) return;
        const triggerPoint = window.innerHeight * 0.45;
        const shouldShow = window.scrollY > triggerPoint;

        if (shouldShow !== dockVisible) {
            dockVisible = shouldShow;
            dock.classList.toggle('active', shouldShow);
        }
    }

    /* ─── Dock Active Link Tracking ─────────────────── */
    function initDockTracking() {
        const sections = ['hero', 'features', 'pricing'];
        const dockLinks = dock ? dock.querySelectorAll('.dock__link') : [];

        if (!dockLinks.length) return;

        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id;
                        dockLinks.forEach((link) => {
                            const href = link.getAttribute('href');
                            const isMatch =
                                (href === '#' + id) ||
                                (id === 'hero' && href === '#hero');
                            link.classList.toggle('dock__link--active', isMatch);
                        });
                    }
                });
            },
            {
                threshold: 0.3,
            }
        );

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) sectionObserver.observe(el);
        });
    }

    /* ─── Gallery Drag-to-Scroll ────────────────────── */
    function initGalleryDrag() {
        const strip = document.querySelector('.gallery__strip');
        if (!strip) return;

        let isDown = false;
        let startX;
        let scrollLeft;

        strip.addEventListener('mousedown', (e) => {
            isDown = true;
            strip.style.cursor = 'grabbing';
            startX = e.pageX - strip.offsetLeft;
            scrollLeft = strip.scrollLeft;
        });

        strip.addEventListener('mouseleave', () => {
            isDown = false;
            strip.style.cursor = 'grab';
        });

        strip.addEventListener('mouseup', () => {
            isDown = false;
            strip.style.cursor = 'grab';
        });

        strip.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - strip.offsetLeft;
            const walk = (x - startX) * 1.5;
            strip.scrollLeft = scrollLeft - walk;
        });

        strip.style.cursor = 'grab';
    }

    /* ─── Smooth Scroll for Anchor Links ────────────── */
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener('click', function (e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                const target = document.querySelector(targetId);
                if (!target) return;

                e.preventDefault();
                const offset = 20;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            });
        });
    }

    /* ─── Scroll Handler (throttled via rAF) ────────── */
    let ticking = false;

    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(() => {
                handleParallax();
                handleDock();
                ticking = false;
            });
            ticking = true;
        }
    }

    /* ─── Hero Content Stagger Animation ────────────── */
    function animateHero() {
        const heroContent = document.querySelector('.hero__content');
        if (!heroContent) return;

        const children = heroContent.querySelectorAll('.reveal');
        children.forEach((child, i) => {
            setTimeout(() => {
                child.classList.add('active');
            }, 300 + i * 150);
        });
    }

    /* ─── Init ──────────────────────────────────────── */
    function init() {
        window.addEventListener('scroll', onScroll, { passive: true });
        initReveal();
        initSmoothScroll();
        initGalleryDrag();
        initDockTracking();

        // Trigger initial checks
        handleDock();
        handleParallax();

        // Animate hero on load
        animateHero();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

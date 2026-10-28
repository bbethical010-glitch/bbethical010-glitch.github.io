import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.12,
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          el.classList.add('rv-in');
          el.setAttribute('data-rv-done', 'true');
          obs.unobserve(el);
        }
      });
    }, observerOptions);

    const observeElements = () => {
      const elements = document.querySelectorAll('[data-rv]');
      elements.forEach((el) => {
        if (!el.classList.contains('rv-in') && el.getAttribute('data-rv-done') !== 'true') {
          observer.observe(el);
        }
      });
    };

    observeElements();

    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}

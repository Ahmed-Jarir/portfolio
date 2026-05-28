type RevealOptions = {
  delay?: number;
  y?: number;
};

export function reveal(node: HTMLElement, options: RevealOptions = {}) {
  const { delay = 0, y = 22 } = options;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function show() {
    node.style.opacity = '1';
    node.style.transform = 'translateY(0)';
  }

  if (reducedMotion) {
    show();
    return;
  }

  node.style.opacity = '0';
  node.style.transform = `translateY(${y}px)`;
  node.style.transition =
    'opacity 700ms ease, transform 700ms cubic-bezier(0.22, 1, 0.36, 1)';
  node.style.transitionDelay = `${delay}ms`;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return;
      show();
      observer.disconnect();
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.12 }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}

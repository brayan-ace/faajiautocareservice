import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState<'default' | 'hover' | 'chat' | 'view'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch device
    if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
      setIsTouch(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const chatElement = target.closest('[data-cursor="chat"]');
      const viewElement = target.closest('[data-cursor="view"]');
      const interactive = target.closest('button, a, input, select, textarea, [role="button"]');

      if (chatElement) {
        setCursorState('chat');
      } else if (viewElement) {
        setCursorState('view');
      } else if (interactive) {
        setCursorState('hover');
      } else {
        setCursorState('default');
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  const isSpecial = cursorState === 'chat' || cursorState === 'view';

  return (
    <div
      className="pointer-events-none fixed z-50 transition-transform duration-75 ease-out"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {/* Outer subtle ring */}
      <div
        className={`flex items-center justify-center rounded-full transition-all duration-200 ${
          cursorState === 'chat'
            ? 'h-14 w-14 bg-[#C9A227] text-black font-semibold text-[10px] shadow-lg shadow-[#C9A227]/40 tracking-wider'
            : cursorState === 'view'
            ? 'h-14 w-14 bg-white text-black font-semibold text-[10px] shadow-lg tracking-wider'
            : cursorState === 'hover'
            ? 'h-10 w-10 border border-[#C9A227] bg-[#C9A227]/10'
            : 'h-7 w-7 border border-white/30 bg-white/5'
        }`}
      >
        {cursorState === 'chat' && <span>CHAT</span>}
        {cursorState === 'view' && <span>VIEW</span>}
        {!isSpecial && (
          <div
            className={`h-1.5 w-1.5 rounded-full transition-colors ${
              cursorState === 'hover' ? 'bg-[#C9A227]' : 'bg-white'
            }`}
          />
        )}
      </div>
    </div>
  );
};

import { useSprings, animated } from '@react-spring/web';
import { useEffect, useRef, useState } from 'react';

const SplitText = ({
  text = '',
  className = '',
  delay = 100,
  animationFrom = { opacity: 0, transform: 'translate3d(0,40px,0)' },
  animationTo = { opacity: 1, transform: 'translate3d(0,0,0)' },
  easing = 'easeOutCubic',
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  onLetterAnimationComplete,
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef();
  const animatedCount = useRef(0);

  // Observer logic for triggering animations when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  // Split text into two lines
  const firstLine = 'Your Success Our Integrity';
  const secondLine = 'IT Talent & Consulting, Redefined';

  // Combine all letters for consistent animation indexing
  const allLetters = [...firstLine.split(''), ' ', ...secondLine.split('')];

  // Create springs for each letter
  const springs = useSprings(
    allLetters.length,
    allLetters.map((_, i) => ({
      from: animationFrom,
      to: inView
        ? async (next) => {
            await next(animationTo);
            animatedCount.current += 1;
            if (animatedCount.current === allLetters.length && onLetterAnimationComplete) {
              onLetterAnimationComplete();
            }
          }
        : animationFrom,
      delay: i * delay,
      config: { easing },
    }))
  );

  return (
    <div ref={ref} className={`text-center ${className}`} style={{ textAlign }}>
      {/* First Line */}
      <p className="text-5xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
        {firstLine.split(' ').map((word, wordIndex) => (
          <span
            key={`word-${wordIndex}`}
            className={`inline-block ${word === 'Success' ? 'text-[#6fd1ab] px-1 rounded' : ''}`}
          >
            {word.split('').map((letter, letterIndex) => {
              const index = firstLine
                .split(' ')
                .slice(0, wordIndex)
                .reduce((acc, w) => acc + w.length, 0) + letterIndex;

              return (
                <animated.span
                  key={`first-${index}`}
                  style={springs[index]}
                  className="inline-block transform transition-opacity will-change-transform"
                >
                  {letter}
                </animated.span>
              );
            })}
            <span className="inline-block">&nbsp;</span> {/* Add spacing between words */}
          </span>
        ))}
      </p>

      {/* Second Line */}
      <p className="text-4xl sm:text-5xl lg:text-5xl font-extrabold leading-tight mt-2">
        {secondLine.split('').map((letter, index) => (
          <animated.span
            key={`second-${index}`}
            style={springs[firstLine.length + index + 1]}
            className="inline-block transform transition-opacity will-change-transform"
          >
            {letter === ' ' ? '\u00A0' : letter}
          </animated.span>
        ))}
      </p>
    </div>
  );
};

export default SplitText;

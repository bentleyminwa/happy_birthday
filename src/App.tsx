import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { reasons } from './data';

export default function App() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(
      () => setIndex((prev) => (prev + 1 <= reasons.length ? prev + 1 : prev)),
      6000
    );

    return () => clearTimeout(timer);
  }, [index]);

  const isFinal = index === reasons.length;

  return (
    <div className='app flex-center'>
      <h1 className='header'>Happy Birthday Baby💕</h1>
      <p className='sub-header'>
        You are turning 21, and here are 21 reasons as to why I love you...
      </p>
      <div className='reason-container flex-center'>
        <AnimatePresence mode='wait'>
          {!isFinal ? (
            <motion.div
              key={reasons[index].id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              className='reason-card'
            >
              <h2 className='reason-number'>{reasons[index].id}</h2>
              <p className='reason-text'>{reasons[index].text}</p>
            </motion.div>
          ) : (
            <motion.div
              key='final'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className='reason-card'
            >
              <h2 className=''>🎉 Happy 21st Birthday, my love! 🎉</h2>
              <p className=''>
                You are my reason, my joy, my strength, and my forever. Every
                year has led to this beautiful moment, and I’m so blessed to be
                celebrating you. 💖
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

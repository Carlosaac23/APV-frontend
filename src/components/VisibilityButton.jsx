import { Eye, EyeClosed } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

export default function VisibilityButton({
  toggleVisibility,
  changeVisibility
}) {
  return (
    <>
      <button type='button' aria-label='button' onClick={changeVisibility}>
        <AnimatePresence mode='popLayout' initial={false}>
          <motion.div
            className='absolute top-1/2 right-3 cursor-pointer rounded-full p-2 hover:bg-neutral-200 motion-reduce:transition-none'
            key={toggleVisibility === 'password' ? 'password' : 'text'}
            initial={{ opacity: 0, scale: 0.25, filter: 'blur(4px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.25, filter: 'blur(4px)' }}
            transition={{
              type: 'spring',
              duration: 0.2,
              bounce: 0
            }}
          >
            {toggleVisibility === 'password' ? <EyeClosed /> : <Eye />}
          </motion.div>
        </AnimatePresence>
      </button>
    </>
  );
}

import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'


function PageAnimation({children}) {
  return (
    <div>
      <AnimatePresence>
        <motion.div
        initial={{opacity:0, y:25}}
        animate={{opacity:1, y:0}}
        exist={{opacity:0, y:25}}
        transition={{delay: 0.45}}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}


export default PageAnimation
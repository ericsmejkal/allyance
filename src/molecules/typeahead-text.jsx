import React from 'react'
import { motion } from 'framer-motion'

// Create an array of letters
// prettier-ignore
const string = Array.from([
  'p','o','l','i','c','e',' ','b','r','u','t','a','l','i','t','y',
])

export function TypeaheadText(props) {
  // Add staggering effect to the children of the container
  const containerVariants = {
    before: {},
    after: { transition: { staggerChildren: 0.06 } },
  }

  // Variants for animating each letter
  const letterVariants = {
    before: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 16,
        stiffness: 200,
      },
    },
    after: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 16,
        stiffness: 200,
      },
    },
  }

  return (
    <motion.div
      center={'y'}
      height={26}
      width={'100%'}
      background={''}
      style={{
        display: 'flex', // Set the display value to flex
        justifyContent: 'flex-start', // Center all children elements on the x axis
      }}
      variants={containerVariants}
      initial={'before'}
      animate={'after'}
    >
      {string.map((letter, index) => (
        <motion.div
          key={index}
          width={'auto'} // Set the width to the width of the letter
          height={26} // Set the height to the height of the text
          background={''}
          style={{ position: 'relative' }} // Position elements
          variants={letterVariants}
          {letter === ' ' ? '\u00A0' : letter}
        >
          {letter}
        </motion.div>
      ))}
    </motion.div>
  )
}

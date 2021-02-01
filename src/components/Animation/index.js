/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
import { React, useState } from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import db from '../../../db.json';
/**
 * This is an example of animating shared layouts in Framer Motion 2.
 *
 * The open state of each panel is contained locally to that component. Wrapping
 * them all in the same AnimateSharedLayout component allows them all to animate
 * in response to state changes that affect each other's layout.
 *
 * Try removing AnimateSharedLayout to see how that affects the animation.
 */

export default function App(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <AnimateSharedLayout {...props}>
      <motion.ul layout initial={{ borderRadius: 25 }}>
        {items.map((item) => {
          const [projectName, githubUser] = item
            .replace(/\//g, '')
            .replace('https:', '')
            .replace('.vercel.app', '')
            .split('.');
              <Item key={item} name={projectName} git={githubUser} />
        })}

      </motion.ul>
    </AnimateSharedLayout>
  );
}

function Item({ name, git }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
      <motion.div className="avatar" layout />
      <AnimatePresence>
        {isOpen && <Content key={git} link={git} />}
      </AnimatePresence>
      <motion.p>{name}</motion.p>
    </motion.li>
  );
}

function Content({ link }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.p>{link}</motion.p>
    </motion.div>
  );
}

const items = db.external;

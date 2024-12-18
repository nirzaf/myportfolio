import React from 'react';
import { motion } from 'framer-motion';
import { technologies } from '../constants/technologies';
import { styles } from '../styles';
import { textVariant, fadeIn } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const TechIcon = ({ tech }) => (
  <div
    className='w-[70px] h-[70px] rounded-full bg-white/5 backdrop-blur-sm 
    flex items-center justify-center hover:bg-white/10 transition-all 
    group relative cursor-pointer'
  >
    <img
      src={tech.icon}
      alt={tech.name}
      className='w-[45px] h-[45px] object-contain filter brightness-90 group-hover:brightness-100'
    />
    <div className='absolute -bottom-10 left-1/2 transform -translate-x-1/2 
      bg-black/80 text-white px-2 py-1 rounded text-sm opacity-0 
      group-hover:opacity-100 transition-opacity whitespace-nowrap z-10'>
      {tech.name}
    </div>
  </div>
);

const TechCategory = ({ title, items, index }) => (
  <motion.div
    variants={fadeIn('right', 'spring', 0.1 * index, 0.75)}
    className='w-full'
  >
    <h3 className='text-white font-bold text-[24px] mb-6'>{title}</h3>
    <div className='flex flex-wrap gap-8 mb-10'>
      {items.map((tech, techIndex) => (
        <TechIcon key={tech.name} tech={tech} />
      ))}
    </div>
  </motion.div>
);

const TechStack = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Technical Skills</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      <div className='mt-12 flex flex-col gap-12'>
        <TechCategory title="Frontend" items={technologies.frontend} index={1} />
        <TechCategory title="Backend" items={technologies.backend} index={2} />
        <TechCategory title="Cloud & DevOps" items={technologies.cloud} index={3} />
        <TechCategory title="Databases" items={technologies.database} index={4} />
        <TechCategory title="Testing" items={technologies.testing} index={5} />
        <TechCategory title="Architecture & Tools" items={technologies.architecture} index={6} />
      </div>
    </>
  );
};

export default SectionWrapper(TechStack, 'tech');

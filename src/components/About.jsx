import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { backend, creator, mobile, web } from "../assets";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        With over a decade of experience in software engineering, I specialize in developing 
        enterprise-level solutions using C#/.NET Core, ASP.NET Core, and Azure Cloud Services. 
        Currently serving as a Senior Software Development Specialist at Primary Health Care Corporation 
        in Qatar, I focus on building robust, high-concurrency web applications that deliver exceptional 
        user experiences. My expertise spans microservices architecture, REST APIs, and modern cloud solutions, 
        complemented by strong leadership and mentoring abilities.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        <ServiceCard
          title="Full Stack Development"
          icon={web}
          index={0}
        />
        <ServiceCard
          title="Cloud Architecture"
          icon={backend}
          index={1}
        />
        <ServiceCard
          title="API Development"
          icon={mobile}
          index={2}
        />
        <ServiceCard
          title="DevOps & CI/CD"
          icon={creator}
          index={3}
        />
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

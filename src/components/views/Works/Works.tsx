import { motion } from "framer-motion";

import { styles } from "../../../styles";
import { projects } from "../../../constants";
import { fadeIn, textVariant } from "../../../../utills/motion";
import ProjectCard from "../../Cards/ProjectCard";

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The following projects demonstrate my skills and experience through
          actual examples of my work. The projects are briefly described, have
          links to code repositories and live demos. They reflect my ability to
          solve complex problems, work with different technologies and manage
          projects effectively.
        </motion.p>
      </div>
      
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default Works;

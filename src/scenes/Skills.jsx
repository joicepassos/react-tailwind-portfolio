import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const Skills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-orange-500">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            <p className="mt-10 mb-7">
              My proficiency with databases spans various platforms, enabling me
              to manage and optimize data for robust applications. I work with
              versatile programming languages like PHP, JavaScript, Java, and
              SQL, leveraging leading market frameworks such as Laravel, Spring
              Boot, and React to develop sophisticated and highly scalable
              solutions.
            </p>
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-orange-500 before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Full-Stack Development{" "}
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-orange-400 absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Experience in both front-end and back-end development, building
            responsive and interactive websites.
          </p>
        </motion.div>

        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Agile Methodologies
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-orange-500 absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Efficient in various Agile practices, adept at incremental,
            iterative project management.
          </p>
        </motion.div>

        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Continuous Integration
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-orange-600 absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Strong practice in CI/CD pipeline construction, unit testing, and
            deployment automation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

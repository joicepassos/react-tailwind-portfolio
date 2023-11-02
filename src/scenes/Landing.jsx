import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveMediumScreen ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20
        before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full
        before:border-2 before:border-orange-500 before:z-[-1] before:rounded-full"
          >
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10
        w-full max-w-[400px] md:max-w-[600px] rounded-full"
              src="assets/profile-image.png"
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[400px] md:max-w-[600px] rounded-full"
            src="assets/profile-image.png"
          />
        )}
      </div>
      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Joice{" "}
            <span className="relative text-orange-500 font-semibold">
              Passos
            </span>
          </p>

          <p className="mt-10 mb-7 text-sm text-center md:text-start">
            Full Stack Systems Analyst with a focus on innovation and technical
            growth. With two years of experience, Joice Passos excels in
            crafting solutions across diverse tech stacks, driven by a passion
            for development and a commitment to continuous learning.
          </p>
        </motion.div>
        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 space-x-4 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-orange-500 text-white rounded-full py-3 px-7 font-semibold
      hover:bg-orange-600 transition duration-500 min-w-[140px] h-[50px] flex items-center justify-center"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="bg-orange-500 py-3 px-7 rounded-full font-semibold
      hover:bg-orange-600 transition duration-500 min-w-[140px] h-[50px] flex items-center justify-center"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="text-white hover:text-white w-full h-full flex items-center justify-center font-playfair">
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;

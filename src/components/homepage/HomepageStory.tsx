"use client";

import { motion } from "framer-motion";

function HomepageStory() {
  return (
    <section className="homepage-story" id="story">
      <div className="wrapper">
        <motion.p
          className="homepage-story_first"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          From the ashes of New Westminster’s Pho Pho You restaurant comes{" "}
          <span className="homepage-story_first_highlight">
            District Eleven
          </span>
          . A new concept restaurant run by cooks for those passionate about
          food.
        </motion.p>

        <motion.p
          className="homepage-story_second"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          With an emphasis on bold flavours, honouring Owner and Chef Phi Le’s
          Vietnamese heritage, as well as his interest in Japanese and other
          East Asian cuisines, District Eleven offers dishes both{" "}
          <strong>familiar</strong> and <strong>fresh</strong>.
        </motion.p>
      </div>
    </section>
  );
};

export default HomepageStory;

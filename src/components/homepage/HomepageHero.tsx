import { motion } from "framer-motion";

import HeroButton from "../HeroButton";

function HomepageHero({ data }: any) {
  const reservations = data.generalInfo.reservations;

  return (
    <section className="homepage-hero">
      <div className="wrapper">
        <motion.div
          className="homepage-hero_content"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="homepage-hero_content_words">
            <span className="homepage-hero_content_words_header">
              Late night.
            </span>
            <span className="homepage-hero_content_words_header">
              Asian-fusion.
            </span>
            <span className="homepage-hero_content_words_header">
              Snack bar.
            </span>

            <span className="homepage-hero_content_words_greeting">
              Một, hai, ba, dzô!
            </span>
          </h1>

          <div className="homepage-hero_content_buttons">
            <HeroButton to="/menu" color="white" children="MENU" />
            <HeroButton
              to={reservations}
              color="white"
              children="BOOK A TABLE"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomepageHero;

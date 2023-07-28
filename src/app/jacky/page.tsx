"use client";

import HeroButton from "@/components/HeroButton";
import { motion } from "framer-motion";

export default async function Jacky() {
  return (
    <main className="jacky-page">
      <div className="wrapper">
        <motion.div
          className="homepage-hero_content"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="homepage-hero_content_words">
            <span className="homepage-hero_content_words_header">đụ má</span>
            <span className="homepage-hero_content_words_header">
              you shouldn't be here
            </span>

            <span className="homepage-hero_content_words_greeting">
              Jacky says check out...
            </span>
          </h1>

          <div className="homepage-hero_content_buttons">
            <HeroButton to="/" color="white" children="HOME" />
            <HeroButton to="/menu" color="white" children="MENU" />
          </div>
        </motion.div>
      </div>
    </main>
  );
}

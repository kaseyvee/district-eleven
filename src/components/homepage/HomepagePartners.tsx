"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Via from "../../assets/partners/partner-via.webp";
import Complex from "../../assets/partners/partner-complex.webp";
import Dished from "../../assets/partners/partner-dished.webp";
import Narcity from "../../assets/partners/partner-narcity.webp";
import Ot from "../../assets/partners/partner-ot.webp";

const HomepagePartners: React.FC = () => {
  return (
    <section className="homepage-partners" id="partners">
      <div className="wrapper">
      <motion.div
          className="homepage-partners_right"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p>
            <strong>Modern</strong> takes on Vietnamese classics.
          </p>
          <p>
            <strong>Elevated</strong> nods to Asian street foods.
          </p>
          <p>
            <strong>Novel</strong> and <strong>experimental</strong>{" "}
            Asian-fusion dishes.
          </p>
        </motion.div>

        <motion.div
          className="homepage-partners_left"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p>As seen in:</p>

          <ul className="homepage-partners_left_companies">
            <li>
              <Image src={Via} alt="Vancouver Is Awesome" />
            </li>
            <li>
              <Image src={Complex} alt="Complex" />
            </li>
            <li>
              <Image src={Dished} alt="Dished" />
            </li>
            <li>
              <Image src={Narcity} alt="Narcity" />
            </li>
            <li>
              <Image src={Ot} alt="OpenTable Diners' Choice 2022" />
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default HomepagePartners;

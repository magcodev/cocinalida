import { motion } from "framer-motion";
import { fadeIn } from "variants";

const Header = () => {
  return (
    <motion.nav
      variants={fadeIn("down")}
      initial="initial"
      animate="animate"
      className="header"
    >
      <span className="header-logo" ><a href="/.">LIDAs MESON</a></span>
      <ul>
        <li>
          <a href="/historia">Historia</a>
        </li>
        <li>
          <a href="/platos">Platos</a>
        </li>
        <li>
          <a href="/contactos">Contactos</a>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Header;

import { motion } from "framer-motion";
import { fadeIn } from "variants";
import Link from 'next/link'

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
          <Link href="/historia"><a >Historia</a></Link>          
        </li>
        <li>
          <Link href="/platos">
          <a >Platos</a>
          </Link>
          
        </li>
        <li>
          <Link href="/contactos">
          <a >Contactos</a>
          </Link>

        </li>
      </ul>
    </motion.nav>
  );
};

export default Header;

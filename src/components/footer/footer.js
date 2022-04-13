import * as React from "react"
import * as styles from "./footer.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMobileScreen,
  faEnvelopeOpenText,
} from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <div className={styles.leftFooter}>
          <p>
            <FontAwesomeIcon className={styles.icon} icon={faMobileScreen} />
            Jan Fruytier - 0472/37 57 83
          </p>
          <p>
            <FontAwesomeIcon className={styles.icon} icon={faMobileScreen} />
            Domien De Rycke - 0472/33 30 95
          </p>
          <p>
            <FontAwesomeIcon
              className={styles.icon}
              icon={faEnvelopeOpenText}
            />
            info@humital.be
          </p>
          <p>©Copyright {currentYear} Humital - Made with ❤️</p>
        </div>
        <div className={styles.rightFooter}>
          <p>Privacy Policy</p>
          <p>Sitemap</p>
          <ul>
            <li>
              <Link to="/about">Over Ons</Link>
            </li>
            <li>
              <Link to="/services">Diensten</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import styles from "./Components.module.css"
import { Link } from "react-router-dom"
import Scroll from 'react-scroll'
const ScrollLink = Scroll.ScrollLink
const Header = () => {
    return (
        <div className={styles.mainHeader}>
            <ul className={styles.unorderList}>
                <li><Link to="/"><div className={styles.left}>
                    Home
                </div></Link></li>
                <li><div className={styles.middle}>
                    Projects
                </div></li>
                <li><div className={styles.right}>
                    Contact
                </div></li>
            </ul>
        </div >
    )
}
export default Header
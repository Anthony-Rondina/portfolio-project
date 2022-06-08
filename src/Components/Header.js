import styles from "./Components.module.css"
import { Link } from "react-router-dom"
import Scroll from 'react-scroll'
const ScrollLink = Scroll.ScrollLink
const Header = () => {
    return (
        <div className={styles.mainHeader}>
            <ul className={styles.unorderList}>
                <a href="#Home"><li><div className={styles.left}>
                    Home
                </div></li></a>
                <a href="#Projects"><li><div className={styles.middle}>
                    Projects
                </div></li></a>
                <a href="#Contact"><li><div className={styles.right}>
                    Contact
                </div></li></a>
            </ul>
        </div >
    )
}
export default Header
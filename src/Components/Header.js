import styles from "./Components.module.css"
import { Link } from "react-router-dom"
const Header = () => {
    return (
        <div className={styles.mainHeader}>
            <ul>
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
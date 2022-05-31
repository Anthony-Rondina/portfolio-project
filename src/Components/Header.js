import styles from "./Components.module.css"
import { Link } from "react-router-dom"
const Header = () => {
    return (
        <div className={styles.mainHeader}>
            <Link to="/"><div className={styles.left}>
                Anthony Rondina
            </div></Link>
            <div className={styles.middle}>
                Projects
            </div>
            <div className={styles.right}>
                Contact
            </div>
        </div >
    )
}
export default Header
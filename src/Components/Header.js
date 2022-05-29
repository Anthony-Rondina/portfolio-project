import styles from "./Components.module.css"
const Header = () => {
    return (
        <div className={styles.mainHeader}>
            <div className={styles.left}>
                Anthony Rondina
            </div>
            <div className={styles.middle}>
                Projects
            </div>
            <div className={styles.right}>
                Contact
            </div>
        </div>
    )
}
export default Header
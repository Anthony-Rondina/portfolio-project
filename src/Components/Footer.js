import styles from "./Components.module.css"
const Footer = () => {
    return (
        <div className={styles.mainFooter}>
            <span className={styles.left}>Github</span>
            <span>LinkedIn</span>
            <span>Facebook</span>
            <span className={styles.right}>Instagram</span>
        </div>
    )
}
export default Footer
import styles from "./Components.module.css"
const Footer = () => {
    return (
        <div className={styles.mainFooter}>
            <ul className={styles.unorderList}>
                <li><a href="https://github.com/Anthony-Rondina" target="_blank" className={styles.left}>Github</a></li>
                <li><a href="https://www.linkedin.com/in/arondina/ " target="_blank" className={styles.middle}>LinkedIn</a></li>
                <li> <a href="https://www.facebook.com/anthony.rondina.52"
                    target="_blank" className={styles.middle}>Facebook</a></li>
            </ul>
        </div>
    )
}
export default Footer
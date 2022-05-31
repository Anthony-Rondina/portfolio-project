import styles from "./ShowPage.module.css"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
const CYOA = () => {
    return (
        <div className={styles.mainShowWrapper}>
            <Header />
            <div className={styles.heroImageWrapper}>
                <img className={styles.heroImage} src="https://i.imgur.com/ewp4GtW.jpg" alt="" />
            </div>
            <Footer />
        </div>
    )
}
export default CYOA
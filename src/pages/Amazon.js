import styles from "./ShowPage.module.css"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
const Amazon = () => {
    return (
        <div className={styles.mainShowWrapper}>
            <Header />
            <div className={styles.heroImageWrapper}>
                <img className={styles.heroImage} src="https://i.imgur.com/56H6x0p.png" alt="" />
            </div>
            <Footer />
        </div>
    )
}
export default Amazon
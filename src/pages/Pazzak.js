import styles from "./ShowPage.module.css"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
const Pazzak = () => {
    return (
        <div className={styles.mainShowWrapper}>
            <Header />
            <div className={styles.heroImageWrapper}>
                <img className={styles.heroImage} src="https://i.imgur.com/5SgNbka.png" alt="" />
            </div>
            <Footer />
        </div>
    )
}
export default Pazzak
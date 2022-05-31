import styles from "./ShowPage.module.css"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
const Pokemon = () => {
    return (
        <div className={styles.mainShowWrapper}>
            <Header />
            <div className={styles.heroImageWrapper}>
                <img className={styles.heroImage} src="https://i.imgur.com/je4nlWt.jpg" alt="" />
            </div>
            <Footer />
        </div>
    )
}
export default Pokemon
import styles from "./ShowPage.module.css"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
const Atelier = () => {
    return (
        <div className={styles.mainShowWrapper}>
            <Header />
            <div className={styles.heroImageWrapper}>
                <img className={styles.heroImage} src="https://i.imgur.com/aPydPtB.pnghttps://i.imgur.com/aPydPtB.pnghttps://i.imgur.com/aPydPtB.png" alt="" />
            </div>
            <Footer />
        </div>
    )
}
export default Atelier

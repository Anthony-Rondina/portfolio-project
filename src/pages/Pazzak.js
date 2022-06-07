import styles from "./ShowPage.module.css"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
const Pazzak = () => {
    return (
        <div className={styles.mainShowWrapper}>
            <div className={styles.widthBar}>
                <Header />
                <h2>Pazaak</h2>
                <hr className={styles.line} />
                <h3>vvv Click image to launch the app! vvv</h3>
                <div className={styles.heroImageWrapper}>
                    <a href="https://anthony-rondina.github.io/Pazaak/" target="_blank"><img className={styles.heroImage} src="https://i.imgur.com/5SgNbka.png" alt="" /></a>
                </div>
                <h4>Technical Info</h4>
                <hr className={styles.line} />
                <div className={styles.technology}>
                    <ul className={styles.unorderList}>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                    </ul>
                </div>
                <div className={styles.challengeWrapper}>
                    <div className={styles.challenges}>
                        <ul className={styles.tech}>
                            <li className={styles.techList}>Pixel Perfect Recreation</li>
                            <li className={styles.techList}>AI analyzes over 50 scenarios</li>
                            <li className={styles.techList}>Store/Unlocks Features</li>
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        </div >
    )
}
export default Pazzak
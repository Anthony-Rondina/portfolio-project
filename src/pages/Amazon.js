import styles from "./ShowPage.module.css"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
const Amazon = () => {
    return (
        <div className={styles.mainShowWrapper}>
            <div className={styles.widthBar}>
                <Header />
                <h2>Amazon Clone</h2>
                <hr className={styles.line} />
                <h3>vvv Click image to launch the app! vvv</h3>
                <div className={styles.heroImageWrapper}>
                    <a href="https://anthony-amazon-crud-app.herokuapp.com" target="_blank"><img className={styles.heroImage} src="https://i.imgur.com/56H6x0p.png" alt="" /></a>
                </div>
                <h4>Technical Info</h4>
                <hr className={styles.line} />
                <div className={styles.technology}>
                    <ul className={styles.unorderList}>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>Express</li>
                        <li>Mongoose</li>
                        <li>Node</li>
                    </ul>
                </div>
                <div className={styles.challengeWrapper}>
                    <div className={styles.challenges}>
                        <ul className={styles.tech}>
                            <li className={styles.techList}>Pixel Perfect Recreation</li>
                            <li className={styles.techList}>Session based User Authenticaion</li>
                            <li className={styles.techList}>RESTful APIs, full CRUD functionality</li>
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        </div >
    )
}
export default Amazon
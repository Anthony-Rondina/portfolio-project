import styles from "./ShowPage.module.css"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
const CYOA = () => {
    return (
        <div className={styles.mainShowWrapper}>
            <div className={styles.widthBar}>
                <Header />
                <h2>Choose Your Own Adventure Game</h2>
                <hr className={styles.line} />
                <h3>vvv Click image to launch the app! vvv</h3>
                <div className={styles.heroImageWrapper}>
                    <a href="https://ants-choose-your-own-adventure.herokuapp.com" target="_blank"><img className={styles.heroImage} src="https://i.imgur.com/ewp4GtW.jpg" alt="" /></a>
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
                            <li className={styles.techList}>React hooks</li>
                            <li className={styles.techList}>JWT User Authenticaion</li>
                            <li className={styles.techList}>RESTful APIs, Nested Relational Schemas, Full CRUD Functionality</li>
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        </div >
    )
}
export default CYOA
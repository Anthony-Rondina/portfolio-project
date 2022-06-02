import styles from "./BioPage.module.css"
import Header from "../../Components/Header"
import Footer from "../../Components/Footer"
import { Link } from "react-router-dom"
const BioPage = () => {
    return (
        <div className={styles.MainBioPage}>
            <div className={styles.widthBar}>
                <Header />
                <div className={styles.bioPage}>
                    <div className={styles.bioSection}>
                        <img className={styles.bioImage} src="https://i.imgur.com/KnCMI31.jpg" alt="" />
                        <p className={styles.bioText}>Hello there! My name is Anthony Rondina and I am a software developer commited to providing products of high quality. I love starting a project with nothing and seeing it through until completion. If after you view my work and want to connect, I look forward to speaking with you!</p>
                    </div>
                    <div>
                        <h2>Projects</h2>
                    </div>
                    <hr className={styles.line} />
                    <div className={styles.ProjectSection}>
                        <Link to="/pazaak"><img className={styles.projectImage} src="https://i.imgur.com/5SgNbka.png" alt="" /></Link>
                        <Link to="/pokemon"><img className={styles.projectImage} src="https://i.imgur.com/je4nlWt.jpg" alt="" /></Link>
                        <Link to="/choose-your-own-adventure"><img className={styles.projectImage} src="https://i.imgur.com/ewp4GtW.jpg" alt="" /></Link>
                        <Link to="/amazon"><img className={styles.projectImage} src="https://i.imgur.com/56H6x0p.png" alt="" /></Link>
                        <Link to="/atelier-collab"><img className={styles.projectImage} src="https://i.imgur.com/aPydPtB.png" alt="" /></Link>
                    </div>
                    <div>
                        <h2>Contact</h2>
                    </div>
                    <hr className={styles.line} />
                </div>
                <Footer />
            </div>
        </div>
    )
}
export default BioPage
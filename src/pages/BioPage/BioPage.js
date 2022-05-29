import styles from "./BioPage.module.css"
import Header from "../../Components/Header"
import Footer from "../../Components/Footer"
const BioPage = () => {
    return (
        <div className={styles.MainBioPage}>
            <div className={styles.widthBar}>
                <Header />
                <div className={styles.bioPage}>
                    <div className={styles.bioSection}>
                        <img className={styles.bioImage} src="https://i.imgur.com/KnCMI31.jpg" alt="" />
                        <div className={styles.bioBox}>
                            <p className={styles.bioText}>This is the section where I talk about myself!</p>
                        </div>
                    </div>
                    <div className={styles.ProjectSection}>
                        <img className={styles.projectImage} src="https://i.imgur.com/5SgNbka.png" alt="" />
                        <img className={styles.projectImage} src="https://i.imgur.com/je4nlWt.jpg" alt="" />
                        <img className={styles.projectImage} src="https://i.imgur.com/ewp4GtW.jpg" alt="" />
                        <img className={styles.projectImage} src="https://i.imgur.com/56H6x0p.png" alt="" />
                        <img className={styles.projectImage} src="https://i.imgur.com/aPydPtB.png" alt="" />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}
export default BioPage
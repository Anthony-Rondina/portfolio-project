import styles from "./BioPage.module.css"
import Header from "../../Components/Header"
import Footer from "../../Components/Footer"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import data from "../../data"
const BioPage = () => {
    const [choice, setChoice] = useState(0)
    const Mailto = ({ email, subject, body, children }) => {
        return (
            <a href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{children}</a>
        );
    };

    const pickProject = (input) => {
        setChoice(input)
    }

    useEffect(() => {

    }, [choice])
    return (
        <div className={styles.MainBioPage}>
            <div className={styles.widthBar}>
                <Header />
                <div id="HomeJump" className={styles.bioPage}>
                    <div>
                        <h2>Anthony Rondina</h2>
                    </div>
                    <hr className={styles.line} />
                    <div className={styles.bioSection}>
                        <img className={styles.bioImage} src="https://i.imgur.com/KnCMI31.jpg" alt="" />
                        <p className={styles.bioText}>Hello there! My name is Anthony Rondina and I am a software developer commited to providing products of high quality. I love starting a project from nothing and seeing it through until completion. If after you view my work and want to connect, I look forward to speaking with you!</p>
                    </div>
                    <div class={styles.para}>
                        <div id="ProjectsJump" class={styles.parainner}>

                        </div>
                    </div>
                    <div>
                        <h2>Projects</h2>
                    </div>
                    <hr className={styles.line} />
                    <div className={styles.ProjectSection}>
                        <div onClick={() => { pickProject(0) }}><img className={styles.projectImage} src="https://i.imgur.com/5SgNbka.png" alt="" /></div>
                        <div onClick={() => { pickProject(1) }} ><img className={styles.projectImage} src="https://i.imgur.com/je4nlWt.jpg" alt="" /></div>
                        <div onClick={() => { pickProject(2) }} ><img className={styles.projectImage} src="https://i.imgur.com/ewp4GtW.jpg" alt="" /></div>
                        <div onClick={() => { pickProject(3) }} ><img className={styles.projectImage} src="https://i.imgur.com/56H6x0p.png" alt="" /></div>
                        <div onClick={() => { pickProject(4) }} ><img className={styles.projectImage} src="https://i.imgur.com/aPydPtB.png" alt="" /></div>
                    </div>
                    <hr className={styles.line} />
                    <div className={styles.projectInfo}>
                        <h2>{data[choice].title}</h2>
                        <hr className={styles.line} />
                        <h3>vvv Click image to launch the app! vvv</h3>
                        <div className={styles.heroImageWrapper}>
                            <a href={data[choice].projectLink} target="_blank"><img className={styles.heroImage} src={data[choice].img} alt="" /></a>
                        </div>
                        <h4>Technical Info</h4>
                        <hr className={styles.line} />
                        <div className={styles.technology}>
                            <ul className={styles.unorderList}>
                                {data[choice].techUsed.map((listItem) => {
                                    return (
                                        <>
                                            <li>{listItem}</li>
                                        </>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className={styles.challengeWrapper}>
                            <div className={styles.challenges}>
                                <ul className={styles.tech}>
                                    {data[choice].goals.map((listItem) => {
                                        return (
                                            <>
                                                <li className={styles.techList}>{listItem}</li>
                                            </>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <a className={styles.return} href="#ProjectsJump">BACK TO PROJECTS</a>
                    <hr className={styles.line4} />
                    <div class={styles.para2}>
                        <div class={styles.parainner}>

                        </div>
                    </div>
                    <div>
                        <h2 id="ContactJump">Contact</h2>
                    </div>
                    <hr className={styles.line} />
                    <div className={styles.contactBox}>
                        <p className={styles.contactText}>Thank you for exploring my work! Let's take this to the next level and get a project going!</p>
                        <div className={styles.emailMe}>
                            <hr className={styles.lineWhite} />
                            <a className={styles.emailMeButton} href={`mailto:${"anthony.rondina@icloud.com"}?subject=${encodeURIComponent("Let's Connect!") || ''}&body=${encodeURIComponent("") || ''}`}>Email Me!</a>
                            <a target="_blank" href="https://drive.google.com/file/d/1nB9fI4ZNwQsUhOoT5rKcOr3JAgUR1bzh/view?usp=pdf">Download Resume!</a>
                            <hr className={styles.lineWhite} />
                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}
export default BioPage
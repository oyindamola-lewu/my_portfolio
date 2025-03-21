import styles from "./navbar.module.css";
import Image from "next/image";
import logo from "@/public/logo-10.png";
import downloadIcon from "@/public/download0.png";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image className={styles.logoImage} src={logo} alt="Logo" />        
        <div className={styles.oyindamolaLewu}>Oyindamola Lewu</div>

      </div>
      <div className={styles.taskbar}>
        <div className={styles.aboutMe}><span>About</span></div>
        <div className={styles.skills}><span>Skills</span></div>
        <div className={styles.experience}><span>Experience</span></div>
        <div className={styles.projects}><span>Projects</span></div>
        <div className={styles.contact}><span>Contact Me</span></div>
      </div>
      <div className={styles.button}>
        <span className={styles.resume}>Resume</span>
        <Image className={styles.download} src={downloadIcon} alt="Download Resume" />
      </div>
    </div>
  );
};

export default Navbar;

import brandLogo from "../../assets/images/Golds_Gym_Logo.png";
import adminAvatar from "../../assets/images/Admin_Avatar.jpg";
import { ReactComponent as SearchIcon } from "../../assets/icons/SearchIcon.svg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={brandLogo} alt="Brand Logo" className={styles.brandLogoImg} />
      <div className={styles.inputContainer}>
        <input type="text" placeholder="Search here" className={styles.input} />
        <SearchIcon className={styles.searchIcon} />
      </div>
      <div className={styles.adminUser}>
        <div className={styles.adminDetails}>
          <p style={{ color: "grey" }}>John Doe</p>
          <p style={{ fontWeight: "lighter" }}>Admin</p>
        </div>
        <div className={styles.avatarContainer}>
          <img
            src={adminAvatar}
            alt="Admin Avatar"
            className={styles.adminAvatarImg}
          />
          <span className={styles.onlineBadge} />
        </div>
      </div>
    </header>
  );
};

export default Header;

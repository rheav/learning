import styles from "./Header.module.css";
import igniteLogo from "../assets/Ignite_logo.svg";

const Header = () => {
	return (
		<header className={styles.header}>
			<img src={igniteLogo} alt="Logotipo do Ignite" />
		</header>
	);
};

export default Header;

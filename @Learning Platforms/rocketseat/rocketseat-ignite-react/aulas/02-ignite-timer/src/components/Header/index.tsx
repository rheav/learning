import { HeaderContainer } from "./styles";
import logoIgnite from "../../assets/logo-ignite.svg";
import { Timer, Scroll } from "phosphor-react";
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<HeaderContainer>
			<img
				src={logoIgnite}
				alt=""
			/>{" "}
			<nav>
				<NavLink
					to="/"
					title="timer"
				>
					<Timer size={24} />
				</NavLink>
				<NavLink
					to="/history"
					title="histórico"
				>
					<Scroll size={24} />
				</NavLink>
			</nav>
		</HeaderContainer>
	);
};

export default Header;

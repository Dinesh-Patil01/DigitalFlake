
import { useAuthStore } from "../store/authStore";
import df from "../assets/df_.png";
import logOut from "../assets/logOut.png";

const Header = () => {
	const { user, logout } = useAuthStore();
	console.log("user", user);
	const handleLogout = () => {
		logout();
	};

	return (
		<header className="w-screen mx-auto">
			<div className='p-3 bg-purple-900 flex justify-between items-center'>
				<div className="flex items-center">
					<img className="w-56 h-auto ml-6" src={df} alt="Logo" />
				</div>
				<div className="flex items-center">
					<button onClick={handleLogout} className='flex items-center bg-transparent hover:bg-purple-800 p-2 rounded-lg transition duration-200'>
						<img className="w-12 h-12 mr-8" src={logOut} alt="Logout" />
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;

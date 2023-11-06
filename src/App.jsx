import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import GlobalStyles from "./styles/GlobaleStyles";
import Dashboard from "./pages/Dashboard";
import Booking from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";

function App() {
	return (
		<>
			<GlobalStyles />
			<BrowserRouter>
				<Routes>
					<Route index element={<Navigate replace to="dashboard" />} />
					<Route path="dashboard" element={<Dashboard />} />
					<Route path="booking" element={<Booking />} />
					<Route path="cabins" element={<Cabins />} />
					<Route path="users" element={<Users />} />
					<Route path="settings" element={<Settings />} />
					<Route path="account" element={<Account />} />
					<Route path="login" element={<Login />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";
import styled from "styled-components";

const StyledAppLayout = styled.div`
	display: grid;
	grid-template-columns: 26rem 1fr;
	grid-template-rows: auto 1fr;
	height: 100vh;
`;

const Main = styled.main`
	background: var(--color-grey-50);
	padding: 4rem 4.8rem 6.4rem;
`;

function AppLayout() {
	return (
		<StyledAppLayout>
			<Header />
			<SideBar />
			<Main>
				<Outlet />
			</Main>
		</StyledAppLayout>
	);
}

export default AppLayout;

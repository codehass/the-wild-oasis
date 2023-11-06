import styled from "styled-components";
import GlobalStyles from "./styles/GlobaleStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

const H1 = styled.h1`
	font-size: 30px;
	font-weight: 600;
	background: yellow;
`;

const StyledApp = styled.main`
	background-color: orange;
	padding: 20px;
`;

function App() {
	return (
		<>
			<GlobalStyles />
			<StyledApp>
				<H1>The Wild Oasis</H1>
				<Button onClick={() => alert("check in")}>Check In</Button>
				<Button onClick={() => alert("check out")}>Check out</Button>
				<Input type="number" placeholder="number of guests" />
			</StyledApp>
		</>
	);
}

export default App;

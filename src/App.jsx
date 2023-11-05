import styled from "styled-components";

const H1 = styled.h1`
	font-size: 30px;
	font-weight: 300;
	color: red;
`;

const Button = styled.button`
	font-size: 1.4rem;
	padding: 1.2rem 1.6rem;
	font-weight: 500;
	border-radius: 7px;
	border: none;
	background-color: purple;
	color: white;
	cursor: pointer;
	margin: 20px;
`;

const Input = styled.input`
	border: 1px solid #ddd;
	border-radius: 5pc;
	padding: 0%.8rem 1.2rem;
`;

const StyledApp = styled.div`
	background-color: orange;
	padding: 20px;
`;

function App() {
	return (
		<StyledApp>
			<H1>Hello App</H1>
			<Button onClick={() => alert("check in")}>Check In</Button>
			<Button onClick={() => alert("check out")}>Check out</Button>
			<Input type="number" placeholder="number of guests" />
		</StyledApp>
	);
}

export default App;

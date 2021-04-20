import { Button } from "@material-ui/core";
import { useRouter } from "next/router";
import styled from "styled-components";

function PageNotFound() {
	const router = useRouter();
	return (
		<Container>
			<div>
				<p>
					This is not the page you are looking for.. Right?
				</p>
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png" />
				<p>Oopss!! Better go back!!</p>
				<Button onClick={() => router.push("/")}>BACK</Button>
			</div>
		</Container>
	);
}

const Container = styled.div`
	flex: 1;
	display: grid;
	text-align: center;
	place-items: center;
	justify-content: center;
	height: 100vh;
	background: whitesmoke;

	display: flex;

	div {
		background-color: white;
		padding: 50px;
		box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
		margin: 10px;
	}

	p {
		align-items: center;
		color: darkcyan;
		font-size: 20px;
	}

	button {
		background: darkcyan;

		:hover {
			background: cyan;
		}
	}

	.Que {
		color: cyan !important;
		font-size: 20px;
	}

	img {
		height: 450px;
	}
`;

export default PageNotFound;

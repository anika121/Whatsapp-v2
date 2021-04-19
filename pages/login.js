import styled from "styled-components";
import Head from "next/head";
import {Button} from "@material-ui/core";
import {auth, provider} from "../firebase";

function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider).catch(alert)
    }

    return (
        <Container>
            <Head>
                <title>Login To Whatsapp</title>
            </Head>

            <LoginContainer>
                <Logo src={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png"} />
                <Button onClick={signIn} variant={"outlined"}>Sign in with Google</Button>
            </LoginContainer>
        </Container>
    )
}

export default Login;

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
`;

const LoginContainer = styled.div`
  padding:100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

const Logo = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 50px;
`;

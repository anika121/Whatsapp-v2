import styled from 'styled-components';
import {Avatar} from "@material-ui/core";

function Chat ({ id, users }) {
    return (
        <Container>
            <UserAvatar />
            <p>Recipient email</p>
        </Container>
    )
}

export default Chat;

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 15px;
  word-wrap: break-word;
  transition: all .2s ease;
  
  :hover {
    background-color: #e9eaeb;
  }
`;

const UserAvatar = styled(Avatar)`
  margin: 5px;
  margin-right: 15px;
`;
import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import SearchIcon from '@material-ui/icons/Search';
const Container = styled.div`
  height: 60px;
  padding: 10px 40px;
  display: flex;
  justify-content: space-between;
`;

const LeftMenu = styled.div`
  display: flex;
`;
const Home = styled.div`
  width: 80px;
`;

const NavMenu = styled.div`
  width: 306.9px;
  display: flex;
  outline: solid 1px red;
  justify-content: space-around;
  margin: 6px 10px 0px;
  padding: 14px 6px;
  align-items: center;
`;

const RightMenu = styled.div`
  display: flex;
  border: solid 0px red;
  min-width: 300px;
  max-width: 800px;
  align-items: center;
  justify-content: flex-end;
`;

const Search = styled.div`
  width: 30.47px;
  border: solid 0px red;
  border-radius: 50%;
  &:hover {
    background-color: skyblue;
    color: white;
  }
`;

const Cart = styled.div`
  width: 30.47px;
  border: solid 0px red;
  border-radius: 50%;
`;

const Login = styled.div`
  width: 44.2px;
`;

const Register = styled.div`
  width: 57.61px;
`;

const Write = styled.div`
  display: flex;
  width: 85px;
  border: solid 0px red;
  justify-content: flex-end;
`;

const WriteButton = styled.button`
  padding: 8px 5px 10px;
  font-size: 15px;
  background-color: skyblue;
  color: white;
`;

const Text = styled.p`
  font-size: 18px;
  &:hover {
    color: skyblue;
  }
`;

const TopHeader = () => {
  return (
    <Container>
      <LeftMenu>
        <Home>
          <Text>{`내일의집`}</Text>
        </Home>
        <NavMenu>
          <Text>{`커뮤니티`}</Text>
          <Text>{`스토어`}</Text>
          <Text>{`인테리어시공`}</Text>
        </NavMenu>
      </LeftMenu>

      <RightMenu>
        <Search>
        </Search>
        <Cart >
        </Cart>
        <Login>
          <Text style={{ fontSize:'16px'}}>{`로그인`}</Text>
        </Login>
        {'|'}
        <Register>
          <Text style={{ fontSize:'16px'}}>{`회원가입`}</Text>
        </Register>
        <Write>
          <WriteButton>{`글쓰기 <>`}</WriteButton>
        </Write>
      </RightMenu>
    </Container>
  );
}

export default TopHeader;
<<<<<<< HEAD
import { useState } from "react";
import { useLocation, useParams } from "react-router";
import styled from "styled-components";


const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface RouteParams {
  coinId: string;
}

interface ILocation {
  state:{
    name: string;
  };
}

function Coin() {
  const [loading, setLoading] = useState(true);
  const {coinId} =  useParams<string>();
  const {state} = useLocation() as ILocation;
  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading,,,"}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
=======
import { useParams } from "react-router";

interface Params {
  coinId: string;
}

function Coin() {
  const {coinId} = useParams();
  
  return <h1>Coin: {coinId}</h1>;
>>>>>>> 74f2e1e52860765014c44a7806ba8ad442962513
}

export default Coin;
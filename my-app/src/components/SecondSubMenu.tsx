import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function SecondSubMenu() {
  return (
    <Wrap>
      <Container>
        <Card>
          <Text>
            <b>닿다</b>에게 <br />
            <b>궁금</b>한게 <br />
            있어요
          </Text>
        </Card>
        <Card></Card>
      </Container>
    </Wrap>
  );
}
const Wrap = styled.div`
  width: 100%;
  height: 100%;
`;

const SubMenuBar = styled(Link)`
  display: block;
  width: 100%;
  ${({ theme }) => theme.common.defaultButton}
`;

const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-gap: 6%;
  grid-auto-rows: repeat(auto-fill);
`;
const Card = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 15px 15px 15px 15px;
  box-shadow: 0px 0px 5px #c8c8c8;
  background: black;
`;

const Text = styled.div`
  position: absolute;
  font-size: 2rem;
  padding: 10px;
  color: white;
`;

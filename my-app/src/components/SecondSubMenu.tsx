import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function SecondSubMenu() {
  return (
    <Wrap>
      <Container>
        <Card>
          <img className="bugReport" src="../images/bugReport.png"></img>
        </Card>
        <Card>
          <img className="eduCoding" src="../images/eduCoding.png"></img>
        </Card>
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
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const Card = styled.div`
  .bugReport {
    width: 100%;
    height: 100%;
    border-radius: 15px 15px 15px 15px;
  }
  .eduCoding {
    width: 100%;
    height: 100%;
    border-radius: 15px 15px 15px 15px;
  }
`;

const Text = styled.div`
  position: absolute;
  padding: 10px;
  color: white;

  // grid-gap: 6%;
  // grid-auto-rows: repeat(auto-fill);
  // border-radius: 15px 15px 15px 15px;
  // box-shadow: 0px 0px 5px #c8c8c8;
`;

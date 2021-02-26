import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function State() {
  return (
    <Wrap>
      <Container>
        <StateWrap>
          <StateText>출석</StateText>
          <StateIcons src="../images/nap.png" alt="낮잠"></StateIcons>
        </StateWrap>
        <StateWrap>
          <StateText>투약</StateText>
          <StateIcons src="../images/nap.png" alt="낮잠"></StateIcons>
        </StateWrap>
        <StateWrap>
          <StateText>낮잠</StateText>
          <StateIcons src="../images/nap.png" alt="낮잠"></StateIcons>
        </StateWrap>
        <StateWrap>
          <StateText>식사</StateText>
          <StateIcons src="../images/nap.png" alt="낮잠"></StateIcons>
        </StateWrap>
      </Container>
    </Wrap>
  );
}
const Wrap = styled.div`
  width: 100%;
  display: flex;
`;
const Container = styled.div`
  display: grid;
  width: 100%;
  height: 70%;
  grid-template-columns: repeat(2, 1fr);
  gap: 10%;
  align-self: center;
`;
const StateWrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;

  ${({ theme }) => theme.common.stateDiv}
`;
const StateIcons = styled.img`
  widht: 40px;
  height: 40px;
  margin-left: 10px;
`;
const StateText = styled.label`
  place-self: center;
`;

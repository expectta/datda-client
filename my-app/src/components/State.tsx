import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { JsxEmit } from 'typescript';
interface propsType {
  isCheck: boolean;
  isOk: boolean;
  isSleep: boolean;
  isEat: boolean;
  please: boolean;
}
export default function State({
  isCheck,
  isOk,
  isSleep,
  isEat,
  please,
}: propsType) {
  console.log(isCheck, ' =출석', isOk, '=완료', isSleep, '=낮잠');
  return (
    <Wrap>
      <Container>
        <StateWrap nowState={isCheck}>
          <StateText>출석</StateText>
          <StateIcons src="../images/nap.png" alt="출석"></StateIcons>
        </StateWrap>
        <StateWrap nowState={isOk}>
          <StateText>투약</StateText>
          <StateIcons src="../images/nap.png" alt="투약"></StateIcons>
        </StateWrap>
        <StateWrap nowState={isSleep}>
          <StateText>낮잠</StateText>
          <StateIcons src="../images/nap.png" alt="낮잠"></StateIcons>
        </StateWrap>
        <StateWrap nowState={isEat}>
          <StateText>식사</StateText>
          <StateIcons src="../images/nap.png" alt="낮잠"></StateIcons>
        </StateWrap>
      </Container>
    </Wrap>
  );
}
const Wrap = styled.div`
  width: 100%;
`;
const Container = styled.div`
  display: grid;
  width: 100%;
  padding: 4% 0% 4% 0%;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  grid-gap: 10px;
  align-self: center;
`;
const StateWrap = styled.div<any>`
  height: 100%;
  width: 100%;
  border: 2px solid #d4d4d4;
  border-radius: 5px;
  display: flex;
  ${(props) =>
    props.nowState &&
    css`
      border: 2px solid #6f6eff;
      div {
        color: #6f6eff;
      }
    `}
`;
const StateIcons = styled.img`
  width: 20px;
  height: 30px;
  display: block;
  flex: 1 auto;
`;
const StateText = styled.div`
  flex: 1 auto;
  text-align: center;
  color: #7f7b7b;
  font-size: 1.2rem;
  place-self: center;
`;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { JsxEmit } from 'typescript';
interface propsType {
  type: string;
  isCheck: boolean;
  isOk: boolean;
  isSleep: boolean;
  isEat: boolean;
  please: boolean;
}
export default function State({
  type,
  isCheck,
  isOk,
  isSleep,
  isEat,
  please,
}: propsType) {
  console.log(isCheck, ' =출석', isOk, '=완료', isSleep, '=낮잠');
  return (
    <Wrap>
      <Container type={type}>
        <StateWrap nowState={isCheck}>
          <StateText>출석</StateText>
          <StateIcons
            src={
              isCheck ? '../images/check-white.png' : '../images/check-gray.png'
            }
            alt="출석"
          ></StateIcons>
        </StateWrap>
        <StateWrap nowState={isOk}>
          <StateText>투약</StateText>
          <StateIcons
            src={
              isOk
                ? '../images/medicine-white.png'
                : '../images/medicine-gray.png'
            }
            alt="투약"
          ></StateIcons>
        </StateWrap>
        <StateWrap nowState={isSleep}>
          <StateText>낮잠</StateText>
          <StateIcons
            src={
              isSleep ? '../images/nap-white.png' : '../images/sleep-gray.png'
            }
            alt="낮잠"
          ></StateIcons>
        </StateWrap>
        <StateWrap nowState={isEat}>
          <StateText>식사</StateText>
          <StateIcons
            src={isEat ? '../images/meal-white.png' : '../images/meal-gray.png'}
            alt="낮잠"
          ></StateIcons>
        </StateWrap>
      </Container>
    </Wrap>
  );
}
const Wrap = styled.div`
  width: 100%;
`;
const Container = styled.div<any>`
  display: grid;
  width: 100%;
  padding: 4% 0% 4% 0%;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  grid-gap: 10px;
  align-self: center;
  ${(props) =>
    props.type === '원아 상태관리' &&
    css`
      display: flex;
      padding: 0;
      width: 98%;
    `}
`;
const StateWrap = styled.div<any>`
  height: 100%;
  width: 100%;
  align-items: center;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0px 0px 5px #c8c8c8;
  display: flex;
  ${(props) =>
    props.nowState &&
    css`
      background: #6f6eff;
      span {
        color: white;
      }
    `}
`;
const StateIcons = styled.img`
  width: 2rem;
  height: 2rem;
  margin: 4%;
`;

const StateText = styled.span`
  flex: 1 auto;

  color: #7f7b7b;
  font-size: 1.2rem;
`;

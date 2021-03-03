import React from 'react';
import styled from 'styled-components';

export default function TextAreaForm() {
  return (
    <>
      {' '}
      <TextBox placeholder="내용작성"></TextBox>
    </>
  );
}
const TextBox = styled.textarea`
  width: 100%;
  padding: 2%;
  height: 98%;
  outline: none;
  border: 0px;
  resize: none;
  ::placeholder {
    color: #dbdbdb;
  }
  border-radius: 15px 15px 15px 15px;
  box-shadow: 0px 0px 5px #c8c8c8;
`;

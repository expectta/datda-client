import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface Props {
  children: any;
  setChildren: any;
}
function AddChildren({ children, setChildren }: Props) {
  const [input, setInput] = useState({ name: '' });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInput({ ...input, name: value });
  };
  //아이 추가
  const addChild = (value: string) => {
    setChildren([...children, { name: value }]);
  };

  //아이 삭제
  const deleteChild = (value: string) => {
    const filtered = children.filter((child: any) => {
      return child.name !== value;
    });
    setChildren(filtered);
  };

  //axios 요청

  return (
    <Wrap>
      <ContentCard>
        <h1>아이를 추가하세요</h1>
        <div>
          <div>현재 아이들</div>
          {children.map((child: any) => (
            <div>
              <span>{child.name}</span>
              <button
                onClick={() => {
                  deleteChild(child.name);
                }}
              >
                x
              </button>
            </div>
          ))}
        </div>
        <div>
          <span>이름</span>
          <input type="text" onChange={(e) => onChange(e)}></input>
          <button
            onClick={() => {
              addChild(input.name);
            }}
          >
            추가
          </button>
        </div>
        <div>
          <Link to="/main/profile">
            <Button>완료</Button>
          </Link>
        </div>
      </ContentCard>
    </Wrap>
  );
}

export default AddChildren;

const Wrap = styled.div`
  width: 100%;
  height: 97%;
`;

const ContentCard = styled.div`
  ${({ theme }) => theme.common.contentCardDiv}
`;
const Title = styled.div`
  ${({ theme }) => theme.common.contentTitle}
`;
const Button = styled.button`
  ${({ theme }) => theme.common.defaultButton}
  margin : 0 5% 0 5%;
`;

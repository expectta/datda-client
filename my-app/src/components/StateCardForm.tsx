import react from 'react';
import styled from 'styled-components';
import { State } from './Index';

export default function StateCardForm() {
  return (
    <>
      <StateCard>
        <Wrapper>
          <Avatar>
            <AvatarImage src="../images/profile.png"></AvatarImage>
          </Avatar>
          <StateWrapper>
            <NameWrapper>
              <Institution>{'밀알어린이집'}</Institution>
              <Class>{'새싹반'}</Class>
              <Name>{'이유정'}</Name>
            </NameWrapper>
            <State
              type={'원아 상태관리'}
              isCheck={false}
              isOk={false}
              isSleep={false}
              isEat={false}
              please={false}
            ></State>
          </StateWrapper>
        </Wrapper>
      </StateCard>
    </>
  );
}
const StateCard = styled.div`
  width: 100%;
  margin-top: 1%;
  margin-bottom: 1%;
  height: fit-content;
  display: flex;
  ${({ theme }) => theme.common.stateCardDiv}
`;
const Avatar = styled.div`
  width: 75px;
  height: auto;
  margin: 1%;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 0px 5px #c8c8c8;
`;
const AvatarImage = styled.img`
	width: 100%;
	height: 100%;
}`;
const Wrapper = styled.div`
  width: 100%;
  padding: 1%;
  display: flex;
`;

const StateWrapper = styled.span`
  width: 100%;
  height: 100%;
  padding: 2%;
`;
const Institution = styled.span`
  width: 100%;
  height: 100%;
  color: lightgray;
`;
const Class = styled.span`
  width: 100%;
  height: 100%;
  margin-left: 10px;
  color: lightgray;
`;
const Name = styled.span`
  width: 100%;
  height: 100%;
  margin-left: 10px;
  font-size: 1.2rem;
`;

const NameWrapper = styled.div`
  width: 100%;
  heitht: 100%;
`;

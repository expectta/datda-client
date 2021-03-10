import React, { useState } from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import { notice } from '../assets/testdata';
import { ListInnerCard } from './Index';
interface propsType {
  title: string;
  fristCategory?: string;
  secondCategory?: string;
  contents: any;
  handleChangeNotice?: any;
  permission: string;
  location: RouteComponentProps['location'];
  history: RouteComponentProps['history'];
  match: RouteComponentProps['match'];
}
function ListForm({
  contents,
  permission,
  title,
  fristCategory,
  secondCategory,
  handleChangeNotice,
  match,
}: propsType) {
  const PREVIOUS_PAGE = -1;
  //탭 메뉴 상태
  const [clickedMenu, setClickedMenu] = useState(0);
  //카테고리 상태
  const [category, setCategory] = useState({
    fristCategory: fristCategory,
    secondCategory: secondCategory,
  });
  // 탭 메뉴 변경 핸들러
  const handleChangeMenu = (menu: number, category?: string) => {
    setClickedMenu(menu);
    console.log(fristCategory, '카테고리 뭐냐고');
    handleChangeNotice(category);
  };
  console.log('현재 url', match.path);
  return (
    <Wrap>
      <Title>{title}</Title>
      <CategoryWrap>
        <Category>
          <Text
            checked={clickedMenu}
            name={fristCategory}
            className={clickedMenu === 0 ? 'active' : ''}
            onClick={() => handleChangeMenu(0, category.fristCategory)}
          >
            {category.fristCategory}
          </Text>
        </Category>
        <Category>
          <Text
            checked={clickedMenu}
            className={clickedMenu === 1 ? 'active' : ''}
            onClick={() => handleChangeMenu(1, category.secondCategory)}
          >
            {category.secondCategory}
          </Text>
        </Category>
        {/* <CategoryYear>년도별 검색</CategoryYear> */}
      </CategoryWrap>
      {contents.length > 0 ? (
        <>
          <CardWrapper>
            {contents.map((element: any, index: number) => {
              return (
                <ListInnerCard
                  key={index}
                  content={element}
                  title={element.title}
                  // category={notice.category}
                  // createAt={notice.created_at}
                ></ListInnerCard>
              );
            })}
          </CardWrapper>
          <>
            {(() => {
              console.log(title, ' = 타이틀 ', permission, '= 권한');
              if (title === '알림장' && permission === 'institution') {
                return null;
              }
              if (
                title === '투약의뢰서' &&
                (permission === 'institution' || permission === 'teacher')
              ) {
                return null;
              }
              if (title === '공지사항' && permission === 'parent') {
                return null;
              }
              return (
                <ButtonWrapper>
                  <WireButton to={`${match.path}/write`}>작성</WireButton>
                  <GoListButton onClick={() => history.go(PREVIOUS_PAGE)}>
                    {' '}
                    홈
                  </GoListButton>
                </ButtonWrapper>
              );
            })()}
          </>
        </>
      ) : (
        <LoadingWrapper>
          <Loader id="loadingImage" src="../images/loading.gif"></Loader>
        </LoadingWrapper>
      )}
    </Wrap>
  );
}
export default withRouter(ListForm);
const Wrap = styled.div`
  width: 100%;
  height: 100%;
`;

const ContentCard = styled.div`
  margin-bottom: 3%;
  ${({ theme }) => theme.common.contentCardDiv}
`;
const Title = styled.div`
  ${({ theme }) => theme.common.contentTitle}
`;
const CategoryWrap = styled.div`
  width: 95%;
  height: 4%;
  margin: 0 auto;
  display: flex;
  border-bottom: 1px solid lightgray;
  padding-bottom: 1%;
  ${(props) => props.id}
`;
const FristCategory = styled.span`
  flex: 1 auto;
`;
const SecondCategory = styled.span`
  flex: 11 auto;
`;
const CategoryYear = styled.span`
  flex: 11 auto;
  text-align: right;
`;
const CardWrapper = styled.div`
  width: 98%;
  height: 85%;
  margin: 0 auto;
  margin-bottom: 3%;
  overflow: auto;
`;

const ButtonWrapper = styled.div`
  width: 95%;
  text-align: center;
  margin: 0 auto;
`;
const WireButton = styled(Link)`
  text-decoration: none;
  ${({ theme }) => theme.common.defaultButton}
`;
const Loader = styled.img`
  width: 200px;
  text-align: center;
  font-size: 2rem;
  align-self: center;
`;
const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Category = styled.div<any>`
  background: white;
  width: 80px;
  hieght: 50px;
  border-radius: 4px 4px 4px 4px;
  border: 1px solid lightgray;
  cursor: pointer;
  outline: 0;
  margin-right: 2%;
  &:focus {
    display: none;
  }
  .active {
    background: #6f6eff;
    color: white;
  }
`;
const Text = styled.div<any>`
  height: 100%;
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  display: flex;
  align-items: center;
  place-content: center;
  color: #909090;
`;
const GoListButton = styled.span`
  margin-left: 3%;
  ${({ theme }) => theme.common.defaultButton}
`;

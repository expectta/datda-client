import React, { useState, useEffect, Children } from 'react';
import styled from 'styled-components';
import {
  Route,
  Switch,
  RouteComponentProps,
  useRouteMatch,
} from 'react-router-dom';
import { CardList, StateListForm, WriteForm } from '../components/Index';
import { requestApproveChild } from '../common/axios';
import { addState } from '../common/utils/addState';
import { handleGetAllChildByInstitution } from '../common/utils/firebaseFunction';
import { firestore } from '../common/utils/firebase';
interface propsType {
  userInfo: any;
}
export default function Management({ userInfo }: propsType) {
  const urlMatch = useRouteMatch();
  handleGetAllChildByInstitution(userInfo.mainData.institutionId);
  const [inputVlaue, setInputValue] = useState({
    title: '',
    content: '',
    category: '',
  });
  //승인된 원아의 상태관리
  const [childInfo, setChildInfo] = useState<any>({
    isDataOk: false,
    childrenList: [],
  });
  const handleUpdateChildInfo = async () => {
    const chilrenList = await requestApproveChild();
    console.log(chilrenList, '원아 리스트');
    setChildInfo({
      isDataOk: true,
      childrenList: await addState(chilrenList),
    });
  };
  const handleRealTimeChildrenState = (institutionId: string) => {
    firestore
      .collection('institution')
      .doc(String(institutionId))
      .collection('children')
      .onSnapshot((doc) => {
        // querySnapshot.forEach((doc) => {
        //   console.log(`${doc.id} => ${doc.data()}`);
        //   children.push(doc.data());
        // });
        console.log(
          doc.docChanges()[0].doc.id,
          '이게 id',
          doc.docChanges()[0].doc.data(),
          ' 내용',
        );
        const updateData = doc.docChanges()[0].doc.data();
        if (updateData) {
          childInfo.childrenList.forEach((elelemt: any, index: number) => {
            console.log(childInfo.childrenList, '변환전');
            if (elelemt.childId === Number(doc.docChanges()[0].doc.id)) {
              console.log('변환시작');
              elelemt.state.isOk = updateData.isOk;
              elelemt.state.isCheck = updateData.isCheck;
              elelemt.state.isSleep = updateData.isSleep;
              elelemt.state.isEat = updateData.isEat;
              elelemt.state.please = updateData.please;
            }
          });
        }
        console.log(childInfo.childrenList, '변환후');
        setChildInfo({
          ...childInfo,
          childrenList: childInfo.childrenList,
        });
      });
  };
  // 사용자 입력 값 핸들러
  const handleInputValue = (
    name: string,
    content: string,
    category: string,
  ) => {
    console.log(name, ' 제목은?', content, '내용은?');
    setInputValue({
      ...inputVlaue,
      [name]: content,
      category: category,
    });
  };
  useEffect(() => {
    console.log(childInfo.childrenList, '지금 맅스트');
    if (childInfo.childrenList.length !== 0) {
      handleRealTimeChildrenState(userInfo.mainData.institutionId);
    }
  }, [childInfo.childrenList]);
  useEffect(() => {
    console.log(userInfo, '유저정보');
    handleUpdateChildInfo();
  }, []);
  return (
    <Wrap>
      <Switch>
        <Route exact path={`${urlMatch.path}`}>
          <StateListForm
            childInfo={childInfo}
            title="원아 상태관리"
            fristCategory="전체"
            secondCategory="반별"
          ></StateListForm>
        </Route>
        {/* <Route pasth={`${urlMatch.path}/write`}>
          <WriteForm
            handleInputValue={handleInputValue}
            inputVlaue={inputVlaue}
            userInfo={userInfo}
            title="급식표 등록"
            type="meal"
          ></WriteForm>
        </Route> */}
      </Switch>
    </Wrap>
  );
}
const Wrap = styled.div`
  width: 100%;
  height: 100%;
`;
const ContentCard = styled.div`
  ${({ theme }) => theme.common.contentCardDiv}
`;

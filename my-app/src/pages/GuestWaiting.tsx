import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  requestSearchInsti,
  requestGuestTeacherRegister,
  requestGuestParentRegister,
} from '../common/axios';
import { useHistory } from 'react-router-dom';
import { isNameCHeck } from '../common/utils/validation';

export default function GuestWaiting() {
  const history = useHistory();

  const permission = JSON.parse(localStorage.getItem('loginInfo')!).permission;

  const [instiInput, setInstiInput] = useState('');

  const [instiInfo, setInstiInfo] = useState([]);

  const [child, setChild] = useState<string>('');

  const [checked, setChecked] = useState({ institutionId: '' });

  const [isInsti, setIsInsti] = useState<boolean>(true);
  const [isChild, setIsChild] = useState<boolean>(false);

  const [errorMessage, setErrorMessage] = useState<string>('');

  const onChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setChecked({ institutionId: value });
  };

  const onChange = (callback: any, e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    callback(value);
  };

  const SearchInsti = async (value: string) => {
    const results = await requestSearchInsti(value);
    if (results) {
      setInstiInfo(results);
      setErrorMessage('');
    } else {
      setErrorMessage('정보를 찾을 수 없습니다.');
    }
  };
  const handleNextStep = async (institutionId: string) => {
    if (institutionId.length === 0) {
      setErrorMessage('기관을 선택해주세요');
    } else if (permission === 'parent') {
      setIsInsti(false);
      setIsChild(true);
    } else {
      const results = requestGuestTeacherRegister(institutionId);
      if (results) {
        setErrorMessage('');
        history.push('/waiting/approving');
      } else {
        setErrorMessage('올바른 요청을 보내지 못했습니다.');
      }
    }
  };

  const handleApproving = async (childName: string, institutionId: string) => {
    if (childName.length === 0) {
      setErrorMessage('아이를 입력하셔야 합니다');
    } else if (!isNameCHeck(childName)) {
      setErrorMessage('아이의 이름을 확인해주세요.');
    } else {
      const results = await requestGuestParentRegister(
        childName,
        institutionId,
      );
      if (results) {
        setErrorMessage('');
        history.push('/waiting/approving');
      } else {
        setErrorMessage('올바른 요청을 보내지 못했습니다.');
      }
    }
  };

  return (
    <div>
      <div>닿다에 오신 것을</div>
      <div>환영합니다</div>
      {isInsti ? (
        <>
          <div id="instiInputArea">
            <div>기관검색</div>
            <div>
              <input
                type="text"
                onChange={(e) => {
                  onChange(setInstiInput, e);
                }}
              ></input>
              <button
                onClick={() => {
                  SearchInsti(instiInput);
                }}
              >
                검색
              </button>
            </div>
          </div>
          <div id="instiResults">
            {instiInfo.map((insti: any) => (
              <div>
                <input
                  type="radio"
                  name="instiList"
                  value={insti.institutionId}
                  onChange={(e) => {
                    onChecked(e);
                  }}
                />
                <span>{insti.institutionName}</span>
              </div>
            ))}
            <div>{errorMessage}</div>
          </div>
          <div>
            <button
              onClick={() => {
                handleNextStep(checked.institutionId);
              }}
            >
              {permission === 'parent' ? '다음' : '완료'}
            </button>
          </div>
        </>
      ) : (
        <div></div>
      )}
      {isChild ? (
        <div id="childArea">
          <div id="childInput">
            <input
              type="text"
              onChange={(e) => {
                onChange(setChild, e);
              }}
            />
          </div>
          <div>{errorMessage}</div>
          <div id="childButtonArea">
            <button
              onClick={() => {
                handleApproving(child, checked.institutionId);
              }}
            >
              완료
            </button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

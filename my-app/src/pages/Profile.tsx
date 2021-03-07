import React, { useState } from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import {
  ProfileList,
  SelectInstitution,
  AddChildren,
} from '../components/Index';

function Profile() {
  const [instiInfo, setInsti] = useState([
    { institutionName: '원암유치원', institutionId: '1', institutionPhoto: '' },
  ]);

  const [children, setChildren] = useState<any>([
    { name: '김철수' },
    { name: '영희' },
  ]);

  return (
    <Wrap>
      <Switch>
        <Route exact path="/main/profile" component={ProfileList} />
        <Route exact path="/main/profile/institution">
          <SelectInstitution instiInfo={instiInfo} setInsti={setInsti} />
        </Route>
        <Route exact path="/main/profile/children">
          <AddChildren children={children} setChildren={setChildren} />
        </Route>
      </Switch>
    </Wrap>
  );
}

export default Profile;

const Wrap = styled.div`
  width: 100%;
  height: 97%;
`;

import React, { useState } from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import {
  ProfileList,
  SelectInstitution,
  AddChildren,
} from '../components/Index';

function Profile() {
  return (
    <Wrap>
      <Switch>
        <Route exact path="/main/profile" component={ProfileList} />
        <Route
          exact
          path="/main/profile/institution"
          component={SelectInstitution}
        />
        <Route exact path="/main/profile/children" component={AddChildren} />
      </Switch>
    </Wrap>
  );
}

export default Profile;

const Wrap = styled.div`
  width: 100%;
  height: 97%;
`;

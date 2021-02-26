import React from 'react';
import styled from 'styled-components';
import { Link, Route, Switch } from 'react-router-dom';
import { MedicineList, WriteMedicine } from '../components/Index';
interface propsType {
  match: any;
}
export default function Medicine({ match }: propsType) {
  return (
    <Wrap>
      <Switch>
        <Route exact path="/main/medicine" component={MedicineList} />
        <Route exact path="/main/medicine/write" component={WriteMedicine} />
      </Switch>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  height: 97%;
`;

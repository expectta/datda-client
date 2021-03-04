import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Institution, InstiSelection } from '../components/Index';

interface Props {
  inputs: Record<string, unknown>;
  instiInputs: Record<string, unknown>;
  institution: boolean;
  onChangeInsti: any;
  errormessage: string;
  handleInstitution: any;
  instiSelection: boolean;
  handleInstiSelection: any;
  inputInstiInfo: any;
}
function SignupInstitution({
  inputs,
  instiInputs,
  institution,
  onChangeInsti,
  errormessage,
  handleInstitution,
  instiSelection,
  handleInstiSelection,
  inputInstiInfo,
}: Props) {
  if (inputs.email === null) {
    return <Redirect to="/signup" />;
  }
  return (
    <div className="institution">
      <Institution
        institution={institution}
        handleInstitution={handleInstitution}
        onChangeInsti={onChangeInsti}
        errormessage={errormessage}
        instiInputs={instiInputs}
      />
      <InstiSelection
        errormessage={errormessage}
        instiInputs={instiInputs}
        instiSelection={instiSelection}
        handleInstiSelection={handleInstiSelection}
        inputInstiInfo={inputInstiInfo}
      />
    </div>
  );
}

export default SignupInstitution;

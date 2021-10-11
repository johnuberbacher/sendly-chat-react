import React from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import {BiLogOut} from "react-icons/bi";
import db from '../services/FirebaseConfig';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/analytics';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

function SignOut() {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Log Out
    </Tooltip>
  );

  return db.auth.currentUser && (
  <OverlayTrigger
    placement="bottom"
    overlay={renderTooltip}
  >
    <Button onClick={() => db.auth.signOut()} className="btn btn-primary rounded-circle btn-send d-flex align-items-center justify-content-center p-1">
      <div style={{marginLeft: '-3px'}}>
        <BiLogOut className="text-white" size="bx-sm"/>
      </div>
    </Button>
  </OverlayTrigger>
  );
}

export default SignOut;

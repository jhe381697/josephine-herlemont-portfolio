import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

import './copyright.scss';

function Copyright() {
  return (
    <div className="App-footer-copyright">
      <FontAwesomeIcon className="App-footer-icon" icon={faCopyright} /> Joséphine Herlemont
    </div>
  );
}

export default React.memo(Copyright);

import React from 'react';
import { CircularProgress } from '@material-ui/core';

import { loader } from '../style';

const Loader = () => {
  return (
    <article style={loader.circularProgress}>
      <CircularProgress size={80} />
    </article>
  );
};

export default Loader;

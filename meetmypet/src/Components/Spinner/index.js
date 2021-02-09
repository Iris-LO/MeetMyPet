import React from 'react';
import Loader from 'react-loader-spinner';

import './spinner.scss';
const Spinner = () => (
    <div className="spinner">
        <Loader
            type="Grid"
            color="#7fc6a4"
            height={100}
            width={100}
        />
    </div>
);

export default Spinner;
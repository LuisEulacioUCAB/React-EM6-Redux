import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Location = ({city}) => (
    //const city = props.city;
    //const { city } = props;// destructuring
    //console.log(props);
    //debugger;//Herramienta de debug coloca un break point

    <div className="locationCont">
        <h1>
            {city}
        </h1>
    </div>
);

Location.propTypes = {
    city: PropTypes.string.isRequired
}
export default Location;
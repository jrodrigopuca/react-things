import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';

const C01 = props =>(
    <Text>{props.count}</Text>
)

C01.propTypes={
    count: PropTypes.number.isRequired,
}

export default C01;
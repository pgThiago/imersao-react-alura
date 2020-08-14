import React from 'react';

import url_top from '../../../../config/';

const ButtonLink = (props) => {
    const { URL_TOP } = url_top;

    return (URL_TOP.search('localhost') ? <a href={props.href} className={props.className}>  { props.children } </a> : window.alert('Action not permitted'))
    
};

export default ButtonLink;
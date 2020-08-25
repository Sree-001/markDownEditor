import React from 'react';
import PropTypes from 'prop-types';
import './style.css'
import Button from '../Button';
import viableOption from './helper';
const Header = ({clickHandle}) => {
   
    return ( <div className="header-wrapper">
      {
          viableOption.map((option)=><Button  key={option.keyWord} {...option} clickHandle={clickHandle}  />)
      }
    </div> );
}
 
Header.propTypes = {
    clickHandle : PropTypes.func.isRequired
}

export default Header;
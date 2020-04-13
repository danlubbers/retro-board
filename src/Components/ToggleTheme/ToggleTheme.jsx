import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const ToggleContainer = styled.button`
  width: 35px;
  height: 35px;
  border: none;
  border-radius: 5px;
  background: ${({theme}) => theme.body};

    .moon {
      color: #4b4b4b;
    }

    .sun {
      color: #848484;
    }

  `;

const ToggleTheme = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';

  return (
        <ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
          {isLight ? 
            <FontAwesomeIcon className='moon' icon={faMoon} size='2x' />
          :
            <FontAwesomeIcon className='sun' icon={faSun} size='2x' />
          }
        </ToggleContainer>
  )
}

export default ToggleTheme;

ToggleTheme.propTypes = {
toggleTheme: PropTypes.func.isRequired,
theme: PropTypes.string.isRequired
}
// import styled from 'styled-components';

// const StartButton = styled.button`
//   width: 100%;
//   height: 40px;
//   color: ${({ theme }) => theme.colors.contrastText};
//   background-color: ${({ theme }) => theme.colors.primary};
//   outline: none;
//   margin-top: 20px;
//   border-radius: 25px;
//   border : 1px solid transparent;
//   box-shadow: 1px 1px 8px 0px black;
//   :hover {
//     background-color: #A3161D;
//     color: #ffffff;
//     cursor: pointer;
//   }
//   :disabled {
//     background-color: ${({ theme }) => theme.colors.secondary};
//     :hover {
//       cursor: not-allowed;
//     }
//   }
// `;

// export default StartButton;

import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.mainBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 2px solid transparent;
  width: 100%;
  padding: 10px 16px;
  font-weight: bold;
  font-size: 14px;
  font-family: 'Crimson Text', serif;
  line-height: 1;
  text-transform: uppercase;
  outline: 0;
  transition: .3s;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: .5;
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.primary};
    cursor: not-allowed;
  }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;

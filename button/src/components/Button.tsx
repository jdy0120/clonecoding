import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

interface Props {
  theme?: any;
  children?: string;
  color: string;
  size: string;
  fullWidth?: boolean;
  outline?: boolean;
  onClick?: () => void;
}

type Sizes = {
  [key: string] : any
}

const sizes:Sizes = {
  large: {
    height: '3rem',
    fontSize: '1.25rem',
  },
  medium: {
    height: '2.25rem',
    fontSize: '1rem',
  },
  small: {
    height: '1.75rem',
    fontSize: '0.875rem',
  }
}

const colorStyles = css<Props>`
  ${({ theme, color }:Props) => {
    const selected = theme.palette[color];
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
      ${({ outline }:Props) => {
        return outline && css`
          color: ${selected};
          background: none;
          border: 1px solid ${selected};
          &:hover {
            background: ${selected};
            color: white;
          }
        `
      }}
    `;
  }}
`;

const sizeStyles = css<Props>`
  ${({ size, ...rest }:Props) => {
    const {height, fontSize} = sizes[size];
    return css`
      height: ${height};
      font-size: ${fontSize};
    `;
  }}
`;

const fullWidthStyle = css<Props>`
  ${({ fullWidth }:Props) => {
    return fullWidth && css`
      width: 100%;
      justify-content: center;
      margin-left: 0;
      margin-top: 1rem;
    `
  }}
`;

const StyledButton = styled.button<Props>`
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  align-items: center;

  /* 크기 */
  ${sizeStyles}

  /* 색상 */
  ${colorStyles}

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }

  ${fullWidthStyle}
  
  
`;

const Button = ({ children, size, color, ...rest }:Props) => {
  return (
    <StyledButton color={color} size={size} {...rest}>{children}</StyledButton>
  );
}

Button.defaultProps = {
  color: 'blue',
  size: 'medium',
}

export default Button;
import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

interface Props {
  theme?: any;
  children?: string;
  color: string;
  size: string;
  fullWidth: boolean;
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
    fontSize: '0.875',
  }
}

const colorStyles = css<Props>`
  ${({ theme, color }:Props) => {
    const selected = theme.palette[color];
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)}
      }
      &:active {
        background: ${darken(0.1, selected)}
      }
    `;
  }}
`;

const sizeStyles = css<Props>`
  ${({ size, ...rest }:Props) => {
    const {height, fontSize} = sizes[size];
    console.log(height,fontSize)
    return css`
      height: ${height};
      font-size: ${fontSize};
    `;
  }}
`;

const fullWidthStyle = css<Props>`
  ${({ fullWidth, ...rest }:Props) => {
    return fullWidth && css`
      width: 100%;
      justify-content: center;
      & + & {
        margin-left: 0;
        margin-top: 1rem;
      }
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

  height: 2.25rem;
  font-size: 1rem;

  ${sizeStyles}

  ${colorStyles}

  ${fullWidthStyle}

  & + & {
    margin-left: 1rem;
  }
`;

const Button = ({ children, size, color, ...rest }:Props) => {
  return (
    <StyledButton color={color} size={size} {...rest}>{children}</StyledButton>
  );
}

Button.defaultProps = {
  color: 'blue',
  size: 'medium',
  fullWidth: false,
}

export default Button;
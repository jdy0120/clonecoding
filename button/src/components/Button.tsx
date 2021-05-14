import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

type Props = {
  children: string,
  color: string,
  size: string,
  outline?: boolean,
  fullWidth?: boolean,
  onClick?: any,
}

type Sizes = {
  [key : string]: any
}

const colorStyles = css<Props>`
  ${({ theme, color }) => {
    const selected = theme.palette[color];
    return css<Props>`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
      ${props =>
        props.outline &&
        css`
          color: ${selected};
          background: none;
          border: 1px solid ${selected};
          &:hover {
            background: ${selected};
            color: white;
          }
        `}
    `;
  }}
`;

const sizes:Sizes = {
  large: {
    height: '3rem',
    fontSize: '1.25',
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

const sizeStyles = css<Props>`
  ${({ size }) => css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
  `}
`;

const fullWidthStyle = css<Props>`
  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
      justify-content: center;
      & + & {
        margin-left: 0;
        margin-top: 1rem;
      }
    `}
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

  & + & {
    margin-left: 1rem;
  }

  ${fullWidthStyle}
`;

const Button = ({ children, color, size, outline, fullWidth, ...rest }:Props) => {
  return (
  <StyledButton
    size={size}
    color={color}
    outline={outline}
    fullWidth={fullWidth}
    {...rest}
  >
    {children}
  </StyledButton>
  );
}

Button.defaultProps = {
  color: 'blue',
  size: 'medium',
};

export default Button;
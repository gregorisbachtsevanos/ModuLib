import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobileButtonStyles, webButtonStyles } from "../../../theme";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, HTMLProps } from "react";

interface ExtraButtonProps {
  stylefor: "web" | "mobile";
}

export const StyledButton = styled.button<
  ButtonHTMLAttributes<HTMLButtonElement> & ExtraButtonProps
>`
  border: 0;
  background-color: transparent;
  outline: 0;
  svg {
    fill: ${({ theme }) => theme.palette.black[500]};
    width: 40px;
  }
  &:not(.ghost):disabled {
    svg {
      fill: ${({ theme }) => theme.palette.black[300]};
      width: 40px;
    }
  }
  ${({ stylefor }) =>
    stylefor === "mobile" ? mobileButtonStyles : webButtonStyles}
`;

export const StyledLinkButton = styled(Link)<{ stylefor: "web" | "mobile" }>`
  ${({ stylefor }) =>
    stylefor === "mobile" ? mobileButtonStyles : webButtonStyles}
`;

export const StyledNextLinkButton = styled.span<
  HTMLProps<HTMLSpanElement> & ExtraButtonProps
>`
  ${({ stylefor }) =>
    stylefor === "mobile" ? mobileButtonStyles : webButtonStyles}
`;

export const StyledAnchorButton = styled.a<
  AnchorHTMLAttributes<HTMLAnchorElement> & ExtraButtonProps
>`
  color: inherit;
  text-decoration: none;
  ${({ stylefor }) =>
    stylefor === "mobile" ? mobileButtonStyles : webButtonStyles}
`;

import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { LinkProps } from "react-router-dom";
import { Loader } from "../../../icons";
import {
  StyledAnchorButton,
  StyledButton,
  StyledLinkButton,
  StyledNextLinkButton,
} from "./Button.styled";

type BaseProps = {
  children: ReactNode | ReactNode[];
  className?: string;
  fullWidth?: boolean;
  styleFor?: "web" | "mobile";
  styleType: "primary" | "secondary" | "ghost" | "dark" | "tertiary";
  size?: "small";
  disabled?: boolean;
  isLoading?: boolean;
};

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    as?: "button";
  };

export type ButtonAsReactRouterLink = BaseProps &
  Omit<LinkProps, keyof BaseProps> & {
    as: "Link";
  };

export type ButtonAsExternal = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    as: "a";
  };

type ButtonAsNextLink = BaseProps & {
  as: "NextLink";
};

export type ButtonProps =
  | ButtonAsReactRouterLink
  | ButtonAsButton
  | ButtonAsExternal
  | ButtonAsNextLink;

const Button: React.ForwardRefRenderFunction<unknown, ButtonProps> = (
  props,
  ref
) => {
  const allClassNames = `${props.styleType ? props.styleType : ""} ${
    props.className ? props.className : ""
  } ${props.fullWidth ? "fullwidth" : ""} ${props.size ?? ""}`;

  if (props.as === "Link") {
    const { className, styleType, as, styleFor, size, isLoading, ...rest } =
      props;
    return (
      <StyledLinkButton
        stylefor={styleFor ?? "web"}
        className={allClassNames}
        {...rest}
      >
        {props.children}
      </StyledLinkButton>
    );
  }
  if (props.as === "NextLink") {
    const { className, styleType, as, styleFor, size, isLoading, ...rest } =
      props;
    return (
      <StyledNextLinkButton
        stylefor={styleFor ?? "web"}
        ref={ref as React.MutableRefObject<HTMLSpanElement>}
        className={allClassNames}
        {...rest}
      >
        {props.children}
      </StyledNextLinkButton>
    );
  }
  if (props.as === "a") {
    const { className, styleType, as, styleFor, size, isLoading, ...rest } =
      props;
    return (
      <StyledAnchorButton
        stylefor={styleFor ?? "web"}
        className={allClassNames}
        target="_blank"
        rel="noopener noreferrer"
        ref={ref as React.MutableRefObject<HTMLAnchorElement>}
        {...rest}
      >
        {props.children}
      </StyledAnchorButton>
    );
  }
  const {
    className,
    styleType,
    as,
    styleFor,
    isLoading,
    disabled,
    size,
    ...rest
  } = props;
  return (
    <StyledButton
      stylefor={styleFor ?? "web"}
      ref={ref as React.MutableRefObject<HTMLButtonElement>}
      className={allClassNames}
      disabled={isLoading || disabled}
      {...rest}
    >
      {isLoading ? <Loader /> : props.children}
    </StyledButton>
  );
};
export default React.forwardRef<unknown, ButtonProps>(Button);

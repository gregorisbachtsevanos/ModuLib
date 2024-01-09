import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { LinkProps } from "react-router-dom";
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
type ButtonAsButton = BaseProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    as?: "button";
};
export type ButtonAsReactRouterLink = BaseProps & Omit<LinkProps, keyof BaseProps> & {
    as: "Link";
};
export type ButtonAsExternal = BaseProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    as: "a";
};
type ButtonAsNextLink = BaseProps & {
    as: "NextLink";
};
export type ButtonProps = ButtonAsReactRouterLink | ButtonAsButton | ButtonAsExternal | ButtonAsNextLink;
declare const _default: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<unknown>>;
export default _default;

import { AnchorHTMLAttributes, ButtonHTMLAttributes, HTMLProps } from "react";
interface ExtraButtonProps {
    stylefor: "web" | "mobile";
}
export declare const StyledButton: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, ButtonHTMLAttributes<HTMLButtonElement> & ExtraButtonProps>>;
export declare const StyledLinkButton: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react-router-dom").LinkProps & import("react").RefAttributes<HTMLAnchorElement>, {
    stylefor: "web" | "mobile";
}>> & Omit<import("react").ForwardRefExoticComponent<import("react-router-dom").LinkProps & import("react").RefAttributes<HTMLAnchorElement>>, keyof import("react").Component<any, {}, any>>;
export declare const StyledNextLinkButton: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, HTMLProps<HTMLSpanElement> & ExtraButtonProps>>;
export declare const StyledAnchorButton: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, AnchorHTMLAttributes<HTMLAnchorElement> & ExtraButtonProps>>;
export {};

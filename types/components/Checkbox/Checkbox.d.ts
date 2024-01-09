import React, { InputHTMLAttributes, ReactNode } from "react";
export interface CheckboxCustomProps {
    testId?: string;
    label?: string | ReactNode;
    shape?: "circle" | "rect";
    dashStyle?: boolean;
}
type CheckboxProps = CheckboxCustomProps & InputHTMLAttributes<HTMLInputElement>;
declare const Checkbox: React.FC<CheckboxProps>;
export default Checkbox;

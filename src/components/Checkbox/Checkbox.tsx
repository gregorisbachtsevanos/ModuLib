import React, { InputHTMLAttributes, ReactNode } from "react";
import { CheckboxFill, DashIcon } from "../../icons";

export interface CheckboxCustomProps {
  testId?: string;
  label?: string | ReactNode;
  shape?: "circle" | "rect";
  dashStyle?: boolean;
}

type CheckboxProps = CheckboxCustomProps &
  InputHTMLAttributes<HTMLInputElement>;

const Checkbox: React.FC<CheckboxProps> = ({
  shape = "rect",
  dashStyle = false,
  label = "",
  ...props
}) => {
  const { testId, id, ...rest } = props;

  return (
    <div>
      <input
        type={shape === "rect" ? "checkbox" : "radio"}
        id={id ?? String(label)}
        data-testid={testId}
        className={shape}
        {...rest}
      />
      <label htmlFor={id ?? String(label)} className={shape}>
        {label}
      </label>
      {shape === "rect" && !dashStyle && (
        <div className="custom-check">
          <CheckboxFill />
        </div>
      )}
      {dashStyle && (
        <div className="dash">
          <DashIcon />
        </div>
      )}
    </div>
  );
};
export default Checkbox;

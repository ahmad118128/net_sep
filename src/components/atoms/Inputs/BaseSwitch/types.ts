import {
  Control,
  FieldPath,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";

export interface IBaseSwitch<T extends FieldValues> {
  control?: Control<T>;
  name: FieldPath<T>;
  rules?: RegisterOptions<T>;
  defaultValue?: string;
  defaultChecked?: boolean;
  className?: string;
  ltrLabel?: boolean;
  label?: string;
  pureOnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  pureValue?: boolean;
  pureError?: string;
}

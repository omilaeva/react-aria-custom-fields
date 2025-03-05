import {Input, Label, TextField} from "react-aria-components";
import styles from "../styles/CustomTextInput.module.css";
import React, {useState} from "react";


interface TextInputComponentProps {
  disabled: boolean;
  label: string;
  value: string;
  placeholder?: string;
  onChange: (newValue: string) => void;
}

export const CustomTextInput : React.FC<TextInputComponentProps> =
  (props : TextInputComponentProps) => {
  const [focused, setFocused] = useState(false);

  return (
    <TextField className={`${styles.textField}`}>
    <Label>{props.label}</Label>
    <Input className={styles.textInput}
           onFocus={() => setFocused(true)}
           onBlur={() => setFocused(false)}
           placeholder={focused ? "" : props.placeholder}
           value={props.value}
           onChange={(e) => props.onChange(e.target.value)}/>
  </TextField>
  );
}
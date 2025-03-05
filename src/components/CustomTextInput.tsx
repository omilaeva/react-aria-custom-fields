import {Input, Label, TextField} from "react-aria-components";
import styles from "../styles/CustomTextInput.module.css";


interface TextInputComponentProps {
  focused: boolean;
  disabled: boolean;
  label: string;
  value: string;
  placeholder?: string;
  onChange: (newValue: string) => void;
}

export const CustomTextInput : React.FC<TextInputComponentProps> =
  (props : TextInputComponentProps) => {

  return (
    <TextField className={`${styles.textField}`}>
    <Label>{props.label}</Label>
    <Input className={styles.textInput}
           placeholder={props.value ? "" : props.placeholder}
           value={props.value || ''}
           onChange={(e) => props.onChange(e.target.value)}/>
  </TextField>
  );
}
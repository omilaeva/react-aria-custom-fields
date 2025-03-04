import {Input, Label, TextField} from "react-aria-components";
import styles from "../styles/TextInputComponent.module.css";


interface TextInputComponentProps {
  focused: boolean;
  disabled: boolean;
  label: string;
  placeholder?: string;
}

export const TextInputComponent : React.FC<TextInputComponentProps> =
  (props : TextInputComponentProps) => {
  return (
    <TextField className={`${styles.textField}`}>
    <Label className={styles.textLabel}>{props.label}</Label>
    <Input className={styles.textInput} placeholder={props.focused ? "" : props.placeholder} />
  </TextField>
  );
}
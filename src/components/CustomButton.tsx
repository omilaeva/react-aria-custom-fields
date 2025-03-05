import styles from "../styles/CustomButton.module.css";
import * as React from "react";
import {Button, ButtonProps} from "react-aria-components";

type ButtonSize = "small" | "medium";
type ButtonVariant = "contained" | "outlined";
type ButtonColor = "primary" | "secondary";
type ButtonAppearance = "compact" | "regular";

interface ButtonComponentProps extends ButtonProps {
  size?: ButtonSize;
  variant?: ButtonVariant;
  color?: ButtonColor;
  disabled?: boolean;
  appearance?: ButtonAppearance;
  icon?: React.ReactElement;
  children?: React.ReactNode;
  onPress?: () => void;
}

const defaultProps: ButtonComponentProps = {
  size: "medium",
  variant: "contained",
  color: "primary",
  disabled: false,
  appearance: "regular",
}

export const CustomButton: React.FC<ButtonComponentProps> = (props: ButtonComponentProps) => {
  const {size, variant, color, disabled, appearance, icon, children, onPress, slot} = {...defaultProps, ...props};

  return (
    <Button {...props} onPress={onPress}
            isDisabled={disabled}
            slot={slot}
            className={`${styles[appearance!]} ${styles[size!]} ${styles[variant!]} ${styles[color!]}`}>
      { icon && <span className={`${styles.icon}`}>{icon}</span> }
      { children && <span className={styles.text}>{children}</span> }
    </Button>
  );
}
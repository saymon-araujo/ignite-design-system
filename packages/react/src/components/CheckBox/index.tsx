import { ComponentProps } from "react";
import { Check } from "@phosphor-icons/react";
import { CheckContainer, CheckIndicator } from "./styles";

export type CheckBoxProps = ComponentProps<typeof CheckContainer>;

export const CheckBox = (props: CheckBoxProps) => {
  return (
    <CheckContainer {...props}>
      <CheckIndicator asChild>
        <Check weight="bold" />
      </CheckIndicator>
    </CheckContainer>
  );
};

CheckContainer.displayName = "CheckContainer";
CheckIndicator.displayName = "CheckIndicator";
Check.displayName = "CheckIcon";

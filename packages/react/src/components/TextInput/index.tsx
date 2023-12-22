import { ComponentProps } from "react";
import { TextInputContainer, TextInputPrefix, Input } from "./styles";

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string;
}

export function TextInput({ prefix, ...props }: TextInputProps) {
  return (
    <TextInputContainer>
      {!!prefix && <TextInputPrefix>{prefix}</TextInputPrefix>}
      <Input {...props} />
    </TextInputContainer>
  );
}

TextInputContainer.displayName = "TextInputContainer";
TextInputPrefix.displayName = "TextInputPrefix";
Input.displayName = "Input";

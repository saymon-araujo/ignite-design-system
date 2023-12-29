import { VariantProps } from "@stitches/react";
import { ComponentProps, forwardRef, ElementRef } from "react";
import { TextInputContainer, TextInputPrefix, Input } from "./styles";

export interface TextInputProps
  extends Omit<ComponentProps<typeof Input>, "size">,
    VariantProps<typeof TextInputContainer> {
  prefix?: string;
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, size, ...props }: TextInputProps, ref) => {
    return (
      <TextInputContainer size={size}>
        {!!prefix && <TextInputPrefix>{prefix}</TextInputPrefix>}
        <Input ref={ref} {...props} />
      </TextInputContainer>
    );
  }
);

TextInputContainer.displayName = "TextInputContainer";
TextInputPrefix.displayName = "TextInputPrefix";
Input.displayName = "Input";

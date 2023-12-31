import { ComponentProps } from "react";
import { User } from "@phosphor-icons/react";
import { AvatarContainer, AvatarImage, AvatarFallback } from "./styles";

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

export function Avatar(props: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  );
}

AvatarContainer.displayName = "AvatarContainer";
AvatarImage.displayName = "AvatarImage";
AvatarFallback.displayName = "AvatarFallback";
User.displayName = "FallbackIcon";

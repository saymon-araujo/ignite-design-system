import { Label, MultiStepContainer, Step, Steps } from "./styles";

export interface MultiStepProps {
  amountOfSteps: number;
  currentStep?: number;
}

export const MultiStep = ({ amountOfSteps, currentStep = 1 }: MultiStepProps) => {
  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {amountOfSteps}
      </Label>

      <Steps css={{ "--steps-amount": amountOfSteps }}>
        {Array.from({ length: amountOfSteps }, (_, i) => i + 1).map((step) => {
          return <Step key={step} active={step <= currentStep} />;
        })}
      </Steps>
    </MultiStepContainer>
  );
};

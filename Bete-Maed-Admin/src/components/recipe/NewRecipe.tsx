import React, { useState } from "react";
import AppForm from "../form/AppForm";
import AppInput from "../input/AppInput";
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";

const NewRecipe = () => {
  const toast = useToast();

  const [progress, setProgress] = useState(33.33);
  const [step, setStep] = useState(1);
  const Step1 = () => {
    return (
      <>
        {" "}
        <AppInput name="name" placeholder="First Name" />
        <AppInput name="lastName" placeholder="First Name" />
      </>
    );
  };
  const Step2 = () => {
    return (
      <>
        {" "}
        <AppInput name="name2" placeholder="First Name" />
        <AppInput name="lastName2" placeholder="First Name" />
      </>
    );
  };
  const Step3 = () => {
    return (
      <>
        {" "}
        <AppInput name="name3" placeholder="First Name" />
        <AppInput name="lastName3" placeholder="First Name" />
      </>
    );
  };
  return (
    <AppForm
      title="Add Recipe"
      values={{ name: "", lastName: "" }}
      display={step === 3 ? "flex" : "none"}
    >
      <>{step === 1 ? <Step1 /> : step === 2 ? <Step2 /> : <Step3 />}</>
      <ButtonGroup mt="5%" w="100%">
        <Flex w="100%" justifyContent="space-between">
          <Flex>
            <Button
              onClick={() => {
                setStep(step - 1);
                setProgress(progress - 33.33);
              }}
              isDisabled={step === 1}
              colorScheme="teal"
              variant="solid"
              w="7rem"
              mr="5%"
            >
              Back
            </Button>
            <Button
              w="7rem"
              isDisabled={step === 3}
              onClick={() => {
                setStep(step + 1);
                if (step === 3) {
                  setProgress(100);
                } else {
                  setProgress(progress + 33.33);
                }
              }}
              colorScheme="teal"
              variant="outline"
            >
              Next
            </Button>
          </Flex>
          {step === 3 ? (
            <Button variant="solid" colorScheme="red" type="submit">
              Submit
            </Button>
          ) : // <Button
          //   w="7rem"
          //   colorScheme="red"
          //   variant="solid"
          //   onClick={() => {
          //     toast({
          //       title: "Account created.",
          //       description: "We've created your account for you.",
          //       status: "success",
          //       duration: 3000,
          //       isClosable: true,
          //     });
          //   }}
          // >
          //   Submit
          // </Button>
          null}
        </Flex>
      </ButtonGroup>
    </AppForm>
  );
};

export default NewRecipe;

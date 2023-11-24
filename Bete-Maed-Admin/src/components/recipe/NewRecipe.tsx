import { useEffect, useState } from "react";
import AppForm from "../form/AppForm";
import AppInput from "../input/AppInput";
import {
  ButtonGroup,
  Button,
  Flex,
  Progress,
  Box,
  Stack,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";

const NewRecipe = () => {
  const [progress, setProgress] = useState(33.33);
  const [step, setStep] = useState(1);
  const [ingredients, setIngredients] = useState(["ingredient1"]);
  const addIngredient = () => {
    const newIngredient = `ingredient${ingredients.length + 1}`;
    setIngredients([...ingredients, newIngredient]);
  };

  const Step1 = () => {
    return (
      <>
        <SimpleGrid spacing={5} columns={2}>
          <AppInput name="name" placeholder="Recipe Name" />
          <AppInput name="category" placeholder="Category" />
          <AppInput name="portion" placeholder="Portion Size" />
          <AppInput name="duration" placeholder="Duration" />
          <Box>
            <Text>Tags</Text>
            <Stack spacing={5} direction="row">
              <Checkbox colorScheme="red" defaultChecked>
                Tag
              </Checkbox>
              <Checkbox colorScheme="green" defaultChecked>
                Checkbox
              </Checkbox>
            </Stack>
          </Box>
        </SimpleGrid>
      </>
    );
  };
  const Step2 = () => {
    return (
      <>
        <AppInput name="ingredient1" placeholder="Ingredient" />
        <AppInput name="ingredient1" placeholder="Ingredient" />
        <AppInput name="ingredient1" placeholder="Ingredient" />
        {ingredients.map((ingredient, index) => (
          <AppInput key={index} name={ingredient} placeholder="Ingredient" />
        ))}

        <Button
          onClick={addIngredient}
          colorScheme="teal"
          marginTop={5}
          variant="solid"
          w="40%"
          mr="5%"
        >
          Add More Ingredient
        </Button>
      </>
    );
  };
  const Step3 = () => {
    return (
      <>
        <AppInput name="name3" placeholder="First Name" />
        <AppInput name="lastName3" placeholder="First Name" />
      </>
    );
  };
  return (
    <Box
      borderWidth="1px"
      rounded="lg"
      bg="white"
      shadow="1px 1px 3px rgba(0,0,0,0.3)"
      maxWidth={800}
      p={6}
      m="10px auto"
      as="form"
    >
      <Progress
        hasStripe
        value={progress}
        mb="5%"
        mx="5%"
        isAnimated
      ></Progress>

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
            ) : null}
          </Flex>
        </ButtonGroup>
      </AppForm>
    </Box>
  );
};

export default NewRecipe;

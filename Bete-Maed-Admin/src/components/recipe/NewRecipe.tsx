import { useState } from "react";
import AppForm from "../form/AppForm";
import AppInput from "../input/AppInput";
import {
  ButtonGroup,
  Button,
  Flex,
  Progress,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";

import { TiDelete } from "react-icons/ti";

import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Recipe Name"),
  category: Yup.string().required().label("Category"),
  portion: Yup.string().required().label("Portion"),
  duration: Yup.string().required().label("Duration"),
});

const NewRecipe = () => {
  const [progress, setProgress] = useState(33.33);
  const [step, setStep] = useState(1);
  const [ingredients, setIngredients] = useState([
    "ingredient1",
    "ingredient2",
    "ingredient3",
  ]);
  const [steps, setSteps] = useState(["step1", "step2", "step3"]);

  const addIngredient = () => {
    const newIngredient = `ingredient${ingredients.length + 1}`;
    setIngredients([...ingredients, newIngredient]);
  };
  const removeIngredient = (index: number) => {
    const newIngredient = [...ingredients];
    newIngredient.splice(index, 1);
    setIngredients(newIngredient);
  };
  const removeStep = (index: number) => {
    const newStep = [...steps];
    newStep.splice(index, 1);
    setSteps(newStep);
  };
  const addStep = () => {
    const newStep = `step${steps.length + 1}`;
    setSteps([...steps, newStep]);
  };

  const Step1 = () => {
    return (
      <>
        <SimpleGrid marginBottom={5} spacing={5} columns={2}>
          <AppInput name="name" placeholder="Recipe Name" />
          <AppInput name="category" placeholder="Category" />
          <AppInput name="portion" placeholder="Portion Size" />
          <AppInput name="duration" placeholder="Duration" />
        </SimpleGrid>
        <AppInput type="textArea" name="tags" placeholder="Tags" />
      </>
    );
  };
  const Step2 = () => {
    return (
      <>
        {ingredients.map((ingredient, index) => (
          <>
            <Box display="flex" justifyContent="center" alignItems="center">
              <AppInput
                key={index}
                name={ingredient}
                placeholder={`ingredient ${index + 1}`}
              />

              <TiDelete
                size="30px"
                color="teal"
                onClick={() => removeIngredient(index)}
              />
            </Box>
          </>
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
        {steps.map((step, index) => (
          <>
            <Box display="flex" justifyContent="center" alignItems="center">
              <AppInput
                type="textArea"
                key={index}
                name={step}
                placeholder={`Step ${index + 1}`}
              />
              <TiDelete
                size="30px"
                color="teal"
                onClick={() => removeStep(index)}
              />
            </Box>
          </>
        ))}

        <Button
          onClick={addStep}
          colorScheme="teal"
          marginTop={5}
          variant="solid"
          w="40%"
          mr="5%"
        >
          Add More Step
        </Button>
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
    >
      <Progress
        hasStripe
        value={progress}
        mb="5%"
        mx="5%"
        isAnimated
      ></Progress>

      <AppForm
        validationSchema={validationSchema}
        title="Add Recipe"
        initialValues={{
          name: "",
          category: "",
          portion: "",
          duration: "",
          tags: "",
          ingredient1: "",
          ingredient2: "",
          ingredient3: "",
          step1: "",
          step2: "",
          step3: "",
        }}
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
              <Button
                variant="solid"
                colorScheme="red"
                type="submit"
                onSubmit={(values) => console.log(values)}
              >
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

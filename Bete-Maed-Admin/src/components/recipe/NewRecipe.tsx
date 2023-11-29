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
import { Checkbox, Textarea } from "@chakra-ui/react";
import { Form } from "formik";

const NewRecipe = () => {
  const [progress, setProgress] = useState(33.33);
  let objIng: any = [];
  const [step, setStep] = useState(1);
  const [ingredients, setIngredients] = useState([
    "ingredient1",
    "ingredient2",
    "ingredient3",
    "ingredient4",
  ]);
  const [steps, setSteps] = useState(["step1", "step2", "step3", "step4"]);

  let values = {
    name: "",
    category: "",
    portion: "",
    duration: "",
    ingredient1: "",
    ingredient2: "",
    ingredient3: "",
    ingredient4: "",
    step1: "",
    step2: "",
    step3: "",
    step4: "",
  };
  const stepValues = steps.map((step) => {
    {
      step: "";
    }
  });
  const fields = {} as any;
  const handleNext = () => {
    ingredients.forEach((field: any) => {
      fields[field] = "";
    });

    // steps.forEach((field: any)=> {
    //     fields[field] = "";
    // })
  };
  const handleClick = () => {
    ingredients.forEach((element, index) => {
      objIng.push({ [element]: "" });
    });

    console.log("converted", objIng);
  };

  const addIngredient = () => {
    const newIngredient = `ingredient${ingredients.length + 1}`;
    setIngredients([...ingredients, newIngredient]);
  };
  const addStep = () => {
    const newStep = `step${steps.length + 1}`;
    setSteps([...steps, newStep]);
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
            {/* <Text>Tags</Text>
            <Stack spacing={5} direction="row">
              <Checkbox colorScheme="red" defaultChecked>
                Tag
              </Checkbox>
              <Checkbox colorScheme="green" defaultChecked>
                Checkbox
              </Checkbox>
            </Stack> */}
          </Box>
        </SimpleGrid>
      </>
    );
  };
  const Step2 = () => {
    return (
      <>
        {ingredients.map((ingredient, index) => (
          <AppInput
            key={index}
            name={ingredient}
            placeholder={`ingredient ${index + 1}`}
          />
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
          <AppInput
            type="textArea"
            key={index}
            name={step}
            placeholder={`Step ${index + 1}`}
          />
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
      //   as="form"
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
        // initialValues={{ name: "", category: "", portion: "", duration: "" }}
        initialValues={{
          name: "",
          category: "",
          portion: "",
          duration: "",
          ingredient1: "",
          ingredient2: "",
          ingredient3: "",
          ingredient4: "",
          step1: "",
          step2: "",
          step3: "",
          step4: "",
        }}
        handleClick={handleClick}
        display={step === 3 ? "flex" : "none"}
        // onSubmit={(values: any) => console.log(values)}
      >
        <>{step === 1 ? <Step1 /> : step === 2 ? <Step2 /> : <Step3 />}</>
        {/* <Step1 />
         */}

        {/* <AppInput name="name" placeholder="Recipe Name" />
        <AppInput name="category" placeholder="Category" />
        <AppInput name="portion" placeholder="Portion Size" />
        <AppInput name="duration" placeholder="Duration" />
        <button onClick={handleClick}>tst</button> */}
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
                //   onClick={(values) => console.log(values)}
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

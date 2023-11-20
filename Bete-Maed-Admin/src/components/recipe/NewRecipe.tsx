import { Heading, Button, Box } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import AppInput from "../input/AppInput";

const Form1 = () => {
  return (
    <>
      <Heading w="100%" textAlign="center" fontWeight="normal" mb="2%">
        User Registration
      </Heading>

      <Formik
        initialValues={{ firstName: "", lastName: "", email: "" }}
        onSubmit={(values) => console.log(values)}
      >
        <Form>
          <Box>
            <AppInput name="firstName" placeholder="First Name" />
            <AppInput name="lastName" placeholder="Last Name" />
            <AppInput name="email" placeholder="email" />

            <Button type="submit">Submit</Button>
          </Box>
        </Form>
      </Formik>
    </>
  );
};

export default Form1;

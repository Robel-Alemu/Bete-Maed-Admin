import { Heading, Button, Box } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { ReactNode } from "react";

interface initialValues {
  [key: string]: string;
}
interface Props {
  title: string;
  initialValues: any;
  children: ReactNode;
  display: string;
  handleClick: () => void;
}

const AppForm = ({
  title,
  initialValues,
  children,
  display,
  handleClick,
}: //   onSubmit,
Props) => {
  return (
    <>
      <Heading w="100%" textAlign="center" fontWeight="normal" mb="2%">
        {title}
      </Heading>

      <Formik
        initialValues={initialValues}
        // onSubmit={(values) => {
        //   // Handle form submission logic here
        //   console.log("Form values:", values);
        // }}
        onSubmit={(values) => {
          console.log({ values });
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <>
          <Form>
            {children}
            {/* <Field id="firstName" name="firstName" placeholder="First Name" />
            <button type="submit">Submit</button> */}

            {/* <Box>{children}</Box> */}
            {/* <Button
              variant="solid"
              colorScheme="red"
              type="submit"
              onClick={handleClick}
            >
              Submit
            </Button> */}
            {/* <button type="submit">Submit</button> */}
          </Form>
        </>
      </Formik>
    </>
  );
};

export default AppForm;

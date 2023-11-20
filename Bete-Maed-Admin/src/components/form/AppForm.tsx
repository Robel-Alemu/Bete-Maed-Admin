import { Heading, Button, Box } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { ReactNode } from "react";

interface initialValues {
  [key: string]: string;
}
interface Props {
  title: string;
  values: initialValues;
  children: ReactNode;
  display: string;
}
const AppForm = ({ title, values, children, display }: Props) => {
  return (
    <>
      <Heading w="100%" textAlign="center" fontWeight="normal" mb="2%">
        {title}
      </Heading>

      <Formik initialValues={values} onSubmit={(values) => console.log(values)}>
        <Form>
          <Box>
            {children}

            {/* <Button display={display} type="submit">
              Submit
            </Button> */}
          </Box>
        </Form>
      </Formik>
    </>
  );
};

export default AppForm;

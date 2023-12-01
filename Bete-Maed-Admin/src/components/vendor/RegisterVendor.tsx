import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import AppInput from "../input/AppInput";
import AppForm from "../form/AppForm";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  vendorName: Yup.string().required().label("Vendor Name"),
  address: Yup.string().required().label("Address"),
  phone: Yup.string().required().label("Phone"),
  longitude: Yup.number().required().label("Longitude"),
  latitude: Yup.number().required().label("Latitude"),
});

const RegisterVendor = () => {
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
      <AppForm
        validationSchema={validationSchema}
        title="Register vendor"
        // initialValues={{ name: "", category: "", portion: "", duration: "" }}
        initialValues={{
          vendorName: "",
          address: "",
          phone: "",
          longitude: "",
          latitude: "",
        }}
      >
        <AppInput name="vendorName" placeholder="Vendor Name" />
        <AppInput name="address" placeholder="Address" />
        <AppInput name="phone" placeholder="Phone" />
        <AppInput name="longitude" placeholder="Longitude" />
        <AppInput name="latitude" placeholder="Latitude" />

        <Button marginTop={5} variant="solid" colorScheme="red" type="submit">
          Submit
        </Button>
      </AppForm>
    </Box>
  );
};

export default RegisterVendor;

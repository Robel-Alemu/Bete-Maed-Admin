import { Text } from "@chakra-ui/react";

interface Props {
  error: string;
  visible: boolean;
}
const ErrorMessage = ({ error, visible }: Props) => {
  return <Text color="red">{error}</Text>;
};

export default ErrorMessage;

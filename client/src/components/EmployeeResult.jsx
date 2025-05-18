import { HStack, Image, Text, VStack } from "@chakra-ui/react";
import { Link} from "react-router-dom"
import useSearchTerm from "../hooks/useSearchTerm"
const EmployeeResult = ({ employee }) => {
  const [searchTerm] = useSearchTerm();

  console.log(employee);
  return (
    <>
      <Link to={`/employees/${employee.id}?q=${searchTerm}`}>
        <HStack boxShadow="md">
          <Image
            boxSize="105px"
            src={`http://localhost:3030/${employee.imageFilePath}`}
            alt={`${employee.firstName} ${employee.lastName}`}
          />
          <VStack spacing={0} alignItems="flex-start">
            <Text fontSize="2xl">
              {employee.firstName} {employee.lastName}
            </Text>
            <Text fontSize="lg">{employee.teamName}</Text>
          </VStack>
        </HStack>
      </Link>
    </>
  );
};
export default EmployeeResult;

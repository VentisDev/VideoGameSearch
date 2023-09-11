import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const GameSearch = () => {
  return (
    <InputGroup>
    <InputLeftElement children={<BsSearch />} />
      <Input
        placeholder="Search Games..."
        variant="field"
        borderRadius={20}
        paddingY={3}
      ></Input>
    </InputGroup>
  );
};

export default GameSearch;

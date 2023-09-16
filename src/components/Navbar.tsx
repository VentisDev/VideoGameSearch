import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import GameSearch from "./GameSearch";

interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({onSearch}: Props) => {
  return (
    <HStack padding="0px 10px" width="100%">
      <Image src={logo} boxSize="60px" />
      <GameSearch onSearch={onSearch}/>
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;

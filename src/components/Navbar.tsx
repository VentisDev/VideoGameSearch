import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import GameSearch from "./GameSearch";

const Navbar = () => {
  return (
    <HStack padding="0px 10px">
      <Image src={logo} boxSize="60px" />
      <GameSearch />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;

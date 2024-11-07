import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  return (
    <>
      {platforms.map((platform) => (
        <Text>{platform.name}</Text>
      ))}
    </>
  );
};

// const PlatformIconList = ({ platforms = [] }: Props) => {
//   const iconMap: { [key: string]: IconType } = {
//     pc: FaWindows,
//     playstation: FaPlaystation,
//     xbox: FaXbox,
//     nintendo: SiNintendo,
//     mac: FaApple,
//     linux: FaLinux,
//     android: FaAndroid,
//     ios: MdPhoneIphone,
//     web: BsGlobe,
//   };

//   return (
//     <Stack direction="column" gap={3} marginY={1}>
//       {platforms.map((platform) => (
//         <Stack key={platform.id} direction="row" align="center" gap={2}>
//           <Icon as={iconMap[platform.slug]} color="gray.500" />
//           <Text>{platform.name}</Text>{" "}
//           {/* Здесь можете показать название платформы */}
//         </Stack>
//       ))}
//     </Stack>
//   );
// };

export default PlatformIconList;

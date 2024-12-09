import { HStack, Icon, Text, Link } from "@chakra-ui/react";
import { ExternalLink as ExternalLinkIcon } from "react-feather";

export default function ExternalLink({ children, href }) {
  return (
    <Link target="_blank" rel="noopener noreferrer" href={href}>
      <HStack gap={1 / 2}>
        <Text>{children}</Text>
        <Icon w="3" h="3" alignSelf={"flex-start"}>
          <ExternalLinkIcon />
        </Icon>
      </HStack>
    </Link>
  );
}

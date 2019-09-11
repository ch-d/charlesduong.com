import Link from "next/link";
import Social from "../../Social";
import { Flex, Logo } from "./style";

export default () => (
  <Flex alignItems="center" py={3}>
    <Link prefetch href="/">
      <Logo>charles duong</Logo>
    </Link>
    <Flex flex="1 1 auto" />
    <Social />
  </Flex>
);

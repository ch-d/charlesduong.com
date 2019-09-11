import {
  Flex,
  Description,
  Details,
  Divider,
  CategoryLabel,
  CategoryItem,
  Title
} from "./style";
import { Para } from "../Typography";

export default ({
  introTitle,
  color,
  subTitleLabel,
  subTitleItem,
  intro,
  categories
}) => (
  <Flex flexWrap="wrap" py={5}>
    <Description>
      <Title>{introTitle}</Title>
      <Flex justifyContent="flex-start" alignItems="center" mb={3}>
        <CategoryLabel mt={0} mr={1} color={color}>
          {subTitleLabel}
          {subTitleItem ? ":" : null}
        </CategoryLabel>
        <CategoryItem>{subTitleItem}</CategoryItem>
      </Flex>
      {intro.map((text, i) => (
        <Para key={i}>{text}</Para>
      ))}
    </Description>
    <Flex>
      <Divider w="1" color={color} />
      <Details>
        {categories.map((item, i) =>
          item.type === "label" ? (
            <CategoryLabel key={i} color={color}>
              {item.text}
            </CategoryLabel>
          ) : (
            <CategoryItem key={i}>{item.text}</CategoryItem>
          )
        )}
      </Details>
    </Flex>
  </Flex>
);

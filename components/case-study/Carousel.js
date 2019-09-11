import AliceCarousel from "react-alice-carousel";
import styled from "styled-components";
import { theme } from "../../theme";
import { Caption } from "./Typography";
import Container from "./Container";

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
`;

const SlideTitle = styled(Caption)`
  text-align: center;
  @media (max-width: 60rem) {
    width: 100%;
    order: -1;
    margin-bottom: 1rem;
  }
`;

const Button = styled.button`
  // remove default button styles
  font-family: inherit;
  border: 0;
  padding: 0;
  cursor: pointer;

  // custom button styles
  flex: 0 1 200px;
  @media (max-width: 60rem) {
    flex: 0 1 40%;
  }
  padding: 8px;
  border-radius: 4px;
  border: 1px solid ${theme.colors.neutral[20]};
  color: ${theme.colors.neutral[500]};
  background: linear-gradient(180deg, #fff 0%, ${theme.colors.neutral[5]} 100%);

  &:hover,
  &:focus {
    background: linear-gradient(
      180deg,
      ${theme.colors.neutral[3]} 0%,
      ${theme.colors.neutral[7]} 100%
    );
  }
`;

const Thumbnails = styled.nav`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));
  grid-gap: 16px;
  padding: 8px 0;
  border-radius: 2px;
`;

const Thumbnail = styled.img`
  width: 100%;
  border-radius: 2px;
  cursor: pointer;
  border: 1px solid;
  background-color: #fff;
  opacity: ${props => (props.thumbIndex === props.galleryIndex ? 1 : 0.6)};
  border-color: ${props =>
    props.thumbIndex === props.galleryIndex
      ? theme.colors[props.color][400]
      : "#fff"};
  &:hover {
    border-color: ${props => theme.colors[props.color][200]};
    opacity: 0.8;
  }
`;

export default class Carousel extends React.Component {
  state = {
    currentIndex: 0
  };

  state = {
    currentIndex: 0,
    itemsInSlide: 1,
    responsive: { 0: { items: 3 } },
    galleryItems: this.galleryItems(this.props.color)
  };

  galleryItems(color) {
    return this.props.items.map((item, i) => (
      <img
        src={item.src}
        onDragStart={e => e.preventDefault()}
        style={{
          width: "100%"
          // borderRadius: 2,
          // background: `linear-gradient(
          //   180deg,
          //   ${theme.colors[color][10]} 0%,
          //   ${theme.colors[color][20]} 100%`
        }}
        key={i}
      />
    ));
  }

  slidePrevPage = () => {
    const currentIndex = this.state.currentIndex - this.state.itemsInSlide;
    this.setState({ currentIndex });
  };

  slideNextPage = () => {
    const {
      itemsInSlide,
      galleryItems: { length }
    } = this.state;
    let currentIndex = this.state.currentIndex + itemsInSlide;
    if (currentIndex > length) currentIndex = length;

    this.setState({ currentIndex });
  };

  handleOnSlideChange = event => {
    const { itemsInSlide, item } = event;
    this.setState({
      itemsInSlide,
      currentIndex: item
    });
  };

  render() {
    const { items, color } = this.props;
    const { currentIndex, galleryItems } = this.state;

    const thumbItem = (item, i) => (
      <Thumbnail
        onClick={() => this.Carousel.slideTo(i)}
        color={color}
        thumbIndex={i}
        galleryIndex={this.state.currentIndex}
        src={item.src}
        key={i}
      />
    );

    return (
      <Container>
        <AliceCarousel
          mouseDragEnabled
          dotsDisabled={true}
          buttonsDisabled={true}
          items={galleryItems}
          slideToIndex={currentIndex}
          onInitialized={this.handleOnSlideChange}
          onSlideChanged={this.handleOnSlideChange}
          ref={el => (this.Carousel = el)}
        />

        <Navigation>
          <Button onClick={this.slidePrevPage}>Previous Slide</Button>
          <SlideTitle m={0}>
            {currentIndex >= 0 && currentIndex < items.length
              ? items[currentIndex].text
              : "-"}
          </SlideTitle>
          <Button onClick={this.slideNextPage}>Next Slide</Button>
        </Navigation>

        {/* <Divider color={color} /> */}

        <Thumbnails color={color}>{items.map(thumbItem)}</Thumbnails>
      </Container>
    );
  }
}

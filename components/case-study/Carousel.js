import AliceCarousel from "react-alice-carousel";
import styled from "styled-components";
import "react-alice-carousel/lib/alice-carousel.css";
import { theme } from "../../theme";
import { Caption } from "./Typography";

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 8px;
`;

const Button = styled.button`
  // remove default button styles
  font-family: inherit;
  border: 0;
  padding: 0;
  cursor: pointer;

  // custom button styles
  width: 200px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid ${theme.colors.neutral[50]};
  color: ${theme.colors.neutral[500]};
  background: linear-gradient(
    180deg,
    ${theme.colors.neutral[10]} 0%,
    ${theme.colors.neutral[20]} 100%
  );

  &:hover,
  &:focus {
    background: linear-gradient(
      180deg,
      ${theme.colors.neutral[15]} 0%,
      ${theme.colors.neutral[30]} 100%
    );
  }
`;

const Thumbnails = styled.nav`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 16px;
  margin-bottom: 2rem;
`;

const Thumbnail = styled.img`
  width: 100%;
  border-radius: 2px;
  cursor: pointer;
  border: 4px solid;
  border-color: ${props =>
    props.thumbIndex === props.galleryIndex
      ? theme.colors.neutral[100]
      : "#fff"};
  &:hover {
    border-color: ${theme.colors.neutral[50]};
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
    galleryItems: this.galleryItems()
  };

  galleryItems() {
    return this.props.items.map((item, i) => (
      <img
        src={item.src}
        onDragStart={e => e.preventDefault()}
        style={{ width: "100%" }}
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
    const { items } = this.props;
    const { currentIndex, galleryItems } = this.state;

    const thumbItem = (item, i) => (
      <Thumbnail
        onClick={() => this.Carousel.slideTo(i)}
        thumbIndex={i}
        galleryIndex={this.state.currentIndex}
        src={item.src}
        key={i}
      />
    );

    return (
      <React.Fragment>
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
          <Caption m={0}>{items[currentIndex].text}</Caption>
          <Button onClick={this.slideNextPage}>Next Slide</Button>
        </Navigation>

        <Thumbnails>{items.map(thumbItem)}</Thumbnails>
      </React.Fragment>
    );
  }
}

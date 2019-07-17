import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styled from "styled-components";
import { theme } from "../../theme";

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
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
`;

const Thumbnail = styled.img`
  width: 100%;
  border-radius: 2px;
  cursor: pointer;
  border: 4px solid #fff;
  // border-color: ${props =>
    props.thumbIndex === props.galleryIndex
      ? theme.colors.neutral[100]
      : "#fff"};
  &:hover {
    border-color: ${theme.colors.neutral[50]};
  }
`;

export default class Gallery extends React.Component {
  // state = {
  //   currentIndex: 0
  // };
  // slideTo = i => this.setState({ currentIndex: i });
  // onSlideChanged = e => this.setState({ currentIndex: e.item });
  // slideNext = () =>
  //   this.setState({
  //     currentIndex: this.state.currentIndex + 1
  //   });
  // slidePrev = () =>
  //   this.setState({
  //     currentIndex: this.state.currentIndex - 1
  //   });

  render() {
    const { items } = this.props;

    const handleOnDragStart = e => e.preventDefault();
    const galleryItems = items.map((item, i) => (
      <div>
        <img
          src={item.src}
          onDragStart={handleOnDragStart}
          style={{ width: "100%" }}
          key={i}
        />
      </div>
    ));

    const thumbItem = (item, i) => (
      <Thumbnail
        onClick={() => this.Carousel.slideTo(i)}
        thumbIndex={i}
        // galleryIndex={this.state.currentIndex}
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
          slideToIndex={this.currentIndex}
          onSlideChanged={this.onSlideChanged}
          items={galleryItems}
          ref={el => (this.Carousel = el)}
        />

        <Navigation>
          <Button onClick={() => this.Carousel.slidePrev()}>
            Previous Slide
          </Button>
          <Button onClick={() => this.Carousel.slideNext()}>Next Slide</Button>
        </Navigation>

        <Thumbnails>{items.map(thumbItem)}</Thumbnails>
      </React.Fragment>
    );
  }
}

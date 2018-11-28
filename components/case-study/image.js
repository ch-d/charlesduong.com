import styled from 'styled-components';
import { space } from 'styled-system';
import { Caption } from '../../constants/typography';

const Image = styled.img`
  max-width:100%;
  width:100%;
	border:0;
  @media (max-width: 40rem) {
    max-width:none;
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
  };
  ${space};
`;

const ImageBorder = styled.div`
  border: ${props => props.showBorder ? '1px solid rgba(78, 211, 202, 0.25)' : ''};
  padding: ${props => props.showBorder ? '0.5rem' : ''};
  border-radius: 0.5rem;
`

const Cap = Caption.extend`
  ${space};
`

export default ({ img, cap, showBorder }) => (
  <div>
    <ImageBorder showBorder={showBorder}>
      <Image src={img} alt={cap + " image not found 😵 "} title={cap}/>
    </ImageBorder>
    <Cap mt={[1,0]} mb={4}>{cap}</Cap>
  </div>
)

import styled from 'styled-components';
import { space } from 'styled-system';
import { Caption } from '../constants/typography';

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

const Cap = Caption.extend`
  ${space};
`

export default ({ img, alt, cap }) => (
  <div>
    <Image src={img} alt={alt}/>
    <Cap mt={[1,0]} mb={2}>{cap}</Cap>
  </div>
)

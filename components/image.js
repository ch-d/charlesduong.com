import styled from 'styled-components';
import { space } from 'styled-system';

const Image = styled.img`
  max-width:100%;
  width:100%;
	border:0;
  ${space}
`;

export default ({ img, alt }) => (
  <Image mb={2} src={img} alt={alt}/>
)

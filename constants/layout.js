import styled from 'styled-components';

const H1 = styled.h1`
	color: ${props => props.theme.colors.black};
  font-size: 3rem;
  font-weight: 100;
  margin: 0;
`;

const H2 = styled.h2`
	color: ${props => props.theme.colors.blue};
  font-size: .875rem;
  font-weight: 700;
  margin: 0;
  line-spacing:.1em;
  text-transform:uppercase
`;

const H3 = styled.h3`
	color: ${props => props.theme.colors.black};
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
`;

const Para = styled.p`
	color: ${props => props.theme.colors.black};
  font-size: 1rem;
  line-height:1.5;
  max-width:34rem;
  margin:0;
`;

const Image = styled.img`
	background-color: ${props => props.theme.colors.black};
  height:320px;
  width:100%
`;

module.exports = {
  H1,
  H2,
  H3,
  Para,
  Image
}

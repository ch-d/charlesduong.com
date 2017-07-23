import styled from 'styled-components';
import { space } from 'styled-system';

const Icolink= styled.a`
  ${space}
`

export default ({ url, site, color }) => (
	<Icolink href={ url } target='_blank' mx={[2,1]}>
    <img src={'https://icon.now.sh/' + site + '/24/' + color } alt={ site } title={ site } />
  </Icolink>
)

import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 32px);
  max-width: 100%;
  background: ${props => props.theme.colors.background}
`;
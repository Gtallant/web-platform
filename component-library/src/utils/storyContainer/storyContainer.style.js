import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 32px);
  width: calc(100vw);
  background: ${props => props.theme.colors.background}
`;
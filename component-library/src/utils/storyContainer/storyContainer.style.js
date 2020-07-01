import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 32px);
  width: calc(100vw - 64px);
  padding: 16px 32px;
  background: ${props => props.theme.colors.background}
`;
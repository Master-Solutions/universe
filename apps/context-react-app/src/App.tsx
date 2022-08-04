import styled from '@emotion/styled';

const StyledApp = styled.div`
  font-family: sans-serif;
  min-width: 300px;
  max-width: 600px;
  margin: 50px auto;
`;

export function App() {
  return (
    <StyledApp>
      123
      <header className="flex">
        <h1>Welcome to context-react-app!</h1>
      </header>
    </StyledApp>
  );
}

export default App;

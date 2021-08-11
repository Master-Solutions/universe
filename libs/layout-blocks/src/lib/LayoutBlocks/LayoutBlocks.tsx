import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface LayoutBlocksProps {}
const StyledLayoutBlocks = styled.div`
  color: pink;
  background: #000;
`;

export function LayoutBlocks(props: LayoutBlocksProps) {
  return (
    <StyledLayoutBlocks as="article">
      <h1>Welcome to LayoutBlocks!</h1>
    </StyledLayoutBlocks>
  );
}


export default LayoutBlocks;

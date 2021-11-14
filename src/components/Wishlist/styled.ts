import { styled } from "~/theme";

export const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.yellowgreen};
  padding: 0 ${({ theme }) => `${theme.rem(8)} ${theme.rem(8)}`};
`;

export const StyledTitle = styled.h2`
  font-size: ${({ theme }) => theme.rem(18)};
  line-height: ${({ theme }) => theme.rem(39)};
  margin-bottom: ${({ theme }) => theme.rem(30)};
  text-align: center;
`;

export const StyledItem = styled.div`
  margin-bottom: ${({ theme }) => theme.rem(15)};
  padding-right: ${({ theme }) => theme.rem(50)};
  position: relative;
`;

export const StyledRemove = styled.button`
  background-color: transparent;
  border: none;
  color: red;
  cursor: pointer;
  height: ${({ theme }) => theme.rem(40)};
  padding: 0;
  position: absolute;
  right: ${({ theme }) => theme.rem(10)};
  transform: translateY(-50%);
  top: 50%;
  width: ${({ theme }) => theme.rem(40)};

  &:hover {
    opacity: 0.5;
  }
`;

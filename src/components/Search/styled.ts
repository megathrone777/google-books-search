import { styled } from "~/theme";
import { placeholder } from "~/theme/mixins";

export const StyledWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.rem(30)};

  @media ${({ theme }) => theme.devices.tablet} {
    margin-bottom: ${({ theme }) => theme.rem(10)};
  }
`;

export const StyledInput = styled.input`
  appearance: none;
  border: ${({ theme }) => `${theme.rem(1)} solid ${theme.colors.grey}`};
  font-size: ${({ theme }) => theme.rem(17)};
  height: ${({ theme }) => theme.rem(39)};
  padding: 0 ${({ theme }) => theme.rem(8)};
  transition: box-shadow 0.1s ease-in;
  width: 100%;
  ${placeholder()};

  &:focus {
    box-shadow: 0 0 ${({ theme }) => `${theme.rem(5)} ${theme.colors.grey}`};
    outline: none;
    ${placeholder(true)};
  }
`;

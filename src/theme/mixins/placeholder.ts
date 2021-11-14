import { css } from "~/theme";

const placeholder = (isHidden?: boolean) => css`
  &::-webkit-input-placeholder {
    color: ${({ theme }) => (isHidden ? "transparent" : theme.colors.grey)};
  }

  &:-moz-placeholder {
    color: ${({ theme }) => (isHidden ? "transparent" : theme.colors.grey)};
  }

  &::-moz-placeholder {
    color: ${({ theme }) => (isHidden ? "transparent" : theme.colors.grey)};
  }

  &:-ms-input-placeholder {
    color: ${({ theme }) => (isHidden ? "transparent" : theme.colors.grey)};
  }
`;

export { placeholder };

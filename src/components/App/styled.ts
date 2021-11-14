import { styled } from "~/theme";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.rem(1280)};
  padding: ${({ theme }) => `${theme.rem(30)} ${theme.rem(10)}`};

  @media ${({ theme }) => theme.devices.tablet} {
    padding-bottom: ${({ theme }) => theme.rem(10)};
    padding-top: ${({ theme }) => theme.rem(10)};
  }

  @media ${({ theme }) => theme.devices.mobile} {
    flex-direction: column;
  }
`;

export const StyledContent = styled.div`
  width: calc(66.6666% - ${({ theme }) => theme.rem(15)});

  @media ${({ theme }) => theme.devices.tablet} {
    width: calc(66.6666% - ${({ theme }) => theme.rem(5)});
  }

  @media ${({ theme }) => theme.devices.mobile} {
    width: 100%;
  }
`;

export const StyledSidebar = styled.div`
  width: calc(33.3333% - ${({ theme }) => theme.rem(15)});

  @media ${({ theme }) => theme.devices.tablet} {
    width: calc(33.3333% - ${({ theme }) => theme.rem(5)});
  }

  @media ${({ theme }) => theme.devices.mobile} {
    width: 100%;
  }
`;

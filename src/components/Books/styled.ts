import { keyframes, styled } from "~/theme";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.yellowgreen};
  min-height: ${({ theme }) => theme.rem(300)};
  padding: ${({ theme }) => theme.rem(10)};
  position: relative;

  @media ${({ theme }) => theme.devices.mobile} {
    margin-bottom: ${({ theme }) => theme.rem(10)};
  }
`;

export const StyledList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: ${({ theme }) => theme.rem(-5)};
  margin-right: ${({ theme }) => theme.rem(-5)};
`;

export const StyledItem = styled.div`
  margin-bottom: ${({ theme }) => theme.rem(20)};
  margin-left: ${({ theme }) => theme.rem(5)};
  margin-right: ${({ theme }) => theme.rem(5)};
  width: calc(25% - ${({ theme }) => theme.rem(10)});
  position: relative;

  @media ${({ theme }) => theme.devices.desktop} {
    width: calc(33.3333% - ${({ theme }) => theme.rem(10)});
  }

  @media ${({ theme }) => theme.devices.tablet} {
    width: calc(50% - ${({ theme }) => theme.rem(10)});
  }

  @media ${({ theme }) => theme.devices.mobile} {
    width: calc(33.3333% - ${({ theme }) => theme.rem(10)});
  }

  @media ${({ theme }) => theme.devices.mobileSm} {
    width: calc(50% - ${({ theme }) => theme.rem(10)});
  }

  @media ${({ theme }) => theme.devices.mobileXs} {
    width: 100%;
  }
`;

export const StyledItemImageHolder = styled.div`
  height: ${({ theme }) => theme.rem(220)};
  margin-bottom: ${({ theme }) => theme.rem(10)};

  @media ${({ theme }) => theme.devices.mobileXs} {
    height: ${({ theme }) => theme.rem(280)};
  }
`;

export const StyledItemImage = styled.img`
  height: 100%;
  width: 100%;
`;

export const StyledItemTitle = styled.h2`
  height: ${({ theme }) => theme.rem(40)};
  margin-bottom: ${({ theme }) => theme.rem(10)};
  overflow: hidden;
`;

export const StyledItemSubtitle = styled.p`
  font-size: ${({ theme }) => theme.rem(15)};
  font-style: italic;
`;

export const StyledItemList = styled.ul`
  margin-bottom: ${({ theme }) => theme.rem(10)};
  padding-left: ${({ theme }) => theme.rem(5)};
`;

export const StyledItemListItem = styled.li`
  font-size: ${({ theme }) => theme.rem(13)};
`;

export const StyledItemDescription = styled.p`
  font-size: ${({ theme }) => theme.rem(13)};
`;

export const StyledItemHeart = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: ${({ theme }) => theme.rem(22)};
  padding: 0;
  position: absolute;
  top: ${({ theme }) => theme.rem(10)};
  right: ${({ theme }) => theme.rem(10)};
  width: ${({ theme }) => theme.rem(22)};
  z-index: 10;
`;

export const StyledLoader = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  bottom: 0;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 20;
`;

export const StyledLoaderLayout = styled.div`
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  animation-name: ${rotate};
  animation-timing-function: linear;
  height: ${({ theme }) => theme.rem(80)};
  margin-top: ${({ theme }) => theme.rem(100)};
  width: ${({ theme }) => theme.rem(80)};
`;

import React from "react";

import { AppProvider } from "~/store";
import { Books, Search, Wishlist } from "~/components";
import { ThemeProvider, theme } from "~/theme";
import { GlobalStyle } from "~/theme/global-style";
import { StyledWrapper, StyledContent, StyledSidebar } from "./styled";

const App: React.FC = () => (
  <AppProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <StyledWrapper>
        <StyledContent>
          <Search />
          <Books />
        </StyledContent>

        <StyledSidebar>
          <Wishlist />
        </StyledSidebar>
      </StyledWrapper>
    </ThemeProvider>
  </AppProvider>
);

export { App };

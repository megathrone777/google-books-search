import React, { useContext } from "react";

import { AppContext, removeFromWishlist } from "~/store";
import { TWishlistItem } from "~/components";
import { SvgCloseIcon } from "~/icons";
import { StyledWrapper, StyledTitle, StyledItem, StyledRemove } from "./styled";

const Wishlist: React.FC = () => {
  const { dispatch, store } = useContext(AppContext);
  const { wishlist } = store;

  const handleRemoveClick = (id: string): void => {
    dispatch(removeFromWishlist(id));
  };

  return (
    <StyledWrapper>
      <StyledTitle>My reading wishlist ({wishlist.length})</StyledTitle>
      {wishlist && !!wishlist.length ? (
        <div>
          {wishlist.map(
            ({ id, title }: TWishlistItem): React.ReactElement => (
              <StyledItem key={id}>
                {title}
                <StyledRemove
                  onClick={() => handleRemoveClick(id)}
                  type="button"
                >
                  <SvgCloseIcon />
                </StyledRemove>
              </StyledItem>
            )
          )}
        </div>
      ) : (
        <p>Wishlist is empty.</p>
      )}
    </StyledWrapper>
  );
};

export { Wishlist };

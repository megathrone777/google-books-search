import React, { useContext } from "react";

import { TBook } from "./types";
import { TWishlistItem } from "~/components";
import { AppContext, addToWishList, removeFromWishlist } from "~/store";
import { SvgLoaderIcon, SvgHeartIcon, SvgHeartFilledIcon } from "~/icons";
import {
  StyledWrapper,
  StyledLoader,
  StyledLoaderLayout,
  StyledList,
  StyledItem,
  StyledItemImageHolder,
  StyledItemImage,
  StyledItemTitle,
  StyledItemList,
  StyledItemListItem,
  StyledItemSubtitle,
  StyledItemDescription,
  StyledItemHeart,
} from "./styled";

const Books: React.FC = () => {
  const { dispatch, store } = useContext(AppContext);
  const { books, booksLoading, wishlist } = store;

  const handleWishlistToggle = ({ id: bookId, title }: TWishlistItem): void => {
    if (wishlist.some(({ id }: TWishlistItem): boolean => id === bookId)) {
      dispatch(removeFromWishlist(bookId));
      return;
    }

    dispatch(addToWishList({ id: bookId, title }));
  };

  return (
    <StyledWrapper>
      {booksLoading && (
        <StyledLoader>
          <StyledLoaderLayout>
            <SvgLoaderIcon />
          </StyledLoaderLayout>
        </StyledLoader>
      )}

      {books && !!books.length ? (
        <StyledList>
          {books.map(
            ({
              authors,
              description,
              id: bookId,
              imageLinks,
              publishedDate,
              title,
            }: TBook): React.ReactElement => (
              <StyledItem key={`book-${bookId}`}>
                <StyledItemHeart
                  onClick={() => handleWishlistToggle({ id: bookId, title })}
                  type="button"
                >
                  {wishlist.some(
                    ({ id }: TWishlistItem): boolean => id === bookId
                  ) ? (
                    <SvgHeartFilledIcon />
                  ) : (
                    <SvgHeartIcon />
                  )}
                </StyledItemHeart>

                <StyledItemImageHolder>
                  {imageLinks?.thumbnail ? (
                    <StyledItemImage alt={title} src={imageLinks.thumbnail} />
                  ) : (
                    <p>No image.</p>
                  )}
                </StyledItemImageHolder>

                {title && (
                  <StyledItemTitle>
                    {title.substring(0, 40)}
                    {title.length > 40 && "..."}
                  </StyledItemTitle>
                )}

                {authors && !!authors.length && (
                  <>
                    <StyledItemSubtitle>Authors:</StyledItemSubtitle>
                    <StyledItemList>
                      {authors.map(
                        (author: string, index: number): React.ReactElement => (
                          <StyledItemListItem key={`${author}-${index}`}>
                            {author}
                          </StyledItemListItem>
                        )
                      )}
                    </StyledItemList>
                  </>
                )}

                {description && (
                  <>
                    <StyledItemSubtitle>Description:</StyledItemSubtitle>
                    <StyledItemDescription>
                      {description.substring(0, 100)}
                      {description.length > 100 && "..."}
                    </StyledItemDescription>
                  </>
                )}

                {publishedDate && (
                  <StyledItemSubtitle>
                    Published: {publishedDate}
                  </StyledItemSubtitle>
                )}
              </StyledItem>
            )
          )}
        </StyledList>
      ) : (
        <p>No results.</p>
      )}
    </StyledWrapper>
  );
};

export { Books };

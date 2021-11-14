import React, { useCallback, useContext, useEffect, useState } from "react";
import debounce from "lodash.debounce";

import { TBook } from "~/components";
import { TSearchItem } from "./types";
import { AppContext, setBooks, toggleBooksLoading } from "~/store";
import { StyledWrapper, StyledInput } from "./styled";

const Search: React.FC = () => {
  const { dispatch } = useContext(AppContext);
  const [inputValue, setInputValue] = useState<string>(null);

  const getBooks = useCallback(
    debounce((inputValue: string): void => {
      if (!inputValue || inputValue === "") {
        dispatch(setBooks([]));
        dispatch(toggleBooksLoading(false));
        return;
      }

      fetch(`https://www.googleapis.com/books/v1/volumes?q=${inputValue}`)
        .then((response: Response) => response.json())
        .then((data): void => {
          const booksList: TBook[] =
            data?.items?.map(({ id, volumeInfo }: TSearchItem): TBook => {
              return { ...volumeInfo, id };
            }) || [];

          dispatch(setBooks(booksList));
        })
        .catch((): void => {
          dispatch(setBooks([]));
        })
        .finally((): void => {
          dispatch(toggleBooksLoading(false));
        });
    }, 500),
    []
  );

  const handleInputChange = ({
    currentTarget,
  }: React.SyntheticEvent<HTMLInputElement>): void => {
    setInputValue(currentTarget.value);
    dispatch(toggleBooksLoading(true));
  };

  useEffect((): void => {
    getBooks(inputValue);
  }, [inputValue]);

  return (
    <StyledWrapper>
      <StyledInput
        onChange={handleInputChange}
        placeholder="Enter your bookname"
        type="text"
        value={inputValue || ""}
      />
    </StyledWrapper>
  );
};

export { Search };

import React from "react";
import { SearchInput } from "../StyledComponents";
import search from './../img/search-solid.svg';

const SearchInputComponent = (props) => {
  return (
    <SearchInput>
      <img src={search} alt="" />
      <form name="form_search" action="#">
        <input type="text" name="search" placeholder="Поиск друзей, новостей" />
      </form>
    </SearchInput>
  )
};

export default SearchInputComponent;
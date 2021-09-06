import React from 'react';
import { Header, Сontainer, NavigationBlock } from './StyledComponents';
import MainLogoComponent from './small-components/MainLogoComponent';
import NavMenuComponent from './small-components/NavMenuComponent';
import SearchInputComponent from './small-components/SearchInputComponent';

const MainHeader = (props) => {
  return (
    <Header>
      <Сontainer>
        <MainLogoComponent />
        <NavigationBlock>
          <SearchInputComponent />
          <NavMenuComponent />
        </NavigationBlock>
      </Сontainer>
    </Header>
  )
}

// Components===========================================================================================================================================================

// Styled Components===========================================================================================================================================================


export default MainHeader;

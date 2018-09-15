import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Header, Item, Input, Icon, Button, Text } from 'native-base';

export default function TopBarView({ searchText, openModal, CommentsSearch }) {

  return (
      <Fragment>
        <Header searchBar rounded header>
          <Item>
            <Icon name="ios-search" />
            <Input value={searchText} onChangeText={(e) => onValueChanged(e,CommentsSearch) } placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button onPress={openModal}  transparent>
            <Text>Add Coment</Text>
          </Button>
        </Header>
        </Fragment>
    );
}

const onValueChanged = (e,CommentsSearch) => {
    CommentsSearch(e.toLowerCase());
};


TopBarView.propTypes = {
    searchText: PropTypes.string.isRequired,
    CommentsSearch: PropTypes.func.isRequired,
}

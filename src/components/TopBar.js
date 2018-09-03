import React, { Component, Fragment } from 'react';
import { Header, Item, Input, Icon, Button, Text } from 'native-base';

export default class TopBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchText: ''
    }
  }

  onValueChanged = e => {
      this.setState({searchText: e}, this.dispatchSearch);
};

dispatchSearch = () => {
  const { param: { CommentsSearch } } = this.props;
    const { searchText } = this.state;
  CommentsSearch(searchText.toLowerCase());
};

openModal = () => {
  const { param: { openModal } } = this.props;
  openModal();
};

  render() {
const {  state: { searchText } , onValueChanged} = this;
    return (
      <Fragment>
        <Header searchBar rounded header>
          <Item>
            <Icon name="ios-search" />
            <Input value={searchText} onChangeText={onValueChanged} placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button onPress={this.openModal}  transparent>
            <Text>Add Coment</Text>
          </Button>
        </Header>
        </Fragment>
    );
  }
}
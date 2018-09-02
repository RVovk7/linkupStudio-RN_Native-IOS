import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Modal, Text, TouchableHighlight, View} from 'react-native';

export default class AddCommentModal extends Component {
 
  static propTypes = {
    modalOpen: PropTypes.bool.isRequired,
  }

constructor(props){
  super(props)
  this.state = {
    modalVisible: false,
  }
}

static getDerivedStateFromProps(nextProps) {
  console.log(nextProps);
if (nextProps.modalOpen) return { modalVisible: true }
}

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Modal </Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
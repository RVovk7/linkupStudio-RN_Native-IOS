import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Container,
    Header,
    Content,
    Item,
    Label,
    Left,
    Body,
    Button,
    Title,
    Text,
    Input,
    Root
} from 'native-base';
import vaildateUtil from '../util';
import {Modal, View } from 'react-native';

export default class AddCommentModal extends Component {

    static propTypes = {
        modalOpenState: PropTypes.bool.isRequired,
        closeModal: PropTypes.func.isRequired,
        postComment: PropTypes.func.isRequired
    };

    state = {
            modalVisible: false,
            commentTitle: '',
            commentEmail: '',
            commentText: ''
        }


    static getDerivedStateFromProps(nextProps) {
        return {modalVisible: nextProps.modalOpenState}
    }

    clearState = () => {
        this.setState({commentTitle: '', commentEmail: '', commentText: ''})
    }

    sendComment = () => {
        const {
            props: { closeModal, postComment },
            state: { commentTitle, commentEmail, commentText
            },
            clearState
        } = this;
        const commentData = {
            commentTitle,
            commentEmail,
            commentText
        };
        if ( vaildateUtil(commentTitle, commentEmail, commentText, false) ){
          postComment(commentData);
          clearState();
          closeModal();
        }
       

    };

    render() {
        const {
            props: {
                closeModal
            },
            state: {
                commentTitle,
                commentEmail,
                commentText,
                modalVisible
            }
        } = this;
        return (
            <View >
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={modalVisible}>
                    <Root>
                    <Container>
                        <Header>
                            <Left>
                                <Button onPress={closeModal} hasText transparent>
                                    <Text>Close</Text>
                                </Button>
                            </Left>
                            <Body>
                                <Title>Add Comment</Title>
                            </Body>
                        </Header>
                        <Content>
                            <Item >
                                <Label>Title</Label>
                                <Input
                                    value={commentTitle}
                                    onChangeText={commentTitle => this.setState({commentTitle})}
                                    style={{
                                    margin: 5
                                }}/>
                            </Item>
                            <Item>
                                <Label>email</Label>
                                <Input
                                    value={commentEmail}
                                    onChangeText={commentEmail => this.setState({commentEmail})}
                                    style={{
                                    margin: 5
                                }}/>
                            </Item>
                            <Item>
                                <Label>Comment</Label>
                                <Input
                                    value={commentText}
                                    onChangeText={commentText => this.setState({commentText})}
                                    style={{
                                    height: 100,
                                    margin: 5
                                }}/>
                            </Item>
                            <Button
                                onPress={this.sendComment}
                                style={{
                                marginTop: 21
                            }}
                                full>
                                <Text>Send</Text>
                            </Button>
                        </Content>
                    </Container>
                    </Root>
                </Modal>
          
            </View>
           
        );
    }
}
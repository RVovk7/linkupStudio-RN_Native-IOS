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
    Input
} from 'native-base';
import {Modal, View , AlertIOS} from 'react-native';

export default class AddCommentModal extends Component {

    static propTypes = {
        modalOpenState: PropTypes.bool.isRequired,
        closeModal: PropTypes.func.isRequired,
        postComment: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            commentTitle: '',
            commentEmail: '',
            commentText: ''
        }
    }

    static getDerivedStateFromProps(nextProps) {
        return {modalVisible: nextProps.modalOpenState}
    }

    clearState = () => {
        this.setState({commentTitle: '', commentEmail: '', commentText: ''})
    }

    sendComment = () => {
        const {
            props: {
                closeModal,
                postComment
            },
            state: {
                commentTitle,
                commentEmail,
                commentText
            },
            clearState
        } = this;
        const commentData = {
            commentTitle,
            commentEmail,
            commentText
        }
        if (commentTitle && commentEmail && commentText ){
          postComment(commentData);
          clearState();
          closeModal();
        } else {
          AlertIOS.alert('fill all the fields');
        }
       

    }

    render() {
        const {
            props: {
                closeModal
            },
            state: {
                commentTitle,
                commentEmail,
                commentText
            }
        } = this;
        return (
            <View >
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}>
                    <Container>
                        <Header>
                            <Left>
                                <Button onPress={closeModal} hasText transparent>
                                    <Text>Close</Text>
                                </Button>
                            </Left>
                            <Body>
                                <Title>Add Coment</Title>
                            </Body>
                        </Header>
                        <Content>
                            <Item floatingLabel t>
                                <Label>Title</Label>
                                <Input
                                    value={commentTitle}
                                    onChangeText={commentTitle => this.setState({commentTitle})}
                                    style={{
                                    margin: 5
                                }}/>
                            </Item>
                            <Item floatingLabel t>
                                <Label>email</Label>
                                <Input
                                    value={commentEmail}
                                    onChangeText={commentEmail => this.setState({commentEmail})}
                                    style={{
                                    margin: 5
                                }}/>
                            </Item>
                            <Item floatingLabel>
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
                </Modal>
            </View>
        );
    }
}
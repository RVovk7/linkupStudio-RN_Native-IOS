import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Container, Card, CardItem, Body, Text} from 'native-base';
import {TouchableOpacity, FlatList} from 'react-native';

export default class CommentsList extends PureComponent {
    static propTypes = {
        commentsData: PropTypes
            .arrayOf(PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])))
            .isRequired
    }

    render() {
        const {commentsData} = this.props;
        return (
            <Container>
                <FlatList
                    data={commentsData}
                    keyExtractor={item => item
                    .id
                    .toString()}
                    renderItem={this.renderItem}/>
            </Container>
        );
    }

    renderItem = ({item}) => {
        const {navigate} = this.props;
        return (
            <TouchableOpacity
                onPress={() => navigate('CommentViewScreen', {
                name: item.name,
                body: item.body,
                email: item.email
            })}>
                <Card>
                    <CardItem header>
                        <Text>{item.name}</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text
                                style={{
                                color: 'blue'
                            }}>
                                {`Email: `}
                                <Text
                                    style={{
                                    color: 'gray'
                                }}>
                                    {item.email}
                                </Text>
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
            </TouchableOpacity>
        )
    }
}
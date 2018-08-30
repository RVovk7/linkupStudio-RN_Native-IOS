import React, {Component} from 'react';
import {
    Container,
    Content,
    Card,
    CardItem,
    Body,
    Text
} from 'native-base';
import { ScrollView, TouchableOpacity} from 'react-native';
export default class CommentsList extends Component {
    render() {
        const {commentsData, navigate } = this.props;
        return (
            <Container>
                <ScrollView>
                    {commentsData.map(e => <Content key={e.id}>
                        <TouchableOpacity
                         onPress={() => navigate('CommentViewScreen', {
                       name: e.name,
                       body: e.body,
                       email: e.email
                    })} >
                        <Card>
                            <CardItem header>
                                <Text>{e.name}</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Text
                                        style={{color: 'blue'}}>
                                        {`Email:  `}
                                        <Text
                                        style={{color: 'gray'}}>
                                        {e.email}
                                        </Text>
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                        </TouchableOpacity>
                    </Content>)}
                </ScrollView>
            </Container>
        );
    }
}
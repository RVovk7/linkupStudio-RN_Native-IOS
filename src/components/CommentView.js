import React from 'react';
import {
    Container,
    Content,
    Card,
    CardItem,
    Text,
    Left,
    Body
} from 'native-base';

export default function CardExample(props) {
    const {name, body, email} = props.navigation.state.params;
    return (
        <Container>
            <Content>
                <Card style={{
                    flex: 0
                }}>
                    <CardItem bordered>
                        <Left>
                            <Body>
                                <Text  style={{fontSize: 25}}>{name}</Text>
                                <Text note>email:{email}</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text>
                               {body}
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    );
};

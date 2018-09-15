import React from 'react';
import { Container, Content, Spinner } from 'native-base';
export default function SpinnerView () {
    return (
      <Container>
        <Content>
          <Spinner color='blue' />
        </Content>
      </Container>
    );
};
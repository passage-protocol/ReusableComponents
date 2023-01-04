import React from 'react';
import { storiesOf } from '@storybook/react';
import Row from '../atoms/Row';

storiesOf('atoms/Row', module)
  .add('default', () => (
    <Row>
      <div>Column 1</div>
      <div>Column 2</div>
      <div>Column 3</div>
    </Row>
  ))
  .add('with custom styling', () => (
    <Row style={{ backgroundColor: '#6bedb5' }}>
      <div style={{ color: '#1b116e' }}>Column 1</div>
      <div style={{ color: '#1b116e' }}>Column 2</div>
      <div style={{ color: '#1b116e' }}>Column 3</div>
    </Row>
  ));

import React from 'react';
import PropTypes from 'prop-types';
import { render, Artboard, Text, View } from 'react-sketchapp';
import chroma from 'chroma-js';

// take a hex and give us a nice text color to put over it
const Thumbnail = (props) => (
  <Artboard
    name="Thumbnail"
  >
    <Text
      style={{
        color: 'blue',
        fontSie: 16,
      }}
    >
    Say
    </Text>
    {props.message}
  </Artboard>
);


export default (context) => {

  render(<Thumbnail message={'hello world!'} />, context.document.currentPage());
}

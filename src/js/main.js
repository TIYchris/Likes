import React from 'react';
import { render } from 'react-dom';
import LikeComponent from 'js/likeComponent';

require('assets/styles/styles.css');
require('assets/styles/normalize.css');

render(<LikeComponent />, document.getElementById('app'));
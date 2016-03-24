import React from 'react';
import ReactDom from 'react-dom';
import Box from './components/box';

var data = [
    {id : 1, author : 'Seo', text : 'This is one comment'},
    {id : 2, author : 'Dong', text : 'This is two comment'}
];

ReactDom.render(<Box data={data}/>, document.getElementById('main'));
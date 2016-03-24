/**
 * Created by seodongmyeong on 16. 3. 25..
 */
import React from 'react';
var marked = require('marked');

export default class extends React.Component {
    constructor() {
        super();
    }

    rawMarkup() {
        var rawMarkup = marked(this.props.children.toString(), {sanitize : true});
        return { __html : rawMarkup };
    }

    render() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    { this.props.author }
                </h2>
                <span dangerouslySetInnerHTML={this.rawMarkup()} />
            </div>
        );
    }
}
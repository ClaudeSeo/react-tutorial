/**
 * Created by seodongmyeong on 16. 3. 25..
 */

import React from 'react';
import Comment from './comment';

export default class extends React.Component {
    constructor() {
        super();
    }

    render() {
        var commentNodes = this.props.data.map(function(comment) {
            return (
                <Comment author={comment.author} key={comment.id}>
                    {comment.text}
                </Comment>
            )
        });
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
}
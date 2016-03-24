/**
 * Created by seodongmyeong on 16. 3. 25..
 */
import React from 'react';
import CommentList from './list';
import CommentForm from './form';

export default React.createClass({
    getInitialState : function(){
        return {
            data : []
        }
    },
    componentDidMount : function() {
        this.setState({data : [
            {"author": "Pete Hunt", "text": "This is one comment", "id" : 1},
            {"author": "Jordan Walke", "text": "This is *another* comment", "id" : 2}
        ]});
    },
    handleCommentSubmit : function(comment) {
        console.log(comment);
    },
    render : function() {
        return (
        <div className="commentBox">
            <h1>Comments</h1>
            <CommentList data={this.state.data}/>
            <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
        </div>
        );
    }
});
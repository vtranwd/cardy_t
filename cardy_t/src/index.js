import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
// import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.image()} />
                </a>
                <div className="content">
                    <a href="/" className="author">Bobby</a>
                    <div className="metadata">
                        <span className="date">Today at 5:00PM</span>
                    </div>
                    <div className="text">Hey that's cool!</div>
                </div>
            </div>
            {/* <CommentDetail author="Samuel"/> */}
            {/* <CommentDetail author="John"/> */}
            {/* <CommentDetail author="Kelly"/> */}
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
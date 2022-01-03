import React from 'react';
import faker from 'faker';

const CommentDetail = () => {
    return (
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
    );
};

// const App = (props) => {
//     console.log(props);
//     return (
//         <div className="comment">
//             <a href="/" className="avatar">
//                 <img alt="avatar" src={faker.image.avatar()} />
//             </a>
//             <div className="content">
//                 <a href="/" className="author">Bobby</a>
//                 <div className="metadata">
//                     <span className="date">Today at 5:00PM</span>
//                 </div>
//                 <div className="text">Hey that's cool!</div>
//             </div>
//         </div>
//     );
// };

export default CommentDetail;
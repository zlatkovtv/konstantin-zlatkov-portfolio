import React from 'react';

const Content = (props) => {
    return (
        <div id={props.id} className={props.fullscreen ? "fullscreen-container" : "container"}>
            <div className="content">
                <h2>{props.title}</h2>
                {props.children}
            </div>
        </div>
    );
};

export default Content;
import React from 'react';

const Section = (props) => {
    return (
        <section id={props.id} className={props.fullscreen ? "fullscreen" : ""}>
            <div className="content">
                <h2>{props.title}</h2>
                {props.children}
            </div>
        </section>
    );
};

export default Section;
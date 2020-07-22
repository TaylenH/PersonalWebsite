import React from 'react';

const Background = ({ children }) => {


    return (
        <>
            <div className="background">
                {children}
            </div>

    <style jsx>{`
    .background {
        background-image: url(${require('../public/labtop.jpg')});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-attachment: fixed;
        max-width: 100%;
        height: 350%;
    }

    @media(min-width: 1600px) {
        .background {
            height: 200%;
        }
    }
    `}</style>
        </>
    );
};

export default Background;
import React, { useEffect, useState } from 'react';

const Home = (props: {name: string}) => {
    

    return (
        <div>
            Hi, {props.name}
        </div>
    );
};

export default Home;
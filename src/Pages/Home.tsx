import React, { useEffect, useState } from 'react';

const Home = (props: { username: string, name: string, surname: string, birthdate: string, address: string }) => {
    

    return (
        <div>
            <h2>User Info:</h2>
            <p>Username: {props.username}</p>
            <p>Name: {props.name}</p>
            <p>Surname: {props.surname}</p>
            <p>Birthdate: {props.birthdate}</p>
            <p>Address: {props.address}</p>
        </div>
    );
};

export default Home;
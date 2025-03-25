"use client";

import React from 'react';
import { useParams } from 'next/navigation';

const UserPage = () => {
    const { id } = useParams();
    
    return (
        <div>
            <h1>Hello World {id}</h1> 
        </div>
    );
};

export default UserPage;

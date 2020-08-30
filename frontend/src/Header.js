import React from 'react';

export default function Header({children}) {
    return (
        <header>
            <h1>{children.title}</h1>
        </header>
    );
}
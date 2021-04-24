import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const Table  = (props) =>{
    
        const {characterData, removeCharacter } = props
        return (
                <table>
                    <TableHeader/>
                    <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
                </table>
        );
}

export default Table;
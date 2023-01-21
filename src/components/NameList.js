import React from 'react'
import PersonList from './PersonList';

function NameList() {
    const names = ["Akshay", "Aditya", "Aman"];

    const nameList = names.map(name => <PersonList name={name}></PersonList>)
  return (
    <div>{nameList}</div>
  )
}

export default NameList
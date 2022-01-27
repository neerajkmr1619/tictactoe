import React from 'react'
import {FaTimes, FaPen, FaRegCircle } from 'react-icons/fa'

const Icon = ({name}) =>{
    switch(name){
      case 'Circle':
          return <FaRegCircle className="icons"/>
          break;
      case 'Cross':
          return <FaTimes className="icons"/>
      case 'Zero':
          return <FaPen className="icons"/>        
          default:
              break;
    };
};

export default Icon;
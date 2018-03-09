import React, { Component } from 'react';
import LondonLaidBack from '../TravelCards/LaidBack/LondonLaidBack';
import LondonAdventurous from '../TravelCards/Adventurous/LondonAdventurous';
import LondonTourist from '../TravelCards/Tourist/LondonTourist';

import ChicagoLaidBack from '../TravelCards/LaidBack/ChicagoLaidBack';
import ChicagoAdventurous from '../TravelCards/Adventurous/ChicagoAdventurous';
import ChicagoTourist from '../TravelCards/Tourist/ChicagoTourist';

import LALaidBack from '../TravelCards/LaidBack/LosAngelesLaidBack';
import LAAdventurous from '../TravelCards/Adventurous/LosAngelesAdventurous';
import LATourist from '../TravelCards/Tourist/LosAngelesTourist';

import MexLaidBack from '../TravelCards/LaidBack/MexicoLaidBack';
import MexAdventurous from '../TravelCards/Adventurous/MexicoAdventurous';
import MexTourist from '../TravelCards/Tourist/MexicoTourist';

import NYLaidBack from '../TravelCards/LaidBack/NewYorkLaidBack';
import NYAdventurous from '../TravelCards/Adventurous/NewYorkAdventurous';
import NYTourist from '../TravelCards/Tourist/NewYorkTourist';

import ThailandLaidBack from '../TravelCards/LaidBack/ThailandLaidBack';
import ThailandAdventurous from '../TravelCards/Adventurous/ThailandAdventurous';
import ThailandTourist from '../TravelCards/Tourist/ThailandTourist';
import './Wrapper.css';




// componentDidMount(){
const Wrapper = (props) => {
  console.log(props.destination);
  if (props.personality === 'Adventurous') {
    if (props.destination === 'Chicago') {
      return <ChicagoAdventurous />;
    }
    if (props.destination === 'London') {
      return <LondonAdventurous />;
    }
    if (props.destination === 'LosAngeles') {
      return <LAAdventurous />;
    }
    if (props.destination === 'Mexico') {
      return <MexAdventurous />;
    }
    if (props.destination === 'NewYork') {
      return <NYAdventurous />;
    }
    if (props.destination === 'Thailand') {
      return <ThailandAdventurous />;
    }
  }
  if (props.personality === 'Tourist') {
    if (props.destination === 'Chicago') {
      return <ChicagoTourist />;
    }
    if (props.destination === 'London') {
      return <LondonTourist />;
    }
    if (props.destination === 'LosAngeles') {
      return <LATourist />;
    }
    if (props.destination === 'Mexico') {
      return <MexTourist />;
    }
    if (props.destination === 'NewYork') {
      return <NYTourist />;
    }
    if (props.destination === 'Thailand') {
      return <ThailandTourist />;
    }
  }
  if (props.personality === 'Laidback') {
    if (props.destination === 'Chicago') {
      return <ChicagoLaidBack />;
    }
    if (props.destination === 'London') {
      return <LondonLaidBack />;
    }
    if (props.destination === 'LosAngeles') {
      return <LALaidBack />;
    }
    if (props.destination === 'Mexico') {
      return <MexLaidBack />;
    }
    if (props.destination === 'NewYork') {
      return <NYLaidBack />;
    }
    if (props.destination === 'Thailand') {
      return <ThailandLaidBack />;
    }
  }
  // }
};
  // Add code to get the book with an _id equal to the id in the route param
  // e.g. http://localhost:3000/books/:id
  // The book id for this route can be accessed using props.match.params.id

//   render() {
//     return (
//       <div>
// 				<destination={props.destination} personality={props.personality} />
//         {props.destination}
//       </div>
//     );
//   }
// }
export default Wrapper;

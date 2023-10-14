import React from 'react';

const petProfiles = [
  {
    id: 1,
    image: 'image-url-1.jpg',
    name: 'Snickers',
    age: 9,
    ownerName: 'Jennie and Chris Megill',
    hobbies: ['Eating', 'Laying on my back (preferably in the sun)', 'Bird-watching'],
    nicknames: ['Snicks', 'Snickemswickemsbickemsthickems'],
    comment: [''],
  },
  {
    id: 2,
    image: 'image-url-2.jpg',
    name: 'Moo Moo',
    age: 6,
    ownerName: 'Jennie and Chris Megill',
    hobbies: ['Purring', 'Chasing red dots', 'Being near mom always'],
    nicknames: ['Moo-Tastic', 'Moolicious'],
    comment: [''],
  },
  {
    id: 3,
    image: 'image-url-3.jpg',
    name: 'Chicken',
    age: 3,
    ownerName: 'Jennie and Chris Megill',
    hobbies: ['Laying on daddy always', 'Trying new foods', 'Messing with his sisters'],
    nicknames: ['Chimin', 'Chickcano','Pollo'],
    comment: [''],
  },
  {
    id: 4,
    image: 'image-url-4.jpg',
    name: 'Bo',
    age: 2,
    ownerName: 'Jennie and Chris Megill',
    hobbies: ['Collecting straws', 'Climbing things', 'Sucking his paw'],
    nicknames: ['Bo-Bo', 'Robert(when being bad)'],
    comment: [''],
  },
  {
  id: 5,
    image: 'image-url-5.jpg',
    name: 'Toby',
    age: 13,
    ownerName: '',
    hobbies: ['sleeping', 'eating', 'barking'],
    nicknames: ['Tobs', 'Toby bobi'],
    comment: [''],
  }, 
{
  id: 6,
    image: 'image-url-6.jpg',
    name: 'Jersey',
    age: 10,
    ownerName: '',
    hobbies: ['sleeping', 'short walks', 'riding in car'],
    nicknames: ['Jerz', 'baby girl'],
    comment: [''],
  }, 
{
   id: 7,
    image: 'image-url-7.jpg',
    name: 'Reno',
    age: 1,
    ownerName: '',
    hobbies: ['bird watching', 'snuggling', 'picking on sister'],
    nicknames: ['Renz', 'reno meano'],
    comment: [''],
  }, 
{
   id: 8,
    image: 'image-url-8.jpg',
    name: 'Cloud',
    age: 1,
    ownerName: '',
    hobbies: ['playing with big sister', 'sleeping', 'getting treats'],
    nicknames: ['cloudy', 'ghost'],
    comment: [''],
  }, 
{
    id: 9,
    image: 'image-url-9.jpg',
    name: 'Prince',
    age: 3,
    ownerName: '',
    hobbies: ['singing', 'talking', 'looking in mirror'],
    nicknames: ['bird bird', 'handsome'],
    comment: [''],
  }, 
];

function PetProfile({ pet }) {
  return (
    <div>
      <img src={pet.image} alt={pet.name} />
      <h2>{pet.name}</h2>
      <p>Age: {pet.age}</p>
      <p>Owner: {pet.ownerName}</p>
      <p>Hobbies: {pet.hobbies.join(', ')}</p>
      <p>Nicknames: {pet.nicknames.join(', ')}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h3>Profiles of Four Pets</h3>
      {petProfiles.map((pet) => (
        <PetProfile key={pet.id} pet={pet} />
      ))}
    </div>
  );
}

export default App;

import React from 'react';
import Tweet from './Tweet';
import './App.css';

function App() {

  const tweets = [{ _id: 1, nameRe: 'Rahul', message: 'Football' }, { _id: 2, nameRe: 'Pradeep', message: 'Football' }, { _id: 3, nameRe: 'Utsav', message: 'Football' }, { _id: 4, nameRe: 'Tisa', message: 'Football' }]

  return (
    <div className='App'>
      {tweets.map(tweet => <Tweet name={tweet.nameRe} message={tweet.message} />)}

      {/* <Tweet name="Rahul Raj Dahal" message="Football is my Life." />
      <Tweet name="Utsav Subedi" message="I love fooling around with my friends." />
      <Tweet name="Pradeep Dahal" message="Tech is what I like the most." />
      <Tweet name="Tisa Maharjan" message="I don't like wasting my energy on unknown people." /> */}
    </div>
  );
}

export default App;
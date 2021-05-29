import React from 'react';
import { render } from 'react-dom';
import { Joke, jokes } from './Joke/Joke';

import './style.css';

const App = () => {
  return (
    <>
      <div className="container">
        <div className="container">
          {jokes.map((joke) => (
            <Joke
              key={joke.id}
              userAvatar={joke.avatar}
              userName={joke.name}
              text={joke.text}
              likes={joke.likes}
              dislikes={joke.dislikes}
            />
          ))}
        </div>
      </div>
    </>
  );
};

render(<App />, document.querySelector('#app'));

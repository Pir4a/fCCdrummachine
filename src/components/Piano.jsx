import React, { useState, useEffect } from 'react';
import './piano.css';

const padSounds = [
  {
    key: 'Q',
    description: 'heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  },
  {
    key: 'W',
    description: 'heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
  },
  {
    key: 'E',
    description: 'heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  },
  {
    key: 'A',
    description: 'heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
  },
  {
    key: 'S',
    description: 'clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
  },
  {
    key: 'D',
    description: 'open-hh',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
  },
  {
    key: 'Z',
    description: 'kick-n-hat',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
  },
  {
    key: 'X',
    description: 'kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
  },
  {
    key: 'C',
    description: 'closed-hh',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
  },
];

const Piano = () => {
  const [pressedKey, setPressedKey] = useState('');

  const play = (description) => {
    const audio = document.getElementById(description);
    audio.currentTime = 0;
    audio.play();
    const slider = document.getElementById('slider');
    slider.innerText = description;
  };

  const handleKeyDown = (event) => {
    const pressed = event.key.toUpperCase();
    const sound = padSounds.find((pad) => pad.key === pressed);
    if (sound) {
      setPressedKey(pressed);
      play(sound.description);
    }
  };

  const handleKeyUp = () => {
    setPressedKey('');
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className='body' id='drum-machine'>
      <div className='container' id='display'>
        <div className='grid'>
          {padSounds.map((sound) => (
            <button
              key={sound.key}
              className={`piano-key drum-pad ${pressedKey === sound.key ? 'pressed' : ''}`}
              onClick={() => play(sound.description)}
            >
              <audio className='clip' src={sound.url} id={sound.description}></audio>
              {sound.key}
            </button>
          ))}
        </div>
        <div className='piano-controls'>
        <div className='control'>
            <p>Power</p>
            <div className='select'>
                <div className='inner'>
                </div>
            </div>
            </div>
            
           
          <div className='display' id='dis'>
            {pressedKey}
          </div>
          <div className='volume-slider' id='slider'></div>
          <input max="1" min="0" step="0.01" type="range" value="0.37"/>
            
            <div className='control'>
                <p>Bank</p>
                <div className='select'>
                    <div className='inner'>
                    </div>
                </div>
            </div>


        </div>

    
    </div>
</div> 
  )
}

export default Piano;








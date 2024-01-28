import React, { useState, useEffect, useMemo } from 'react';
import music1 from '../assets/mp3/better-day.mp3';
import music2 from '../assets/mp3/coverless-book.mp3';
import music3 from '../assets/mp3/sad-soul.mp3';
import './music.css';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [volume, setVolume] = useState(0.15);
  const [currentTime, setCurrentTime] = useState(0);

  const songs = useMemo(
    () => [
      music1,
      music2,
      music3
    ],
    []
  );

  const audioRef = React.useRef(new Audio(songs[currentSongIndex]));

  useEffect(() => {
    const audio = audioRef.current;

    const handleCanPlay = () => {
      if (isPlaying) {
        audio.play().catch(error => {
          console.error('Error playing audio:', error);
        });
      }
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('timeupdate', handleTimeUpdate);

    // Clean up event listeners
    return () => {
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;

    // Load the new song when the current song changes
    audio.src = songs[currentSongIndex];

    // Set up event listener for loadedmetadata to check if audio has been loaded
    const handleLoadedMetadata = () => {
      if (isPlaying) {
        audio.play().catch(error => {
          console.error('Error playing audio:', error);
        });
      }
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);

    // Clean up event listener
    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [currentSongIndex, isPlaying, songs]);

  const togglePlayPause = () => {
    const audio = audioRef.current;

    setIsPlaying((prevIsPlaying) => {
      if (prevIsPlaying) {
        audio.pause();
      } else {
        audio.play().catch(error => {
          console.error('Error playing audio:', error);
        });
      }

      return !prevIsPlaying;
    });
  };

  const playNextSong = () => {
    setIsPlaying(false);
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);

    const audio = audioRef.current;
    if (audio) {
      audio.volume = newVolume;
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className='audioCon'>
        <div className="play-timer">{formatTime(currentTime)}</div>
      <button className='Btn1' onClick={togglePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <button className='Btn2' onClick={playNextSong}>Next Song</button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
        className="volumeSlider"
      />
    </div>
  );
};

export default MusicPlayer;

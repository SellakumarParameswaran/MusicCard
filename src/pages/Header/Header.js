import React from 'react'
import './Header.css';
import {Link} from 'react-scroll';
//import IconButton from '@material-ui/core';
//import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';

const Header = () => {
  return (
    <div className='Header'>
     
        <div className='Header__left'>

        <Link  to='Home' smooth={true} duration={500}>
        <h4>Home</h4></Link>

        <Link  to='MusicKey' smooth={true} duration={500}>
        <h4>Keys&Chords</h4></Link>
          
        <Link  to='contact' smooth={true} duration={500}>
        <h4>Contact</h4></Link>
          
       

        

          </div>

          <div className='Header__right'>
<h1>M<span>usic</span></h1>
 <div className="contact__icon">
<a href='https://open.spotify.com/'>
  B

  </a>
  </div> 

  <img 
  src={"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIANgBIAMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAwQFAgEG/9oACAEBAAAAAPnwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACxOIK4AAAA9vRVvHtmWj4AAAAuxV0kZPPRAAAA60M00asBo0eAAAAWeqk8GnNBRjtKoAAALnCfif1LmJqQAAAdalKcl5zdLqlfyuQAABJtZUV2te5y+tGprY0QAAAd8+dc6/OV7157wAAAAW7Vmvm36tYAAAAX9MqcGWAAAANqyZsVnjNAAAAFvX6p5HluoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/xAAYAQEAAwEAAAAAAAAAAAAAAAAAAQIDBP/aAAoCAhADEAAAANdAAAAAAAAAAAAAAAAAAAAF53IwUAAAAaNnMh1MWYAAAR0zhG688kdM8oAAAV6llkLMrcoAABExvOddpoqvbBAAAAZ9GfVfnRrzAAAAHP3VvvxRbTEAAAAAAAAAAAAAAAAAAAAAAAAAD//EADAQAAIBAgQEBAUEAwAAAAAAAAECAwAEESExMxASQHETQVFyICIygYI0QoCRQ1Jh/9oACAEBAAE/AP4Fpbsc2OFCGJNQPvXiQj9y14kR/cKMUTaAfant2Ga59aASQBUcSxjE6+ZqS48k/uiScySeIJGhIpLg6P8A3UkSyDEa+RoggkHq7aPLnOp0qeXnPKPpHFkIRG8iPggl5Dyk/KauI8RzjUa9Ui87Kvqambw4suw+CFQ0CgipYGTMZr8EDc8eflkadeR2X0PU2oxl7Crs/Mq+g4SwmIDFgceFvspwkt0fMZGpInjOY+/C0PzsPUVdDCQH1HU2f1P2FXW+ewqaARchDE4mrwbfuNXSIgTlUDM1b7KVO7RoGH+wqKZJctG9KKhgQRiKmiMTf8OlW28vY1eax9j1CqWYKNSahgWLHAkk1c75/GrzSL3Grz/F7jV7pH3NW2wlXez+Q4W8/iDlb6hV0oMLH0wNW2+n3qWFZcMSQRTKUYqdQenhYLKhOgPC7327CmkkkK87E4Gr3SPuann8YL8mGFWuwlXmz+Q4IxRgw8jV24EQXzarXfT71hUzBpXI0x6gSSKMA7Ad6LFjiSSeDO74czE9zwtdiOrzZ/McArHRSad2kYs1BipxUkGjJIwwLsR36yK0kfNvlFCxh9WqOMRoEGgq92fzFJFI4JRCQKsdt/dUFsZlZg4GB62ygDEyMMgcvgvtge8VYbT+6rDaf3VYbT+7rbP9OnwX7jFI/TM1bXKwoylScTVhtSe6rJ0WJwzgZ9ba3Pgkhs0NJJHIMUcGiQNSB3NTXsaAiMhmpmLEsTiTwt7rwFZeTHE/wM//xAAfEQACAgIDAAMAAAAAAAAAAAAAAQIREiEwQVAxUWD/2gAIAQIBAT8A96ivTT2fR0LaLpjdPlSoolpEfg7Gr5pTrSMmxOoWXWXPNNNiTYorGjG3L8h//8QAKxEAAgIBAAgEBwAAAAAAAAAAAQIAAxEEEiEiMDFRUhAUMkETM1BgcoGR/9oACAEDAQE/APrqIznCjM8sR6rFE8tn02KY6Ohwwxxq0NjhZZdq7lWwCYJyfCu7W3LdqmW1mtyOLXuUO/uTiBSQTjYOc0X1n8ZZo3un8hBBwRH36Eb3U44rqUoUHujKFFwA7YmBpD47Zbc1dvUY5SwJbXrjmBK1L0MB3cQHBBltwsUDEFmFcHJJxKGLWEnniaR8z9RXKow6yq4VqRiE5JPFqpDDWaKiLyUCWKHuwekChhUD0PHqdSoGdoEZ1XmYbCXLCfEwK8cwD9of/9k="} alt=''/>

       </div>









    </div>
  )
}

export default Header

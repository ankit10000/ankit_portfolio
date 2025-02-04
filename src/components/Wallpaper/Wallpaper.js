import React from 'react'

const Wallpaper = () => {
  return (
    <div><svg width="500" height="500" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
    <rect width="500" height="500" fill="#0D1117"/>
    <g stroke="#00D4FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M50 400 Q100 350 150 400 T250 400 T350 400 T450 400" fill="none"/>
      <circle cx="50" cy="400" r="5" fill="#00D4FF"/>
      <circle cx="150" cy="400" r="5" fill="#00D4FF"/>
      <circle cx="250" cy="400" r="5" fill="#00D4FF"/>
      <circle cx="350" cy="400" r="5" fill="#00D4FF"/>
      <circle cx="450" cy="400" r="5" fill="#00D4FF"/>
      <path d="M150 400 L150 300 Q200 250 250 300 T350 300 L350 400" fill="none"/>
      <circle cx="150" cy="300" r="5" fill="#00D4FF"/>
      <circle cx="350" cy="300" r="5" fill="#00D4FF"/>
      <path d="M250 300 L250 200 Q275 175 300 200 T350 200 L350 300" fill="none"/>
      <circle cx="250" cy="200" r="5" fill="#00D4FF"/>
      <circle cx="350" cy="200" r="5" fill="#00D4FF"/>
      <path d="M350 200 L350 100 Q375 75 400 100 T450 100 L450 200" fill="none"/>
      <circle cx="350" cy="100" r="5" fill="#00D4FF"/>
      <circle cx="450" cy="100" r="5" fill="#00D4FF"/>
    </g>
    <text x="50" y="50" fill="#00D4FF" font-size="24" font-family="Arial">Technology & Innovation</text>
  </svg></div>
  )
}

export default Wallpaper
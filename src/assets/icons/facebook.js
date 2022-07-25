import React from 'react'
import styled from 'styled-components'

const FacebookIcon = () => (
    <Svg fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 12.5698C0 18.7844 4.51354 23.9521 10.4167 25V15.9719H7.29167V12.5H10.4167V9.72188C10.4167 6.59687 12.4302 4.86146 15.2781 4.86146C16.1802 4.86146 17.1531 5 18.0552 5.13854V8.33333H16.4583C14.9302 8.33333 14.5833 9.09687 14.5833 10.0698V12.5H17.9167L17.3615 15.9719H14.5833V25C20.4865 23.9521 25 18.7854 25 12.5698C25 5.65625 19.375 0 12.5 0C5.625 0 0 5.65625 0 12.5698Z" fill="white" />
    </Svg>
)

export default FacebookIcon

// CSS
const Svg = styled.svg`
  width: 25px;
  height: 25px;
`
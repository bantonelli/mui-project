// EXAMPLE Component STYLING with Emotion 
import React from 'react'
import { styled } from '@mui/material'

const Button = (props) => {
    return (
        <button className={props.className}>{ props.text }</button>
    )
}

const StyledButton = styled(Button)(({ theme }) => ({
    color: 'white',
    backgroundColor: theme.palette.primary.main,
    height: 50,
    width: 200
}))

export default StyledButton
import {Card, CardContent, Typography } from '@mui/material'
import './Message.css'
import React from 'react'

function Message({userName, message}) {
  const isUser = userName === message.userName;
  return (
    <Card className={`message ${isUser && 'message__user'}`}>
        <CardContent>
            <Typography
            color="black"
            variant="h5"
            component="h2"
            >
        {message.userName} : {message.text}
            </Typography>
        </CardContent>
    </Card>
  )
}

export default Message
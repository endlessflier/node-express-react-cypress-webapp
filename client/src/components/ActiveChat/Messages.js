import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { SenderBubble, OtherUserBubble } from '.';
import moment from 'moment';


const useStyles = makeStyles(() => ({
  root: {

  }
}));

const Messages = (props) => {
  const { messages, otherUser, userId } = props;
  const lastReadMessage = messages.filter((i) => i.senderId == userId && i.read == true).sort((a,b) => b.id - a.id);
  const lastReadMessageId = lastReadMessage.length > 0 ? lastReadMessage[0].id : -1;
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      {messages.map((message) => {
        const time = moment(message.createdAt).format('h:mm');

        return message.senderId === userId ? (
          <SenderBubble key={message.id} text={message.text} time={time} otherUser={otherUser} lastRead={lastReadMessageId == message.id} />
        ) : (
          <OtherUserBubble
            key={message.id}
            text={message.text}
            time={time}
            otherUser={otherUser}
          />
        );
      })}
    </Box>
  );
};

export default Messages;

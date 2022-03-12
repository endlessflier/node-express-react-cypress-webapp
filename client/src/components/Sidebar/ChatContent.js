import React from "react";
import { Badge, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: 20,
    flexGrow: 1,
  },
  username: {
    fontWeight: "bold",
    letterSpacing: -0.2,
  },
  previewText: {
    fontSize: 12,
    color: "#9CADC8",
    letterSpacing: -0.17,
  },
  unreadCount : {
    background : 'blue',
    color : 'white',
    padding : '8px',
    float : "right",
    borderRadius : '50%'
  }
}));

const ChatContent = ({ conversation }) => {
  const classes = useStyles();

  const { otherUser } = conversation;
  const latestMessageText = conversation.id && conversation.latestMessageText;
  const unreadCount = conversation.messages.filter((i) =>  i.read == false && i.senderId == otherUser.id).length;

  return (
    <Box className={classes.root}>
      <Box>
        <Typography className={classes.username}>
          {otherUser.username}
        </Typography>
        <Typography className={classes.previewText}>
          {latestMessageText}
        </Typography>
      </Box>
      <Box>
        <Badge badgeContent= {unreadCount} color="primary" />
      </Box>
    </Box>
  );
};

export default ChatContent;

import React from 'react';
import PropTypes from 'prop-types';
import { Toolbar, Input, Button, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    width: '100%'
  },
  input: {
    flexGrow: 1
  }
}));

const MessageInput = ({ onSubmitMessage, onUpdateMessageInput, messageInput }) => {

  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.container}>
      <Toolbar>
        <Input 
          className={classes.input} 
          placeholder="Message" 
          onChange={onUpdateMessageInput} 
          value={messageInput} 
          autoComplete="off" 
        />
        <Button onClick={onSubmitMessage}>Send</Button>
      </Toolbar>
    </Container>
  );
};

MessageInput.propTypes = {
  onSubmitMessage: PropTypes.func.isRequired,
  onUpdateMessageInput: PropTypes.func.isRequired,
  messageInput: PropTypes.string.isRequired
};

export default MessageInput;

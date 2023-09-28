// in ActionProvider.jsx
import React from 'react';
import { createClientMessage } from 'react-chatbot-kit';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleGotit = () => {
    const botMessage = createChatBotMessage(
      {
        widget: 'GotItButton',
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handlesendMessage=()=>{
    const botMessage = createClientMessage('Got it!');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
    handleSlots();
  }
  const handleSlots=()=>{
    const botMessage = createChatBotMessage("Pick a slot !",{
      widget:'SelectSlot'
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleGotit,
            handlesendMessage,
            handleSlots
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
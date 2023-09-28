import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import GotItButton from '../components/GotItButton'
import SelectSlot from '../components/selectSlot'
// import Overview from "../components/widgets/Overview/Overview";
// import MessageParser from "../components/widgets/MessageParser/MessageParser";
// import ActionProviderDocs from "../components/widgets/ActionProvider/ActionProviderDocs";

const botName = "DocsBot";

const config = {
  botName: botName,
  lang: "no",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  initialMessages: [
    createChatBotMessage(
      `Hello, Welcome to student info system!`,{
        widget:"GotItButton"
      }
    ),
  ],
  customComponents: {},
  widgets: [
    {
      widgetName: "GotItButton",
      widgetFunc: (props) => <GotItButton {...props} />,
    },
    {
      widgetName: "SelectSlot",
      widgetFunc: (props) => <SelectSlot {...props} />,
    },]
  //   {
  //     widgetName: "messageParser",
  //     widgetFunc: (props) => <MessageParser {...props} />,
  //     mapStateToProps: ["gist"],
  //   },
  //   {
  //     widgetName: "actionProviderDocs",
  //     widgetFunc: (props) => <ActionProviderDocs {...props} />,
  //     mapStateToProps: ["gist"],
  //   },
  // ],
};

export default config;
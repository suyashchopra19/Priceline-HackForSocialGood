// import ChatBot from 'react-simple-chatbot';
// import React, { Component } from 'react';




// export default class Chatbot extends Component {
//     render(){
//         return(
//             <ChatBot
//                 steps={[
//                     {
//                         id: '0',
//                         message: 'Welcome!',
//                         trigger: '1',
//                     }, {
//                         id: '1',
//                         message: 'How are you feeling today?',
//                         trigger: '2',
//                     }, {
//                         id: '2',
//                         user: true,
//                         trigger: '3'
//                     }, {
//                         id: '3',
//                         message: 'Would you like to share? Can I help you? ',
//                         trigger: '4'
//                     }, {
//                         id: '4',
//                         user: true,
//                         trigger: '5'
//                     }, {
//                         id: '5',
//                         message: 'Why do you think you have low grades?',
//                         trigger: '6'
//                     }, {
//                         id: '6',
//                         user: true,
//                         trigger: '7'
//                     }, {
//                         id: '7',
//                         message: 'Is there a specific reason for your absence?',
//                         trigger: '8'
//                     }, {
//                         id: '8',
//                         user: true,
//                         trigger: '9'
//                     }, {
//                         id: '9',
//                         message: 'Life can be hard sometimes but we should not lose hop. Give it sometime to pass',
//                         trigger: '10'
//                     }, {
//                         id: '10',
//                         message: 'If you want me to connect to someone else, let me connect you to Mr.Alex (432)-191-7171 ',
//                         trigger: '11'
//                     }, {
//                         id: '11',
//                         message: 'Can I help you with anything else?',
//                         end: true
//                     }
//                 ]}
//                 />
//         )
//     }
// }

import ChatBot, { ChatBotUtil } from 'i-chatbot'
import React, { Component } from 'react';

export default class Chatbot extends Component{
    constructor(){
        super()
    }
    
    getStarted () {
    return [
      ChatBotUtil.textMessage(['Hi!', 'Hey there!'].any()),
      ChatBotUtil.textMessage(['How is life?', 'What\'s up?'].any(),
        ChatBotUtil.makeReplyButton('Great!', this.intro))
    ]
  }

  intro () {
    return [
      ChatBotUtil.textMessage('That\'s good to hear!')
    ]
  }


    render(){
        return(
            <ChatBot onGetStarted={this.getStarted}
         getStartedButton={ChatBotUtil.makeGetStartedButton('Get Started')} />

        )
    }
}
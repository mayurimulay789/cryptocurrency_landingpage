import React, { useState } from 'react';
import { Button, Card, List, Typography, Drawer, Input, Space } from 'antd';
import { SendOutlined, MessageOutlined, CloseOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const cryptoQuestions = [
  { question: "What is Bitcoin?", answer: "Bitcoin is a decentralized digital currency created in 2009. It uses peer-to-peer technology to operate with no central authority or banks." },
  { question: "How to buy cryptocurrency?", answer: "You can buy cryptocurrency through various exchanges like Coinbase, Binance, or Kraken. Always do your research and be cautious of potential risks." },
  { question: "What is blockchain?", answer: "Blockchain is a distributed ledger technology that underlies most cryptocurrencies. It's a chain of blocks containing information, secured by cryptography." },
  { question: "What is Ethereum?", answer: "Ethereum is a decentralized, open-source blockchain featuring smart contract functionality. It's the second-largest cryptocurrency by market capitalization after Bitcoin." },
  { question: "What are NFTs?", answer: "NFTs (Non-Fungible Tokens) are unique digital assets verified using blockchain technology. They can represent ownership of digital art, collectibles, or other unique items." },
];

const CryptoChatbot = () => {
  const [visible, setVisible] = useState(false);
  const [messages, setMessages] = useState([]); // Changed to just use an array
  const [input, setInput] = useState('');

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }]);
      setInput('');
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "I'm processing your question. Please check our predefined questions for quick answers!", isUser: false }]);
      }, 500);
    }
  };

  const handleQuestionClick = (question, answer) => {
    setMessages(prev => [
      ...prev,
      { text: question, isUser: true },
      { text: answer, isUser: false }
    ]);
  };

  return (
    <>
      <Button
        type="primary"
        shape="circle"
        icon={<MessageOutlined />}
        size="large"
        onClick={showDrawer}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
          background: 'linear-gradient(to right, #15B8A6, #0F766E)',
        }}
      />
      <Drawer
        title={
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Title level={4} style={{ margin: 0 }}>Crypto Assistant</Title>
            <Button type="text" onClick={onClose} icon={<CloseOutlined />} />
          </div>
        }
        placement="right"
        onClose={onClose}
        open={visible}
        width={320}
        bodyStyle={{ padding: 0 }}
      >
        <Card
          style={{ height: 'calc(100% - 55px)', display: 'flex', flexDirection: 'column' }}
          bodyStyle={{ flex: 1, overflow: 'auto', padding: '12px' }}
        >
          <List
            itemLayout="vertical"
            dataSource={messages}
            renderItem={(item) => (
              <List.Item style={{ padding: '8px 0' }}>
                <Card
                  style={{
                    width: '80%',
                    marginLeft: item.isUser ? 'auto' : '0',
                    backgroundColor: item.isUser ? '#15B8A6' : '#f0f0f0',
                  }}
                  bodyStyle={{ padding: '8px 12px' }}
                >
                  <Paragraph style={{ color: item.isUser ? 'white' : 'black', margin: 0 }}>
                    {item.text}
                  </Paragraph>
                </Card>
              </List.Item>
            )}
          />
        </Card>
        <div style={{ padding: '12px', borderTop: '1px solid #f0f0f0' }}>
          <Space.Compact style={{ width: '100%' }}>
            <Input
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onPressEnter={handleSend}
            />
            <Button type="primary" icon={<SendOutlined />} onClick={handleSend} />
          </Space.Compact>
        </div>
        <Card title="Quick Questions" style={{ marginTop: '12px' }}>
          <List
            size="small"
            dataSource={cryptoQuestions}
            renderItem={(item) => (
              <List.Item
                onClick={() => handleQuestionClick(item.question, item.answer)}
                style={{ cursor: 'pointer', padding: '8px 0' }}
              >
                <Paragraph style={{ margin: 0, color: '#15B8A6' }}>{item.question}</Paragraph>
              </List.Item>
            )}
          />
        </Card>
      </Drawer>
    </>
  );
};

export default CryptoChatbot;

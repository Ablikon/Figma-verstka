import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Space } from 'antd';
import { LeftOutlined, EnvironmentOutlined, SafetyOutlined, MessageOutlined, InboxOutlined, SyncOutlined } from '@ant-design/icons';
import './IntroPage.css';

const { Title, Text, Paragraph } = Typography;

const IntroPage = () => {
  const features = [
    {
      antIcon: <EnvironmentOutlined style={{ fontSize: 20, color: '#1e6ef4' }} />,
      title: 'Автоматическое управление ценами',
      description: 'Цены меняются автоматически - больше продаж без ручной работы',
    },
    {
      antIcon: <SafetyOutlined style={{ fontSize: 20, color: '#1e6ef4' }} />,
      title: 'Защита вашей маржи',
      description: 'Цена никогда не опускается ниже минимума',
    },
    {
      icon: '/fi_15713434.svg',
      title: 'Автосообщения клиентам',
      description: 'Отзывы и благодарности отправляются автоматически',
    },
    {
      antIcon: <InboxOutlined style={{ fontSize: 20, color: '#1e6ef4' }} />,
      title: 'Контроль товаров',
      description: 'Остатки, склады и предзаказы под контролем',
    },
    {
      antIcon: <SyncOutlined style={{ fontSize: 20, color: '#1e6ef4' }} />,
      title: 'Быстрое обновление магазина',
      description: 'Меняйте цены и товары сразу во всём магазине',
    },
  ];

  return (
    <div className="intro-page-container">
      {/* Status Bar */}
      <div className="status-bar">
        <span className="time">9:41</span>
        <div className="status-icons">
          <img src="/cellular_connection.svg" alt="Cellular" className="status-icon" />
          <img src="/wifi.svg" alt="WiFi" className="status-icon" />
          <img src="/battery.svg" alt="Battery" className="status-icon" />
        </div>
      </div>

      {/* Header */}
      <div className="header-intro">
        <Link to="/">
          <LeftOutlined className="back-icon" />
        </Link>
        <Title level={5} className="header-title">Добавление магазина</Title>
        <div style={{ width: 20 }} />
      </div>

      <div className="content-intro">
        {/* Hero Image */}
        <div className="hero-image">
          <img src="/frame_1000011595.png" alt="SaleScout Features" className="hero-img" />
        </div>

        {/* Main Title */}
        <div className="main-content">
          <Title level={2} className="intro-title">
            Управляйте продажами с SaleScout
          </Title>

          {/* Features List */}
          <div className="features-list-intro">
            {features.map((feature, index) => (
              <div key={index} className="feature-item-intro">
                <div className="feature-icon-intro">
                  {feature.icon ? (
                    <img src={feature.icon} alt={feature.title} className="icon-img" />
                  ) : (
                    feature.antIcon
                  )}
                </div>
                <div className="feature-text-intro">
                  <Text strong className="feature-title-intro">
                    {feature.title}
                  </Text>
                  <Text type="secondary" className="feature-description-intro">
                    {feature.description}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom-section-intro">
        <Link to="/auth" style={{ display: 'block' }}>
          <Button type="primary" danger size="large" className="connect-btn-intro" block>
            Подключить магазин
          </Button>
        </Link>

        {/* Bottom Bar */}
        <div className="bottom-bar-mini">
          <Button className="nav-button" shape="circle" size="large">
            &lt;
          </Button>
          <div className="search-bar">
            <img src="/site_settings.svg" alt="Settings" className="search-icon-left" />
            <Text className="search-text">salescout.me</Text>
            <img src="/reload.svg" alt="Reload" className="search-icon-right" />
          </div>
          <Button className="nav-button" shape="circle" size="large">
            •••
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;

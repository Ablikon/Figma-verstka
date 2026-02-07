import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Card, Space, Badge, Divider } from 'antd';
import {
  GlobalOutlined,
  LogoutOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  DollarOutlined,
  InboxOutlined,
  BarChartOutlined,
  MessageOutlined,
  CalculatorOutlined,
  TruckOutlined,
  LinkOutlined,
  RightOutlined,
} from '@ant-design/icons';
import './HomePage.css';

const { Title, Text, Paragraph } = Typography;

const HomePage = () => {
  const [language, setLanguage] = useState('RU');

  const mainFeatures = [
    {
      title: 'Демпинг',
      description: 'Цены меняются автоматически\nи приносят больше продаж.',
      icon: (
        <div className="feature-icon red">
          <ArrowUpOutlined style={{ fontSize: 16 }} />
          <Text strong style={{ fontSize: 12, margin: '0 2px' }}>₸</Text>
          <ArrowDownOutlined style={{ fontSize: 16 }} />
        </div>
      ),
    },
    {
      title: 'Предзаказы',
      description: 'Продавайте, даже если товара нет.',
      icon: (
        <div className="feature-icon purple">
          <InboxOutlined style={{ fontSize: 20 }} />
        </div>
      ),
    },
    {
      title: 'Аналитика',
      description: 'Находите товары с высоким спросом.',
      icon: (
        <div className="feature-icon blue">
          <BarChartOutlined style={{ fontSize: 20 }} />
        </div>
      ),
    },
    {
      title: 'Рассылка',
      description: 'Сообщения и отзывы отправляются автоматически.',
      icon: (
        <div className="feature-icon green">
          <img src="/frame_1000011757.png" alt="Messages" className="feature-image" />
        </div>
      ),
    },
  ];

  const otherFeatures = [
    {
      icon: '/fi_9587875.svg',
      title: 'Калькулятор минимальной цены',
      description: 'Считает цену ниже которой продавать нельзя.',
    },
    {
      antIcon: <TruckOutlined style={{ fontSize: 20, color: '#1e6ef4' }} />,
      title: 'Демпинг по доставке',
      description: 'Поднимает товар в топ доставки.',
    },
    {
      icon: '/img_1c_company_logo_1.svg',
      title: 'Внешняя XML-интеграция',
      description: 'Товары и цены обновляются сами.',
    },
  ];

  return (
    <div className="home-page-container">
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
      <div className="header-main">
        <img src="/frame_28.png" alt="SaleScout Logo" className="logo" />
        <Space size={8}>
          <Button
            className="language-btn"
            icon={<GlobalOutlined style={{ fontSize: 12, color: '#1e6ef4' }} />}
          >
            {language}
          </Button>
          <Button
            className="logout-btn"
            icon={<LogoutOutlined style={{ fontSize: 12, color: '#ff383c' }} />}
            danger
          />
        </Space>
      </div>

      <div className="content-main">
        {/* Main Title */}
        <Title level={3} className="main-title">
          Как увеличить продажи?
        </Title>

        {/* Main Features Grid */}
        <div className="features-grid">
          {mainFeatures.map((feature, index) => (
            <Card key={index} className="feature-card" hoverable>
              {feature.icon}
              <div className="feature-content">
                <Text strong className="feature-card-title">
                  {feature.title}
                </Text>
                <Text className="feature-card-description">
                  {feature.description}
                </Text>
              </div>
            </Card>
          ))}
        </div>

        <Divider className="section-divider" />

        {/* Other Features Section */}
        <div className="other-features-section">
          <div className="section-header">
            <Title level={4} className="section-title">
              Другие возможности
            </Title>
            <Link to="/add-store" className="show-all-link">
              <Button type="link" className="show-all-btn">
                Показать все
              </Button>
            </Link>
          </div>
          <Paragraph className="section-description">
            Функции, которые быстрее всего увеличивают продажи.
          </Paragraph>

          <div className="features-list">
            {otherFeatures.map((item, index) => (
              <div key={index} className="feature-list-item">
                <div className="feature-list-content">
                  <div className="feature-list-icon">
                    {item.icon ? (
                      <img src={item.icon} alt={item.title} className="icon-img" />
                    ) : (
                      item.antIcon
                    )}
                  </div>
                  <div className="feature-list-text">
                    <Text strong className="feature-list-title">
                      {item.title}
                    </Text>
                    <Text type="secondary" className="feature-list-description">
                      {item.description}
                    </Text>
                  </div>
                </div>
                <RightOutlined className="arrow-icon" />
              </div>
            ))}
          </div>
        </div>

        {/* Connect Store Button */}
        <div className="connect-section">
          <Link to="/intro" style={{ display: 'block' }}>
            <Button 
              type="primary" 
              danger 
              size="large" 
              className="connect-btn" 
              block
            >
              Подключить магазин
            </Button>
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bottom-bar">
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
  );
};

export default HomePage;

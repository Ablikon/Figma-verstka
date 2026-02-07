import React from 'react';
import { Typography, Badge } from 'antd';
import { 
  DashboardOutlined, 
  ShoppingOutlined, 
  ShoppingCartOutlined, 
  GiftOutlined,
  MailOutlined,
  AppstoreAddOutlined,
  BookOutlined,
  CustomerServiceOutlined,
  GlobalOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import './StorePage.css';

const { Title, Text } = Typography;

const StorePage = () => {
  return (
    <div className="store-page">
      {/* Status Bar */}
      <div className="status-bar">
        <span className="time">9:41</span>
        <div className="status-icons">
          <img src="/cellular_connection.svg" alt="cellular" className="status-icon" />
          <img src="/wifi.svg" alt="wifi" className="status-icon" />
          <img src="/battery.svg" alt="battery" className="battery-icon" />
        </div>
      </div>

      {/* Header */}
      <div className="store-header">
        <div className="store-info">
          <img src="/frame_1000011620.svg" alt="store" className="store-icon" />
          <Title level={5} className="store-name">Sattily Store</Title>
        </div>
        <div className="header-controls">
          <div className="language-selector">
            <GlobalOutlined className="globe-icon" />
            <Text>RU</Text>
            <img src="/chevron_down.svg" alt="down" className="chevron-icon" />
          </div>
          <div className="logout-btn">
            <LogoutOutlined className="logout-icon" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="store-content">
        {/* Menu Grid */}
        <div className="menu-container">
          <div className="menu-row">
            <div className="menu-item">
              <DashboardOutlined className="menu-icon-svg" />
              <Text className="menu-label">Дашборд</Text>
            </div>
            <div className="menu-item">
              <ShoppingOutlined className="menu-icon-svg" />
              <Text className="menu-label">Товары</Text>
            </div>
            <div className="menu-item">
              <ShoppingCartOutlined className="menu-icon-svg" />
              <Text className="menu-label">Заказы</Text>
            </div>
            <div className="menu-item">
              <GiftOutlined className="menu-icon-svg" />
              <Text className="menu-label">Бонусы</Text>
            </div>
          </div>
          <div className="menu-row">
            <div className="menu-item">
              <Badge dot offset={[-8, 8]}>
                <MailOutlined className="menu-icon-svg" />
              </Badge>
              <Text className="menu-label">Рассылка</Text>
            </div>
            <div className="menu-item">
              <AppstoreAddOutlined className="menu-icon-svg" />
              <Text className="menu-label">Дополнения</Text>
            </div>
            <div className="menu-item">
              <BookOutlined className="menu-icon-svg" />
              <Text className="menu-label">Гид</Text>
            </div>
            <div className="menu-item">
              <CustomerServiceOutlined className="menu-icon-svg" />
              <Text className="menu-label">Поддержка</Text>
            </div>
          </div>
        </div>

        {/* Section Title */}
        <Title level={3} className="section-title">Как увеличить продажи?</Title>

        {/* First Row: Демпинг and Предзаказы */}
        <div className="features-row">
          <div className="feature-item">
            <div className="feature-icon-box" style={{ backgroundColor: '#FC2B19' }}>
              <span className="feature-symbol-up">↑</span>
              <span className="feature-symbol-currency">₸</span>
              <span className="feature-symbol-down">↓</span>
            </div>
            <div className="feature-text">
              <Text className="feature-title">Демпинг</Text>
              <Text className="feature-desc">Цены меняются автоматически и приносят больше продаж.</Text>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon-box" style={{ backgroundColor: '#5E5CE6' }}>
              <span className="feature-emoji">🛒</span>
            </div>
            <div className="feature-text">
              <Text className="feature-title">Предзаказы</Text>
              <Text className="feature-desc">Продавайте, даже если товара нет.</Text>
            </div>
          </div>
        </div>

        {/* Second Row: Аналитика and Рассылка */}
        <div className="features-row">
          <div className="feature-item">
            <div className="feature-icon-box" style={{ backgroundColor: '#1E6EF4' }}>
              <span className="feature-emoji-chart">📊</span>
            </div>
            <div className="feature-text">
              <Text className="feature-title">Аналитика</Text>
              <Text className="feature-desc">Находите товары с высоким спросом.</Text>
            </div>
          </div>
          <div className="feature-item">
            <img src="/frame_1000011757.png" alt="Рассылка" className="feature-img-icon" />
            <div className="feature-text">
              <Text className="feature-title">Рассылка</Text>
              <Text className="feature-desc">Сообщения и отзывы отправляются автоматически.</Text>
            </div>
          </div>
        </div>

        {/* Promo Banner */}
        <div className="promo-banner">
          <div className="promo-overlay">
            <Title level={5} className="promo-title">Увеличьте продажи с помощью демпинга</Title>
            <div className="promo-button">Начать!</div>
          </div>
          <img src="/frame_1000011587.svg" alt="promo" className="promo-bg" />
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="store-bottom">
        <div className="bottom-nav">
          <div className="nav-item active">
            <ShoppingOutlined className="nav-icon" />
            <Text className="nav-label">Магазин</Text>
          </div>
          <div className="nav-item">
            <ShoppingOutlined className="nav-icon" />
            <Text className="nav-label">Товары</Text>
          </div>
          <div className="nav-item">
            <DashboardOutlined className="nav-icon" />
            <Text className="nav-label">Дашборд</Text>
          </div>
          <div className="nav-item">
            <MailOutlined className="nav-icon" />
            <Text className="nav-label">Сообщения</Text>
          </div>
        </div>

        {/* Browser Bar */}
        <div className="browser-bar-container">
          <div className="nav-btn">
            <Text className="nav-icon-text">‹</Text>
          </div>
          <div className="browser-bar">
            <img src="/site_settings.svg" alt="settings" className="browser-icon" />
            <Text className="browser-url">salescout.me</Text>
            <img src="/reload.svg" alt="reload" className="browser-icon" />
          </div>
          <div className="nav-btn">
            <Text className="nav-icon-text">⋯</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorePage;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Segmented, Input, Space } from 'antd';
import { LeftOutlined, SafetyOutlined, HomeOutlined, ReloadOutlined, EllipsisOutlined } from '@ant-design/icons';
import './AuthPage.css';

const { Title, Text } = Typography;

const AuthPage = () => {
  const [authMethod, setAuthMethod] = useState('phone');
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <div className="auth-page">
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
      <div className="auth-header">
        <Link to="/intro">
          <LeftOutlined className="back-icon" />
        </Link>
        <Title level={5} className="header-title">Подключение магазина</Title>
        <div style={{ width: 20 }} />
      </div>

      {/* Content */}
      <div className="auth-content">
        <div className="auth-main">
          {/* Title Section */}
          <div className="title-section">
            <Title level={2} className="page-title">Выберите маркет</Title>
          </div>

          {/* Market Selection */}
          <div className="market-selection">
            <Space size={12}>
              <Button 
                type="primary" 
                danger 
                size="large"
                className="market-btn market-btn-selected"
                icon={<img src="/frame_1000011608.svg" alt="kaspi" className="market-icon" />}
              >
                Kaspi.kz
              </Button>
              <Button 
                size="large"
                className="market-btn market-btn-unselected"
                icon={<img src="/frame_1000011609_1.svg" alt="halyk" className="market-icon" />}
              >
                HalykMarket
              </Button>
            </Space>
          </div>

          {/* Auth Method Segmented Control */}
          <div className="auth-method">
            <Segmented
              block
              size="large"
              value={authMethod}
              onChange={setAuthMethod}
              options={[
                { label: 'По номеру телефона', value: 'phone' },
                { label: 'По почте', value: 'email' }
              ]}
              className="auth-segmented"
            />
          </div>

          {/* Phone Input */}
          <div className="phone-input-section">
            <label className="input-label">Номер телефона</label>
            <Input
              size="large"
              placeholder="+7 --- --- ----"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="phone-input"
            />
          </div>
        </div>

        {/* Security Notice */}
        <div className="security-notice">
          <SafetyOutlined className="security-icon" />
          <div className="security-text">
            <Text className="security-title">Безопасность данных</Text>
            <Text className="security-description">
              Данные шифруются и используются только для подключения магазина. Мы не храним и не передаём личную информацию третьим лицам.
            </Text>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="auth-bottom">
        <Button 
          type="primary" 
          danger 
          size="large" 
          block
          className="connect-button"
        >
          Подключить магазин
        </Button>

        {/* Bottom Navigation Bar */}
        <div className="bottom-nav-bar">
          <Button 
            shape="circle" 
            size="large" 
            className="nav-btn"
            icon={<LeftOutlined />}
          />
          <div className="browser-bar">
            <img src="/site_settings.svg" alt="settings" className="browser-icon" />
            <Text className="browser-url">salescout.me</Text>
            <img src="/reload.svg" alt="reload" className="browser-icon" />
          </div>
          <Button 
            shape="circle" 
            size="large" 
            className="nav-btn"
            icon={<EllipsisOutlined />}
          />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;

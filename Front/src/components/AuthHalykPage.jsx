import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Segmented, Input, Space } from 'antd';
import { LeftOutlined, SafetyOutlined, EyeOutlined, EyeInvisibleOutlined, HomeOutlined, ReloadOutlined, EllipsisOutlined } from '@ant-design/icons';
import './AuthHalykPage.css';

const { Title, Text } = Typography;

const AuthHalykPage = () => {
  const [authMethod, setAuthMethod] = useState('email');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [selectedMarket, setSelectedMarket] = useState('halyk');

  return (
    <div className="auth-halyk-page">
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
      <div className="auth-halyk-header">
        <Link to="/intro">
          <LeftOutlined className="back-icon" />
        </Link>
        <Title level={5} className="header-title">Подключение магазина</Title>
        <div style={{ width: 20 }} />
      </div>

      {/* Content */}
      <div className="auth-halyk-content">
        <div className="auth-halyk-main">
          {/* Title Section */}
          <div className="title-section">
            <Title level={2} className="page-title">Выберите маркет</Title>
          </div>

          {/* Market Selection */}
          <div className="market-selection">
            <Space size={12}>
              <Button 
                size="large"
                className={`market-btn ${selectedMarket === 'kaspi' ? 'market-btn-selected-kaspi' : 'market-btn-unselected'}`}
                icon={<img src="/frame_1000011608.svg" alt="kaspi" className="market-icon" />}
                onClick={() => setSelectedMarket('kaspi')}
              >
                Kaspi.kz
              </Button>
              <Button 
                size="large"
                className={`market-btn ${selectedMarket === 'halyk' ? 'market-btn-selected-halyk' : 'market-btn-unselected'}`}
                icon={<img src="/frame_1000011609_1.svg" alt="halyk" className="market-icon" />}
                onClick={() => setSelectedMarket('halyk')}
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

          {/* Email Input */}
          <div className="email-input-section">
            <label className="input-label">Почта</label>
            <Input
              size="large"
              placeholder="Введите email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="email-input"
            />
          </div>

          {/* Password Input */}
          <div className="password-input-section">
            <label className="input-label">Пароль</label>
            <Input.Password
              size="large"
              placeholder="Введите пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="password-input"
              iconRender={(visible) => 
                visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
              }
              visibilityToggle={{
                visible: showPassword,
                onVisibleChange: setShowPassword
              }}
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
      <div className="auth-halyk-bottom">
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

export default AuthHalykPage;

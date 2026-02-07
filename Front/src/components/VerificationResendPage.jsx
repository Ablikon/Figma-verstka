import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Input } from 'antd';
import { LeftOutlined, SafetyOutlined, ReloadOutlined, EllipsisOutlined } from '@ant-design/icons';
import './VerificationResendPage.css';

const { Title, Text } = Typography;

const VerificationResendPage = () => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  // Handle input change
  const handleChange = (index, value) => {
    // Only allow digits
    if (!/^\d*$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value.slice(-1); // Take only last character
    setCode(newCode);

    // Auto focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle keydown for backspace
  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Handle paste
  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    if (!/^\d+$/.test(pastedData)) return;

    const newCode = [...code];
    pastedData.split('').forEach((char, idx) => {
      if (idx < 6) newCode[idx] = char;
    });
    setCode(newCode);

    // Focus last filled input or next empty
    const nextEmpty = newCode.findIndex((c) => !c);
    if (nextEmpty !== -1) {
      inputRefs.current[nextEmpty]?.focus();
    } else {
      inputRefs.current[5]?.focus();
    }
  };

  const handleResend = () => {
    // Logic to resend code
    console.log('Resending verification code...');
  };

  return (
    <div className="verification-resend-page">
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
      <div className="verification-resend-header">
        <Link to="/auth">
          <LeftOutlined className="back-icon" />
        </Link>
        <Title level={5} className="header-title">Подключение магазина</Title>
        <div style={{ width: 20 }} />
      </div>

      {/* Content */}
      <div className="verification-resend-content">
        <div className="verification-resend-main">
          {/* Title and Instructions */}
          <div className="instruction-section">
            <Text className="instruction-text">
              Введите код из SMS от Kaspi.kz, отправленный на номер
              <br />
              +7 (777) 253 9319.
            </Text>
          </div>

          {/* Verification Code Inputs */}
          <div className="code-section">
            <div className="code-inputs">
              {code.map((digit, index) => (
                <Input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={index === 0 ? handlePaste : undefined}
                  maxLength={1}
                  className="code-input"
                  placeholder="0"
                />
              ))}
            </div>

            {/* Resend Link */}
            <Button 
              type="link" 
              className="resend-link"
              onClick={handleResend}
            >
              Запросить код повторно
            </Button>
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
      <div className="verification-resend-bottom">
        <Button 
          type="primary" 
          danger 
          size="large" 
          block
          className="connect-button"
          disabled={code.some((digit) => !digit)}
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

export default VerificationResendPage;

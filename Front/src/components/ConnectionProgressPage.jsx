import React, { useState, useEffect } from 'react';
import { Typography, Spin } from 'antd';
import { CheckCircleOutlined, LoadingOutlined } from '@ant-design/icons';
import './ConnectionProgressPage.css';

const { Title, Text } = Typography;

const ConnectionProgressPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    { id: 1, text: 'Подключено к Kaspi.kz' },
    { id: 2, text: 'Доступ получен' },
    { id: 3, text: 'Магазин подтвержден' },
    { id: 4, text: 'Настройки магазина загружены' },
    { id: 5, text: 'Авторизация завершена' },
    { id: 6, text: 'Магазин добавлен в SaleScout' }
  ];

  // Simulate connection progress
  useEffect(() => {
    if (currentStep < steps.length) {
      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentStep, steps.length]);

  return (
    <div className="connection-progress-page">
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
      <div className="connection-header">
        <Title level={5} className="header-title">Подключение магазина</Title>
      </div>

      {/* Content */}
      <div className="connection-content">
        {/* Progress Steps */}
        <div className="progress-steps">
          {steps.map((step, index) => {
            const isCompleted = index < currentStep;
            const isActive = index === currentStep;
            const isPending = index > currentStep;

            return (
              <div 
                key={step.id} 
                className={`progress-step ${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''} ${isPending ? 'pending' : ''}`}
              >
                <div className="step-icon-wrapper">
                  {isCompleted ? (
                    <CheckCircleOutlined className="check-icon-completed" />
                  ) : isActive ? (
                    <Spin indicator={<LoadingOutlined spin />} className="loading-spinner" />
                  ) : (
                    <div className="empty-circle" />
                  )}
                </div>
                <Text className="step-text">{step.text}</Text>
              </div>
            );
          })}
        </div>

        {/* Security Notice */}
        <div className="security-notice">
          <img src="/privacy_security_svg.svg" alt="security" className="security-icon-img" />
          <div className="security-text">
            <Text className="security-title">Безопасность данных</Text>
            <Text className="security-description">
              Данные шифруются и используются только для подключения магазина. Мы не храним и не передаём личную информацию третьим лицам.
            </Text>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="connection-bottom">
        <div className="bottom-nav-bar">
          <div className="nav-btn">
            <Text className="nav-icon">‹</Text>
          </div>
          <div className="browser-bar">
            <img src="/site_settings.svg" alt="settings" className="browser-icon" />
            <Text className="browser-url">salescout.me</Text>
            <img src="/reload.svg" alt="reload" className="browser-icon" />
          </div>
          <div className="nav-btn">
            <Text className="nav-icon">⋯</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectionProgressPage;

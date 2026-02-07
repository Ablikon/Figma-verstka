import React, { useState, useEffect } from 'react';
import { Typography, Progress, Rate } from 'antd';
import './SyncPage.css';

const { Title, Text } = Typography;

const SyncPage = () => {
  const [progress, setProgress] = useState(0);

  // Simulate product sync progress from 0 to 100
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // Sample reviews data
  const reviews = [
    {
      id: 1,
      name: 'Нурали',
      seller: 'Sattily Store',
      rating: 5,
      date: '12.12.2025',
      text: 'Сервис топовый, работает бесперебойно'
    },
    {
      id: 2,
      name: 'Рустам',
      seller: 'Leto Store',
      rating: 5,
      date: '12.12.2025',
      text: 'Самый охуенный сервис. Мой потому что'
    },
    {
      id: 3,
      name: 'Дария',
      seller: 'DAR Store',
      rating: 5,
      date: '15.01.2026',
      text: 'Согласна с другими отзывами, так как сама там работаю и была бы в ахуе если отзывы были плохими'
    }
  ];

  return (
    <div className="sync-page">
      {/* Status Bar */}
      <div className="status-bar">
        <span className="time">9:41</span>
        <div className="status-icons">
          <img src="/cellular_connection.svg" alt="cellular" className="status-icon" />
          <img src="/wifi.svg" alt="wifi" className="status-icon" />
          <img src="/battery.svg" alt="battery" className="battery-icon" />
        </div>
      </div>

      {/* Header with Store Name */}
      <div className="sync-header">
        <div className="store-info">
          <img src="/frame_1000011620.svg" alt="store" className="store-icon" />
          <Title level={5} className="store-name">Sattily Store</Title>
        </div>
      </div>

      {/* Content */}
      <div className="sync-content">
        {/* Progress Section */}
        <div className="progress-section">
          <div className="progress-wrapper">
            <Progress
              type="circle"
              percent={progress}
              strokeColor={progress === 100 ? "#00C770" : "#6B5DFF"}
              trailColor="#F0F0F0"
              strokeWidth={12}
              width={216}
              format={(percent) => (
                <span className="progress-text">{percent}%</span>
              )}
            />
          </div>
          <Text className="sync-message">
            {progress === 100 
              ? 'Ваши товары успешно загружены!' 
              : 'Пока мы загружаем товары, посмотрите, что говорят клиенты о нас'
            }
          </Text>
        </div>

        {/* Reviews Section */}
        <div className="reviews-section">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <div className="reviewer-info">
                  <Text className="reviewer-name">{review.name}</Text>
                  <Text className="reviewer-seller">
                    Продавец <span className="seller-link">{review.seller}</span>
                  </Text>
                </div>
                <div className="review-meta">
                  <Rate disabled defaultValue={review.rating} className="review-rating" />
                  <Text className="review-date">{review.date}</Text>
                </div>
              </div>
              <Text className="review-text">{review.text}</Text>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="sync-bottom">
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

export default SyncPage;

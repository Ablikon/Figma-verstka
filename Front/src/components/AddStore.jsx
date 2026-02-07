import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Tag, Space, Button, List } from 'antd';
import { LeftOutlined, RightOutlined, CalculatorOutlined, TruckOutlined, ArrowUpOutlined, WarningOutlined, GoldOutlined, EnvironmentOutlined, StopOutlined, InboxOutlined, SafetyOutlined, PushpinOutlined, DollarOutlined, LinkOutlined, MessageOutlined } from '@ant-design/icons';
import './AddStore.css';

const { Title, Text, Paragraph } = Typography;

const AddStore = () => {
  const [activeCategory, setActiveCategory] = useState('Все');

  const categories = [
    'Все',
    'Управление ценами',
    'Наличие и предзаказ',
    'Города и география',
    'Интеграции',
    'Клиенты и отзывы',
  ];

  const sections = [
    {
      title: 'Популярные',
      description: 'Функции, которые быстрее всего увеличивают продажи.',
      items: [
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
        {
          icon: '/fi_15713434.svg',
          title: 'Отправка сообщения после выдачи заказа',
          description: 'Клиенту приходит благодарность и просьба оставить отзыв.',
        },
      ],
    },
    {
      title: 'Управление ценами',
      description: 'Чтобы продавать выгодно и не уходить в минус',
      items: [
        {
          icon: '/fi_9587875.svg',
          title: 'Калькулятор минимальной цены',
          description: 'Считает цену ниже которой продавать нельзя.',
        },
        {
          antIcon: <ArrowUpOutlined style={{ fontSize: 20, color: '#1e6ef4' }} />,
          title: 'Максимальная цена',
          description: 'Повышает цену, если рядом нет конкурентов.',
        },
        {
          antIcon: <WarningOutlined style={{ fontSize: 20, color: '#1e6ef4' }} />,
          title: 'Если цена опустилась ниже мин. цены',
          description: 'Вы решаете: не уходить в минус или бороться за другие позиции.',
        },
        {
          antIcon: <TruckOutlined style={{ fontSize: 20, color: '#1e6ef4' }} />,
          title: 'Демпинг по доставке',
          description: 'Поднимает товар в топ доставки.',
        },
        {
          icon: '/fi_10021774.svg',
          title: 'Актуальная цена по золоту',
          description: 'Обновляет цену по курсу золота автоматически по Нацбанку.',
        },
        {
          antIcon: <EnvironmentOutlined style={{ fontSize: 20, color: '#1e6ef4' }} />,
          title: 'Менять цену только в купленных городах',
          description: 'Цена меняется только там, где вы реально продаёте.',
        },
        {
          antIcon: <StopOutlined style={{ fontSize: 20, color: '#1e6ef4' }} />,
          title: 'Не конкурировать с магазинами',
          description: 'Не снижает цену против выбранных магазинов.',
        },
      ],
    },
    {
      title: 'Наличие и предзаказ',
      description: 'Чтобы продажи не останавливались',
      items: [
        {
          antIcon: <InboxOutlined style={{ fontSize: 20, color: '#1e6ef4' }} />,
          title: 'Предзаказ при отсутствии товара',
          description: 'Товар продаётся даже если его сейчас нет.',
        },
        {
          antIcon: <SafetyOutlined style={{ fontSize: 20, color: '#1e6ef4' }} />,
          title: 'Защита от архива',
          description: 'Карточка не пропадает, даже если долго нет продаж.',
        },
      ],
    },
    {
      title: 'Города и география',
      description: 'Чтобы управлять продажами по регионам',
      items: [
        {
          antIcon: <PushpinOutlined style={{ fontSize: 20, color: '#1e6ef4' }} />,
          title: 'Изменение лимита доп. городов',
          description: 'Можно продавать в большем количестве городов.',
        },
        {
          antIcon: <DollarOutlined style={{ fontSize: 20, color: '#1e6ef4' }} />,
          title: 'Менять цену только в купленных городах',
          description: 'Не тратите деньги на города, где не продаёте.',
        },
      ],
    },
    {
      title: 'Интеграции',
      description: 'Чтобы не делать всё руками',
      items: [
        {
          icon: '/img_1c_company_logo_1.svg',
          title: 'Внешняя XML-интеграция',
          description: 'Товары и цены обновляются сами.',
        },
      ],
    },
    {
      title: 'Клиенты и отзывы',
      description: 'Чтобы получать повторные заказы',
      items: [
        {
          icon: '/fi_15713434.svg',
          title: 'Отправка сообщения после выдачи заказа',
          description: 'Клиенту приходит благодарность и просьба оставить отзыв.',
        },
      ],
    },
  ];

  return (
    <div className="add-store-container">
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
      <div className="header">
        <Link to="/">
          <LeftOutlined className="back-icon" />
        </Link>
        <Title level={5} className="header-title">Другие возможности</Title>
        <div style={{ width: 20 }} />
      </div>

      <div className="content">
        {/* Categories */}
        <div className="categories">
          <Space size={8} wrap>
            {categories.map((category) => (
              <Tag
                key={category}
                color={activeCategory === category ? 'blue' : 'default'}
                onClick={() => setActiveCategory(category)}
                style={{
                  cursor: 'pointer',
                  padding: '8px 12px',
                  fontSize: '16px',
                  borderRadius: '8px',
                  border: 'none',
                  background: activeCategory === category ? '#1e6ef4' : '#fafafa',
                  color: activeCategory === category ? '#ffffff' : '#333333',
                }}
              >
                {category}
              </Tag>
            ))}
          </Space>
        </div>

        {/* Sections */}
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="section">
            <Title level={4} className="section-title">
              {section.title}
            </Title>
            <Paragraph className="section-description">{section.description}</Paragraph>

            <List
              dataSource={section.items}
              renderItem={(item) => (
                <List.Item className="feature-item">
                  <List.Item.Meta
                    avatar={
                      <div className="feature-icon">
                        {item.icon ? (
                          <img src={item.icon} alt={item.title} className="icon-img" />
                        ) : item.antIcon ? (
                          item.antIcon
                        ) : null}
                      </div>
                    }
                    title={<Text strong className="feature-title">{item.title}</Text>}
                    description={<Text type="secondary" className="feature-description">{item.description}</Text>}
                  />
                  <RightOutlined className="arrow-icon" />
                </List.Item>
              )}
            />
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="bottom-bar">
        <Button className="nav-button" shape="circle" size="large">
          <LeftOutlined />
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

export default AddStore;

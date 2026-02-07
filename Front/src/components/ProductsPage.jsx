import React, { useState } from 'react';
import { Typography, Checkbox, Input, Switch, Row, Col } from 'antd';
import { SyncOutlined, FilterOutlined } from '@ant-design/icons';
import './ProductsPage.css';

const { Text } = Typography;
const { Search } = Input;

const ProductsPage = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  // Sample products data - replicate for multiple items
  const products = Array(8).fill({
    image: '/image_47.svg',
    title: 'Фен XyDyson фиолетовый многофункциональный мощный стильный пор',
    sku: '13412342345451_Letostore',
    price: '420 000 ₸',
    minPrice: '320 000 ₸',
    maxPrice: '820 000 ₸',
    step: '100 ₸',
    decrease: false,
    increase: false
  });

  return (
    <div className="products-page">
      {/* Status Bar */}
      <div className="status-bar">
        <span className="time">9:41</span>
        <div className="status-icons">
          <img src="/cellular_connection.svg" alt="cellular" className="status-icon" />
          <img src="/wifi.svg" alt="wifi" className="status-icon" />
          <img src="/battery.svg" alt="battery" className="battery-icon" />
        </div>
      </div>

      {/* Search Bar */}
      <div className="products-search-bar">
        <Search
          placeholder="Поиск среди 4133 товаров"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="products-search-input"
        />
        <div className="filter-btn">
          <FilterOutlined />
        </div>
      </div>

      {/* Content */}
      <div className="products-content">
        {/* Header Controls */}
        <div className="products-header">
          <div className="select-all-wrapper">
            <Checkbox 
              checked={selectAll} 
              onChange={(e) => setSelectAll(e.target.checked)}
            />
            <Text className="select-all-text">Выбрать все</Text>
          </div>
          <div className="refresh-all-wrapper">
            <Text className="refresh-text">Обновить все товары</Text>
            <SyncOutlined className="refresh-icon" />
          </div>
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="products-bottom">
        <div className="bottom-nav">
          <div className="nav-item">
            <span className="nav-icon">􀍩</span>
            <Text className="nav-label">Магазин</Text>
          </div>
          <div className="nav-item active">
            <span className="nav-icon">􀐚</span>
            <Text className="nav-label">Товары</Text>
          </div>
          <div className="nav-item">
            <span className="nav-icon">􀑀</span>
            <Text className="nav-label">Дашборд</Text>
          </div>
          <div className="nav-item">
            <span className="nav-icon">􀕺</span>
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

// Product Card Component
const ProductCard = ({ product }) => {
  const [checked, setChecked] = useState(false);
  const [decrease, setDecrease] = useState(product.decrease);
  const [increase, setIncrease] = useState(product.increase);

  return (
    <div className="product-card">
      {/* Product Header */}
      <div className="product-header">
        <Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)} />
        <img src={product.image} alt="product" className="product-image" />
        <div className="product-info">
          <Text className="product-title" ellipsis={{ rows: 2 }}>
            {product.title}
          </Text>
          <Text className="product-sku">{product.sku}</Text>
        </div>
      </div>

      {/* Product Prices */}
      <div className="product-prices">
        <div className="price-row">
          <Text className="price-label">Цена</Text>
          <Text className="price-value">{product.price}</Text>
        </div>
        <div className="price-row">
          <Text className="price-label">Мин. цена</Text>
          <Text className="price-value">{product.minPrice}</Text>
        </div>
        <div className="price-row">
          <Text className="price-label">Макс. цена</Text>
          <Text className="price-value">{product.maxPrice}</Text>
        </div>
        <div className="price-row">
          <Text className="price-label">Шаг</Text>
          <Text className="price-value">{product.step}</Text>
        </div>
      </div>

      {/* Product Controls */}
      <div className="product-controls">
        <div className="control-row">
          <Text className="control-label">Снижение</Text>
          <Switch 
            checked={decrease} 
            onChange={setDecrease}
            size="small"
          />
        </div>
        <div className="control-row">
          <Text className="control-label">Поднятие</Text>
          <Switch 
            checked={increase} 
            onChange={setIncrease}
            size="small"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;

import React, { useState } from 'react';
import { Typography, Input, Switch, Button } from 'antd';
import { SyncOutlined, MinusSquareOutlined, CheckSquareOutlined } from '@ant-design/icons';
import './Products2Page.css';

const { Text } = Typography;
const { Search } = Input;

const Products2Page = () => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedCount, setSelectedCount] = useState(0);

  // Sample products data - with selected state
  const [products, setProducts] = useState(
    Array(8).fill(null).map((_, idx) => ({
      id: idx,
      selected: idx < 2, // First 2 are selected
      image: '/image_47.svg',
      statusIcon: idx < 2 ? '/checkmark_square_fill.svg' : '/privacy_security_svg.svg',
      title: 'Фен XyDyson фиолетовый многофункциональный мощный стильный пор',
      sku: '13412342345451_Letostore',
      price: '420 000 ₸',
      minPrice: '320 000 ₸',
      maxPrice: '820 000 ₸',
      step: '100 ₸',
      decrease: false,
      increase: idx === 7 // Last item has both switches on
    }))
  );

  const handleUnselectAll = () => {
    setProducts(products.map(p => ({ ...p, selected: false })));
    setSelectedCount(0);
  };

  const toggleProductSelection = (id) => {
    setProducts(products.map(p => 
      p.id === id ? { ...p, selected: !p.selected } : p
    ));
  };

  return (
    <div className="products2-page">
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
      <div className="products2-search-bar">
        <Search
          placeholder="Поиск среди 4133 товаров"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="products2-search-input"
        />
        <div className="filter-btn">
          <span className="filter-icon">􀌆</span>
        </div>
      </div>

      {/* Content */}
      <div className="products2-content">
        {/* Header Controls */}
        <div className="products2-header">
          <div className="unselect-wrapper" onClick={handleUnselectAll}>
            <MinusSquareOutlined className="unselect-icon" />
            <Text className="unselect-text">Убрать</Text>
          </div>
          <div className="refresh-all-wrapper">
            <Text className="refresh-text">Обновить все товары</Text>
            <SyncOutlined className="refresh-icon" />
          </div>
        </div>

        {/* Products Grid */}
        <div className="products2-grid">
          {products.map((product) => (
            <ProductCard2 
              key={product.id} 
              product={product}
              onToggleSelection={toggleProductSelection}
            />
          ))}
        </div>
      </div>

      {/* Bottom Action Buttons */}
      <div className="products2-actions">
        <Button className="edit-btn">Редактировать</Button>
        <Button className="remove-btn">Снять с продажи</Button>
      </div>

      {/* Bottom Navigation */}
      <div className="products2-bottom">
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
const ProductCard2 = ({ product, onToggleSelection }) => {
  const [decrease, setDecrease] = useState(product.decrease);
  const [increase, setIncrease] = useState(product.increase);

  return (
    <div className={`product2-card ${product.selected ? 'selected' : ''}`}>
      {/* Product Header */}
      <div className="product2-header">
        <div 
          className="product2-checkbox"
          onClick={() => onToggleSelection(product.id)}
        >
          {product.selected ? (
            <CheckSquareOutlined style={{ color: '#1E6EF4', fontSize: '20px' }} />
          ) : (
            <div className="empty-checkbox" />
          )}
        </div>
        <img src={product.statusIcon} alt="status" className="product2-status-icon" />
        <img src={product.image} alt="product" className="product2-image" />
        <div className="product2-info">
          <Text className="product2-title" ellipsis={{ rows: 2 }}>
            {product.title}
          </Text>
          <Text className="product2-sku">{product.sku}</Text>
        </div>
      </div>

      {/* Product Prices */}
      <div className="product2-prices">
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
      <div className="product2-controls">
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

export default Products2Page;

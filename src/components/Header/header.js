// src/components/Header/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Header = () => {
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    if (search) {
      window.location.href = `/products?filter=${search}`;
    }
  };

  return (
    <header style={{ backgroundColor: '#1F1F1F', padding: '16px 0' }}>
      <div className="container">
        <Logo />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Pesquisar produtos..."
            style={{ padding: '8px', marginRight: '8px' }}
          />
          <button onClick={handleSearch}>🔍</button>

          <div style={{ marginLeft: 'auto', display: 'flex', gap: '20px' }}>
            <Link to="/login" style={{ color: '#B5B6F2', textDecoration: 'underline' }}>Cadastre-se</Link>
            <Link to="/login">
              <button style={{
                backgroundColor: '#C92071',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '4px',
                fontWeight: 'bold',
                fontSize: '14px'
              }}>Entrar</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
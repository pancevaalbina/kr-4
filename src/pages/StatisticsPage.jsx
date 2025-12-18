import React from 'react';
import { Link } from 'react-router-dom';
import useTechnologies from '../hooks/useTechnologies';
import Statistics from '../components/Statistics';

export default function StatisticsPage() {
  const { technologies } = useTechnologies();

  return (
    <div className="main-page-content">
      <h1 className="page-title">Статистика</h1>
      <p className="page-subtitle">Сводка по текущему прогрессу обучения.</p>

      <Statistics technologies={technologies} />

      <div style={{ marginTop: 16 }}>
        <Link to="/" className="nav-link" style={{ display: 'inline-block' }}>
          ← На главную
        </Link>
      </div>
    </div>
  );
}

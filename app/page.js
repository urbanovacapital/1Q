'use client';
import { useState } from 'react';

export default function Page() {
  const [inversion, setInversion] = useState(0);
  const capitalTotal = 250000;
  const capitalRestante = capitalTotal - inversion;

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Urbanova Capital</h1>
      <p>Invierte en propiedades exclusivas desde solo 100€.</p>

      <div style={{ marginTop: '2rem' }}>
        <label>¿Cuánto deseas invertir?</label>
        <input
          type="number"
          value={inversion}
          onChange={(e) => setInversion(Number(e.target.value))}
          style={{ margin: '1rem 0', padding: '0.5rem' }}
        />
        <div>
          <strong>Capital total del proyecto:</strong> {capitalTotal.toLocaleString()}€<br />
          <strong>Capital invertido:</strong> {inversion.toLocaleString()}€<br />
          <strong>Capital restante:</strong> {capitalRestante.toLocaleString()}€
        </div>
      </div>
    </main>
  );
}

export const metadata = {
  title: 'Urbanova Capital',
  description: 'Inversiones inmobiliarias con alta rentabilidad',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head />
      <body style={{ margin: 0, fontFamily: 'sans-serif', backgroundColor: '#f5f5f5' }}>
        {children}
      </body>
    </html>
  );
}

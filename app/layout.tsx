import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Expert Marketplace', description: 'Консультации и услуги независимых экспертов' };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ru"><body style={{fontFamily:'system-ui,sans-serif',maxWidth:980,margin:'auto',padding:24,color:'#202020'}}><header style={{display:'flex',justifyContent:'space-between',gap:16,marginBottom:32}}><a href="/">Expert Marketplace</a><nav><a href="/login">Войти</a> · <a href="/dashboard">Кабинет</a></nav></header>{children}</body></html>}

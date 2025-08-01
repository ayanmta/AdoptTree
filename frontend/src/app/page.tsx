import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ProductsSection from '@/components/ProductsSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ProductsSection />
    </main>
  );
}

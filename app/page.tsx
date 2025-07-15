import { Header } from '@/components/header';
import { FileGrid } from '@/components/file-grid';
import { FilterSidebar } from '@/components/filter-sidebar';
import { HeroSection } from '@/components/hero-section';
import { StatsSection } from '@/components/stats-section';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="w-full lg:w-80 flex-shrink-0">
            <FilterSidebar />
          </aside>
          <main className="flex-1">
            <FileGrid />
          </main>
        </div>
      </div>
    </div>
  );
}
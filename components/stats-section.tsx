"use client";

import { useEffect, useState } from 'react';

export function StatsSection() {
  const [stats, setStats] = useState({
    totalFiles: 0,
    totalDownloads: 0,
    activeUsers: 0,
    categories: 0,
  });

  useEffect(() => {
    // Animate numbers
    const targetStats = {
      totalFiles: 25000,
      totalDownloads: 150000,
      activeUsers: 12000,
      categories: 48,
    };

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setStats({
        totalFiles: Math.round(targetStats.totalFiles * easeOut),
        totalDownloads: Math.round(targetStats.totalDownloads * easeOut),
        activeUsers: Math.round(targetStats.activeUsers * easeOut),
        categories: Math.round(targetStats.categories * easeOut),
      });

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {stats.totalFiles.toLocaleString()}+
            </div>
            <div className="text-sm text-muted-foreground">Digital Files</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
              {stats.totalDownloads.toLocaleString()}+
            </div>
            <div className="text-sm text-muted-foreground">Downloads</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              {stats.activeUsers.toLocaleString()}+
            </div>
            <div className="text-sm text-muted-foreground">Active Users</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-amber-600 dark:text-amber-400 mb-2">
              {stats.categories}
            </div>
            <div className="text-sm text-muted-foreground">Categories</div>
          </div>
        </div>
      </div>
    </section>
  );
}
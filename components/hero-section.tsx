"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-800 dark:via-blue-900 dark:to-indigo-900" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 to-blue-600 dark:from-slate-100 dark:to-blue-400 bg-clip-text text-transparent mb-6">
            Premium Digital Archive
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover, purchase, and download thousands of premium digital files. From PDFs to software, find exactly what you need.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" asChild className="group">
              <Link href="#browse" className="flex items-center gap-2">
                Browse Files
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Download className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Instant Downloads</h3>
              <p className="text-muted-foreground">Download your files immediately after purchase with secure links</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Secure & Protected</h3>
              <p className="text-muted-foreground">All files are protected with advanced security measures</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Fast & Reliable</h3>
              <p className="text-muted-foreground">Lightning-fast downloads with 99.9% uptime guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
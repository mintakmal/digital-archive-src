"use client";

import { useState, useEffect } from 'react';
import { FileCard } from '@/components/file-card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Grid, List, Loader2 } from 'lucide-react';

interface FileItem {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  type: 'free' | 'paid' | 'premium';
  category: string;
  tags: string[];
  fileType: string;
  fileSize: string;
  downloadCount: number;
  rating: number;
  reviewCount: number;
  uploadDate: string;
  thumbnail: string;
  author: string;
  featured: boolean;
}

export function FileGrid() {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Get URL parameters for filtering
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const category = urlParams.get('category');
      if (category) {
        // Filter files by category - this would be implemented with actual API
        console.log('Filtering by category:', category);
      }
    }
  }, []);

  useEffect(() => {
    // Mock data - replace with actual API call
    setTimeout(() => {
      setFiles([
        {
          id: '1',
          title: 'Modern UI Design System',
          description: 'Complete design system with components, guidelines, and assets for modern web applications.',
          price: 299,
          originalPrice: 399,
          type: 'premium',
          category: 'design',
          tags: ['UI', 'Design System', 'Figma', 'Components'],
          fileType: 'ZIP',
          fileSize: '45.2 MB',
          downloadCount: 1250,
          rating: 4.8,
          reviewCount: 89,
          uploadDate: '2024-01-15',
          thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
          author: 'DesignPro',
          featured: true,
        },
        {
          id: '2',
          title: 'Business Plan Template',
          description: 'Professional business plan template with financial projections and market analysis.',
          price: 0,
          type: 'free',
          category: 'documents',
          tags: ['Business', 'Template', 'Planning', 'Finance'],
          fileType: 'PDF',
          fileSize: '2.1 MB',
          downloadCount: 8900,
          rating: 4.5,
          reviewCount: 234,
          uploadDate: '2024-01-10',
          thumbnail: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400',
          author: 'BizTemplates',
          featured: false,
        },
        {
          id: '3',
          title: 'Photo Editing Software',
          description: 'Professional photo editing software with advanced filters and AI-powered tools.',
          price: 199,
          type: 'paid',
          category: 'software',
          tags: ['Photo', 'Editing', 'Software', 'AI'],
          fileType: 'EXE',
          fileSize: '120.5 MB',
          downloadCount: 456,
          rating: 4.9,
          reviewCount: 67,
          uploadDate: '2024-01-12',
          thumbnail: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400',
          author: 'PhotoStudio',
          featured: true,
        },
        {
          id: '4',
          title: 'Marketing Strategy Guide',
          description: 'Comprehensive guide to digital marketing strategies for 2024 with real case studies.',
          price: 149,
          type: 'paid',
          category: 'documents',
          tags: ['Marketing', 'Strategy', 'Digital', 'Guide'],
          fileType: 'PDF',
          fileSize: '15.8 MB',
          downloadCount: 2100,
          rating: 4.7,
          reviewCount: 145,
          uploadDate: '2024-01-08',
          thumbnail: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400',
          author: 'MarketingGuru',
          featured: false,
        },
        {
          id: '5',
          title: 'Stock Photo Collection',
          description: 'High-quality stock photos for commercial use. Over 500 images in various categories.',
          price: 79,
          type: 'paid',
          category: 'graphics',
          tags: ['Stock Photos', 'Commercial', 'Photography', 'Images'],
          fileType: 'ZIP',
          fileSize: '89.3 MB',
          downloadCount: 678,
          rating: 4.6,
          reviewCount: 92,
          uploadDate: '2024-01-14',
          thumbnail: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400',
          author: 'PhotoStock',
          featured: false,
        },
        {
          id: '6',
          title: 'Web Development Course',
          description: 'Complete web development course covering HTML, CSS, JavaScript, and React.',
          price: 399,
          originalPrice: 599,
          type: 'premium',
          category: 'education',
          tags: ['Web Development', 'Course', 'Programming', 'React'],
          fileType: 'ZIP',
          fileSize: '2.1 GB',
          downloadCount: 3400,
          rating: 4.9,
          reviewCount: 287,
          uploadDate: '2024-01-05',
          thumbnail: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400',
          author: 'CodeMaster',
          featured: true,
        },
        {
          id: '7',
          title: 'Free Icon Pack',
          description: 'Collection of 200+ free icons for web and mobile applications in SVG format.',
          price: 0,
          type: 'free',
          category: 'graphics',
          tags: ['Icons', 'Free', 'SVG', 'UI'],
          fileType: 'ZIP',
          fileSize: '5.2 MB',
          downloadCount: 12000,
          rating: 4.4,
          reviewCount: 456,
          uploadDate: '2024-01-16',
          thumbnail: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400',
          author: 'IconDesign',
          featured: false,
        },
        {
          id: '8',
          title: 'Financial Dashboard Template',
          description: 'Professional financial dashboard template with charts and analytics.',
          price: 249,
          type: 'paid',
          category: 'templates',
          tags: ['Dashboard', 'Finance', 'Analytics', 'Template'],
          fileType: 'HTML',
          fileSize: '12.7 MB',
          downloadCount: 890,
          rating: 4.8,
          reviewCount: 78,
          uploadDate: '2024-01-11',
          thumbnail: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400',
          author: 'DashboardPro',
          featured: true,
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const sortedFiles = [...files].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime();
      case 'oldest':
        return new Date(a.uploadDate).getTime() - new Date(b.uploadDate).getTime();
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'downloads':
        return b.downloadCount - a.downloadCount;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentFiles = sortedFiles.slice(startIndex, endIndex);
  const totalPages = Math.ceil(sortedFiles.length / itemsPerPage);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">Browse Files</h2>
          <p className="text-muted-foreground">
            {sortedFiles.length} files found
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="downloads">Most Downloaded</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
          
          <div className="flex items-center gap-1">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className={
        viewMode === 'grid' 
          ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
          : 'space-y-4'
      }>
        {currentFiles.map(file => (
          <FileCard key={file.id} file={file} viewMode={viewMode} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          <Button
            variant="outline"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => prev - 1)}
          >
            Previous
          </Button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <Button
              key={page}
              variant={currentPage === page ? 'default' : 'outline'}
              size="sm"
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </Button>
          ))}
          
          <Button
            variant="outline"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(prev => prev + 1)}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}
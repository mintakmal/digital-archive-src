"use client";

import { useEffect, useState } from 'react';
import { FileCard } from '@/components/file-card';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface RelatedFilesProps {
  fileId: string;
}

export function RelatedFiles({ fileId }: RelatedFilesProps) {
  const [relatedFiles, setRelatedFiles] = useState<any[]>([]);

  useEffect(() => {
    // Mock related files data
    setRelatedFiles([
      {
        id: '2',
        title: 'Business Plan Template',
        description: 'Professional business plan template with financial projections.',
        price: 0,
        type: 'free',
        category: 'documents',
        tags: ['Business', 'Template', 'Planning'],
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
        description: 'Professional photo editing software with advanced filters.',
        price: 199,
        type: 'paid',
        category: 'software',
        tags: ['Photo', 'Editing', 'Software'],
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
        description: 'Comprehensive guide to digital marketing strategies.',
        price: 149,
        type: 'paid',
        category: 'documents',
        tags: ['Marketing', 'Strategy', 'Guide'],
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
    ]);
  }, [fileId]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Related Files</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedFiles.map(file => (
            <FileCard key={file.id} file={file} viewMode="grid" />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
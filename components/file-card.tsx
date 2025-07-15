"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Download, Eye, Heart, Share2, Star, Clock, FileText, Lock } from 'lucide-react';
import { useAuth } from '@/components/auth-provider';
import { toast } from 'sonner';

interface FileCardProps {
  file: {
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
  };
  viewMode: 'grid' | 'list';
}

export function FileCard({ file, viewMode }: FileCardProps) {
  const { user } = useAuth();
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    if (!user) {
      toast.error('Please login to download files');
      return;
    }

    setIsLoading(true);
    // Mock download process
    setTimeout(() => {
      toast.success('Download started!');
      setIsLoading(false);
    }, 1000);
  };

  const handlePurchase = () => {
    if (!user) {
      toast.error('Please login to purchase files');
      return;
    }
    
    toast.info('Redirecting to payment...');
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'free':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'paid':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'premium':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  if (viewMode === 'list') {
    return (
      <Card className="hover:shadow-md transition-shadow duration-200">
        <CardContent className="p-4">
          <div className="flex gap-4">
            <div className="relative w-32 h-20 flex-shrink-0">
              <Image
                src={file.thumbnail}
                alt={file.title}
                fill
                className="object-cover rounded-lg"
              />
              {file.featured && (
                <Badge className="absolute -top-2 -right-2 bg-amber-500 text-white">
                  Featured
                </Badge>
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <Link href={`/files/${file.id}`}>
                    <h3 className="font-semibold text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-1">
                      {file.title}
                    </h3>
                  </Link>
                  <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
                    {file.description}
                  </p>
                  
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <FileText className="h-4 w-4" />
                      {file.fileType}
                    </span>
                    <span>{file.fileSize}</span>
                    <span className="flex items-center gap-1">
                      <Download className="h-4 w-4" />
                      {file.downloadCount.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      {file.rating}
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-col items-end gap-2 ml-4">
                  <Badge className={getTypeColor(file.type)}>
                    {file.type.charAt(0).toUpperCase() + file.type.slice(1)}
                  </Badge>
                  
                  <div className="text-right">
                    {file.price === 0 ? (
                      <span className="text-lg font-bold text-green-600 dark:text-green-400">
                        Free
                      </span>
                    ) : (
                      <div className="flex items-center gap-2">
                        {file.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            ₹{file.originalPrice}
                          </span>
                        )}
                        <span className="text-lg font-bold">
                          ₹{file.price}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsLiked(!isLiked)}
                    >
                      <Heart className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                    </Button>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                    >
                      <Link href={`/files/${file.id}`}>
                        <Eye className="h-4 w-4" />
                      </Link>
                    </Button>
                    
                    {file.price === 0 ? (
                      <Button
                        onClick={handleDownload}
                        disabled={isLoading}
                        size="sm"
                      >
                        {isLoading ? 'Downloading...' : 'Download'}
                      </Button>
                    ) : (
                      <Button
                        onClick={handlePurchase}
                        disabled={!user}
                        size="sm"
                      >
                        {!user ? <Lock className="h-4 w-4" /> : 'Purchase'}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="group hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative aspect-video">
          <Image
            src={file.thumbnail}
            alt={file.title}
            fill
            className="object-cover rounded-t-lg"
          />
          {file.featured && (
            <Badge className="absolute top-2 left-2 bg-amber-500 text-white">
              Featured
            </Badge>
          )}
          <Badge className={`absolute top-2 right-2 ${getTypeColor(file.type)}`}>
            {file.type.charAt(0).toUpperCase() + file.type.slice(1)}
          </Badge>
          
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 rounded-t-lg" />
          
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <Button size="sm" variant="secondary" asChild>
              <Link href={`/files/${file.id}`}>
                <Eye className="h-4 w-4 mr-2" />
                Quick View
              </Link>
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${file.author}`} />
            <AvatarFallback className="text-xs">
              {file.author.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <span className="text-sm text-muted-foreground">{file.author}</span>
        </div>
        
        <Link href={`/files/${file.id}`}>
          <h3 className="font-semibold text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-2 mb-2">
            {file.title}
          </h3>
        </Link>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {file.description}
        </p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {file.tags.slice(0, 3).map(tag => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
          {file.tags.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{file.tags.length - 3}
            </Badge>
          )}
        </div>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <FileText className="h-4 w-4" />
              {file.fileType}
            </span>
            <span>{file.fileSize}</span>
          </div>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {formatDate(file.uploadDate)}
          </span>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <Download className="h-4 w-4" />
              {file.downloadCount.toLocaleString()}
            </span>
            <span className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              {file.rating} ({file.reviewCount})
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsLiked(!isLiked)}
            >
              <Heart className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
            </Button>
            <Button variant="ghost" size="sm">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <div className="flex items-center justify-between w-full">
          <div>
            {file.price === 0 ? (
              <span className="text-lg font-bold text-green-600 dark:text-green-400">
                Free
              </span>
            ) : (
              <div className="flex items-center gap-2">
                {file.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    ₹{file.originalPrice}
                  </span>
                )}
                <span className="text-lg font-bold">
                  ₹{file.price}
                </span>
              </div>
            )}
          </div>
          
          {file.price === 0 ? (
            <Button
              onClick={handleDownload}
              disabled={isLoading}
              className="flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              {isLoading ? 'Downloading...' : 'Download'}
            </Button>
          ) : (
            <Button
              onClick={handlePurchase}
              disabled={!user}
              className="flex items-center gap-2"
            >
              {!user ? <Lock className="h-4 w-4" /> : 'Purchase'}
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
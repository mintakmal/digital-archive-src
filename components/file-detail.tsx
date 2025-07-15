"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Download, 
  Star, 
  Heart, 
  Share2, 
  Clock, 
  FileText, 
  User,
  Shield,
  CheckCircle,
  Eye,
  MessageCircle,
  Lock
} from 'lucide-react';
import { useAuth } from '@/components/auth-provider';
import { toast } from 'sonner';

interface FileDetailProps {
  fileId: string;
}

export function FileDetail({ fileId }: FileDetailProps) {
  const { user } = useAuth();
  const [file, setFile] = useState<any>(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Mock file data - replace with actual API call
    setFile({
      id: fileId,
      title: 'Modern UI Design System',
      description: 'Complete design system with components, guidelines, and assets for modern web applications. This comprehensive package includes everything you need to build consistent, beautiful interfaces.',
      longDescription: `This modern UI design system is crafted for professionals who want to create stunning, consistent user interfaces. The package includes:

• 200+ UI components across 15 categories
• Comprehensive style guide with typography, colors, and spacing
• Icon library with 500+ custom icons
• Responsive design patterns and templates
• Dark and light mode variations
• Figma, Sketch, and Adobe XD files
• Complete documentation and implementation guide

Perfect for designers, developers, and product teams looking to streamline their workflow and maintain design consistency across projects.`,
      price: 299,
      originalPrice: 399,
      type: 'premium',
      category: 'Design',
      tags: ['UI', 'Design System', 'Figma', 'Components', 'Templates'],
      fileType: 'ZIP',
      fileSize: '45.2 MB',
      downloadCount: 1250,
      rating: 4.8,
      reviewCount: 89,
      uploadDate: '2024-01-15',
      lastUpdate: '2024-01-20',
      thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: {
        name: 'DesignPro',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=DesignPro',
        verified: true,
        totalFiles: 45,
        totalDownloads: 125000,
        rating: 4.7,
      },
      featured: true,
      preview: [
        'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400',
      ],
      features: [
        'Comprehensive component library',
        'Multiple file formats included',
        'Responsive design patterns',
        'Dark and light mode support',
        'Detailed documentation',
        'Commercial license included',
      ],
      requirements: [
        'Figma (latest version)',
        'Sketch 70+',
        'Adobe XD (latest version)',
        'Basic design knowledge',
      ],
      reviews: [
        {
          id: 1,
          user: 'Sarah Johnson',
          avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Sarah',
          rating: 5,
          comment: 'Excellent design system! Saved me weeks of work on my project.',
          date: '2024-01-18',
        },
        {
          id: 2,
          user: 'Mike Chen',
          avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Mike',
          rating: 4,
          comment: 'Great quality components. Documentation could be more detailed.',
          date: '2024-01-16',
        },
        {
          id: 3,
          user: 'Emma Wilson',
          avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Emma',
          rating: 5,
          comment: 'Perfect for my design team. Highly recommended!',
          date: '2024-01-14',
        },
      ],
    });
  }, [fileId]);

  const handleDownload = async () => {
    if (!user) {
      toast.error('Please login to download files');
      return;
    }

    setIsLoading(true);
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

  if (!file) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">{file.category}</Badge>
                    <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                      {file.type.charAt(0).toUpperCase() + file.type.slice(1)}
                    </Badge>
                    {file.featured && (
                      <Badge className="bg-amber-500 text-white">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-3xl mb-4">{file.title}</CardTitle>
                  <p className="text-muted-foreground text-lg">{file.description}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsLiked(!isLiked)}
                  >
                    <Heart className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="aspect-video relative mb-6">
                <Image
                  src={file.thumbnail}
                  alt={file.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={file.author.avatar} />
                      <AvatarFallback>{file.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{file.author.name}</span>
                        {file.author.verified && (
                          <CheckCircle className="h-4 w-4 text-blue-500" />
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {file.author.totalFiles} files • {file.author.totalDownloads.toLocaleString()} downloads
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    {file.downloadCount.toLocaleString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    {file.rating} ({file.reviewCount})
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    Updated {new Date(file.lastUpdate).toLocaleDateString()}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {file.tags.map((tag: string) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              <Tabs defaultValue="description" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="requirements">Requirements</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                
                <TabsContent value="description" className="mt-4">
                  <div className="prose dark:prose-invert max-w-none">
                    <p className="whitespace-pre-line">{file.longDescription}</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="features" className="mt-4">
                  <ul className="space-y-2">
                    {file.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                
                <TabsContent value="requirements" className="mt-4">
                  <ul className="space-y-2">
                    {file.requirements.map((requirement: string, index: number) => (
                      <li key={index} className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-blue-500" />
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                
                <TabsContent value="reviews" className="mt-4">
                  <div className="space-y-4">
                    {file.reviews.map((review: any) => (
                      <div key={review.id} className="border rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={review.avatar} />
                            <AvatarFallback>{review.user.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-medium">{review.user}</span>
                              <div className="flex items-center">
                                {Array.from({ length: review.rating }).map((_, i) => (
                                  <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                              <span className="text-sm text-muted-foreground">
                                {new Date(review.date).toLocaleDateString()}
                              </span>
                            </div>
                            <p className="text-sm">{review.comment}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-8">
            <CardHeader>
              <CardTitle className="text-xl">Purchase Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                {file.price === 0 ? (
                  <span className="text-3xl font-bold text-green-600 dark:text-green-400">
                    Free
                  </span>
                ) : (
                  <div>
                    {file.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through block">
                        ₹{file.originalPrice}
                      </span>
                    )}
                    <span className="text-3xl font-bold">
                      ₹{file.price}
                    </span>
                  </div>
                )}
              </div>

              <Separator />

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">File Type</span>
                  <span className="font-medium">{file.fileType}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">File Size</span>
                  <span className="font-medium">{file.fileSize}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Downloads</span>
                  <span className="font-medium">{file.downloadCount.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Last Updated</span>
                  <span className="font-medium">{new Date(file.lastUpdate).toLocaleDateString()}</span>
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                {file.price === 0 ? (
                  <Button
                    className="w-full"
                    onClick={handleDownload}
                    disabled={isLoading}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    {isLoading ? 'Downloading...' : 'Download Now'}
                  </Button>
                ) : (
                  <Button
                    className="w-full"
                    onClick={handlePurchase}
                    disabled={!user}
                  >
                    {!user ? (
                      <>
                        <Lock className="h-4 w-4 mr-2" />
                        Login to Purchase
                      </>
                    ) : (
                      'Purchase Now'
                    )}
                  </Button>
                )}
                
                <Button variant="outline" className="w-full">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Contact Author
                </Button>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="h-4 w-4 text-green-500" />
                  <span className="font-medium text-sm">Protected Purchase</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Your purchase is protected by our secure payment system and backed by our satisfaction guarantee.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
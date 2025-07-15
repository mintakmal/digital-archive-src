"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/components/auth-provider';
import { Download, Clock, Star, Edit } from 'lucide-react';

export function UserProfile() {
  const { user } = useAuth();

  const downloadHistory = [
    {
      id: '1',
      title: 'Modern UI Design System',
      downloadDate: '2024-01-20',
      fileType: 'ZIP',
      fileSize: '45.2 MB',
      price: 299,
    },
    {
      id: '2',
      title: 'Business Plan Template',
      downloadDate: '2024-01-18',
      fileType: 'PDF',
      fileSize: '2.1 MB',
      price: 0,
    },
    {
      id: '3',
      title: 'Photo Editing Software',
      downloadDate: '2024-01-15',
      fileType: 'EXE',
      fileSize: '120.5 MB',
      price: 199,
    },
  ];

  if (!user) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={user.avatar} />
              <AvatarFallback className="text-2xl">
                {user.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-2xl font-bold">{user.name}</h1>
                <Badge variant={user.role === 'admin' ? 'default' : 'secondary'}>
                  {user.role}
                </Badge>
              </div>
              <p className="text-muted-foreground">{user.email}</p>
            </div>
            <Button variant="outline">
              <Edit className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
          </div>
        </CardHeader>
      </Card>

      <Tabs defaultValue="downloads" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="downloads">Downloads</TabsTrigger>
          <TabsTrigger value="favorites">Favorites</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="downloads" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Download History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {downloadHistory.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-medium">{item.title}</h3>
                      <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {new Date(item.downloadDate).toLocaleDateString()}
                        </span>
                        <span>{item.fileType}</span>
                        <span>{item.fileSize}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-medium">
                        {item.price === 0 ? 'Free' : `₹${item.price}`}
                      </span>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="favorites" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Favorite Files</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Your favorite files will appear here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="settings" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Account settings will be implemented here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
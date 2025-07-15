"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileUpload } from '@/components/admin/file-upload';
import { 
  Upload, 
  Download, 
  Users, 
  DollarSign, 
  TrendingUp, 
  Eye, 
  Edit, 
  Trash2, 
  MoreVertical 
} from 'lucide-react';

export function AdminDashboard() {
  const stats = [
    {
      title: 'Total Files',
      value: '1,234',
      change: '+12%',
      icon: Upload,
      color: 'text-blue-600',
    },
    {
      title: 'Total Downloads',
      value: '45,678',
      change: '+8%',
      icon: Download,
      color: 'text-green-600',
    },
    {
      title: 'Active Users',
      value: '2,890',
      change: '+15%',
      icon: Users,
      color: 'text-purple-600',
    },
    {
      title: 'Revenue',
      value: '₹1,23,456',
      change: '+23%',
      icon: DollarSign,
      color: 'text-amber-600',
    },
  ];

  const recentFiles = [
    {
      id: '1',
      title: 'Modern UI Design System',
      type: 'premium',
      price: 299,
      downloads: 1250,
      status: 'active',
      uploadDate: '2024-01-20',
    },
    {
      id: '2',
      title: 'Business Plan Template',
      type: 'free',
      price: 0,
      downloads: 8900,
      status: 'active',
      uploadDate: '2024-01-18',
    },
    {
      id: '3',
      title: 'Photo Editing Software',
      type: 'paid',
      price: 199,
      downloads: 456,
      status: 'pending',
      uploadDate: '2024-01-15',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground">Manage your digital archive</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <div className={`p-2 rounded-full bg-muted ${stat.color}`}>
                  <stat.icon className="h-5 w-5" />
                </div>
              </div>
              <div className="flex items-center mt-2">
                <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-sm text-green-600">{stat.change}</span>
                <span className="text-sm text-muted-foreground ml-1">vs last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="files" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="files">Files</TabsTrigger>
          <TabsTrigger value="upload">Upload</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        
        <TabsContent value="files" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Recent Files</CardTitle>
                <Button>
                  <Upload className="h-4 w-4 mr-2" />
                  Upload File
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentFiles.map((file) => (
                  <div key={file.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium">{file.title}</h3>
                        <Badge variant={file.type === 'premium' ? 'default' : file.type === 'free' ? 'secondary' : 'outline'}>
                          {file.type}
                        </Badge>
                        <Badge variant={file.status === 'active' ? 'default' : 'secondary'}>
                          {file.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{file.downloads.toLocaleString()} downloads</span>
                        <span>₹{file.price}</span>
                        <span>Uploaded {new Date(file.uploadDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="upload" className="mt-6">
          <FileUpload />
        </TabsContent>
        
        <TabsContent value="users" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">User management interface will be implemented here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="analytics" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Analytics and reporting features will be implemented here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
import { Header } from '@/components/header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { 
  FileText, 
  Code, 
  Image, 
  Music, 
  Video, 
  Layout, 
  Type, 
  BookOpen 
} from 'lucide-react';

export default function CategoriesPage() {
  const categories = [
    {
      id: 'documents',
      name: 'Documents',
      description: 'PDFs, Word docs, presentations, and more',
      icon: FileText,
      count: 1250,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900',
    },
    {
      id: 'software',
      name: 'Software',
      description: 'Applications, tools, and utilities',
      icon: Code,
      count: 890,
      color: 'text-green-600',
      bgColor: 'bg-green-100 dark:bg-green-900',
    },
    {
      id: 'graphics',
      name: 'Graphics',
      description: 'Images, icons, illustrations, and designs',
      icon: Image,
      count: 2100,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100 dark:bg-purple-900',
    },
    {
      id: 'audio',
      name: 'Audio',
      description: 'Music, sound effects, and audio files',
      icon: Music,
      count: 650,
      color: 'text-pink-600',
      bgColor: 'bg-pink-100 dark:bg-pink-900',
    },
    {
      id: 'video',
      name: 'Video',
      description: 'Video files, animations, and clips',
      icon: Video,
      count: 420,
      color: 'text-red-600',
      bgColor: 'bg-red-100 dark:bg-red-900',
    },
    {
      id: 'templates',
      name: 'Templates',
      description: 'Website templates, themes, and layouts',
      icon: Layout,
      count: 1800,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100 dark:bg-indigo-900',
    },
    {
      id: 'fonts',
      name: 'Fonts',
      description: 'Typography, font families, and typefaces',
      icon: Type,
      count: 340,
      color: 'text-amber-600',
      bgColor: 'bg-amber-100 dark:bg-amber-900',
    },
    {
      id: 'ebooks',
      name: 'E-books',
      description: 'Digital books, guides, and publications',
      icon: BookOpen,
      count: 760,
      color: 'text-teal-600',
      bgColor: 'bg-teal-100 dark:bg-teal-900',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Browse Categories</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our extensive collection of digital files organized by category
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.id} href={`/?category=${category.id}`}>
              <Card className="group hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 ${category.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200`}>
                    <category.icon className={`h-8 w-8 ${category.color}`} />
                  </div>
                  <CardTitle className="text-xl">{category.name}</CardTitle>
                  <Badge variant="secondary" className="w-fit mx-auto">
                    {category.count.toLocaleString()} files
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center text-sm">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
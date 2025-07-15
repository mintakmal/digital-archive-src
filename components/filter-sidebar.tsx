"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Filter, X } from 'lucide-react';

export function FilterSidebar() {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [priceType, setPriceType] = useState('all');

  const categories = [
    { id: 'documents', label: 'Documents', count: 1250 },
    { id: 'software', label: 'Software', count: 890 },
    { id: 'graphics', label: 'Graphics', count: 2100 },
    { id: 'audio', label: 'Audio', count: 650 },
    { id: 'video', label: 'Video', count: 420 },
    { id: 'templates', label: 'Templates', count: 1800 },
    { id: 'fonts', label: 'Fonts', count: 340 },
    { id: 'ebooks', label: 'E-books', count: 760 },
  ];

  const popularTags = [
    'Business', 'Education', 'Design', 'Technology', 'Marketing',
    'Finance', 'Health', 'Travel', 'Food', 'Photography'
  ];

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedTags([]);
    setPriceRange([0, 1000]);
    setPriceType('all');
  };

  const activeFiltersCount = selectedCategories.length + selectedTags.length + (priceType !== 'all' ? 1 : 0);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center justify-between text-lg">
            <span className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </span>
            {activeFiltersCount > 0 && (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={clearAllFilters}
                className="h-8 text-xs"
              >
                Clear All
              </Button>
            )}
          </CardTitle>
          {activeFiltersCount > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {selectedCategories.map(categoryId => (
                <Badge key={categoryId} variant="secondary" className="text-xs">
                  {categories.find(c => c.id === categoryId)?.label}
                  <X 
                    className="h-3 w-3 ml-1 cursor-pointer" 
                    onClick={() => handleCategoryChange(categoryId)}
                  />
                </Badge>
              ))}
              {selectedTags.map(tag => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                  <X 
                    className="h-3 w-3 ml-1 cursor-pointer" 
                    onClick={() => handleTagToggle(tag)}
                  />
                </Badge>
              ))}
            </div>
          )}
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Price Type Filter */}
          <div>
            <Label className="text-sm font-medium mb-3 block">Price Type</Label>
            <RadioGroup value={priceType} onValueChange={setPriceType}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="all" />
                <Label htmlFor="all" className="text-sm">All Files</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="free" id="free" />
                <Label htmlFor="free" className="text-sm">Free Only</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="paid" id="paid" />
                <Label htmlFor="paid" className="text-sm">Paid Only</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="premium" id="premium" />
                <Label htmlFor="premium" className="text-sm">Premium</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Price Range */}
          <div>
            <Label className="text-sm font-medium mb-3 block">
              Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
            </Label>
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              max={1000}
              min={0}
              step={10}
              className="w-full"
            />
          </div>

          {/* Categories */}
          <div>
            <Label className="text-sm font-medium mb-3 block">Categories</Label>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {categories.map(category => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={category.id}
                    checked={selectedCategories.includes(category.id)}
                    onCheckedChange={() => handleCategoryChange(category.id)}
                  />
                  <Label 
                    htmlFor={category.id} 
                    className="text-sm flex-1 cursor-pointer"
                  >
                    {category.label}
                  </Label>
                  <span className="text-xs text-muted-foreground">
                    ({category.count})
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div>
            <Label className="text-sm font-medium mb-3 block">Popular Tags</Label>
            <div className="flex flex-wrap gap-2">
              {popularTags.map(tag => (
                <Badge
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  className="cursor-pointer text-xs"
                  onClick={() => handleTagToggle(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
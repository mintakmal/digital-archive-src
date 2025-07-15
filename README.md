# Digital Archive Website

A modern, responsive digital archive platform for browsing, purchasing, and downloading digital files like PDFs, ZIPs, software, and more.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **User Authentication**: Secure login/register system
- **File Management**: Browse, filter, and search digital files
- **Payment Integration**: Ready for Stripe/Razorpay integration
- **Admin Panel**: File upload and management for administrators
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Download History**: Track user downloads and purchases
- **SEO Optimized**: Proper metadata and structure for search engines

## Tech Stack

- **Frontend**: Next.js 13+ with App Router, React 18, TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Authentication**: Ready for Supabase Auth integration
- **Database**: Prepared for Supabase PostgreSQL
- **File Storage**: Ready for Supabase Storage
- **Payments**: Stripe integration ready
- **Deployment**: Optimized for Vercel/Netlify

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/mintakmal/digital-archive-src.git
cd digital-archive
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env.local
```

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Environment Variables

Create a `.env.local` file with the following variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_webhook_secret

# App Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
```

## Deployment

### Frontend Deployment (Vercel - Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

### Frontend Deployment (Netlify)

1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify
3. Configure environment variables

### Backend Setup (Supabase)

1. Create a new Supabase project
2. Set up authentication providers
3. Create database tables using the provided SQL schema
4. Configure Row Level Security (RLS) policies
5. Set up file storage buckets

## Database Schema

```sql
-- Users table (handled by Supabase Auth)
-- Files table
CREATE TABLE files (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  file_path TEXT NOT NULL,
  file_type TEXT NOT NULL,
  file_size BIGINT NOT NULL,
  price DECIMAL(10,2) DEFAULT 0,
  category TEXT NOT NULL,
  tags TEXT[],
  thumbnail_url TEXT,
  download_count INTEGER DEFAULT 0,
  rating DECIMAL(3,2) DEFAULT 0,
  review_count INTEGER DEFAULT 0,
  featured BOOLEAN DEFAULT false,
  status TEXT DEFAULT 'active',
  uploaded_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Downloads table
CREATE TABLE downloads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  file_id UUID REFERENCES files(id),
  download_url TEXT,
  expires_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Purchases table
CREATE TABLE purchases (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  file_id UUID REFERENCES files(id),
  amount DECIMAL(10,2) NOT NULL,
  currency TEXT DEFAULT 'INR',
  payment_id TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## File Structure

```
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication pages
│   ├── admin/             # Admin panel
│   ├── files/             # File detail pages
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── auth/             # Authentication components
│   └── admin/            # Admin components
├── lib/                  # Utility functions
├── hooks/                # Custom React hooks
└── public/               # Static assets
```

## Key Features Implementation

### Authentication
- Mock authentication system (replace with Supabase Auth)
- Protected routes with AuthGuard component
- Role-based access control (user/admin)

### File Management
- Grid and list view toggle
- Advanced filtering by category, price, tags
- Search functionality
- Pagination support

### Payment Integration
- Stripe-ready purchase flow
- Indian Rupee (₹) pricing display
- Purchase history tracking

### Admin Features
- File upload with validation
- Category and tag management
- User management interface
- Analytics dashboard

## Production Checklist

- [ ] Set up Supabase project and configure environment variables
- [ ] Implement real authentication with Supabase Auth
- [ ] Set up file storage with Supabase Storage
- [ ] Configure Stripe payment processing
- [ ] Set up email notifications
- [ ] Implement proper error handling and logging
- [ ] Add rate limiting and security headers
- [ ] Configure CDN for static assets
- [ ] Set up monitoring and analytics
- [ ] Test all features thoroughly

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

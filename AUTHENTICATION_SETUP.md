# 🔐 Seamless Authentication Setup Guide

## 🚀 Quick Start

### 1. Environment Variables
Create a `.env.local` file in your project root:

```bash
# NextAuth Configuration
NEXTAUTH_SECRET=your-nextauth-secret-key-here
NEXTAUTH_URL=http://localhost:3000

# Database (Free Tier Options)
# Option A: Supabase (Recommended)
DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres"

# Option B: PlanetScale
DATABASE_URL="mysql://[USERNAME]:[PASSWORD]@[HOST]/[DATABASE]?sslaccept=strict"

# Option C: Railway
DATABASE_URL="postgresql://postgres:[PASSWORD]@[HOST]:[PORT]/[DATABASE]"

# OAuth Providers (Free Tier)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

GITHUB_ID=your-github-client-id
GITHUB_SECRET=your-github-client-secret
```

### 2. Database Setup

#### Option A: Supabase (Recommended - Free Tier)
1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Get your database URL from Settings > Database
4. Run migrations:
```bash
npx prisma db push
```

#### Option B: PlanetScale (Free Tier)
1. Go to [planetscale.com](https://planetscale.com)
2. Create a new database
3. Get your connection string
4. Run migrations:
```bash
npx prisma db push
```

### 3. OAuth Provider Setup

#### Google OAuth (Free)
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`

#### GitHub OAuth (Free)
1. Go to [GitHub Settings > Developer settings > OAuth Apps](https://github.com/settings/developers)
2. Create a new OAuth App
3. Add callback URL: `http://localhost:3000/api/auth/callback/github`

## 🎯 Features Implemented

### ✅ Seamless Authentication
- **One-click social login** with Google & GitHub
- **Minimal required fields** - only email for social login
- **Auto-created user preferences** on first sign-in
- **Session management** with JWT tokens

### ✅ User Preferences System
- **Dietary restrictions** tracking
- **Favorite fruits** preferences
- **Communication preferences** (email, SMS, push)
- **Harvest frequency** settings
- **Delivery preferences**

### ✅ Analytics & Behavior Tracking
- **Page visit tracking**
- **Product interaction** monitoring
- **Tree adoption** interest tracking
- **Device & location** detection
- **Time on site** analytics

### ✅ Database Schema
- **User accounts** with social login support
- **User preferences** for personalization
- **User analytics** for behavior tracking
- **Tree adoptions** tracking
- **Orders** for e-commerce
- **User activities** for detailed analytics

## 🔧 Database Commands

```bash
# Generate Prisma client
npx prisma generate

# Push schema to database
npx prisma db push

# View database in browser
npx prisma studio

# Reset database (development only)
npx prisma db push --force-reset
```

## 🎨 UI Components

### Authentication Pages
- **`/auth/signin`** - Beautiful sign-in page with social login
- **`/auth/signup`** - Minimal sign-up form
- **`/auth/error`** - Error handling page

### Navigation Integration
- **Dynamic auth buttons** in navigation
- **Session-aware UI** changes
- **Seamless logout** functionality

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Add environment variables in Vercel dashboard
3. Deploy automatically

### Netlify
1. Connect your repository
2. Add environment variables
3. Set build command: `npm run build`

## 📊 Analytics Dashboard (Future)

### User Behavior Insights
- **Most popular products** by region
- **Tree adoption trends**
- **Seasonal preferences**
- **User engagement** metrics

### Personalization Engine
- **Smart product recommendations**
- **Seasonal content** suggestions
- **Personalized harvest alerts**
- **Location-based** offerings

## 🔒 Security Features

- **JWT token** authentication
- **Secure session** management
- **OAuth 2.0** with PKCE
- **Database encryption** (with Supabase/PlanetScale)
- **Environment variable** protection

## 💡 Usage Examples

### Check User Session
```typescript
import { useSession } from 'next-auth/react'

function MyComponent() {
  const { data: session, status } = useSession()
  
  if (status === "loading") return <div>Loading...</div>
  if (status === "unauthenticated") return <div>Please sign in</div>
  
  return <div>Welcome {session?.user?.name}!</div>
}
```

### Access User Preferences
```typescript
const { data: session } = useSession()
const preferences = session?.user?.preferences

// Check favorite fruits
const favoriteFruits = preferences?.favoriteFruits || []
```

### Track User Activity
```typescript
// Track page view
await fetch('/api/analytics/track', {
  method: 'POST',
  body: JSON.stringify({
    activity: 'page_view',
    details: { page: '/products' }
  })
})
```

## 🎯 Next Steps

1. **Set up environment variables**
2. **Choose a database provider**
3. **Configure OAuth providers**
4. **Run database migrations**
5. **Test authentication flow**
6. **Deploy to production**

## 🆘 Troubleshooting

### Common Issues
- **Database connection errors** - Check DATABASE_URL
- **OAuth callback errors** - Verify redirect URIs
- **Session not persisting** - Check NEXTAUTH_SECRET
- **Prisma errors** - Run `npx prisma generate`

### Support
- Check NextAuth.js documentation
- Review Prisma documentation
- Check provider-specific guides

---

**🎉 Your seamless authentication system is ready! Users can now sign up with one click and enjoy personalized experiences!**

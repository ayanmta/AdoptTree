# AdoptTree - Sustainable Farming

A modern, elegant farm website built with Next.js and Strapi CMS, featuring glass-morphism design and GraphQL integration.

## Features

- 🌱 **Elegant Glass-Morphism Design** - Modern, transparent UI elements with backdrop blur effects
- 🎨 **Farm Theme** - Beautiful nature-inspired color palette and typography
- 📱 **Responsive Design** - Optimized for all devices
- ⚡ **Next.js 14** - Latest features with App Router
- 🎭 **Framer Motion** - Smooth animations and transitions
- 🔍 **GraphQL Integration** - Ready for Strapi CMS data fetching
- 🎯 **TypeScript** - Full type safety

## Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **CMS**: Strapi (Headless CMS)
- **GraphQL**: Apollo Client
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ (Note: Strapi requires Node.js 18-22)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd AdoptTree/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the frontend directory:
   ```env
   NEXT_PUBLIC_STRAPI_GRAPHQL_URL=http://localhost:1337/graphql
   NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Strapi CMS Setup

### Option 1: Use Node Version Manager (Recommended)

1. **Install nvm** (if not already installed)
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   ```

2. **Switch to Node.js 18**
   ```bash
   nvm install 18
   nvm use 18
   ```

3. **Create Strapi project**
   ```bash
   cd ..
   npx create-strapi-app@latest backend --quickstart
   ```

### Option 2: Docker (Alternative)

If you prefer using Docker for Strapi:

```bash
docker run -p 1337:1337 strapi/strapi
```

## Project Structure

```
frontend/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx      # Root layout with providers
│   │   ├── page.tsx        # Home page
│   │   └── globals.css     # Global styles
│   ├── components/         # React components
│   │   ├── Navigation.tsx  # Glass-morphism navigation
│   │   ├── Hero.tsx        # Animated hero section
│   │   ├── ProductCard.tsx # Product display cards
│   │   └── ProductsSection.tsx # Products grid
│   └── lib/
│       └── apollo-client.ts # GraphQL client setup
├── public/                 # Static assets
└── tailwind.config.ts     # Tailwind configuration
```

## Design System

### Colors
- **Primary**: Green gradients (#11998e to #38ef7d)
- **Secondary**: Purple gradients (#667eea to #764ba2)
- **Accent**: Sunset gradients (#ff9a9e to #fecfef)

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Glass Effects
- Backdrop blur with transparency
- Subtle borders and shadows
- Hover animations

## GraphQL Integration

The project is set up to fetch data from Strapi CMS using GraphQL. Currently using mock data, but ready for real CMS integration.

### Example Query Structure
```graphql
query GetProducts {
  products {
    data {
      id
      attributes {
        title
        description
        price
        rating
        category
        image {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
}
```

## Customization

### Adding New Components
1. Create component in `src/components/`
2. Use the glass-morphism classes: `.glass`, `.glass-card`
3. Add animations with Framer Motion
4. Follow the farm theme color palette

### Styling
- Use Tailwind CSS classes
- Leverage custom CSS variables for colors
- Apply glass effects with `.glass` utility class

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please open an issue in the repository.

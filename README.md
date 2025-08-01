# AdoptTree

A modern, elegant farm website built with Next.js and Strapi CMS, featuring glass-morphism design and GraphQL integration.

## 🌱 About

AdoptTree is a sustainable farming platform that showcases beautiful farm products with a modern, glass-morphism design. The project demonstrates best practices in modern web development with Next.js, TypeScript, and GraphQL.

## 🚀 Features

- **Elegant Glass-Morphism Design** - Modern, transparent UI elements with backdrop blur effects
- **Farm Theme** - Beautiful nature-inspired color palette and typography
- **Responsive Design** - Optimized for all devices
- **Next.js 15** - Latest features with App Router
- **Framer Motion** - Smooth animations and transitions
- **GraphQL Integration** - Ready for Strapi CMS data fetching
- **TypeScript** - Full type safety

## 📁 Project Structure

```
AdoptTree/
├── frontend/           # Next.js frontend application
│   ├── src/
│   │   ├── app/       # Next.js App Router
│   │   ├── components/ # React components
│   │   └── lib/       # Utilities and configurations
│   ├── public/        # Static assets
│   └── package.json   # Frontend dependencies
└── README.md          # This file
```

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, TypeScript, Tailwind CSS
- **CMS**: Strapi (Headless CMS)
- **GraphQL**: Apollo Client
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ (Note: Strapi requires Node.js 18-22)
- npm or yarn

### Frontend Setup

1. **Navigate to the frontend directory**
   ```bash
   cd frontend
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

## 📖 Documentation

For detailed documentation, see the [frontend README](./frontend/README.md).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions, please open an issue in the repository. 
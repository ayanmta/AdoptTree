# Baghari Farm Website - Codebase Structure Guide

## 📁 Project Structure

```
AdoptTree/
├── app/
│   ├── components/
│   │   ├── ui/                    # Reusable UI components
│   │   ├── sections/              # Page sections
│   │   │   ├── Hero.tsx          # Hero section component
│   │   │   ├── Ticker.tsx        # Image ticker component
│   │   │   ├── About.tsx         # About section component
│   │   │   ├── Fruits.tsx        # Fruits section component
│   │   │   ├── AdoptTree.tsx     # Adopt tree section component
│   │   │   ├── Seasons.tsx       # Seasons section component
│   │   │   └── Visit.tsx         # Visit section component
│   │   ├── layout/               # Layout components
│   │   │   └── Footer.tsx        # Footer component
│   │   └── Navigation.tsx        # Navigation component
│   ├── lib/
│   │   ├── constants/
│   │   │   └── content.ts        # All hardcoded content (CMS-ready)
│   │   └── utils/
│   │       └── index.ts          # Utility functions
│   ├── styles/
│   │   ├── base.css              # Base styles and design tokens
│   │   └── components/           # Component-specific styles
│   │       ├── navigation.css
│   │       ├── hero.css
│   │       ├── ticker.css
│   │       ├── about.css
│   │       ├── fruits.css
│   │       ├── seasons.css
│   │       ├── visit.css
│   │       └── footer.css
│   ├── adopt/                    # Adopt page
│   │   └── page.tsx
│   ├── globals.css               # Global styles and imports
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Current main page (1904 lines)
│   ├── page-new.tsx              # Previous modular page structure
│   └── page-modular.tsx          # New fully modular page structure
├── public/
│   └── uploads/                  # Media files
│       ├── main-logo.svg
│       ├── hero-video.mp4
│       └── [other images]
└── [other config files]
```

## 🎯 Key Improvements

### 1. **Modular Component Architecture**
- **Separated concerns**: Each section is now a standalone component
- **Reusable components**: Ticker, Hero, etc. can be used across pages
- **Easy maintenance**: Changes to one component don't affect others
- **Better testing**: Components can be tested in isolation

### 2. **CMS-Ready Content Management**
- **Centralized content**: All text, images, and data in `content.ts`
- **Strapi integration ready**: Easy to replace with API calls
- **Type-safe content**: TypeScript interfaces for all content
- **Content separation**: No hardcoded strings in components

### 3. **Modular CSS Architecture**
- **Design tokens**: CSS custom properties for consistent theming
- **Component-specific styles**: Each component has its own CSS file
- **BEM methodology**: Consistent naming conventions
- **Responsive design**: Mobile-first approach with breakpoints

### 4. **Utility Functions**
- **Common operations**: Formatting, scrolling, icon mapping
- **Performance helpers**: Debounce, throttle functions
- **Type safety**: TypeScript utilities for better development

## 🚀 Next.js Best Practices

### 1. **File Organization**
```
app/
├── components/          # Reusable components
├── lib/                # Utilities and constants
├── styles/             # CSS files
└── [pages]/            # Route pages
```

### 2. **Component Structure**
- **Client components**: Marked with `'use client'`
- **Server components**: Default for static content
- **Proper imports**: Using `@/` alias for clean imports

### 3. **Performance Optimizations**
- **Image optimization**: Using Next.js Image component
- **Code splitting**: Automatic with Next.js
- **Lazy loading**: Components load when needed

## 📝 Content Management

### Current Structure (Hardcoded)
```typescript
// app/lib/constants/content.ts
export const HERO_SECTION = {
  title: "Baghari",
  subtitle: "Farm",
  description: "Premium organic fruits...",
  // ... more content
}
```

### Future Strapi Integration
```typescript
// Example: Replace with API calls
export async function getHeroContent() {
  const response = await fetch(`${STRAPI_URL}/api/hero-section`)
  return response.json()
}
```

## 🎨 CSS Architecture

### 1. **Design Tokens**
```css
:root {
  --color-sage: #9CAF88;
  --color-coral: #FF6B6B;
  --spacing-md: 1rem;
  --radius-lg: 1rem;
  /* ... more tokens */
}
```

### 2. **Component Styles**
```css
/* app/styles/components/hero.css */
.hero {
  position: relative;
  min-height: 100vh;
  /* ... styles */
}

.hero__title {
  font-size: clamp(3rem, 8vw, 6rem);
  /* ... styles */
}
```

### 3. **BEM Methodology**
- **Block**: `.hero`
- **Element**: `.hero__title`
- **Modifier**: `.hero__button--primary`

## 🔧 Development Workflow

### 1. **Adding New Content**
1. Update `app/lib/constants/content.ts`
2. Add TypeScript interfaces if needed
3. Use in components

### 2. **Creating New Components**
1. Create component in `app/components/sections/`
2. Add CSS file in `app/styles/components/`
3. Import in `app/globals.css`
4. Use in pages

### 3. **Styling Components**
1. Use design tokens from `base.css`
2. Follow BEM naming convention
3. Include responsive design
4. Test on mobile and desktop

## 📱 Responsive Design

### Breakpoints
- **Mobile**: `< 768px`
- **Tablet**: `768px - 1024px`
- **Desktop**: `> 1024px`

### Mobile-First Approach
```css
/* Base styles (mobile) */
.hero__title {
  font-size: 2.5rem;
}

/* Tablet and up */
@media (min-width: 768px) {
  .hero__title {
    font-size: 4rem;
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .hero__title {
    font-size: 6rem;
  }
}
```

## 🔄 Migration Steps

### 1. **Immediate Actions**
- [x] Create new folder structure
- [x] Extract content to constants
- [x] Create modular components
- [x] Set up CSS architecture
- [x] Break down large page.tsx into individual section components
- [x] Create modular CSS for each component

### 2. **Next Steps**
- [ ] Replace `page.tsx` with `page-modular.tsx`
- [ ] Test all functionality
- [ ] Optimize performance
- [ ] Add error boundaries

### 3. **Future Enhancements**
- [ ] Integrate with Strapi CMS
- [ ] Add content management interface
- [ ] Implement dynamic routing
- [ ] Add analytics and SEO

## 🧪 Testing

### Component Testing
```typescript
// Example test structure
describe('Hero Component', () => {
  it('renders hero content correctly', () => {
    // Test implementation
  })
  
  it('handles video loading', () => {
    // Test video functionality
  })
})
```

### Content Testing
```typescript
// Test content structure
describe('Content Constants', () => {
  it('has required hero fields', () => {
    expect(HERO_SECTION).toHaveProperty('title')
    expect(HERO_SECTION).toHaveProperty('description')
  })
})
```

## 🚀 Deployment

### Build Process
1. **Development**: `npm run dev`
2. **Build**: `npm run build`
3. **Production**: `npm start`

### Environment Variables
```env
# .env.local
NEXT_PUBLIC_STRAPI_URL=your-strapi-url
NEXT_PUBLIC_SITE_URL=your-site-url
```

## 📚 Additional Resources

- **Next.js Documentation**: https://nextjs.org/docs
- **Framer Motion**: https://www.framer.com/motion/
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Strapi Documentation**: https://docs.strapi.io/

## 🤝 Contributing

1. Follow the established folder structure
2. Use TypeScript for all new code
3. Follow BEM CSS methodology
4. Test on mobile and desktop
5. Update content constants for new features

---

**Note**: This structure maintains all existing functionality while providing a solid foundation for future CMS integration and scalability.

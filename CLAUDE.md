# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Lichtenfeld cheese farm website redesign project - a Next.js application for a Ukrainian artisanal cheese maker. The project involves redesigning the existing site (https://lichtenfeld.com.ua) while preserving brand identity and authored content from master cheesemaker Олександр Доброжанський.

## Development Commands

```bash
# Development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Tech Stack & Architecture

- **Framework**: Next.js 15.4.6 with App Router
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS v4 with inline theme configuration
- **Fonts**: Geist Sans and Geist Mono from Google Fonts
- **Development**: Uses Turbopack for faster development builds

## Key Project Requirements (from PRD.md)

### Brand & Design
- Preserve original brand colors: white/black + signature green from logo
- Extract exact HEX values from logo and images for Tailwind theme
- Maintain artisanal/farmstead aesthetic
- Support responsive design from 320px

### Product Categories
- **Cheese Networks**: "Му" (9 cow cheeses), "Мє" (6 goat cheeses)  
- **Cow Cheeses**: Рамсес, Монблан, Чеддер, Ліхтенфельд, Ярослав, Каберне
- **Blue Cheeses**: Альбіон, Камбоцола, Вайнекаас
- **Goat Cheeses**: Гарроча, Бебі Фумадо, П'яна Горроча, etc.
- **Beverages**: Limited artisanal spirits (Абсент, Бурбон, Джин, etc.)

### Content Strategy
- Preserve all original author texts from current website
- Use Ukrainian language primarily (UA first, EN/RU later via next-intl)
- Maintain "живою" (lively) master's voice with humor and cheese legends
- Structure content: short TL;DR first, then details

## Site Structure

```
app/
  layout.tsx           # Root layout with fonts
  page.tsx             # Homepage  
  catalog/             # Product catalog
    page.tsx
    [slug]/page.tsx    # Category pages
  product/[slug]/      # Individual product pages
  about/               # About the farm
  reviews/             # Customer reviews
  press/               # Media mentions
  contacts/            # Contact information
  api/order/           # Order processing endpoint
```

## Important Configuration

- **Path alias**: `@/*` maps to project root
- **Tailwind**: Uses v4 with inline theme in globals.css
- **TypeScript**: Strict mode enabled with modern ES2017 target
- **Images**: Uses Next.js Image optimization

## Content Requirements

- Implement schema.org markup for SEO (Product, Review, Organization, etc.)
- Support filtering by milk type, category, availability, price
- Include product badges: "Новинка", "Обмежена кількість", etc.
- Maintain product pairing suggestions
- Two phone numbers for orders with prominent CTAs

## Development Notes

- This is currently a fresh Next.js installation that needs full implementation
- All original content and images must be migrated from https://lichtenfeld.com.ua
- Focus on performance: target Lighthouse scores ≥95/95/95/100
- Implement quick order functionality without full e-commerce complexity
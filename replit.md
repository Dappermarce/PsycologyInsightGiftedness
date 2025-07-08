# Psychology and Giftedness Research Platform

## Overview

This is the most comprehensive web application focused specifically on psychology and giftedness (superdotación) research available online. The platform serves as an educational and informational resource based on scientific evidence for professionals, families, and individuals interested in understanding intellectual giftedness from psychological, psychiatric, and neurological perspectives. The application combines a React frontend with an Express backend, utilizing modern web technologies to deliver the most unique, complete, and interactive user experience on giftedness psychology worldwide.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom medical-grade color palette
- **UI Components**: Radix UI primitives with shadcn/ui components
- **Routing**: Wouter for client-side routing
- **State Management**: React Query (TanStack Query) for server state management
- **Animations**: CSS animations with Intersection Observer for scroll-based triggers

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Management**: connect-pg-simple for PostgreSQL-backed sessions
- **Development**: Vite for development server and build process

### Build System
- **Build Tool**: Vite for frontend bundling
- **Server Build**: esbuild for backend bundling
- **TypeScript**: Strict type checking across the entire stack
- **Module System**: ES modules throughout

## Key Components

### Frontend Components
1. **Navigation System**: Sticky navigation with smooth scrolling to sections
2. **Hero Section**: Professional landing with gradient backgrounds and call-to-action buttons
3. **Educational Sections**: 
   - Giftedness characteristics and identification with real prevalence data
   - Cognitive profiles with developmental asynchrony analysis
   - Neurological evidence including P-FIT theory and brain research
   - Global statistics from multiple countries and cultural factors
   - Intelligence theories (Multiple Intelligences, Triarchic Theory)
   - Psychiatry and dual diagnosis with twice-exceptional analysis
   - Longitudinal outcomes from major studies (Terman, SMPY, Munich)
4. **Interactive Elements**:
   - Advanced interactive assessment with real psychological instruments
   - Mini cognitive evaluation with immediate feedback
   - Statistics counter animations showing real data (160M worldwide gifted)
   - Intersection observer-based animations
5. **Resource Library**: Scientific articles, specialized books, and research centers
6. **Footer**: Educational information and professional attribution

### Backend Components
1. **API Routes**: RESTful endpoints for quiz responses and psychology resources
2. **Database Schema**: Tables for users, quiz responses, and psychology resources
3. **Storage Layer**: Abstracted storage interface with in-memory implementation
4. **Middleware**: Request logging and error handling

## Data Flow

### Quiz System
1. User completes interactive quiz on frontend
2. Responses are validated using Zod schemas
3. Data is sent to `/api/quiz-responses` endpoint
4. Results are stored in PostgreSQL database
5. Interpretation and scoring are returned to user

### Resource Management
1. Psychology resources are pre-seeded in the database
2. Frontend fetches resources via `/api/psychology-resources`
3. Resources can be filtered by category (giftedness, psychology, psychiatry)
4. Data is cached using React Query for optimal performance

### User Interactions
1. Smooth scrolling navigation between sections
2. Intersection Observer triggers animations as user scrolls
3. Counter animations for statistics display
4. Form submissions with validation and error handling

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React with TypeScript support
- **Styling**: Tailwind CSS with PostCSS processing
- **Components**: Extensive Radix UI component library
- **State Management**: TanStack React Query
- **Utilities**: clsx, class-variance-authority for styling
- **Date Handling**: date-fns for date operations
- **Animations**: Embla Carousel for carousel components

### Backend Dependencies
- **Web Framework**: Express.js with TypeScript
- **Database**: Drizzle ORM with PostgreSQL driver
- **Validation**: Zod for runtime type checking
- **Session**: connect-pg-simple for session management
- **Development**: tsx for TypeScript execution

### Development Dependencies
- **Build Tools**: Vite, esbuild
- **Replit Integration**: Vite plugins for Replit environment
- **Type Checking**: TypeScript with strict configuration

## Deployment Strategy

### Development Environment
- **Local Development**: `npm run dev` starts both frontend and backend
- **Hot Reload**: Vite provides hot module replacement for frontend
- **TypeScript**: Real-time type checking with strict mode enabled
- **Database**: Drizzle migrations with `npm run db:push`

### Production Build
- **Frontend**: Vite builds optimized React bundle to `dist/public`
- **Backend**: esbuild bundles Express server to `dist/index.js`
- **Static Assets**: Served from built frontend assets
- **Database**: PostgreSQL connection via environment variables

### Environment Configuration
- **Database**: `DATABASE_URL` environment variable required
- **Node Environment**: `NODE_ENV` controls development vs production modes
- **Replit Integration**: Special handling for Replit environment

### Medical Disclaimer
The application includes comprehensive medical and legal disclaimers, emphasizing that:
- Content is for educational purposes only
- Does not constitute medical or psychological advice
- Professional evaluation is required for diagnosis
- Site assumes no responsibility for decisions based on content

## Changelog

- July 07, 2025. Initial setup
- July 07, 2025. Major Update: Enhanced focus on giftedness with comprehensive scientific data
  - Removed contact information and research center references
  - Added neurological evidence section with P-FIT theory and brain research
  - Integrated global statistics from multiple countries and cultural factors
  - Added longitudinal outcomes tracking (Terman Study, SMPY, Munich Study)
  - Created cognitive profiles component with developmental asynchrony analysis
  - Developed advanced interactive assessment with real psychological instruments
  - Updated all content to focus specifically on superdotación rather than general psychology
  - Enhanced with 50,000+ published studies statistics and real prevalence data
  - Added comprehensive underidentification analysis by demographic groups

## User Preferences

Preferred communication style: Simple, everyday language.
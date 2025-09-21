# AI SEO Blog Generation Platform

A comprehensive platform for AI-powered SEO blog generation with real keyword research, content creation, and optimization tools.

## Required API Keys and Services

### 1. Google Ads API (Keyword Research)
- **Purpose**: Real keyword search volume, competition data, and CPC information
- **Setup**: 
  1. Create Google Ads account
  2. Apply for Google Ads API access
  3. Get Client ID, Client Secret, Refresh Token, and Developer Token
- **Environment Variables**:
  \`\`\`
  GOOGLE_ADS_CLIENT_ID=your_client_id
  GOOGLE_ADS_CLIENT_SECRET=your_client_secret
  GOOGLE_ADS_REFRESH_TOKEN=your_refresh_token
  GOOGLE_ADS_DEVELOPER_TOKEN=your_developer_token
  \`\`\`

### 2. OpenAI API (AI Content Generation)
- **Purpose**: Generate high-quality blog content using GPT-4
- **Setup**: Get API key from OpenAI platform
- **Environment Variable**:
  \`\`\`
  OPENAI_API_KEY=your_openai_api_key
  \`\`\`

### 3. SerpAPI (SERP Analysis & Trends)
- **Purpose**: Google search results analysis and trend data
- **Setup**: Sign up at serpapi.com
- **Environment Variable**:
  \`\`\`
  SERPAPI_KEY=your_serpapi_key
  \`\`\`

### 4. Ahrefs API (Keyword Difficulty)
- **Purpose**: Keyword difficulty scores and backlink analysis
- **Setup**: Ahrefs subscription with API access
- **Environment Variable**:
  \`\`\`
  AHREFS_API_TOKEN=your_ahrefs_token
  \`\`\`

### 5. SEMrush API (Competitor Analysis)
- **Purpose**: Competitor keyword analysis and market insights
- **Setup**: SEMrush subscription with API access
- **Environment Variable**:
  \`\`\`
  SEMRUSH_API_KEY=your_semrush_key
  \`\`\`

### 6. Database (Content Storage)
- **Purpose**: Store generated content, analytics, and user data
- **Options**: PostgreSQL, MySQL, or MongoDB
- **Environment Variable**:
  \`\`\`
  DATABASE_URL=your_database_connection_string
  \`\`\`

## Features

### Real Keyword Research
- Live search volume data from Google Ads API
- Competition analysis and keyword difficulty scores
- Trend analysis using Google Trends data
- CPC and commercial intent metrics

### AI Content Generation
- GPT-4 powered content creation
- SEO-optimized structure and formatting
- Natural keyword integration
- Multiple content types (blog, article, guide)

### SEO Analysis
- Comprehensive on-page SEO scoring
- Readability analysis using Flesch Reading Ease
- Competitor SERP analysis
- LSI keyword suggestions

### Publishing & Analytics
- Content scheduling and management
- Performance tracking and analytics
- SEO score monitoring
- Keyword ranking updates

## Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env.local`
4. Configure all required API keys
5. Run the development server: `npm run dev`

## API Costs (Estimated Monthly)

- **Google Ads API**: Free (with Google Ads account)
- **OpenAI API**: $20-100 (depending on usage)
- **SerpAPI**: $50-200 (based on search volume)
- **Ahrefs API**: $99+ (requires Ahrefs subscription)
- **SEMrush API**: $119+ (requires SEMrush subscription)

**Total estimated cost**: $288-519/month for professional use

## Alternative Free/Cheaper Options

- **Keyword Research**: Use Google Keyword Planner directly (free)
- **Content Generation**: Use Groq API (faster, cheaper than OpenAI)
- **SEO Analysis**: Build custom analysis using free tools
- **Trends**: Use Google Trends API (free)

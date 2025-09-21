
# 🚀 AI Blog Agent

**AI Blog Agent** is a Next.js + TypeScript application that helps generate **SEO-optimized blog content** using AI.  
It includes **Keyword Research, Blog Draft Preview, Grammar Suggestions, and SEO Optimization** features.  

---

## 📦 Tech Stack
- [Next.js 14](https://nextjs.org/) (App Router)
- TypeScript
- Tailwind CSS
- React Markdown
- Vercel (Deployment)
- LanguageTool API (Grammar Checking)

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/Alauddin-24434/ai-blog-agent.git
cd ai-blog-agent
````

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env.local`

In the project root, create a `.env.local` file and add the following variables:

```env
# OpenRouter API Key (for AI content generation)
OPENROUTER_API_KEY=your_openrouter_api_key_here
# MongoDb Uri
MONGODB_URI=your_mongdb_uri



```

👉 Note: LanguageTool API is free and does not require an API key.
It’s used at `https://api.languagetool.org/v2/check`.

---

## 🚀 Running the Project

### Development

```bash
pnpm run dev
```

Runs the app locally:
👉 [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
pnpm run build
pnpm start
```

---

## 🌐 Deployment (Vercel)

1. Push the repo to GitHub/GitLab/Bitbucket
2. Go to [Vercel](https://vercel.com/) → "New Project" → Select your repo
3. Add environment variables from `.env.local` in Vercel settings
4. Deploy 🚀

---

## 🛠 Features

* ✅ AI-powered blog content generation
* ✅ SEO score analysis
* ✅ Keyword density checker
* ✅ Google Trends integration
* ✅ Grammar suggestions (LanguageTool API)
* ✅ Ready-to-deploy with Vercel

---

## 📌 Roadmap / Improvements

* [ ] User authentication (optional)
* [ ] Advanced SEO recommendations
* [ ] Multi-language support

```

---

This way your manager can clearly see:  
1. How to run the project  
2. What environment variables are required  
3. How deployment works  

👉 Do you also want me to prepare a **sample `.env` file with dummy values** so you can share it directly?
```

# API Key Setup Guide

## API Key Add :

### Step 1: API Key

1. https://www.themoviedb.org/
2. Sign up (Free account)
3. Settings → API → Create API Key
4. API Key copy

### Step 2: .env File এ API Key

1. `.env` file (project root)
2. line find :

```
NUXT_PUBLIC_MOVIE_API_KEY=
```

3. Equal sign API key paste :
   ```
   NUXT_PUBLIC_MOVIE_API_KEY=your_actual_api_key_here
   ```
4. File save

### Step 3: Dev Server Restart

**.env file change dev server restart !**

1. Terminal এ `Ctrl + C` (server stop )
2. `yarn dev` run

### Step 4: Verify

Browser page refresh Yellow warning message

---

**Note:**

- API Key Git commit
- `.env` file already `.gitignore` safe
- warning browser console check (F12)

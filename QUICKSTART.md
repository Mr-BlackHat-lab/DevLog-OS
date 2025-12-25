# ⚡ DevLog OS - Quick Start Guide

> **Just want to get started? You're in the right place!** More details? See [STRUCTURE.md](STRUCTURE.md) for the complete guide.

---

## 🎯 5-Minute Setup

### Step 1: Copy Your Environment File

```bash
# Copy the template and fill in your secrets
cp .env.example .env.local
```

### Step 2: Fill in `.env.local`

```bash
# Get these from GitHub OAuth app settings
AUTH_GITHUB_ID=your_github_client_id
AUTH_GITHUB_SECRET=your_github_client_secret

# Create a random secret for NextAuth
AUTH_SECRET=generate-a-random-string-here

# Your MongoDB connection
MONGODB_URI=mongodb://username:password@host/dbname

# App URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### Step 3: Install & Run

```bash
npm install
npm run dev
```

✨ **Done!** Visit `http://localhost:3000`

---

## 🚀 What You Can Do Right Now

### ✅ Sign In With GitHub

1. Go to `/login`
2. Click "Sign in with GitHub"
3. Authorize the app
4. You're in! 🎉

### ✅ View Your Dashboard

- `http://localhost:3000/dashboard`
- See your profile
- User greeting with your name

### ✅ Explore Protected Routes

- `/logs` - Your dev logs (protected)
- `/dashboard` - Your stats (protected)
- Try going there without logging in - redirects to `/login`!

### ✅ Try Theme Switching

- Click theme switcher in navbar
- See 3 themes: Mocha (dark), Latte (light), Frappé (gray)
- Automatically saves your choice

### ✅ Sign Out

- Click your avatar in top-right
- Click "Sign out"
- Redirected to home page

---

## 🛠️ Project Overview

**What's working:**

- ✅ GitHub login
- ✅ Protected routes
- ✅ User authentication
- ✅ 3 beautiful themes
- ✅ Dashboard
- ✅ Responsive design

**What's next:**

- 📋 Dev logs CRUD
- 📊 Dashboard statistics
- 🏷️ Log categorization
- 📈 Productivity charts
- 🔄 Data export

---

## 📁 Where Everything Lives

| What             | Where                         |
| ---------------- | ----------------------------- |
| **Login/Auth**   | `src/components/auth/`        |
| **Auth logic**   | `src/actions/auth.actions.ts` |
| **Auth helpers** | `src/lib/auth.utils.ts`       |
| **Auth config**  | `src/auth.ts`                 |
| **Routes**       | `src/app/*/page.tsx`          |
| **Types**        | `src/types/index.ts`          |
| **Constants**    | `src/config/constants.ts`     |
| **Styles**       | `src/styles/*.css`            |

---

## 💻 Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run production build locally
npm run start

# Run linter
npm run lint
```

---

## 🔐 Authentication Features

### How It Works

```
Click Sign In → GitHub OAuth → Account Created → Session Established
```

### Protected Pages

- `/logs` - View your logs
- `/dashboard` - Your stats
- Others? Add them in `src/proxy.ts`

### Sign Out

- Click your avatar in navbar
- Click "Sign out"
- Session destroyed, redirected home

---

## 🎨 Theming System

### 3 Built-in Themes

| Theme      | When Used          |
| ---------- | ------------------ |
| **Mocha**  | Default, dark mode |
| **Latte**  | Light mode         |
| **Frappé** | Cool gray mode     |

### Automatic Switching

- Changes based on system preference
- Or click theme switcher in navbar
- Your choice is saved!

### Using Colors in Code

```css
/* Just use these variables */
color: var(--text);
background: var(--surface0);
border: 1px solid var(--surface1);
button {
  background: var(--primary);
}
```

---

## 📦 What's Included

### Auth Components

```typescript
import { SignInButton, SignOutButton, UserMenu } from "@/components/auth";
```

### UI Components

```typescript
import { LoadingSpinner, ErrorMessage, EmptyState } from "@/components/ui";
```

### Utilities

```typescript
import { getCurrentUser, isAuthenticated } from "@/lib/auth.utils";

const user = await getCurrentUser();
const isAuth = await isAuthenticated();
```

### Constants

```typescript
import { ROUTES, MOOD_OPTIONS, ERROR_MESSAGES } from "@/config/constants";
```

---

## 🎓 Learning Path

**New to the project?** Follow this:

1. **Understanding Auth** (10 mins)

   - Try signing in with GitHub
   - Check navbar user menu
   - Try signing out
   - Read STRUCTURE.md auth section

2. **Understanding Structure** (15 mins)

   - Browse `src/components/`
   - Look at `src/actions/auth.actions.ts`
   - Check `src/types/index.ts`

3. **Building a Feature** (30 mins)

   - Create new page in `src/app/`
   - Add to protected routes in `src/proxy.ts`
   - Use `getCurrentUser()` to check auth
   - Style using theme variables

4. **Deep Dive** (Read STRUCTURE.md)
   - Full architecture explanation
   - Detailed code examples
   - Best practices
   - AI development history

---

## 🐛 Troubleshooting

### "Login doesn't work"

```
Check:
1. .env.local has AUTH_GITHUB_ID and AUTH_GITHUB_SECRET
2. GitHub OAuth app is configured
3. Restart dev server (npm run dev)
```

### "MongoDB connection fails"

```
Check:
1. MongoDB is running
2. MONGODB_URI is correct in .env.local
3. Internet connection (if cloud MongoDB)
```

### "Styles look weird"

```
Check:
1. Clear browser cache
2. Verify theme is switching
3. CSS variables in globals.css
```

### "Types are broken"

```
Check:
1. npm run build (shows all errors)
2. Paths in tsconfig.json
3. Restart your editor
```

---

## 📚 Key Files Reference

| File                          | Purpose               |
| ----------------------------- | --------------------- |
| `.env.local`                  | Your secrets & config |
| `src/auth.ts`                 | NextAuth setup        |
| `src/proxy.ts`                | Route protection      |
| `src/actions/auth.actions.ts` | Sign in/out logic     |
| `src/lib/auth.utils.ts`       | Helper functions      |
| `src/types/index.ts`          | Type definitions      |
| `src/config/constants.ts`     | App constants         |

---

## ✨ Next Steps

1. **Read STRUCTURE.md** for full details
2. **Create a new feature** (logs page, stats, etc)
3. **Customize the look** (fonts, colors, layout)
4. **Add more OAuth providers** (Google, Discord, etc)
5. **Deploy to production** (Vercel, etc)

---

## 🎉 You're Ready!

Everything is set up and working. Start building awesome features!

**Questions?** Check STRUCTURE.md for detailed explanations.

---

**Happy coding! 🚀**

_Version: 2.0.0 | Updated: December 25, 2025_

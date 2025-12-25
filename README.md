# 🚀 DevLog OS

> **Your Personal Development Journal**  
> Track your coding journey, document breakthroughs, and celebrate your progress.

[![Next.js](https://img.shields.io/badge/Next.js-16.1.0-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org)
[![NextAuth](https://img.shields.io/badge/NextAuth-v5-green)](https://authjs.dev)
[![MongoDB](https://img.shields.io/badge/MongoDB-Latest-green?logo=mongodb)](https://mongodb.com)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

---

## ✨ What is DevLog OS?

DevLog OS is your **personal development companion** - a journal for developers. Instead of losing important insights in scattered notes, DevLog OS helps you:

- 📝 **Document** your daily coding progress
- 🎯 **Reflect** on what you learned and achieved
- 🏆 **Celebrate** breakthroughs and growth moments
- 📊 **Track** your productivity and coding habits
- 🎨 **Organize** logs by projects and mood
- 📈 **Visualize** your development journey

### Perfect For

- **Solo Developers** tracking personal growth
- **Teams** documenting team learning
- **Code Bootcamp Students** logging learning journey
- **Freelancers** managing project documentation
- **Self-Taught Developers** tracking progress

---

## 🎯 Features

### ✅ Currently Working

- 🔐 **GitHub OAuth Authentication** - Sign in with one click
- 👤 **User Management** - Profiles with avatars
- 🎨 **3 Themes** (Mocha, Latte, Frappé) - Catppuccin theming system
- 🔒 **Protected Routes** - Dashboard & logs only for authenticated users
- 📱 **Responsive Design** - Works on mobile, tablet, desktop
- ⚡ **Lightning Fast** - Next.js 16 with Server Components
- 🔤 **Type-Safe** - 100% TypeScript coverage
- 📚 **Well-Documented** - Comprehensive guides included

### 🚧 Coming Soon

- 📝 **Dev Logs CRUD** - Create, edit, delete your logs
- 📊 **Dashboard Analytics** - Visualize your progress
- 🎯 **Mood Tracking** - Track your coding mood/productivity
- 🔥 **Streak System** - How many days in a row?
- 🏷️ **Categories/Tags** - Organize by project or topic
- 📤 **Export** - Download your logs as JSON/PDF
- 🔍 **Advanced Search** - Find logs by date, mood, content
- 📲 **Mobile App** - Native iOS/Android apps

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- MongoDB (local or cloud)
- GitHub OAuth app credentials

### 1️⃣ Setup Environment

```bash
# Copy environment template
cp .env.example .env.local

# Edit .env.local with your credentials:
# AUTH_GITHUB_ID=your_github_client_id
# AUTH_GITHUB_SECRET=your_github_client_secret
# AUTH_SECRET=generate-random-secret
# MONGODB_URI=your_mongodb_connection_string
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run Development Server

```bash
npm run dev
```

### 4️⃣ Open in Browser

Visit [http://localhost:3000](http://localhost:3000)

### 5️⃣ Sign In!

Click "Sign in with GitHub" and start logging! 🎉

---

## 📚 Documentation

We have comprehensive guides to help you:

| Guide                              | Purpose                            | Time    |
| ---------------------------------- | ---------------------------------- | ------- |
| **[QUICKSTART.md](docs/QUICKSTART.md)** | Get started in 5 minutes           | 5 mins  |
| **[STRUCTURE.md](docs/STRUCTURE.md)**   | Understand the architecture        | 20 mins |
| **[CHANGELOG.md](docs/CHANGELOG.md)**   | See what changed (with AI history) | 10 mins |

### Learning Path

1. Start with **QUICKSTART.md** - Get it running
2. Read **STRUCTURE.md** - Understand how it works
3. Check **CHANGELOG.md** - See development history
4. Build features using the patterns you learned!

---

## 🏗️ Architecture

### Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Backend**: Next.js API Routes, Server Actions
- **Database**: MongoDB
- **Authentication**: NextAuth v5 + GitHub OAuth
- **Styling**: CSS with Catppuccin theme system
- **Deployment Ready**: Vercel, Docker, etc.

### Folder Structure

```
src/
├── actions/           ← Server actions (login, logout)
├── app/               ← Pages and routes
├── components/        ← React components (organized by feature)
├── config/            ← Configuration files
├── lib/               ← Utility functions
├── models/            ← Database models
├── styles/            ← CSS files (modular)
├── types/             ← TypeScript definitions
├── auth.ts            ← NextAuth setup
└── proxy.ts           ← Route protection
```

See [STRUCTURE.md](docs/STRUCTURE.md) for detailed architecture explanation.

---

## 🔐 Authentication

### GitHub OAuth Flow

```
User clicks "Sign In"
    ↓
Redirected to GitHub
    ↓
User approves access
    ↓
GitHub redirects back with auth code
    ↓
NextAuth exchanges code for profile
    ↓
User saved to MongoDB (first time only)
    ↓
Session created & stored
    ↓
Redirected to dashboard ✨
```

### Protected Routes

- `/logs` - Your development logs
- `/dashboard` - Personal stats and overview
- Non-authenticated users → redirected to `/login`

---

## 🎨 Theming

### 4 Beautiful Themes

Built with Catppuccin color system:

| Theme            | Vibe           | Best For          |
| ---------------- | -------------- | ----------------- |
| **Mocha** 🌙     | Dark & cozy    | Night coding      |
| **Macchiato** 🌑 | Dark & smooth  | Extended sessions |
| **Frappé** 🌫️    | Dark & cool    | Calm focus        |
| **Latte** ☀️     | Light & bright | Daytime work      |

### Automatic Switching

- Respects your system preference
- Or manually switch in navbar
- Your choice is saved!

---

## 💻 Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Project Commands

```bash
# Install dependencies
npm install

# Add a new package
npm install package-name

# Update dependencies
npm update

# Check for security issues
npm audit
```

---

## 📖 API Documentation

### Available Endpoints

```
POST   /api/logs              Create a new log
GET    /api/logs              Get all logs (with filters)
GET    /api/logs/:id          Get specific log
PUT    /api/logs/:id          Update log
DELETE /api/logs/:id          Delete log

GET    /api/auth/session      Get current session
POST   /api/auth/signin       Sign in
POST   /api/auth/signout      Sign out
```

See STRUCTURE.md for detailed API examples.

---

## 🐛 Troubleshooting

### "Login doesn't work"

```
1. Check .env.local has AUTH_GITHUB_ID and AUTH_GITHUB_SECRET
2. Verify GitHub OAuth app is configured correctly
3. Restart dev server
```

### "MongoDB connection fails"

```
1. Check MongoDB is running (if local)
2. Verify MONGODB_URI is correct
3. Check internet (if using MongoDB Atlas)
```

### "Styles look wrong"

```
1. Clear browser cache
2. Check if theme is switching
3. Restart dev server
```

See [QUICKSTART.md](QUICKSTART.md#-troubleshooting) for more solutions.

---

## 🤝 Contributing

### Want to Contribute?

We'd love your help! Here's how:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Make** your changes
4. **Commit** with clear messages (`git commit -m 'Add amazing feature'`)
5. **Push** to your branch (`git push origin feature/amazing-feature`)
6. **Open** a Pull Request

### Development Guidelines

- Follow the existing code style
- Write TypeScript (no `any` types)
- Add comments for complex logic
- Test your changes
- Update documentation if needed

---

## 📝 Roadmap

### v2.1 (Next)

- [ ] Dev logs CRUD operations
- [ ] Markdown editor improvements
- [ ] Basic search functionality
- [ ] Log filtering by mood

### v2.2

- [ ] Dashboard analytics
- [ ] Streak tracking
- [ ] Categories/tags system
- [ ] Advanced search

### v2.3+

- [ ] Real-time collaboration
- [ ] Mobile app
- [ ] API documentation
- [ ] Premium features

---

## 🤖 AI-Assisted Development

### Professional Restructure

This project underwent a **complete professional restructuring** on December 25, 2025 with AI assistance using GitHub Copilot (Claude Haiku 4.5).

**What Changed**:

- ✅ NextAuth v4 → v5 upgrade
- ✅ Industry-standard folder structure
- ✅ 100% TypeScript coverage
- ✅ 3-theme Catppuccin system
- ✅ Server Actions pattern
- ✅ Comprehensive documentation

**See [CHANGELOG.md](docs/CHANGELOG.md)** for the complete rebase history with session-by-session breakdown!

### Lessons Learned

This project demonstrates:

- Professional Next.js patterns
- TypeScript best practices
- Authentication implementation
- Component organization
- Theme system design
- AI-assisted development benefits

---

## 📄 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Next.js** - Amazing React framework
- **NextAuth.js** - Secure authentication
- **MongoDB** - Flexible database
- **Catppuccin** - Beautiful color system
- **GitHub Copilot** - AI-assisted development
- **You** - For using DevLog OS! 💝

---

## 📞 Support

### Need Help?

1. Check [QUICKSTART.md](docs/QUICKSTART.md) for quick answers
2. Read [STRUCTURE.md](docs/STRUCTURE.md) for detailed guides
3. Review [CHANGELOG.md](docs/CHANGELOG.md) for development history
4. Open an issue on GitHub

### Have Ideas?

- 💡 Feature request? Open an issue
- 🐛 Found a bug? Report it
- 📚 Better docs? Contribute!
- 💬 General question? Discussions tab

---

## 🌟 Show Your Support

If you find DevLog OS helpful:

- ⭐ Star this repository
- 📢 Share with other developers
- 🤝 Contribute improvements
- 📝 Write about your experience

---

## 🚀 Let's Build Together!

DevLog OS is more than just a logging app - it's a journey of growth. Whether you're documenting daily victories, learning new technologies, or building the next big thing, DevLog OS is here to help you track it all.

**Ready to start?** Follow the [Quick Start](#-quick-start) above and begin your journey! 🎯

---

**Made with ❤️ using AI-assisted development**

_Version: 2.0.0 | Updated: December 25, 2025 | [Changelog](CHANGELOG.md)_

### 🧾 Project Description

A simple, fast image-sharing web app

- Users can upload an image
- App generates a unique, shareable URL
- The image is shown publicly via that link
- Monetization via ads
- Monorepo

### 🧱 Architecture Overview

- **Frontend**: Static Next.js pages (Next.js + Tailwind CSS)
- **Backend** (server-only): Handle uploads, metadata storage, signed URLs (Next.js API Routes)
- **Cloud Storage**: Stores uploaded images (Cloudinary)
- **Database**: Stores image metadata -- upload time, view count, expiration -- (Firestore)
- **Hosting**: Deployed on (Vercel), avoiding cold starts
- **Monetization**: Google AdSense

### ⚡ Features

- Upload image (e.g max 5MB)
- Server generates signed URL → image uploaded to storage
- Server stores metadata (ID, URL, timestamp)
- User gets unique link/url
- Visitor can view image on public page with banner ads

### 🪜 Milestones

---

##### 🚀 Milestone 1 – Project Setup

- [x] Initialize Next.js project with Tailwind CSS
- [x] Configure TypeScript for strong typing
- [x] Setup `.env.local` for secrets (Cloudinary, DB, etc.)
- [x] Configure Prettier and ESLint for code consistency

---

##### 🛠 Milestone 2 – Upload Flow (Backend First)

- [ ] Create API route: `/api/sign-url` to generate signed upload URLs
- [ ] Create API route: `/api/upload-image` to store image metadata
- [ ] Validate file uploads (max 5MB, allowed types: JPG, PNG, WebP)
- [ ] Implement IP-based rate limiting for uploads

---

##### 🎨 Milestone 3 – Frontend: Upload UI

- [ ] Build a file upload form with drag & drop support
- [ ] Show upload progress and success/failure states
- [ ] After upload, display shareable image URL
- [ ] Copy to clipboard link functionality

---

##### 📷 Milestone 4 – Public Image Page (`/image/[id]`)

- [ ] Setup dynamic route to display images (`/image/[id]`)
- [ ] Fetch image metadata from database using ID
- [ ] Render the image from the storage URL
- [ ] Track and increment view count per image

---

##### 💰 Milestone 5 – Monetization: AdSense Integration

- [ ] Apply for Google AdSense and await approval
- [ ] Add AdSense `<AdBanner />` component on image pages
- [ ] Include a privacy policy explaining ad tracking (GDPR compliance)
- [ ] Add cookie consent popup for European visitors

---

##### 🔐 Milestone 6 – Privacy & Expiry Features

- [ ] Add auto-delete for images after x days
- [ ] Allow password-protected image access
- [ ] Restrict Firestore database access rules
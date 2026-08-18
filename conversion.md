# Portfolio Conversion Plan

## Static HTML/CSS/JS -> Next.js + Tailwind CSS + Payload CMS + MongoDB

---

## 1. Current Project Analysis

### What Exists Today

| Aspect | Details |
|--------|---------|
| **Type** | Static single-page portfolio (no build system, no package.json) |
| **HTML** | `index.html` (1332 lines), `calender/index1.html` (standalone, disconnected) |
| **CSS** | `assets/css/style.css` (1523 lines), `calender/cal.css` |
| **JS** | `assets/js/main.js` (214 lines), `calender/cal.js` |
| **3rd Party Libs** | jQuery, Swiper, MixItUp, jPages, ScrollReveal, Boxicons (all local + CDN) |
| **Assets** | 30+ images in `contents/`, 1 PDF, 2 license files |
| **Backend** | None |
| **CMS** | None |

### Hardcoded Content Inventory (All Becomes CMS-Driven)

| Section | Data Count | Fields Per Item |
|---------|-----------|-----------------|
| Profile | 1 | name, title, greeting, bio, cvUrl, profileImage, aboutImage |
| Social Links | 8 | platform, url, icon, displayOrder |
| Stats | 3 | label, value, icon |
| Skills | 2 groups, 16 items | groupTitle, name, level, category |
| Timeline | 4 entries | company, period, role, description, url |
| Services | 3 cards | title, description, features[], ctaText, ctaUrl, modalTitle, modalDescription |
| Portfolio | 20 items | title, category, image, sourceUrl, sourceLabel, demoUrl |
| Testimonials | 5 cards | name, image, description |
| Contact Info | 4 cards | type, title, value, url, icon |
| Footer | 1 | logo, navLinks[], socialLinks[], copyright |
| Site Config | 1 | title, favicon, metaDescription |

### Known Issues to Fix During Conversion

1. `MixGallery.css` referenced but does not exist
2. `a3.jpg` referenced but missing from `contents/`
3. Wrong script paths (`./scrollreveal.min.js`, `./mixitup.min.js`)
4. Orphan `</header>` close tag (line 85)
5. Duplicate MixItUp loading (CDN + local)
6. Broken `#testimonial` footer link (section has no ID)
7. WhatsApp number mismatch (displayed vs linked)
8. 3 of 5 testimonials are placeholder "john doe" with lorem ipsum
9. Typos in service descriptions ("fpr", "websiters", "dveloping", "spped", "optimizatio")
10. `Picsart_24-01-22_04-02-24-779.png` is 9.8MB (needs optimization)
11. Twitter link points to bare `twitter.com/` with no profile

---

## 2. Target Architecture

```
portfolio/
├── payload/                    # Payload CMS config, collections, globals
│   ├── collections/
│   │   ├── Profile.ts
│   │   ├── SocialLinks.ts
│   │   ├── Skills.ts
│   │   ├── Timeline.ts
│   │   ├── Services.ts
│   │   ├── Portfolio.ts
│   │   ├── Testimonials.ts
│   │   ├── ContactInfo.ts
│   │   └── Media.ts
│   └── globals/
│       └── SiteSettings.ts
│
├── frontend/                   # Next.js frontend
│   ├── src/
│   │   ├── app/                # App Router pages & layouts
│   │   │   ├── layout.tsx      # Root layout (fonts, metadata)
│   │   │   ├── page.tsx        # Home page
│   │   │   ├── globals.css     # Tailwind + custom CSS
│   │   │   ├── admin/          # Payload admin panel
│   │   │   └── api/            # Payload API routes
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Navbar.tsx
│   │   │   │   ├── Footer.tsx
│   │   │   │   └── ThemeToggle.tsx
│   │   │   ├── sections/
│   │   │   │   ├── Hero.tsx
│   │   │   │   ├── About.tsx
│   │   │   │   ├── Skills.tsx
│   │   │   │   ├── Services.tsx
│   │   │   │   ├── Portfolio.tsx
│   │   │   │   ├── Testimonials.tsx
│   │   │   │   ├── Contact.tsx
│   │   │   │   └── Timeline.tsx
│   │   │   └── ui/
│   │   │       ├── Button.tsx
│   │   │       ├── Modal.tsx
│   │   │       └── Pagination.tsx
│   │   ├── lib/
│   │   │   └── payload.ts
│   │   └── types/
│   │       └── index.ts
│   └── public/
│       └── images/
│
├── seed/                       # Database seeding
│   ├── seed.ts
│   └── data/
│       ├── profile.json
│       ├── social-links.json
│       ├── skills.json
│       ├── timeline.json
│       ├── services.json
│       ├── portfolio.json
│       ├── testimonials.json
│       └── contact-info.json
│
├── .env
├── .env.example
├── docker-compose.yml
├── package.json
├── payload.config.ts
├── next.config.ts
└── tsconfig.json
```

---

## 3. Environment Variables

```bash
# .env

# MongoDB (Docker)
MONGODB_URI=mongodb://admin:password@localhost:27017/portfolio?authSource=admin

# Payload CMS
PAYLOAD_SECRET=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Upload directory
UPLOAD_DIR=./public/images
```

---

## 4. Conversion Phases

### Phase 1: Project Scaffolding & Setup
- Initialize from official Payload CMS + Next.js + MongoDB template
- Configure `.env`, `docker-compose.yml` for local MongoDB
- Verify admin panel at `/admin` works

### Phase 2: Payload CMS Collections & Globals
- Create all 9 collections (Profile, SocialLinks, Skills, Timeline, Services, Portfolio, Testimonials, ContactInfo, Media)
- Create SiteSettings global
- Verify CRUD in admin panel

### Phase 3: Database Seeding
- Extract all hardcoded data from `index.html`
- Create seed script using Payload local API
- Populate all collections

### Phase 4: Core Components (Layout + UI)
- Navbar, Footer, ThemeToggle
- Button, Modal, Pagination UI components
- Tailwind config with portfolio theme colors

### Phase 5: Section Components (CMS-Driven)
- Hero, About, Skills, Timeline, Services, Portfolio, Testimonials, Contact
- All fetch data from Payload CMS

### Phase 6: Interactivity & Animations
- Intersection Observer for scroll effects
- Portfolio filtering with React state
- Testimonial slider with Swiper
- Dark/light theme toggle

### Phase 7: Responsive Design & Polish
- Match all breakpoints from original CSS
- Fix all typos and bugs from original

### Phase 8: Metadata, SEO & Performance
- generateMetadata, next/image optimization, Lighthouse 90+

### Phase 9: Testing & Deployment
- Docker, testing, production deployment

---

## 5. Libraries

| Package | Purpose |
|---------|---------|
| next | Framework |
| react / react-dom | UI |
| payload | CMS core |
| @payloadcms/next | Next.js integration |
| @payloadcms/db-mongodb | MongoDB adapter |
| @payloadcms/plugin-seo | SEO plugin |
| swiper | Testimonial slider |
| lucide-react | Icons |
| sharp | Image optimization |

**Removed from original:** jQuery, jPages, MixItUp, ScrollReveal, Boxicons, FontAwesome

---

## 6. Seed Data Mapping (from index.html)

| Collection | Source Lines | Items |
|------------|-------------|-------|
| Profile | 99-101, 154, 182 | 1 document |
| SocialLinks | 118-136, 1281-1289 | 8 links |
| Skills | 200-450 | 16 skills in 2 groups |
| Timeline | 457-511 | 4 entries |
| Services | 523-711 | 3 cards with features |
| Portfolio | 739-1096 | 20 projects |
| Testimonials | 1118-1181 | 5 cards |
| ContactInfo | 1194-1248 | 4 cards |
| SiteSettings | 34-85, 1260-1300 | 1 global |

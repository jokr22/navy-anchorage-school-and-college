# Navy Anchorage School And College Chattogram - Full Stack Project

## Project Overview

Rebuild the Navy Anchorage School website using React.js, Express, Node.js, and Docker.

## Tech Stack

- **Frontend**: React.js with Vite
- **Backend**: Express.js with Node.js
- **Database**: PostgreSQL (for school data, admissions, contacts)
- **Container**: Docker and Docker Compose

## Project Structure

```
navy-anchorage-fullstack/
├── docker-compose.yml
├── Dockerfile (backend)
├── package.json (backend)
├── src/
│   ├── index.js
│   ├── schema.sql
│   ├── seed.js
│   └── config/
│       └── db.js
│   └── routes/
│       └── ...
│   └── controllers/
│       └── ...
├── frontend/
│   ├── package.json
│   ├── vite.config.js
│   ├── Dockerfile
│   ├── index.html
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── index.css
│       └── components/
│           └── ...
│       └── pages/
│           └── ...
```

## Features to Implement

1. **Home Page** - Hero section with school stats
2. **About Page** - School history and mission
3. **Academics Page** - Primary, Secondary, Higher Secondary info
4. **Facilities Page** - Labs, library, sports, transport
5. **Gallery Page** - Photo gallery
6. **Contact Page** - Contact form for admissions
7. **API Endpoints** - For fetching school data, submitting inquiries

## Files to Create

- [ ] navy-anchorage-fullstack/docker-compose.yml
- [ ] navy-anchorage-fullstack/Dockerfile
- [ ] navy-anchorage-fullstack/package.json
- [ ] navy-anchorage-fullstack/src/index.js
- [ ] navy-anchorage-fullstack/src/schema.sql
- [ ] navy-anchorage-fullstack/src/seed.js
- [ ] navy-anchorage-fullstack/src/config/db.js
- [ ] navy-anchorage-fullstack/frontend/package.json
- [ ] navy-anchorage-fullstack/frontend/vite.config.js
- [ ] navy-anchorage-fullstack/frontend/Dockerfile
- [ ] navy-anchorage-fullstack/frontend/index.html
- [ ] navy-anchorage-fullstack/frontend/src/main.jsx
- [ ] navy-anchorage-fullstack/frontend/src/App.jsx
- [ ] navy-anchorage-fullstack/frontend/src/index.css
- [ ] navy-anchorage-fullstack/frontend/src/components/
- [ ] navy-anchorage-fullstack/frontend/src/pages/

## Follow-up Steps

- [ ] Create all backend files
- [ ] Create all frontend files
- [ ] Set up Docker configuration
- [ ] Test the application

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

## Getting Started

### Option 1: Using Docker (Recommended)

1. Clone the repository
2. Navigate to the project directory
3. Run the following command:

```
bash
docker-compose up --build
```

This will start:

- PostgreSQL database on port 5432
- Backend API server on port 5000
- Frontend React application on port 3000

4. Open your browser and visit: http://localhost:3000

### Option 2: Running Locally

#### Backend Setup

1. Navigate to the backend directory:

```
bash
cd backend
```

2. Install dependencies:

```
bash
npm install
```

3. Set up PostgreSQL database and run the schema:

```
bash
psql -U postgres -f src/schema.sql
```

4. Create a .env file in the backend directory:

```
PORT=5000
DB_USER=postgres
DB_HOST=localhost
DB_NAME=navy_anchorage
DB_PASSWORD=postgres
DB_PORT=5432
```

5. Start the backend server:

```
bash
npm start
```

#### Frontend Setup

1. Navigate to the frontend directory:

```
bash
cd frontend
```

2. Install dependencies:

```
bash
npm install
```

3. Start the development server:

```
bash
npm run dev
```

4. Open your browser and visit: http://localhost:3000


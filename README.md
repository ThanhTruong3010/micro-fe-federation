# Module Federation Setup

This project demonstrates a complete Module Federation architecture with separate micro-frontends.

## Architecture

- **Host App** (Port 8080): Main application that consumes remote modules
- **Product Catalog** (Port 8081): Independent micro-app for product management
- **User Profile** (Port 8082): Independent micro-app for user management
- **Analytics** (Port 8083): Independent micro-app for analytics dashboard

## Running the Applications

### Option 1: Run All Apps Simultaneously

1. **Install dependencies for all apps:**

```bash
# Host app
npm install

# Product Catalog
cd micro-apps/product-catalog && npm install

# User Profile
cd micro-apps/user-profile && npm install

# Analytics
cd micro-apps/analytics && npm install
```

2. **Start all applications:**

```bash
# Terminal 1 - Host App (port 8080)
npm run dev

# Terminal 2 - Product Catalog (port 8081)
cd micro-apps/product-catalog && npm run dev

# Terminal 3 - User Profile (port 8082)
cd micro-apps/user-profile && npm run dev

# Terminal 4 - Analytics (port 8083)
cd micro-apps/analytics && npm run dev
```

### Option 2: Run Individual Apps

Each micro-app can be run independently for development:

```bash
# Product Catalog only
cd micro-apps/product-catalog && npm run dev

# User Profile only
cd micro-apps/user-profile && npm run dev

# Analytics only
cd micro-apps/analytics && npm run dev
```

## How It Works

1. Each micro-app exposes its main component via Module Federation
2. The host app consumes these remote components dynamically
3. Components are loaded at runtime, not build time
4. Each app can be developed, tested, and deployed independently

## Key Benefits

- **Independent Development**: Teams can work on different micro-apps simultaneously
- **Independent Deployment**: Each micro-app can be deployed separately
- **Technology Flexibility**: Each micro-app can use different versions of dependencies
- **Scalability**: Easy to add new micro-apps or remove existing ones
- **Team Autonomy**: Different teams can own different micro-apps

## Development Tips

- Always start the micro-apps before the host app for proper federation
- Use different ports for each application to avoid conflicts
- Check network tab in browser dev tools to see remote module loading
- Each micro-app has its own build process and dependencies

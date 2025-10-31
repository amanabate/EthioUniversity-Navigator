# EthioUniversity Guide

A comprehensive platform for discovering and comparing Ethiopian universities. Explore detailed information about academic programs, facilities, and make informed decisions about your higher education journey.

## Project Overview

EthioUniversity Guide is a web application built to help students, parents, and researchers find and compare universities across Ethiopia. The platform provides:

- Comprehensive university profiles with detailed information
- Search and filter capabilities
- Side-by-side university comparison
- Information about programs, facilities, and leadership

## Technologies Used

This project is built with:

- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe JavaScript
- **React** - UI library
- **React Router** - Client-side routing
- **shadcn-ui** - High-quality component library
- **Tailwind CSS** - Utility-first CSS framework
- **React Query** - Data fetching and caching

## Getting Started

### Prerequisites

- Node.js (v18 or higher) - [Install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- npm or yarn

### Installation

Follow these steps to set up the project locally:

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies
npm install

# Step 4: Start the development server
npm run dev
```

The application will be available at `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
src/
├── assets/          # Images and static assets
├── components/      # Reusable React components
│   ├── ui/         # shadcn-ui components
│   └── ...         # Custom components
├── data/           # Data files (universities data)
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
├── pages/          # Page components (routes)
└── main.tsx        # Application entry point
```

## Deployment

To deploy this project:

1. Build the production version:
   ```sh
   npm run build
   ```

2. The `dist/` folder will contain the production-ready files

3. Deploy the `dist/` folder to your hosting service (Vercel, Netlify, etc.)

## Contributing

Feel free to contribute to this project by:

1. Forking the repository
2. Creating a feature branch
3. Making your changes
4. Submitting a pull request

## License

This project is open source and available for educational purposes.

## Support

For questions or issues, please open an issue in the repository.

# NEOS Creative Agency Website

A modern, responsive website for NEOS Creative Agency built with Next.js and Tailwind CSS.

## Features

- Modern, minimalist design
- Fully responsive layout
- Server-side rendering with Next.js
- Optimized images and performance
- Smooth animations and transitions
- Contact form with validation
- Interactive portfolio filtering
- News and blog section
- Client testimonials
- Newsletter subscription

## Tech Stack

- Next.js 14
- React 19
- TypeScript
- Tailwind CSS
- Class Variance Authority
- Tailwind Typography
- Tailwind Forms

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- pnpm 8.0 or later

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/neos-homepage.git
   cd neos-homepage
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
pnpm build
pnpm start
```

## Project Structure

```
neos-homepage/
├── app/                    # Next.js app directory
│   ├── components/        # Reusable components
│   ├── lib/              # Utility functions
│   ├── about/            # About page
│   ├── services/         # Services page
│   ├── portfolio/        # Portfolio page
│   ├── clients/          # Clients page
│   ├── news/             # News page
│   ├── contact/          # Contact page
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── public/               # Static assets
│   ├── fonts/           # Web fonts
│   └── images/          # Images
├── styles/              # Global styles
├── package.json         # Dependencies
├── tailwind.config.js   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── README.md           # Project documentation
```

## Development

### Code Style

- Follow the TypeScript and React best practices
- Use functional components with hooks
- Implement responsive design using Tailwind's utility classes
- Keep components small and focused
- Use proper semantic HTML elements

### Components

- `Button`: Reusable button component with variants
- `Container`: Layout container for consistent spacing
- `Section`: Section component with background variants
- `Navbar`: Navigation bar with mobile menu
- `Footer`: Site footer with navigation and social links

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, please contact:
- Email: info@neos.com
- Website: https://neos.com

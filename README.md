# ForgiaCraft X

Documentation website for ForgiaCraft X - a Minecraft Java Edition modpack.

## Features

- 🌍 **Multilingual Support** - Available in Italian and English
- ⏱️ **Server Launch Countdown** - Live countdown to server opening (Oct 10, 2025 21:30 Europe/Rome)
- 📖 **Comprehensive Guides** - Installation instructions and keybindings reference
- 🎨 **Modern Design** - Built with VitePress for a fast, clean experience

## Development

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

```bash
npm install
```

### Local Development

```bash
npm run docs:dev
```

This will start a local development server at `http://localhost:5173/forgiacraft-x/`

### Build

```bash
npm run docs:build
```

### Preview Production Build

```bash
npm run docs:preview
```

## Project Structure

```
forgiacraft-x/
├── docs/
│   ├── .vitepress/
│   │   ├── components/     # Vue components
│   │   ├── theme/          # Custom theme
│   │   └── config.js       # VitePress configuration
│   ├── en/                 # English documentation
│   ├── public/             # Static assets
│   ├── guide.md            # Italian general guide
│   ├── keybinds.md         # Italian keybindings guide
│   └── index.md            # Italian homepage
└── README.md
```

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the `main` branch.

## Contributing

We welcome contributions from the community! Here's how you can help:

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Make your changes**
4. **Commit your changes** (`git commit -m 'Add some amazing feature'`)
5. **Push to the branch** (`git push origin feature/amazing-feature`)
6. **Open a Pull Request**

### Contribution Guidelines

- **Multilingual Support**: We maintain content in both Italian and English. When adding or updating content, please ensure both languages are updated:
  - Italian content is in the root docs folder (e.g., `docs/guide.md`, `docs/index.md`)
  - English content is in `docs/en/` (e.g., `docs/en/guide.md`, `docs/en/index.md`)

- **Documentation**: If you're adding a new launcher installation guide or game feature, document it in both languages

- **Code Quality**: Ensure your code follows the existing style and structure

- **Testing**: Test your changes locally with `npm run docs:dev` before submitting

- **Images**: Place images in `docs/public/images/` with descriptive names

### Need Help?

For questions or support, you can:
- Open an issue on GitHub
- Contact Pit or Davide Merli

## License

MIT - See [LICENSE](LICENSE) file for details

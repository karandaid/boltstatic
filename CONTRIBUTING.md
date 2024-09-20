

# Contributing to BoltStatic

First off, thank you for considering contributing to BoltStatic! 🎉 Your help is greatly appreciated.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Pull Requests](#pull-requests)
- [Style Guides](#style-guides)
  - [Code Style](#code-style)
  - [Commit Messages](#commit-messages)
- [Development Setup](#development-setup)
- [Testing](#testing)
- [License](#license)

## Code of Conduct

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) to understand the expectations for participation in BoltStatic.

## How Can I Contribute?

### Reporting Bugs

If you find a bug in BoltStatic, please open an issue with the following information:

1. **Description**: A clear and concise description of what the bug is.
2. **Steps to Reproduce**: Detailed steps to reproduce the bug.
3. **Expected Behavior**: What you expected to happen.
4. **Screenshots**: If applicable, add screenshots to help explain your problem.
5. **Environment**:
   - OS: e.g., Windows 10, macOS Catalina, Ubuntu 20.04
   - Node.js Version: `node -v`
   - BoltStatic Version: `boltstatic -v`

### Suggesting Enhancements

We welcome suggestions for new features or improvements. When proposing an enhancement:

1. **Provide a Clear Description**: Explain the feature or improvement in detail.
2. **Use Cases**: Describe how this feature would benefit users.
3. **Potential Implementation**: If you have ideas on how to implement it, share them.

### Pull Requests

Contributions via pull requests are highly encouraged. Here's how you can submit a pull request:

1. **Fork the Repository**: Click the "Fork" button at the top right of the repository page.
2. **Clone Your Fork**:

    ```bash
    git clone git@github.com:karandaid/boltstatic.git
    cd BoltStatic
    ```

3. **Create a New Branch**:

    ```bash
    git checkout -b feature/your-feature-name
    ```

4. **Make Your Changes**: Commit your changes with clear and descriptive commit messages.
5. **Push to Your Fork**:

    ```bash
    git push origin feature/your-feature-name
    ```

6. **Open a Pull Request**: Navigate to the original repository and click "Compare & pull request".

## Style Guides

### Code Style

- **JavaScript**: Follow the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).
- **Markdown**: Use [Markdownlint](https://github.com/DavidAnson/markdownlint) to maintain consistent Markdown formatting.
- **Templates**: Ensure Handlebars templates are properly indented and organized.

### Commit Messages

Use clear and descriptive commit messages. Follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification:

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, etc.)
- **refactor**: Code refactoring without adding features or fixing bugs
- **test**: Adding or updating tests
- **chore**: Other changes that don’t modify src or test files

**Example:**

```
feat: add support for SASS preprocessing

- Implemented SASS compiler integration
- Updated documentation with usage instructions
```

## Development Setup

To set up the development environment:

1. **Clone the Repository**:

    ```bash
    git clone git@github.com:karandaid/boltstatic.git
    cd BoltStatic
    ```

2. **Install Dependencies**:

    ```bash
    npm install
    ```

3. **Link the Package Globally** (for testing CLI commands):

    ```bash
    npm link
    ```

4. **Run BoltStatic Locally**:

    ```bash
    boltstatic serve
    ```

## Testing

We use [Jest](https://jestjs.io/) for testing.

### Running Tests

```bash
npm test
```

### Writing Tests

- Place your test files in the `tests/` directory.
- Follow the naming convention `*.test.js`.

**Example:**

```javascript
// tests/build.test.js

const buildSite = require('../src/core/build');

test('buildSite generates the correct output', () => {
  const result = buildSite('test-content');
  expect(result).toBe(true);
});
```

## License

By contributing to BoltStatic, you agree that your contributions will be licensed under its [MIT License](LICENSE).

---

Thank you for contributing to BoltStatic! Your support helps make this project better for everyone. 🙌
```

---

### Additional Notes:

1. **Replace Placeholders**: Ensure you replace placeholders like `yourusername`, `Your Name`, and links with your actual GitHub username, name, and relevant URLs.

2. **Logo Image**: Update the logo path in the `README.md` if you have a logo for BoltStatic. If not, you can remove or replace the image section.

3. **Badges**: The badges (License, npm version, Build Status) assume you have set up CI/CD workflows and published BoltStatic to npm. Update or remove these badges as appropriate.

4. **Discord Link**: Update the Discord link in the Support section to point to your actual community channel. If you haven't set one up yet, you can omit this or link to another support channel.

5. **Plugin Development Guide**: The `README.md` references a `[Plugin Development Guide](docs/plugins.md)`. Ensure you create this file within your `docs/` directory to provide detailed instructions on developing plugins.

6. **Code of Conduct**: The `CONTRIBUTING.md` references a `CODE_OF_CONDUCT.md`. It's a good practice to include this file to set community standards. Here's a basic template you can use:

---


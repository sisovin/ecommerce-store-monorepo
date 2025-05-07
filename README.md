# E-Commerce Store Monorepo Documentation

Welcome to the **E-Commerce Store Monorepo**, a repository designed to host both the frontend and backend applications for an e-commerce platform. This monorepo adheres to modern best practices for Angular and NestJS applications while maintaining clean separation of concerns and optimal code organization.

---

## Table of Contents
- [Monorepo Overview](#monorepo-overview)
- [Frontend: Angular 19](#frontend-angular-19)
- [Backend: NestJS](#backend-nestjs)
- [Shared Libraries](#shared-libraries)
- [Benefits of the Monorepo](#benefits-of-the-monorepo)
- [Getting Started](#getting-started)
- [Development Guidelines](#development-guidelines)

---

## Monorepo Overview

This monorepo is organized to maximize code reuse and maintainability, leveraging **Nx** for workspace management. The structure is as follows:

```
apps/
  frontend/       # Angular 19 application
  backend/        # NestJS application
libs/
  shared/         # Shared libraries for common code
tools/
  ...             # Custom scripts or tools for monorepo management
nx.json           # Nx workspace configuration
tsconfig.base.json # Root TypeScript configuration
```

### Key Features
- **Clear Separation:** Frontend and backend are isolated under the `apps/` directory.
- **Shared Libraries:** Reusable code for both frontend and backend resides in the `libs/` directory.
- **Unified Configuration:** Centralized build, lint, test, and dependency management.

---

## Frontend: Angular 19

The frontend application is built with **Angular 19** and designed for scalability and modularity.

### Key Features
- **Feature-Based Modular Architecture:** Components and services are organized by features to promote separation of concerns.
- **Core Services and Interceptors:** Essential services (e.g., HTTP interceptors, authentication) are isolated in a `core` module.
- **Shared Components, Directives, and Pipes:** Common UI components, directives, and pipes are reused across the application.
- **Tailwind CSS Integration:** Tailwind CSS is used for rapid styling and consistent UI design.
- **Internationalization Support:** Built-in support for multiple languages (i18n) ensures easy localization.

### Directory Structure
```
apps/frontend/
  src/
    app/
      features/
        auth/         # Authentication feature
        products/     # Products feature
        orders/       # Orders feature
      core/
        services/     # Core services
        interceptors/ # HTTP interceptors
      shared/
        components/   # Shared UI components
        directives/   # Shared directives
        pipes/        # Shared pipes
```

---

## Backend: NestJS

The backend application uses **NestJS** and follows a domain-driven design approach.

### Key Features
- **Domain-Driven Structure:** Modules are organized by domain (e.g., `auth`, `products`, `orders`) for clarity and scalability.
- **Prisma ORM Integration:** Prisma ORM simplifies database management and ensures type-safe database access.
- **JWT Authentication with Argon2:** Secure authentication using JSON Web Tokens (JWT) and the Argon2 hashing algorithm.
- **Shared Utilities and Exceptions:** Custom utility functions and exception classes are shared across modules.
- **TypeScript Strict Mode:** Enforces type safety for robust and maintainable code.

### Directory Structure
```
apps/backend/
  src/
    modules/
      auth/          # Authentication module
      products/      # Products module
      orders/        # Orders module
    shared/
      exceptions/    # Shared exception classes
      utils/         # Shared utility functions
```

---

## Shared Libraries

The `libs/` directory contains reusable libraries that can be shared between the frontend and backend applications.

### Key Libraries
1. **Common Interfaces and DTOs:**
   - Houses shared TypeScript interfaces and Data Transfer Objects (DTOs).
   - Example: `User`, `Product`, and `Order` interfaces.

2. **UI Components Library:**
   - Shared UI components for use in the frontend application.
   - Example: Buttons, modals, and form components.

3. **Constants and Utilities:**
   - Contains reusable constants and utility functions.
   - Example: API endpoint constants, date formatters, and string manipulators.

---

## Benefits of the Monorepo

The monorepo structure provides several advantages for managing the e-commerce platform:

- **Shared Configuration:** Centralized Nx workspace configuration simplifies project maintenance.
- **Code Reuse:** Shared libraries allow for reusable code between frontend and backend.
- **Single Build/Test/Lint Configuration:** Unified workflows reduce complexity and ensure consistency.
- **Easier Dependency Management:** Dependencies are managed centrally, reducing duplication and version conflicts.

---

## Getting Started

Follow these steps to set up the monorepo on your local machine:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/sisovin/ecommerce-store-monorepo.git
   cd ecommerce-store-monorepo
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run the Applications:**
   - Start the frontend:
     ```bash
     nx serve frontend
     ```
   - Start the backend:
     ```bash
     nx serve backend
     ```

4. **Build All Projects:**
   ```bash
   nx build
   ```

---

## Development Guidelines

### Best Practices
- **Feature Isolation:** Keep features isolated to their respective modules or directories.
- **Code Reuse:** Use shared libraries in `libs/` to avoid duplication.
- **Strict Typing:** Enable TypeScript strict mode to catch potential issues early.
- **Consistent Naming:** Follow consistent naming conventions for files, directories, and modules.

### Nx Commands
- **Run a specific project:**
  ```bash
  nx serve <project-name>
  ```
- **Build a specific project:**
  ```bash
  nx build <project-name>
  ```
- **Lint all projects:**
  ```bash
  nx lint
  ```
- **Test all projects:**
  ```bash
  nx test
  ```

---

## Conclusion

The **E-Commerce Store Monorepo** is designed to streamline the development of an e-commerce platform by providing a modular and scalable architecture. By following the guidelines outlined in this documentation, developers can efficiently contribute to the project and maintain high-quality code.

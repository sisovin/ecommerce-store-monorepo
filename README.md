# E-Commerce Store Monorepo

Here's the complete monorepo project structure with all files for both frontend (Angular) and backend (NestJS) applications:

```
ecommerce-store/
├── apps/
│   ├── web/                   # Angular 19 Frontend
│   │   ├── src/
│   │   │   ├── app/
│   │   │   │   ├── core/
│   │   │   │   │   ├── auth/
│   │   │   │   │   │   ├── auth.guard.ts
│   │   │   │   │   │   ├── auth.interceptor.ts
│   │   │   │   │   │   ├── auth.service.ts
│   │   │   │   │   │   └── auth.state.ts
│   │   │   │   │   ├── interceptors/
│   │   │   │   │   │   ├── api-prefix.interceptor.ts
│   │   │   │   │   │   ├── error-handler.interceptor.ts
│   │   │   │   │   │   └── loading.interceptor.ts
│   │   │   │   │   ├── services/
│   │   │   │   │   │   ├── api.service.ts
│   │   │   │   │   │   ├── seo.service.ts
│   │   │   │   │   │   └── storage.service.ts
│   │   │   │   │   └── core.module.ts
│   │   │   │   ├── modules/
│   │   │   │   │   ├── products/
│   │   │   │   │   │   ├── components/
│   │   │   │   │   │   │   ├── product-card/
│   │   │   │   │   │   │   │   ├── product-card.component.ts
│   │   │   │   │   │   │   │   ├── product-card.component.html
│   │   │   │   │   │   │   │   └── product-card.component.css
│   │   │   │   │   │   │   ├── product-detail/
│   │   │   │   │   │   │   │   └── ... (similar structure)
│   │   │   │   │   │   │   └── product-list/
│   │   │   │   │   │   │   │       └── ...
│   │   │   │   │   │   ├── pages/
│   │   │   │   │   │   │   ├── product-detail-page/
│   │   │   │   │   │   │   └── product-list-page/
│   │   │   │   │   │   ├── services/
│   │   │   │   │   │   │   └── product.service.ts
│   │   │   │   │   │   ├── products.routing.ts
│   │   │   │   │   │   └── products.module.ts
│   │   │   │   │   ├── cart/
│   │   │   │   │   │   ├── components/
│   │   │   │   │   │   │   ├── cart-icon/
│   │   │   │   │   │   │   ├── cart-items/
│   │   │   │   │   │   │   └── cart-summary/
│   │   │   │   │   │   ├── pages/
│   │   │   │   │   │   │   └── cart-page/
│   │   │   │   │   │   ├── services/
│   │   │   │   │   │   │   └── cart.service.ts
│   │   │   │   │   │   ├── cart.routing.ts
│   │   │   │   │   │   └── cart.module.ts
│   │   │   │   │   ├── checkout/
│   │   │   │   │   │   ├── components/
│   │   │   │   │   │   │   ├── address-form/
│   │   │   │   │   │   │   ├── payment-method/
│   │   │   │   │   │   │   └── review-order/
│   │   │   │   │   │   ├── pages/
│   │   │   │   │   │   │   └── checkout-page/
│   │   │   │   │   │   ├── checkout.routing.ts
│   │   │   │   │   │   └── checkout.module.ts
│   │   │   │   │   ├── account/
│   │   │   │   │   │   ├── components/
│   │   │   │   │   │   │   ├── login-form/
│   │   │   │   │   │   │   ├── profile-form/
│   │   │   │   │   │   │   └── register-form/
│   │   │   │   │   │   ├── pages/
│   │   │   │   │   │   │   ├── login-page/
│   │   │   │   │   │   │   ├── profile-page/
│   │   │   │   │   │   │   └── register-page/
│   │   │   │   │   │   ├── account.routing.ts
│   │   │   │   │   │   └── account.module.ts
│   │   │   │   │   └── admin/
│   │   │   │   │       ├── components/
│   │   │   │   │       │   ├── product-form/
│   │   │   │   │       │   ├── order-list/
│   │   │   │   │       │   └── user-list/
│   │   │   │   │       ├── pages/
│   │   │   │   │       │   ├── dashboard-page/
│   │   │   │   │       │   ├── product-management-page/
│   │   │   │   │       │   └── order-management-page/
│   │   │   │   │       ├── admin.routing.ts
│   │   │   │   │       └── admin.module.ts
│   │   │   │   ├── shared/
│   │   │   │   │   ├── components/
│   │   │   │   │   │   ├── footer/
│   │   │   │   │   │   ├── header/
│   │   │   │   │   │   ├── loading-spinner/
│   │   │   │   │   │   └── not-found/
│   │   │   │   │   ├── directives/
│   │   │   │   │   │   ├── click-outside.directive.ts
│   │   │   │   │   │   └── img-fallback.directive.ts
│   │   │   │   │   ├── pipes/
│   │   │   │   │   │   ├── currency.pipe.ts
│   │   │   │   │   │   ├── safe-html.pipe.ts
│   │   │   │   │   │   └── truncate.pipe.ts
│   │   │   │   │   ├── models/
│   │   │   │   │   │   ├── product.model.ts
│   │   │   │   │   │   ├── cart.model.ts
│   │   │   │   │   │   └── user.model.ts
│   │   │   │   │   └── shared.module.ts
│   │   │   │   ├── app.routing.ts
│   │   │   │   ├── app.component.ts
│   │   │   │   ├── app.component.html
│   │   │   │   ├── app.component.css
│   │   │   │   └── app.module.ts
│   │   │   ├── assets/
│   │   │   │   ├── images/
│   │   │   │   │   ├── logo.svg
│   │   │   │   │   ├── products/
│   │   │   │   │   └── icons/
│   │   │   │   └── i18n/
│   │   │   │       ├── en.json
│   │   │   │       └── fr.json
│   │   │   ├── environments/
│   │   │   │   ├── environment.ts
│   │   │   │   └── environment.prod.ts
│   │   │   └── styles/
│   │   │       ├── tailwind.css
│   │   │       ├── styles.scss
│   │   │       └── theme.scss
│   │   ├── angular.json
│   │   ├── tailwind.config.js
│   │   ├── tsconfig.json
│   │   └── index.html
│   └── project.json
│
│   └── api/                    # NestJS Backend
│       ├── src/
│       │   ├── auth/
│       │   │   ├── dto/
│       │   │   │   ├── login.dto.ts
│       │   │   │   └── register.dto.ts
│       │   │   ├── strategies/
│       │   │   │   ├── jwt.strategy.ts
│       │   │   │   └── local.strategy.ts
│       │   │   ├── auth.controller.ts
│       │   │   ├── auth.module.ts
│       │   │   ├── auth.service.ts
│       │   │   └── interfaces/
│       │   │       └── jwt-payload.interface.ts
│       │   ├── products/
│       │   │   ├── dto/
│       │   │   │   ├── create-product.dto.ts
│       │   │   │   └── update-product.dto.ts
│       │   │   ├── entities/
│       │   │   │   └── product.entity.ts
│       │   │   ├── products.controller.ts
│       │   │   ├── products.module.ts
│       │   │   ├── products.service.ts
│       │   │   └── interfaces/
│       │   │       └── product-search.interface.ts
│       │   ├── orders/
│       │   │   ├── dto/
│       │   │   │   ├── create-order.dto.ts
│       │   │   │   └── update-order.dto.ts
│       │   │   ├── entities/
│       │   │   │   └── order.entity.ts
│       │   │   ├── orders.controller.ts
│       │   │   ├── orders.module.ts
│       │   │   └── orders.service.ts
│       │   ├── users/
│       │   │   ├── dto/
│       │   │   │   ├── create-user.dto.ts
│       │   │   │   └── update-user.dto.ts
│       │   │   ├── entities/
│       │   │   │   └── user.entity.ts
│       │   │   ├── users.controller.ts
│       │   │   ├── users.module.ts
│       │   │   └── users.service.ts
│       │   ├── prisma/
│       │   │   ├── prisma.service.ts
│       │   │   └── prisma.module.ts
│       │   ├── shared/
│       │   │   ├── exceptions/
│       │   │   │   ├── http-exception.filter.ts
│       │   │   │   └── prisma-client-exception.filter.ts
│       │   │   ├── interceptors/
│       │   │   │   └── transform.interceptor.ts
│       │   │   ├── decorators/
│       │   │   │   ├── public.decorator.ts
│       │   │   │   └── roles.decorator.ts
│       │   │   └── utils/
│       │   │       ├── api-response.ts
│       │   │       └── pagination.ts
│       │   ├── app.module.ts
│       │   └── main.ts
│       ├── test/
│       │   ├── app.e2e-spec.ts
│       │   └── jest-e2e.json
│       ├── prisma/
│       │   ├── migrations/
│       │   │   └── ... (migration files)
│       │   └── schema.prisma
│       ├── nest-cli.json
│       ├── tsconfig.build.json
│       ├── tsconfig.json
│       ├── package.json
│       └── Dockerfile
│
├── libs/
│   ├── shared/
│   │   ├── interfaces/
│   │   │   ├── product.interface.ts
│   │   │   └── user.interface.ts
│   │   ├── dtos/
│   │   │   ├── api-response.dto.ts
│   │   │   └── pagination.dto.ts
│   │   ├── constants/
│   │   │   ├── app.constants.ts
│   │   │   └── error.constants.ts
│   │   └── shared.module.ts
│   └── ui/
│       ├── components/
│       │   └── ... (shared UI components)
│       └── ui.module.ts
│
├── package.json
├── nx.json
├── tsconfig.base.json
├── jest.config.ts
├── jest.preset.js
└── README.md
```

### Key Features of This Structure:

1. **Frontend (Angular 19)**
   - Feature-based modular architecture
   - Core services and interceptors separated
   - Shared components, directives, and pipes
   - Tailwind CSS integration
   - Internationalization support

2. **Backend (NestJS)**
   - Domain-driven structure
   - Prisma ORM integration
   - JWT authentication with argon2
   - Shared utilities and exceptions
   - TypeScript strict mode

3. **Shared Libraries**
   - Common interfaces and DTOs
   - UI components library
   - Constants and utilities

4. **Monorepo Benefits**
   - Shared configuration
   - Code reuse between frontend and backend
   - Single build/test/lint configuration
   - Easier dependency management


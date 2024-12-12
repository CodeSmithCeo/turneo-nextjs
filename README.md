## Improvements

- Use pnpm instead of npm
- use next-intl for internationalizationans setup an initial detection mechanism and afterwards store language selection per user in DB instead harcoding it as EN
- no auth or rute protections are implemented, all routes are treated as public
- move fonts under assets not in src/app - CNA placed it badly
- default error page and 404 page is missing and can be added in /app
- the structure of feature details being home route is not what the real app would use :)

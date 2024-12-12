## Improvements

- Use pnpm instead of npm
- use next-intl for internationalizationans setup an initial detection mechanism and afterwards store language selection per user in DB instead harcoding it as EN, the same goes for using the API for appropriate lang instead solely for EN results
- no auth or rute protections are implemented, all routes are treated as public
- move fonts under assets not in src/app - CNA placed it badly
- default error page and 404 page is missing and can be added in /app
- the structure of feature details being home route is not what the real app would use :)
- in describing return types from BE we can use Zod instead TS only but that requires either insight into BE data types (can be neatly done trough Swagger type descriptions)
- urlLow is used details, onClick there can be a modal preview of urlHigh image
- maps can be added to improve showing of the location

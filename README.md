# Verkefni 4 – sýnilausn

Sýnilausn á [verkefni 4](https://github.com/vefforritun/vef2-2019-v4) í vefforritun 2 árið 2019.

Búa þarf til postgresql gagnagrunn (t.d. `createdb v4`) og setja tengistreng í skrá sem heitir `.env` (búa þarf þess skrá til). Sjá dæmi í `.env_example`. Sjá nánar í [`Að tengjast postgres`](https://github.com/vefforritun/vef2-2019/blob/master/itarefni/postgres.md).

Keyrt með:

```bash
npm install
npm run eslint
npm run setup
npm run dev
```

`npm run setup` hendir töflunni `todos`, býr hana til skv. `schema.sql` og setur inn gögn í `insert.sql`.

## Postman

Í `postman.json` eru 30 test sem hægt er að keyra á lausn. Sækja þarf [postman](https://www.getpostman.com/) og [importa skrá sem collection](https://learning.getpostman.com/docs/postman/collection_runs/sharing_a_collection_run/#importing-a-run).

## jsdoc

Til að útbúa skjölun á föllum er hægt að keyra `npm run jsdoc` og síðan opna `out/index.html`.

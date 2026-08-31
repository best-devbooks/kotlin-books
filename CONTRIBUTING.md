# Contributing

Thanks for helping keep this list useful. Contributions are welcome as a
2-minute PR: add one Markdown file, open a PR.

## Ground rules

- You must have actually read the book. No jacket-copy summaries, no books
  you skimmed.
- No paid placements, no affiliate-only submissions, no self-promotion of a
  book you wrote without disclosing that in the PR description.
- The review body must be **original writing** — your own take on why the
  book is worth reading, who it's for, and how it compares to others on the
  list. Do not paste publisher/back-cover copy.
- Buy links should point to the publisher or a neutral retailer, not an
  affiliate link.

## Adding a book

1. Add `src/content/books/<slug>.md`, where `<slug>` is a kebab-case short
   form of the title (e.g. `kotlin-in-action.md`).
2. Fill in the frontmatter — see the schema enforced in
   `src/content/config.ts`:

   ```yaml
   ---
   title: ""
   authors: ["Full Name"]
   year: 2024
   publisher: ""
   isbn13: ""
   level: beginner # beginner | intermediate | advanced
   tags: ["topic-tag"]
   summary: "One sentence, what the book covers."
   bestFor: "Who this book is for, one sentence."
   coverImage: "/covers/<slug>.jpg"
   buyLinks:
     - label: "Publisher"
       url: ""
   ---
   ```

3. Write the review body below the frontmatter: why you recommend it, what
   it covers in more depth, who should (and shouldn't) read it.
4. Add a cover image at `public/covers/<slug>.jpg` (or `.svg`). Use the
   publisher's official cover; don't hotlink it from another site — commit
   the file itself.
5. Run `npm install && npm run build` locally to confirm the entry passes
   schema validation.
6. Open a PR. A malformed entry will fail CI (the zod schema in
   `src/content/config.ts` rejects it at build time).

## Editing or removing a book

Same process — edit the Markdown file directly, or open an issue explaining
why an existing entry should come out (e.g. it's outdated, or a better
edition superseded it).

## Local development

```bash
npm install
npm run dev
```

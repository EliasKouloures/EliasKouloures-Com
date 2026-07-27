# EliasKouloures.com review build

Responsive bilingual website for Elias Kouloures, built as a standalone review
project. It does not modify the current production website.

## Routes

- `/`
- `/solve`, `/educate`, `/create`
- `/loesen`, `/fortbilden`, `/entwickeln`
- `/impressum-datenschutz`

## Local development

Requires Node.js `>=22.13.0`.

```bash
npm install
npm run dev
```

## YouTube playlists

The six service pages use three shared YouTube playlists. Add a server-side
YouTube Data API v3 key to activate automatic playlist loading:

```bash
cp .env.example .env.local
```

Then set `YOUTUBE_API_KEY`. Without a key, the site loads the official,
automatically updated YouTube playlist player after visitor consent. With a key,
every public playlist video is displayed as its own full-width thumbnail,
including playlists longer than 50 items.

Connected YouTube identity:

- User ID: `NnTHykYkGaNaJPIe2WWtVA`
- Channel ID: `UCNnTHykYkGaNaJPIe2WWtVA`

Players use `youtube-nocookie.com` and load only after the visitor clicks a
thumbnail. Thumbnails are proxied through the website.

## Verification

```bash
npm run lint
npm test
```

The legal page is a current implementation draft based on the supplied identity
data and the actual technical behavior of this build. It should receive legal
review before the public domain is switched.

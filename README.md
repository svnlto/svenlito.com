# svenlito.com

Personal site — built with [Hugo](https://gohugo.io/).

## Local development

```bash
hugo server -D
```

## Build

```bash
hugo --minify
```

Output goes to `public/`.

## Deploy to Cloudflare

Deployed via [Cloudflare Workers](https://developers.cloudflare.com/workers/) with static assets. Configuration lives in `wrangler.toml`.

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages**
2. **Create** → **Connect to Git** → select the `svnlto/svenlito.com` repo
3. Leave the **Build command** as `hugo --minify`
4. Leave **Deploy command** blank — `wrangler.toml` handles it
5. Add environment variable `HUGO_VERSION` = `0.155.3`
6. **Save and Deploy**

Pushes to `main` trigger automatic rebuilds.

### Custom domain

1. In your project → **Settings** → **Domains & Routes**
2. Add `svenlito.com`
3. Point nameservers to Cloudflare — DNS records are created automatically


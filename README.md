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

## Deploy to Cloudflare Pages

1. Push this repo to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Create a new project → Connect to your GitHub repo
4. Build settings:
   - **Framework preset**: Hugo
   - **Build command**: `hugo --minify`
   - **Build output directory**: `public`
   - **Environment variable**: `HUGO_VERSION` = `0.139.0`
5. Deploy
6. In **Custom domains**, add `svenlito.com` and follow the DNS instructions

Cloudflare Pages gives you:
- Unlimited bandwidth (free tier)
- Automatic HTTPS
- Global CDN
- Automatic deploys on push to main


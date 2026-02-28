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

## Deploy

Deployed to [GitHub Pages](https://pages.github.com/) via GitHub Actions (`.github/workflows/deploy.yml`). Pushes to `main` trigger automatic builds.

### Setup

1. Repo **Settings** → **Pages** → Source: **GitHub Actions**
2. Repo **Settings** → **Pages** → Custom domain: `svenlito.com`
3. Enable **Enforce HTTPS**

### DNS (ClouDNS)

Add A records for the apex domain:

```
svenlito.com  A  185.199.108.153
svenlito.com  A  185.199.109.153
svenlito.com  A  185.199.110.153
svenlito.com  A  185.199.111.153
```


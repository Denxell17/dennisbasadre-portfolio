# Dennis Basadre — Portfolio

A static professional portfolio for AI automation projects, designed for deployment on Cloudflare Pages.

## Local preview

The site has no build step or runtime dependencies. Serve the repository root with any static file server:

```powershell
python -m http.server 4173
```

Then open `http://localhost:4173`.

## Deployment

For Cloudflare Pages, use the repository root as the output directory and leave the build command empty. Deployment and domain configuration are intentionally not included in this repository.

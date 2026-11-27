# Portfolio website (static, GitHub Pages)

Plain HTML/CSS/JS. No build step, no dependencies. Open `index.html` in a browser to preview.

## Where things live
- `data/site.js`: name, bio, links, experience, education, skills, publications, contact message
- `data/projects.js`: projects (reorder, add, hide with `visible:false`)
- `assets/images/`: profile photo, project thumbnails (`projects/`), favicon, social preview
- `assets/resume/`: your resume PDF
- Text in `[square brackets]` is a placeholder and appears in italics until you replace it.

## Replace placeholders
1. **Photo**: add `assets/images/profile.jpg` (square, about 800px) and set `photo` in `data/site.js`.
2. **Resume**: save your PDF as `assets/resume/Gauri_Revankar_Resume.pdf` (or change `resume` in `data/site.js`).
3. **Project thumbnails**: add 1200x750 images (16:10) to `assets/images/projects/` and update each project's `thumb`.
4. **Project links**: fill `github` and `demo` in `data/projects.js`. Empty strings hide the link.
5. **Social preview**: add a 1200x630 `assets/images/og-image.png`, and replace `YOUR-USERNAME` / `YOUR-REPO` in the `<head>` of `index.html` (canonical and Open Graph URLs).

## Add a project
Copy an object in `data/projects.js`, edit the fields, add its thumbnail. Set `status:"in-progress"` for unfinished work.

## Publish
1. Create a GitHub repo (name it `YOUR-USERNAME.github.io` for a root URL, or any name for `/repo-name/`).
2. Upload or push these files to the `main` branch.
3. In the repo go to **Settings > Pages > Build and deployment > Source** and choose **GitHub Actions**.
4. The included workflow (`.github/workflows/deploy.yml`) deploys on every push. Check the **Actions** tab; your URL appears there when it finishes.

Alternative without Actions: set Source to **Deploy from a branch**, branch `main`, folder `/ (root)`.

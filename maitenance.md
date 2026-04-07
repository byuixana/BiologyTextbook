# Textbook Maintenance Documentation
**Project:** Textbook Application
**Document Type:** Maintenance Guide
**Last Updated:** March 25, 2026

---

## Table of Contents

1. [Overview](#overview)
2. [Routine Maintenance Tasks](#routine-maintenance-tasks)
   - [Maintenance & Setup Tasks]
3. [Backup & Recovery](#backup--recovery)
   - [Backup Strategy](#backup-strategy)

---

## Overview

This document is an overview of the maitenance of the Biology textbook application built using TailwindCSS and React.js. 

**Platform Notes:**
- The textbook website serves content delivery (link to flashcards, links to other external sites, chapters, videos, images, etc.)
- Any downtime will have an affect on academic activity. Recommended time for pushing fixes is later on Saturday.

---

## Maintenance & Setup Tasks

---

| Task | Description | Responsible |
|------|-------------|-------------|
| Initial installation | Run `npm ci` to install exactly what is in `package-lock.json`. This keeps installs consistent across computers. | Professor/Student |
| Building the project | To create the deployable build, run `npm run build:app`. Refer to the Terminal Commands section for step-by-step process. | Professor/Student |
| Dependency review and updates | Check for updates with `npm outdated` and update intentionally. Always test before publishing changes. Refer to the Terminal Commands section for step-by-step process. | Professor/Student |

---

## Terminal Commands
### Build process
1) Open a terminal for the project containing your src file 
2) Copy the following command onto the terminal line: `npm run build:app`
3) Hit enter.
4) This will generate a new folder titled build. Within this folder, you will find the finished product. Find the html file.
5) Copy this folder and place it on your computer. 
6) Place the folder in openEquella. 
7) Use the html file to generate a link. 

### Update process
1) Open a terminal in the project folder.
2) Understand the two modes below:
   - Reinstall without changing versions: `npm ci`
   - Intentionally change versions: review and update packages manually. See Controlled dependency update instructions below. 

#### What changes can affect the application?
- Patch update (`x.y.Z`): Usually low risk, but can still change behavior.
- Minor update (`x.Y.z`): Medium risk; may change features or defaults.
- Major update (`X.y.z`): High risk; can break build or runtime behavior.

#### Safe reinstall (no version changes)
1) Run `npm ci`.
2) Run `npm run build:app`.
3) Run `npm test -- --watchAll=false`.
4) If these pass, dependencies are unchanged and install is healthy.

#### Controlled dependency update (version changes)
1) Run `npm outdated` to see available updates.
2) Update one package at a time:
   - Regular dependency: `npm install <package>@<version> --save-exact`
   - Dev dependency: `npm install -D <package>@<version> --save-exact`
3) After each update, run:
   - `npm run build:app`
   - `npm test -- --watchAll=false`
4) Smoke-test key pages (intro page, 2D/3D pages, videos, flashcards).
5) Commit only after tests and smoke tests pass.

#### Important notes
- `npm ci` does not update dependencies. It installs exactly what is already locked.
- `package-lock.json` controls reproducibility. Keep it committed with `package.json`.
- Do not run bulk updates right before class use or deadlines.

## Backup & Recovery

### Backup Strategy

The backup strategy follows a **3-2-1 rule:**

- **3** copies of the data locally
- **2** ensure data is saved on Github
- **1** upload to openEquella (or website hosting platform that is currently available)

**What to back up:**
- **JSON** Any new or altered JSON files must be saved both locally AND within the project Github. 
- **File system:** All uploaded content (PDFs, images, videos, downloadable resources)
- **Configuration files:** Any changes to the tailwind or rollup configuration files.
- **Codebase:** Application source code. This includes changes to components or new components, or even simpl scripts that store new functions. 

> ⚠️ **Note:** There is no student login data being used at this time. If student/professor data is ever integrated into a textbook or flashcard app, there must be various data protection procedures followed. As of now, they are unnecessary. 

#### Docker Files
In the case that these labs are moved off of openEquella and managed in the cloud on a service like AWS, Docker files have been created. These Docker files and this organization is a good way to deploy the labs and preserve the functionality of each lab through any changes.

The tar files within the `docker/` folder each contain a pre-built lab image. To restore them all into Docker, run:
`for f in docker/*.tar; do docker load -i "$f"; done`

This loads the images into Docker. The containers can then be started with:
`docker compose -f docker-compile.yml up -d`

To stop all running containers:
`docker compose -f docker-compile.yml down`

> ⚠️ **Note:** Docker Desktop must be running before executing any of these commands. Each lab is accessed via its `.local` hostname (e.g. `http://introduction.local`), which requires the hostnames to be added to `/etc/hosts` on the machine running the containers.

---

*This document should be reviewed and updated at least annually or whenever significant platform changes are made.*
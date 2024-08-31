# Digital Nomad

A Ghost theme that merges clean aesthetics with a content-first approach, tailored for digital, tech, and business blogs.

&nbsp;

## Useful links

**Demos:** https://highfivethemes.com/themes/digital-nomad/
**Documentation:** https://highfivethemes.gitbook.io/digital-nomad-user-documentation/

&nbsp;

## Features

1. Dark mode with option for dark mode publication logo.
2. Custom Archive, Authors, Categories (tags), Account, Sign In, Sign Up, Subscribe, Error 404 and Membership pages.
3. 5 customizable homepage sections (customizable layout/filtering or title/count or text) with 16 postcard's layout options and unique sections like "Membership", "Categories (tags) tabs" or "Author name with image and bio".
4. 22 header layout options.
5. Different Normal/Featured post's head layouts.
6. Ability to switch between the Ghost Portal interface and custom sign-in, sign-up, etc. pages.
7. Customizable accent background color of website's blocks (Subscribe CTA banners, tags, buttons, progress bar, etc.) and homepage sections.
8. 5 font-pairings options.
9. Customizable CTA banners with subscribe form on homepage, inside header's CTA widget and inside mobile menu.
10. Translation support.
11. Optional image lightbox with zoom for posts.
12. Customizable border-radius of buttons, inputs, images, blocks and tags.
13. Submenus support.

## Installation instructions

1. Go to **Settings > Design & branding** from the admin menu
2. Click **Change theme** in the bottom right corner
3. Then click the **Upload theme** button in the upper right corner
4. Click inside the upload box to select a **digital-nomad.zip**, or drag-and-drop the **digital-nomad.zip** into the upload box
5. Once uploaded, click **Activate** to activate the theme

&nbsp;

## Theme structure

The main templates files are:

- [`default.hbs`](default.hbs) - The main template file
- [`index.hbs`](index.hbs) - Used for the home page
- [`post.hbs`](post.hbs) - Used for individual posts
- [`custom-post-with-lightbox.hbs`](custom-post-with-lightbox.hbs) - Used for individual posts with lightbox for images and image galleries
- [`custom-post-with-sidebar.hbs`](custom-post-with-sidebar.hbs) - Used for individual posts with sidebar
- [`custom-post-with-sidebar-and-lightbox.hbs`](custom-post-with-sidebar-and-lightbox.hbs) - Used for individual posts with sidebar and lightbox for images and image galleries
- [`page.hbs`](page.hbs) - Used for individual pages
- [`tag.hbs`](tag.hbs) - Used for tag archives
- [`author.hbs`](author.hbs) - Used for author archives
- [`custom-authors.hbs`](custom-authors.hbs) - Used for publication's Authors page
- [`custom-categories.hbs`](custom-categories.hbs) - Used for publication's Categories (Tags) page
- [`archive.hbs`](archive.hbs) - Used for the Archive (All posts) page
- [`error-404.hbs`](error-404.hbs) - Used for 404 Error page
- [`custom-sign-in.hbs`](custom-sign-in.hbs) - Used for custom Sign In page
- [`custom-sign-up.hbs`](custom-sign-up.hbs) - Used for custom Sign Up page
- [`custom-subscribe.hbs`](custom-subscribe.hbs) - Used for custom Subscribe page
- [`custom-memberships.hbs`](custom-memberships.hbs) - Used for custom Memberships page
- [`custom-account.hbs`](custom-account.hbs) - Used for custom User's Account page

&nbsp;

## Development guide

**Digital Nomad** theme provides a first-class development experience out of the box.

### Setup

To see realtime changes during development, symlink the digital-nomad theme folder to the `content/themes` folder in your local Ghost install.

```bash
ln -s /path/to/digital-nomad /ghost/content/themes/digital-nomad
```

Restart Ghost and select the **digital-nomad** theme from **Settings**.

From the theme's root directory, install the dependencies:

```bash
npm install
```

If Node isn't installed, follow the [official Node installation guide](https://nodejs.org/).

### Start development mode

From the **digital-nomad** theme folder, start development mode:

```bash
npm run dev
```

Changes you make to your styles, scripts, and Handlebars files will show up automatically in the browser. CSS and Javascript will be compiled and output to the `built` folder.

Press `ctrl + c` in the terminal to exit development mode.

### Build, zip, and test your theme

Compile your CSS and JavaScript assets for production with the following command:

```bash
npm run build
```

Create a zip archive:

```bash
npm run zip
```

Use `gscan` to test your theme for compatibility with Ghost:

```bash
npm run test
```

&nbsp;

## Copyright & License

Copyright (c) 2024 HighFiveThemes - Released under the MIT license.

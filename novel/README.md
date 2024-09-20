# Novel

A Ghost theme crafted specifically for online novel reading and easy content grouping.

----

## Demo & Doc
+ **Demo**: https://novel.rakihub.com
+ **Documentation**: ??

----

## Features
+ [Tag-based book organization](https://novel.rakihub.com/tag/a-womans-trust/)
+ Seamless blog & book publishing
+ [Index of Contents](https://novel.rakihub.com/monella/) for easy navigation
+ Customizable tags on homepage (change tags, number or order)
+ Tag cloud on homepage
+ Dropdown menu in header
+ Multi-column navigation menu in site footer
+ Optional image lightbox with zoom for posts
+ Light and Dark version
+ Lightweight and minimal

----

## Installation instructions

1. Navigate to **Ghost Settings > Design & branding** from the admin menu
2. Click **Change theme** in the bottom right corner
3. Then click the **Upload theme** button in the upper right corner
4. Click inside the upload box to select a **novel.zip**, or drag-and-drop the **digital-nomad.zip** into the upload box
5. Once uploaded, click **Activate** to activate the theme

----

## Theme Structure

The main templates files are:

- [`default.hbs`](default.hbs) - The main template file
- [`home.hbs`](home.hbs) - The homepage template file
- [`index.hbs`](index.hbs) - Used for a list of posts
- [`post.hbs`](post.hbs) - Used for book chapters and supports index of contents
- [`custom-blog-with-narrow-feature-image`](custom-blog-with-narrow-feature-image.hbs) - Used for individual posts with narrow feature image
- [`custom-blog-with-toc.hbs`](custom-blog-with-toc.hbs) - Used for individual posts with table of contents
- [`custom-blog-with-wide-feature-image.hbs`](custom-blog-with-wide-feature-image.hbs) - Used for individual posts with wide feature image
- [`custom-standard-blog.hbs`](custom-standard-blog.hbs) used for individual posts with standard feature image
- [`page.hbs`](page.hbs) - Used for individual pages
- [`tag.hbs`](tag.hbs) - Used for category archives or book display
- [`author.hbs`](author.hbs) - Used for author archives
- [`page.hbs`](page.hbs) - Used for pages

----

# Development Guide

**Novel** theme provides a first-class development experience out of the box.

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

----

## Copyright & License

Copyright (c) 2024 [Rakihub](https://rakihub.com) - Released under the MIT license.

---
layout: page
title: My Website 
description: A static portfolio site built with Jekyll and Docker, deployed via GitHub Pages using the al-folio theme.
img: assets/img/website_icon.jpg
importance: 1
category: Personal
#related_publications: true
social: true 
---

# How I Built My Personal Website 

I approached this project with a few things in mind: 

- I **did** want it to be as cheap as possible (preferably free). 
- I **did** want to learn something about web development. 
- I **did not** want to use a no-code website builder like [**Wix**](https://www.wix.com/).
- I **did not** want to spend the time required to become a full front end/full-stack developer. 

Okay so now what... 

After exploring a few options, I learnt that it's possible to host your own static website for free using [**GitHub Pages**](https://pages.github.com/). 

[**GitHub Pages**](https://pages.github.com/) is powered by [**Jekyll**](https://jekyllrb.com/), a static site generator written in [**Ruby**](https://www.ruby-lang.org/en/). It takes Markdown files, Liquid templates ([which were created for use in Shopify stores](https://shopify.github.io/liquid/basics/variations/)), and `.scss` stylesheets, and turns them into a complete static website. That means there's no backend! Everything is pre-rendered into HTML and served as-is, which is great for performance and simplicity. 

As I wasn't prepared to build this website from complete scratch, I looked for templates to start with. It turns out there's a large community for this, and many Jekyll themes to choose from [**here**](https://github.com/topics/jekyll-theme). 

I wanted something clean, professional, and something I could edit. I ended up going with the [**al-folio**](https://github.com/alshedivat/al-folio) theme. 

I then cloned the repository, bought my own domain, and started playing around! 

It took a little while to get used to the layout of the project. At first glance it’s a mess of folders, but once I understood what each one was doing, the structure made sense.

The main idea is that you write your content in Markdown (`.md`) files and Jekyll takes care of turning that into proper HTML using templates and styles. You don’t really need to write any HTML yourself unless you want to.

The [**al-folio**](https://github.com/alshedivat/al-folio) theme is built to support academic sites, so it comes with built-in layouts for things like a projects page, a publications page (with citations pulled from BibTeX), and a blog. The look and feel are controlled through `.scss` files, and although I didn’t do anything too fancy, I did tweak some stuff to better match what I wanted.

One of the more technical parts of the setup was using [**Docker**](https://www.docker.com/), which is essentially a 'lite' virtual machine. This let me run a [**container**](https://www.docker.com/resources/what-container/) with everything installed (Ruby, Jekyll and the dependencies) without having to install any of it directly on my machine. Once the container was up and running, I could edit the files in **VS Code** and see the changes update live at `localhost:8080`. Once I was happy, I then pushed it live onto **GitHub**.

What I liked most about this process is that once everything is set up, updating the site is really easy. If I want to add a new project or blog post, I just create a new `.md` file, fill in the front matter (metadata at the top), write the content, and push it to **GitHub**.

I now have a professional, fast, and entirely customisable website that I understand and can completely control. Also it's free! (domain cost me £5). I didn’t have to become a full-stack developer to make it, but I did learn a lot about how static sites work, how templating languages like **Liquid** are used, and how tools like [**Docker**](https://www.docker.com/) and [**GitHub Pages**](https://pages.github.com/) can simplify the development and deployment process.

If you’re technically curious but not trying to become a serious web developer, I’d definitely recommend going this route. You’ll learn enough to feel like you’re not relying on black boxes, and the end result is something you actually own. 

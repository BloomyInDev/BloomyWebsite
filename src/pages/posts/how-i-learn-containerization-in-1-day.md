---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'How i learn containerization in 1 day'
pubDate: 2023-09-06
description: 'I know containers, but not how to create them'
author: 'Bloomy'
image:
    enable: true
    url: '/posts/docker.svg'
    alt: 'The full Astro logo'
tags: ['blogging', 'docker', 'nodejs']
---

## Where it all begun

Numworks calculator have a method to update them. But the only way to know if there an update is through [this page](https://www.numworks.com/calculator/update/), and it doesn't tell if there is an minor update.

Some member of the Omega community found how to make a little script to scan for updates, but i think that is unpractical because you need to know

-   How to make a script run automaticaly every day
-   How to make and/or use this script

I wanted to add my own little brick to help this community that helped me unlock full usage of my calculator with [Omega](https://getomega.dev) & [Upsilon](https://getupsilon.web.app)

So i made a little app that check every day if there is an update for every calc that Numworks released. Because i love sharing my work, you can find all the code [here](https://github.com/BloomyInDev/NumworksVersionChecker).

But it wasn't enought, [Yaya.Cout](https://github.com/Yaya-Cout) asked if someone can make an container to do what my app do (i've seen that message before but didn't see the container part)

So i searched how to do that

## Docker is hard

So i installed Docker desktop on my computer...

As always when i try to learn something new, i have problems.
Here Docker desktop wouldn't install

After some troubleshooting, i managed to install Docker desktop and create a simple container.
But then i realised some issues with my app

-   I can't change the config file without re-building my app
-   All the files downloaded (the new versions) are wiped when the container restart

I fixed these 2 issues after mounting a volume to the folder of the download and moved the config file to that folder.

So i was thinking i have done everything to make a container.

But then Yaya mentionned that i've made my container for amd64 computers and he is running a Raspberry Pi as his server, and that my container weighted **1.37GBytes**
![image of docker list courtesy of Yaya](/posts/yaya-docker-size.png)

So i searched how to reduce my container size and add support for other platforms

I switched from the base container `node:18` to `node:18-alpine` to reduce my builded container size and then build the container for `amd64`, `arm64` and `armv7`.
I think i've builded for the most used platform. If you think differently, open an [issue](https://github.com/BloomyInDev/NumworksVersionChecker/issues)

The container page is [here](https://hub.docker.com/r/bloomyindev/numworksversionchecker), Github repo is [here](https://github.com/BloomyInDev/NumworksVersionChecker)

That's how i learned containerization in 1 day.

Have a good day

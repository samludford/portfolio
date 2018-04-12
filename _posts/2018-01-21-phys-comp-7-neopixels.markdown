---
layout: post
title: Neopixels
description: Some experiments
date: 2018-01-24
tags:
  - physical computing
---

As a learning exercise today we were experimenting with neopixels, using the Adafruit library to control them.

Breaking away from the prepackaged example patterns, first we got a simple flash going.

{% include youtube.html id="WnQ0cbH3JiI" %}

Then incorporated a sinewave and colour to make things more interesting.

{% include youtube.html id="Dv7cIBmX7Nk" %}

For the sake of exploring user interaction we hooked up a potentiometer which controlled the number of individual LEDs being lit.

{% include youtube.html id="UEI9-POuVmA" %}

This gave rise to the idea of making a 1-dimensional PacMan game on a single strip. Here was a basic game mechanic:

{% include youtube.html id="Pm3ZKbcJWdI" %}

Code for the final version is on <a href="https://github.com/samludford/neopixels">github</a>.

---
layout: post
title: Music of the Spheres
description: A prototyping tool for a movement-based interactive sound installation
date: 2018-01-05
permalink: aavp/music-of-the-spheres/
tags:
  - av

---

{% include vimeo.html id="249864566" %}

<br />

A development tool for a movement guided sound installation, inspired by the Pythagorean concept of the music of the spheres.

The position of up to eight people (represented in the app by red dots) can be moved around a circular area by clicking and dragging with the mouse. The areas is divided into eight inner circles, corresponding to the orbits of the eight planet. Each planet has its own voice, whose pitch is controlled by the position of the people on its orbit. In addition to the pitch, the presence of multiple people in the orbit of a planet increases the rate of tremolo on its voice.

Each voice is is created using a either subtractive or FM synthesis, and in some cases with portamento or filter modulation. Envelopes are used to handle smooth transitioning between orbits. The orbital rings are displayed with a shade corresponding to the position on the scale of the note being played. People are greyed out to indicate they are inactive when outside the circular area.

As a real life installation, participants are encouraged to move through the space in an exploratory manner, experimenting with their absolute and relative positions to discover harmonies, dissonances, and rhythmic patterns.

## Source code

- <a href="https://github.com/samludford/music_of_the_spheres">github</a>
- <a href="https://github.com/samludford/music_of_the_spheres">zip</a>

<br />

## openFrameworks add-ons used

- <a href="https://github.com/micknoise/Maximilian">maximilian/ofxMaxim</a>

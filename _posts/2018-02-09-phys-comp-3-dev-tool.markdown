---
layout: post
title: Physical Computing 3
description: Refections and ideas
date: 2018-02-08
tags:
  - physical computing
---

In the last post I discussed some electronic components to experiment with in producing the module (see this post for the project outline). While considering the technicalities I realised there something of a chicken and egg problem when trying to decide how to approach this project: to design the behaviour of an individual module I need to know what they'll sound like en masse, but I can't make lots of them until I know how to make one. For example, whether to make modules independent or not, hinge on whether this will add anything to the overall effect when many of them are combined. But this is a critical decision that needs to be made early on.

In order to try and overcome this dilemma (and to give myself something to do while waiting for components to arrive in the post) I decided to make an app which would (at least partially) simulate the effect I'm aiming at. The goal was to give myself a kind of development environment which would allow me to play around with the sonic aspects of the project without each decision coming with hardware commitments.

The result was Chitter:

{% include vimeo.html id="255016522" %}

Chitter was built using openFrameworks and Maximilian. It allows the user to add and remove virtual modules playing repetitive patterns. In this first iteration they just all play the same sound at regular intervals, with very small variation in tempo and pitch, creating a Reichian phasing effect. I didn't have a recording of a solenoid click, so I used a metallic percussive thing I recorded years ago that sounds similar.

The x position on the canvas governs the stereo placement of each sound. This is something of a limitation-to truly simulate project I'd need to place them in 3D space and have an object representing a person who could move through the space. But that would be overkill. The aim is just to get a sense of how things might sound, and for that purpose I think it's quite effective.

Source code for Chitter <a href="https://github.com/samludford/chitter">is on github</a>.

### Conclusions

The main outcome of building this is that it has immediately become obvious how rich a sound texture can be achieved with completely independent modules-and this is without having any of the complex spatialisation that would be present when a real person moves through a real space with real modules (and looooaads of them).

What I have realised is that while modules don't need to be dependent on each other, it is useful to be able to have control of basic parameters like tempo. So having a potentiometer to control tempo, and maybe a button to switch between a few modes, would be desirable.

---
layout: post
title: Autoreong
description: Concept for a gamelan inspired experimental instrument
date: 2017-11-14
tags:
  - physical computing

---

The Autoreong is an experimental instrument inspired by Balinese gamelan. Five gong chimes (or any pitched percussive instrument, e.g. singing bowls) are struck by solenoids at a rate controlled by pressure applied to input pads. With no pressure applied to a pad the corresponding chime is not struck at all. Increasing the pressure will cause solenoid to fire once a bar, then once every half bar, third bar, quarter beat, and so on, up to every sixteenth beat at maximum pressure.

<!--break-->

By applying varying pressure to the pads different patterns can be played on the chimes.

{% include youtube.html id="qs3I3MohVTc" %}

<br />
The chimes will be mounted on a perspex box housing the solenoids, which strike them from below. At the front of the box a protruding, keyboard-like panel houses the force sensitive resistors which are played with fingertips. The perspex allows the player to get visual feedback from the instrument, which will help them keep track of what's going on.

An MVP will consist of one force sensitive resistor controlling one solenoid which will strike one chime in the manner described above.

<u>Inputs</u>: 5 x force sensitive resistors

<u>Outputs</u>: 5 x pull solenoids

<u>Extras</u>: external power supply for solenoids (which can't run off Arduino's 5v power)

<br />

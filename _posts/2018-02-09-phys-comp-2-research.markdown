---
layout: post
title: Physical Computing 2
description: Technical research
date: 2018-01-31
tags:
  - physical computing
---

In the <a href="https://samludford.github.io/2018/phys-comp-1-ideas/">last post</a> I sketched out an idea for the project I'd like to work on this term. Here I summarise some technical research I've done to follow up and start costing a prototype.

# Microcontrollers

Choice of microcontroller is a key decision. The program for each module will probably be extremely simple (depending on whether modules communicate or not).

Requirements:

	•	Arduino compatible (ideally - for the sake of ease)
	•	Able to run a simple metronomic program to trigger solenoids in patterns
	•	Only needs one pin.
	•	Takes external power.

I researched several options, and by the far the most hopeful is the Attiny85. It's extremely cheap and looks like it will do everything I need it to. It doesn't have many pins, but I will not need many.

Some Attiny85 resources:

- https://www.amazon.co.uk/Digispark-Attiny85-Arduino-Development-SELLER/dp/B01H3EO50G/ref=sr_1_12?ie=UTF8&qid=1518026800&sr=8-12&keywords=attiny85#productDetails
- http://digistump.com/wiki/digispark/tutorials/connecting
- http://andybrown.me.uk/2010/11/07/an-introduction-to-the-attiny854525/

# Solenoids

It will be important to use 5V solenoids instead of the 9V ones I used on the Autoreong, so only one power source will be required.

Using 5V will simplify the circuit. A simple circuit design would use:

- 1 x 5V solenoid
- 1 x 220 ohm resistor
- 1 x 1N4004 diode
- 1 x NPN (BC547) transistor

<img src="{{site.url}}/assets/images/simple_solenoid_5V_diagram.png">  

Some of the cheaper 5V solenoids I found:
-	https://www.amazon.co.uk/DC-Solenoid-Electromagnet-SODIAL-Actuator/dp/B01GZWMSE2/ref=pd_sbs_60_2?_encoding=UTF8&pd_rd_i=B01GZWMSE2&pd_rd_r=0D8F4454473EZY943K2D&pd_rd_w=1BTuS&pd_rd_wg=vG61L&psc=1&refRID=0D8F4454473EZY943K2D
- https://www.amazon.co.uk/1-1A-Stroke-Force-Solenoid-Electromagnet/dp/B00EZJS2UW/ref=sr_1_2?ie=UTF8&qid=1518026953&sr=8-2&keywords=5v+solenoid


# Power

The circuit will need to be powered by a battery, but both battery life and size will be important factors. This will just require some experimentation. I'm interested in exploring alkaline batteries, as they can potentially provide power for a very long time and tend to look a bit nicer than regular batteries (this is important since the aesthetic of the modules is all about exposed circuitry).

- https://www.reddit.com/r/arduino/comments/5pvv0h/power_an_arduino_uno_with_4_aa_alkaline_batteries/

# Conclusion

I've ordered some of these components. As a rough estimate it looks like I should be able to put together a basic module prototype for somewhere in the region of £10. As a starting point this is less than I was expecting, and gives me some confidence that this is a viable project. I've ordered some of these components - once they've arrvied I can start building some circuits.

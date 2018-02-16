---
layout: post
title: Euclidean Rhythms on the Tiny85
description: Setting up the Tiny85 / Digispark and programming the basic module
date: 2018-02-08
tags:
  - physical computing
---

This week I’ve been focused on getting to grips with the Tiny85 and Digispark breakout board. It is indeed tiny:

<img src="{{site.url}}/assets/images/tiny-1.jpg">  

To get things set up I followed the Digispark installation tutorial [<a href="http://digistump.com/wiki/digispark/tutorials/connecting">1</a>]. This was pretty much a case of downloading the right package and hitting the go button. I had the basic Digispark example (which blinks the onboard LED on and off once per second) up and running in a few minutes.

There are some differences between the programming the Arduino and the Tiny, detailed on a Digispark page [<a href="http://digistump.com/wiki/digispark/tutorials/basics">2</a>]. Significant ones are:

- with the Tiny there is no access to the serial monitor
- when using the Arduino IDE with the Digispark/Tiny you have to press ‘upload’ before plugging the board in.
- standard Arduino code is fine, but a lot of Arduino libraries won’t work

<br />

Luckily for me the components I’m intended on using—solenoids, mainly, but also switches and potentiometers—don’t require third party libraries, so on that point I’m safe. The different upload process is weird but fine. Most significant is the absence of access to the serial monitor, which will make debugging a pain.

Hardware-wise, the Tiny’s pin capabilities also differ. Firstly, there are only six of them (fine for my purposes). Capabilities as listed on the Digispark installation guide:

- All pins can be used as digital I/O
- Pin 0 → I2C SDA, PWM (LED on Model B)
- Pin 1 → PWM (LED on Model A)
- Pin 2 → I2C SCK, Analog In
- Pin 3 → Analog In (also used for USB+ when USB is in use)
- Pin 4 → PWM, Analog (also used for USB- when USB is in use)
- Pin 5 → Analog In

<br />

At this point I got a bit trigger happy with the soldering iron and started attaching header pins:

<img src="{{site.url}}/assets/images/tiny-2.jpg">  
<img src="{{site.url}}/assets/images/tiny-3.jpg">  

But then I realised I didn’t have any of the right jumper wires and anyway the solenoids hadn’t arrived yet so I couldn’t actually make any circuits.

I went back to programming, sadfaced.

Code-wise solenoids only require simple digital writes to high and low states—exactly like LEDs—so the onboard LED allowed me to get a long way in writing the clocking program that would drive the rhythmic patterns of the module.

The challenge with the autoreong was to write code that would synchronise multiple solenoids playing independent patterns, which meant it had to be asynchronous. Since the Tiny will only be controlling one solenoid it allows me to jettison that complexity and write purely synchronous code.

I started by adapting the Digispark blinking LED example code to use millis rather than delay [<a href="https://learn.adafruit.com/multi-tasking-the-arduino-part-1/using-millis-for-timing">3</a>], then made the time the LED is on independent of how long it is off, allowing for quick pulses (or percussive hits) rather than steady oscillation between on and off states.

### Humanising rhythms with the Euclidean algorithm

One of the guiding observations behind this project is that the look and sounds of exposed solenoids strikes a narrative chord with people—they have character, style, a certain pezaz. This situates the project within a wider framework I’ve been exploring in my work, which is about how placing usually invisible elements of the technological background into the foreground forces us to see them in new ways, revealing the capacity to affect of the machinery itself.

This character is something I’d like to see reflected not just in the look and timbre of the solenoids, but in the musical form of the complete piece as well. A while back I made a project based on Euclidean rhythms: rhythmic patterns that have been generated using a version of Euclid’s division algorithm. They appear in musical traditions all over world and have a characteristically pleasant and ‘human’ feel to them (the musical applications of this algorithm are described in a paper by Gottfried Touissant [<a href="http://cgm.cs.mcgill.ca/~godfried/publications/banff.pdf">4</a>]).

I used them to control guitar plucks:

<br />

{% include soundcloud.html type="track" id="301206420" %}

<br />

Code for the project was written in Processing [<a href="https://github.com/samludford/bjorklund">5</a>]. While that project stayed in the digital domain I always wanted to try taking the same principles and use them in physical space. The current project seems a good place to experiment with that. This also coheres well with the conceptual ideas around humanisation, and will help me to get away from phasing effects (and, let’s face it, Steve Reich emulation).

I considered porting my original code from Processing to C++, but immediately ran into problems. The implementation depended on variable-length strings, which is something the Arduino environment is apparently hopeless at coping with. There are String objects, but a quick bit of googling reveals all sorts of gotchas and pitfalls with these, mostly for esoteric reasons concerning dynamic memory allocation which I do not fully understand. I did find a few ‘solutions’ which used dynamic strings. They didn’t work [<a href="https://bitbucket.org/sjcastroe/bjorklunds-algorithm">6</a>].

To cut a long story short [<a href="https://hackingmajenkoblog.wordpress.com/2016/02/04/the-evils-of-arduino-strings/">7</a>], the lesson was this: to make it bulletproof you need to use a C-style strategy with fixed length character arrays. Which, given the way the algorithm lends itself to recursive solutions, is a massive downer.

I looked for other people who had solved this problem so I didn’t have to. First port of call was the paper by Bjorklund originally referenced by Touissant which first described this algorithm (in a relation to a practical problem in nuclear physics which has nothing whatsoever to do with music) [<a href="https://ics-web.sns.ornl.gov/timing/Rep-Rate%20Tech%20Note.pdf">8</a>].

This paper, plus a bit more internet trawling [<a href="https://forum.arduino.cc/index.php?topic=64616.0">9</a>], plus a bit of weird bug fixing, and I got it working. I now have the LED on the Digispark blinking to a tempo controlled Euclidean which is randomly generated on startup. This is a good foundation upon which to add the rest of the module’s structure.

<i>Notes</i>

1.	<a href="http://digistump.com/wiki/digispark/tutorials/connecting">http://digistump.com/wiki/digispark/tutorials/connecting</a>
2.	<a href="http://digistump.com/wiki/digispark/tutorials/basics">http://digistump.com/wiki/digispark/tutorials/basics</a>
3.	<a href="https://learn.adafruit.com/multi-tasking-the-arduino-part-1/using-millis-for-timing">https://learn.adafruit.com/multi-tasking-the-arduino-part-1/using-millis-for-timing</a>
4.	<a href="http://cgm.cs.mcgill.ca/~godfried/publications/banff.pdf">http://cgm.cs.mcgill.ca/~godfried/publications/banff.pdf</a>
5.	<a href="https://github.com/samludford/bjorklund">https://github.com/samludford/bjorklund</a>
6.	<a href="https://bitbucket.org/sjcastroe/bjorklunds-algorithm">https://bitbucket.org/sjcastroe/bjorklunds-algorithm</a>
7. <a href="https://hackingmajenkoblog.wordpress.com/2016/02/04/the-evils-of-arduino-strings/">https://hackingmajenkoblog.wordpress.com/2016/02/04/the-evils-of-arduino-strings/</a>
8.	<a href="https://ics-web.sns.ornl.gov/timing/Rep-Rate%20Tech%20Note.pdf">https://ics-web.sns.ornl.gov/timing/Rep-Rate%20Tech%20Note.pdf</a>
9.	<a href="https://forum.arduino.cc/index.php?topic=64616.0">https://forum.arduino.cc/index.php?topic=64616.0</a>

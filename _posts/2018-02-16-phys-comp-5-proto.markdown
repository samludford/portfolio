---
layout: post
title: Breadboard Prototype
description: Arduino as ISP for the ATTiny85, solenoids & potentiometers
date: 2018-03-08
tags:
  - physical computing
---

Next I wanted to put the whole circuit together, running the solenoid off the Tiny85 with a potentiometer controlling tempo and a switch to turn the whole thing off. In a uni workshop we learned a more flexible way of programming the ATTiny85, which used an Arduino as the In-circuit Serial Programmer instead of the Digispark. This will allow me to upload the program onto many chips just by plugging them into the breadboard one at a time.

Following the tutorials on HiLowTech [<a href="http://highlowtech.org/?p=1706">1</a>, <a href="http://highlowtech.org/?p=1695">2</a>] I got the basic LED blink program running via this method.

<img src="{{site.url}}/assets/images/proto-1.jpg">

I then combined this with the basic 5V solenoid circuit [<a href="https://samludford.github.io/2018/phys-comp-2-research/">3</a>], and loaded the Arduino code I wrote previously to get the solenoid tapping out rhythms.

<img src="{{site.url}}/assets/images/proto-2.jpg">  

Then I added a switch and potentiometer, adjusting the code slightly to have the value read from the potentiometer control the tempo of the rhythm [<a href="https://github.com/samludford/chitter-module">4</a>]. At this point I was also able to disconnect the Arduino and just use it as a power source.

<img src="{{site.url}}/assets/images/proto-3.jpg">

With the basic circuit in place, I now need to:

- Do some research and experimentation into battery power. First I’m going to try some lithium coin batteries and get a sense of how much life I might get from them. Another option to explore is rechargeable batteries.
- Try out some different solenoids, switches and potentiometers, obtaining a better understanding of the trade-offs between price and aesthetics. Which leads me onto:
- Design some housing for the circuit. Making decisions about this will depend on drawing together some of the conceptual threads motivating this project to give it a guiding aesthetic.

<br />

<i>Notes</i>

1.	<a href="http://highlowtech.org/?p=1706">http://highlowtech.org/?p=1706</a>
2.	<a href="http://highlowtech.org/?p=1695">http://highlowtech.org/?p=1695</a>
3.	<a href="https://samludford.github.io/2018/phys-comp-2-research/">https://samludford.github.io/2018/phys-comp-2-research/</a>
4.	<a href="https://github.com/samludford/chitter-module">https://github.com/samludford/chitter-module</a>

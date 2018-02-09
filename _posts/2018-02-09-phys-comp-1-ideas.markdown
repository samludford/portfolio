---
layout: post
title: Solenoids, again
description: Reflections on the autoreong and ideas for development
date: 2018-01-24
tags:
  - physical computing
---

This term I’d like to build on some of the themes I developed in the <a href="http://doc.gold.ac.uk/compartsblog/index.php/work/autoreong/">autoreong project</a>. The original idea had not been to make a single instrument based around synchronised solenoids, but multiple modules each of which contains a single solenoid playing its own pattern. Modules would interact, adapting their patterns based on what others nearby are doing, in a manner inspired the rule-based systems used by minimalist composers like Steve Reich. Put a heap of these together and the total effect would be an interesting and unpredictable sound texture, depending on contingent physical factors like the placement of modules in space. This would give a flexible, scalable, and site-adaptable sound installation.

That was the idea, anyway—in the end a combination of space and time constraints drove the project into the form of a small, self-contained instrument with a small number of solenoids and direct user interaction. It worked pretty well, but some of what seemed to me like the more exciting aspects of the original idea were lost in the process of creating something small that could be understood as an instrument without having to be explained.

This was reflected in feedback I received for the project from fellow students. Several felt that although the sound of the resonating metal bowl was pleasant, the sound of the solenoids on their own was more interesting—more mechanical, atonal and weird. The exposed look of the solenoids and their curious jerking motion was also something that caught people’s interest during development, but all this machine pathos was lost when they were hidden beneath the enclosing bowl.

What is clear is that both the sound and look of the solenoids click with people. Also, with the know-how I gained about how to use, power and program them I feel that this term would be well used by returning to the original idea and pursuing it more.

This will involve developing a simple module which can be multiplied and combined with others. Roughly, it will contain:

- a solenoid
- a microcontroller to control the solenoid
- a power supply
- a durable enclosure
- some way of communicating with other modules (maybe)

<br />

Many of these will need to be made, which means they will have to be cheap. This requirement is likely to impact heavily on all other design decisions.

The next major consideration is whether the modules will change depending on what others are doing, and if so, how. If they do not communicate at all then this will reduce the complexity significantly. In this case I’ll have to find some way of programming their pattern evolution cleverly, so their independent actions add up to an interesting whole (a bit like a sonic shader). However, a problem with this is that the composition will then be the same (-ish) however they’re arranged—I feel the project would be far more interesting if the spatial arrangement of the modules affected the sounds produced.

If they do communicate, there’s two main options. One would be to network them. I want to avoid this if at all possible—it will be hassle, likely fragile, and having to use microcontrollers with network capacities would probably drive the cost up significantly. Another would be to use some kind of physical communication, for example each module could be equipped with a microphone that it uses to listen to what’s going on around it and change its behaviour in response. This would be the closest mimic for the rule-based systems that inspired the idea in the first place. Technologically it might be less hassle than a networked system (though realtime sound input analysis could be a pain.) Alternatively it could use light. Some sort of rudimentary communication could probably be implemented using photoelectric resistors, which would be much simpler than sound analysis. It could also potentially add to the aesthetic.

Putting all this together, some avenues for preliminary research are:

-	See how cheap microcontrollers go, and what the trade-offs are at the cheapest end of the market.
-	Think about power supplies (can microcontrollers be powered by alkaline batteries?)
-	Reuse some code from the autoreong project to start playing around with solenoid patterns, to start getting a sense of what actually sounds—if module communication isn’t going to add anything then it may not be worth bothering.

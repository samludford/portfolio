---
layout: post
title: Simple Granular Synthesiser
description: Granular sample manipulation with FFT based visualisation
date: 2017-11-27
tags:
  - theory

---

{% include vimeo.html id="244431558" %}

<br />

This is the result of an exercise in granular sample manipulation and using the Fast Fourier Transform to visualise sound. It closely follows an example Mick Grierson gives in his Advanced Audiovisual Processing course at Goldsmiths.

### Tools
- <a href="http://openframeworks.cc/">openFrameworks</a>
- <a href="https://github.com/micknoise/Maximilian">Maximilian</a>

<br />

### Intended Outcomes
- learn basic granular synthesis with Maximilian
- learn how to use Maximilian's FFT and octave analyser for basic audio visualisation

<br />

### Audio

The audio component of the app granulates a single sound file. This sounds great with whole loops, so I exported one I put together in Ableton Live recently.

<br />

{% include soundcloud.html type="track" id="361748900" %}

<br />

In code, first the objects which handle audio are initialised:

{% highlight c++ %}
maxiSample samp;
vector<maxiTimestretch<grainPlayerWin>*> stretches;
maxiTimestretch<grainPlayerWin> *ts;
{% endhighlight %}

{% highlight c++ %}
samp.load(ofToDataPath("loop.wav"));
ts = new maxiTimestretch<grainPlayerWin>(&samp);
stretches.push_back(ts);
{% endhighlight %}

And in the main audio loop:

{% highlight c++ %}
wave = stretches[current]->play(speed, 0.1, 4, 0);
{% endhighlight %}

Where speed is controlled by the horizontal mouse position.

### Graphics

Setting up the FFT and octave analyser is straightforward:

{% highlight c++ %}
ofxMaxiFFT fft;
ofxMaxiFFTOctaveAnalyser oct;
{% endhighlight %}

{% highlight c++ %}
fft.setup(1024, 512, 256);
oct.setup(44100, 1024, 10);
{% endhighlight %}

In the audio loop:

{% highlight c++ %}
if(fft.process(wave)){
  oct.calculate(fft.magnitudes);
}
{% endhighlight %}

This performs all the sample-by-sample calculations, which are then available to be used in the draw loop.

The code here is deceptively simple:

{% highlight c++ %}
for(int i=0; i < oct.nAverages; i++) {
  ofSetColor(0,0,0,oct.averages[oct.nAverages-i-1] / 20.0 * 255.0);
  ofPushMatrix();
  ofTranslate(ofGetWidth()/2,ofGetHeight()/2, 0);
  ofRotate(0.01 * ofGetFrameNum() * speed * i, 1, 0.1, 0);
  ofDrawSphere(0, 0, i * 5);
  ofPopMatrix();
}
{% endhighlight %}

For each frequency band:
- set the color as black with a transparency value proportional to the average amplitude
- draw a sphere (which will render as a polyhedron if sphere resolution is low) after rotating around the x axis by an angle which is offset by time (so the whole thing rotates even is nothing is happening) and increases as the band frequency increases
- as band frequency increases so does sphere radius

<br />

A few screenshots:

<img src="{{site.url}}/assets/images/granular_synth/572.png">  

<img src="{{site.url}}/assets/images/granular_synth/497.png">

<img src="{{site.url}}/assets/images/granular_synth/806.png">  

<br />

<u>Code</u>: <a href="https://github.com/samludford/granular_synth_1">https://github.com/samludford/granular_synth_1</a>

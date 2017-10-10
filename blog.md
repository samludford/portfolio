---
layout: blog
title: Blog
description: main blog feed
permalink: /blog/
---

<!-- <br/> -->

{% for post in site.posts %}

{% if post.redirect %}

<div class="post">

  <a href="{{ post.redirect }}" target="_blank">
  <header class="post-header">
    <h1 class="post-title">{{ post.title }}</h1>
    <p class="post-meta">{{ post.date | date: "%-d %B %Y" }}{% if post.author %} • {{ post.author }}{% endif %}{% if post.meta %} • {{ post.meta }}{% endif %}</p>
  </header>
  </a>

  <article class="post-content">
    {{ post.content | split:'<!--break-->' | first }}
    {% if post.content contains '<!--break-->' %}
    <br/>
      <a href="{{ post.redirect }}" target="_blank">read more</a>
    {% endif %}
  </article>

  <br/>
  <hr/>
  <br/>
  <br/>

</div>


{% else %}

<div class="post">

  <a href="{{ site.baseurl }}{{ post.url }}">
  <header class="post-header">
    <h1 class="post-title">{{ post.title }}</h1>
    <p class="post-meta">{{ post.date | date: "%-d %B %Y" }}{% if post.author %} • {{ post.author }}{% endif %}{% if post.meta %} • {{ post.meta }}{% endif %}</p>
  </header>
  </a>

  <article class="post-content">
    {{ post.content | split:'<!--break-->' | first }}
    {% if post.content contains '<!--break-->' %}
    <br/>
      <a href="{{ site.baseurl }}{{ post.url }}">read more</a>
    {% endif %}
  </article>

  <br/>
  <hr/>
  <br/>
  <br/>

</div>

{% endif %}

{% endfor %}

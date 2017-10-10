---
layout: default
title: Posts By Tags
permalink: /tags
---

<!--
Create an empty array.
-->
{% assign tag_names = "" | split: "|"  %}

<!--
Obtain each tag name and push it to the array.
-->
{% for posts_by_tag in site.tags %}
  {% assign tag_names = tag_names | push: posts_by_tag.first %}
{% endfor %}

<!--
Sort the tag names.
-->
{% assign tag_names = tag_names | sort %}

<!--
Display tags.
-->
<ul class="tag-cloud">
  {% for tag_name in tag_names %}
    <li>
      <a href="{{ baseurl }}/tags#{{ tag_name | slugize }}">
        {{ tag_name }}
      </a>
    </li>
  {% endfor %}
</ul>

<br>
<hr>
<br>

<!--
List post titles under each tag.
-->
<section class="posts-by-tags">
  {% for tag_name in tag_names %}
    <div>
      <h3 id="{{ tag_name }}">
        {{ tag_name | capitalize | replace: "_", " " }}
      </h3>
      <br>
      <li>
        {% for post in site.tags[tag_name] %}
          <ul>
            <a href="{{ post.url | prepend: baseurl }}">{{ post.title }}</a>
          </ul>
        {% endfor %}
      </li>
    </div>
    <br>
  {% endfor %}
</section>

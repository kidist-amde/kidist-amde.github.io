---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

[Download PDF CV](/CV_Kidist_Amde_Mekonnen_2026_meta.pdf)

Education
======
* PhD Researcher, University of Amsterdam, IRLab, Amsterdam, The Netherlands

Research Interests
======
* Generative retrieval and generative information retrieval
* Recommendation and neural information retrieval
* Multilingual and low-resource retrieval
* Retrieval-augmented generation
* Continual learning and parametric memory for retrieval
* Large-scale machine learning

Skills
======
* Information retrieval
* Machine learning
* Retrieval-augmented generation
* Generative modeling
* Multilingual retrieval evaluation

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Service and leadership
======
* Reviewing and community service in information retrieval, machine learning, and natural language processing venues.
* Student supervision and project mentoring in neural IR, generative retrieval, RAG, and multilingual retrieval.

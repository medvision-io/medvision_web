---
title: 'Open Source'
template: 'product'
date: '2021-06-20'
draft: false
features: true
featuredImage: './api-light.jpg'
featuredImageDark: './api-dark.jpg'
description: At zhiva, we are committed to building a better future of healthcare. We share publicly a novel toolkit that enables AI developers to deploy models with as little as 5 lines of code.
---

## Open Source

Alongside the commercial version of the platform, zhiva is developing an open-source Python package for local deployments of AI models. Our goal is to provide researchers with a tool that can be used to easily verify and present the functionality of any AI model to radiologists. We understand that medical professionals are a crucial part of medical AI development, and their feedback can make or break a new AI model. Our open-source package makes it easy to discuss AI development with doctors as early as possible. By making the viewer available as an open-source package, we gain an insight into the inner workings of AI researchers and AI model developers.

The package is freely available online and AI researchers can start using it right away. We provide examples showing how to deploy AI models with just a few lines of code, as well as technical documentation describing the internal logic of the package.

The radiologist can use available examples or upload their own studies. AI predictions are overlaid directly onto the medical image, indicating why a particular prediction was made. We currently support 3 types of predictions: semantic segmentation with multiple labels, annotation using ROIs, and simple textual and numerical predictions. Various types of inputs are supported, using the entire exam, multiple series, or selected frames from the exam.

We encourage you to test our package today. Please visit the [Github](https://github.com/zhiva-ai), we provide several examples of deployments that could be used as a starting point for deploying your models.
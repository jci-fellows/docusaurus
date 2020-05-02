---
id: motivation
title: Motivation
sidebar_label: Motivation
---

## Overview

According to Hawaii Revised Statute HRS 304a-119, "The University of Hawaii shall establish a collective goal of becoming net-zero with respect to energy use, producing as much energy as the system consumes across all campuses, by January 1, 2035."

Through a donation from Johnson Controls International, the University of Hawaii Office of Sustainability has established the JCI Fellows Program to perform research, development, and education in pursuit of a net-zero University and ultimately net-zero State.

The University of Hawaii has already initiated or completed a variety of projects in pursuit of this net-zero goal, including:

  * Requiring all new construction to strive for LEED Gold certification.
  * Energy conservation measures that has led to an annual decrease in energy consumption every year since 2016.
  * Installation of photovoltaic systems that has resulted in 6M kWh of energy generation across all campuses in 2019.

The JCI Fellows program is designed to fund research and development by one graduate student and three undergraduate students per year to build upon these efforts. The primary goal is to create data-driven analytics using data science and/or machine learning techniques.

Here are examples of projects that the initial cohort of JCI Fellows could pursue:

## Project: Energy consumption and cost forecasting

[Prior analyses](https://www.hawaii.edu/sustainability/energy/dashboard/) indicates that UH energy consumption is highly correlated with outdoor temperature. However, there are other contributing factors: new buildings coming on line, other buildings closing, construction projects, occupancy, and so forth.

For this project, begin by building a model that accesses UHM building meters and other data to predict daily energy consumption based on outside temperature and other factors.

Second, perform an evaluation to determine the accuracy of the predictive model.

Third, expand the model to predict annual energy costs with a measure of its accuracy.a

Finally, use the model to help UH understand the impact of annual temperature rise on its energy costs.

## Project: Peak load shaving

The base rate per kWh of energy provided to UH by Hawaiian Electric is based upon UH's peak consumption during the prior year. The lower UH's peak consumption, the better the rate that Hawaiian Electric can provide to UH. One way to reduce the overall cost of energy to UH per year is to reduce peak consumption, so that the base rate is lower.

For this project, begin by building a model that accesses UHM building meters and other data to determine when peak daily consumption has just occurred.

Second, make the model predictive: it should attempt to predict when a peak will next occur, and what that peak value will be (i.e. how much energy will be consumed at peak).

Finally, perform studies to assess the ability of the model to predict peak consumption up to 24 hours in advance of its occurrence. If a reasonably appropriate model can be built, then UH can develop control tools to reduce consumption during periods with high probability of peak consumption. For example, the tools can cycle off HVAC systems across campus.



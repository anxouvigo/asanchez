---
title: "Equilibrio Vapor Líquido (EVL)"
date: 2021-07-19T12:02:00+02:00
draft: true
katex: true
toc: false
images:
tags:
  - VLE
  - Equilibrium
---

A lei de Raoult enuncia que, para unha solución ideal, a presión parcial de equilibrio dun compoñente a unha temperatura fixa $T$ é igual ao produto da súa presión de vapor (cando é puro) e a súa fracción molar na mestura líquida:

$$
P_i = P_i^0 x
$$
onde:
  $P_i$ é a presión de vapor co compoñente **i** da mestura
  $x_i$ é a fracción molar do compoñente $i$ na mestura
  $P_i^0$ é a presión de vapor do compoñente $i$ da mestura puro.

A presión de saturación do compoñente $i$ = (1,2...) calcúlase empregando a ecuación de **Antoine**:
  
$$
P_i^{sat} = 10^{\left( A-i - \frac {B_i}{T+C_i} \right)}
$$
  
onde:
  $P-I^{sat}$ é a presión de saturación (en bares)
  $A_i$, $B_i$ e $C_i$ son as constantes de **Antoine**
  $T$ é a temperatura (en K)[^1]
              ,
A lei de **Raolut** se pode usar para calcular os puntos de burbulla e orballo, mediante o uso dos factores $K$:

$$
K_i = \frac{y_i}{x_i} = \frac{P_i^{sat}} {P}
$$

onde:
  $y_i$ é a fracción molar do compoñente **i** na fase vapor
  $x_i$ é a fracción molar co compoñente **i** na fase líquida
  $ é a presión total  

A temperatura de saturación se resolve igualando $P_i^{sat}$ ca presión total $P$ e resolvendo para $T$.

O [punto de burbulla](https://en.wikipedia.org/wiki/Bubble_point) calcúlase usando a ecuación:

$$
\sum_{i} K_ix_i = 1
$$

Aplicando a lei de **Dalton** para unha mestura de gases:

$$
P = \sum_i P_i = \sum_i x_iP_{sat}^i
$$

o [punto de orballo](https://en.wikipedia.org/wiki/Dew_point) calcúlase segundo:

$$
\sum_i \frac{y_i}{K_i} = 1
$$

## Bibliografía

[Introduction to Chemical Engineering Processes/Vapor-Liquid equilibrium](https://en.wikibooks.org/wiki/Introduction_to_Chemical_Engineering_Processes/Vapor-Liquid_equilibrium#Multiple-Component_Phase_Equilibrium:_Phase_Diagrams)

[^1]: Dependendo da fonte na que se busquen as constantes as unidades de presión e temperatura poden ser outras. En este caso a fonte é o [Nist Webook](https://webbook.nist.gov/).



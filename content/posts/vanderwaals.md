---
title: "Ecuación de van der Waals"
date: 2021-04-30T13:50:57+02:00
draft: true
katex: true
images:
tags:
  - root finding
  - Van der Waals equation of State
  
---

# Raíces dunha ecuación non lineal


## Algoritmos para resolver f(x) = 0

Moitos problemas da enxeñaría química requiren a solución dunha ecuación non lineal.
As ecuacións non lineais poden expresarse na forma:
$$
f(x) = 0
$$
Un exemplo de ecuación non lineal na enxeñaría química é a ecuación de __Van der Waals__, que ven dada por:
$$
(P + \frac{a}{V^2}) (V−b) = RT
$$
onde $V$ é o volume molar do gas, $p$ a presión, $a$ e $b$ constates características de cada gas que se calculan a partires das súas propiedades críticas do seguinte xeito:
$$
a = \frac{27}{64}\frac{R^2T_C^2}{p_c}
$$
Se resolvemos a ecuación de __Van der Waals__ para $V$ se convirte en unha ecuación cúbica. Primeiro a reordearemos:
$$
P=\frac{R T}{V-b}-\frac{a}{V^{2}}
$$
Logo imos resolvendo:
$$
P=\frac{V^{2} R T}{V^{2}(V-b)}-\frac{a(V-b)}{V^{2}(V-b)}
$$

$$
P V^{2}(V-b) = V^{2} R T-a(V-b)
$$

$$
P V^{3}-b P V^{2} = V^{2} R T - a V + ab
$$

$$
P V^{3}-(b P+R T) V^{2}+a V-a b=0
$$

O que se convirte en unha ecuación cúbica eb $V$:
$$
V^{3}-\left(b+\frac{R T}{P}\right) V^{2}+\frac{a}{P} V-\frac{a b}{P}=0
$$

## Resolución da ecuación de __Van der Waals__

Un problema típico é atopar o volume molar, $V$, dada a temperatura e a presiónn (e o tipo de gas). Aínda que é posible atopar unha solución analítica para esta ecuación de estado de __Van der Waals__(ecuación 9) , a miúdo óptase por unha solución numérica. A ecuación de estado na forma f (x) = 0 obtense mediante unha reordenación simple:
$$
f(V)=\left(P+\frac{a}{V^{2}}\right)(V-b)-R T=0
$$
Esta expresión particular de $f(x) = 0$ non é única, e poden existir outros arranxos para ela.

## Datos: Métodos gráficos

Na táboa 1 amósanse datos para facer unha gráfica da ecuación de __Van der Waals__, para o amoníaco a unha temperatura de 250 ºC e unha presión de 1013 kPa. Na gráfica, e fácil ver que hai unha raíz real entre 0 e 5 (as outras raíces son conxugadas complexas). Dado que a temperatura e a presión dadas non son moi grandes, esperase que o volume molar calculado da ecuación de estado non sexa moi diferente da prevista pola lei dos gases ideais. Representando os valores da táboa 1 coa folla de calculo e facendo os "zooms" correspondentes podemos chegar á solución.

1. Calcular graficamente a solución. 

| V    |     0.04 |     0.05 |     0.06 |     0.10 |     0.20 |     0.30 |     0.40 |     0.50 |     0.60 |     0.70 |
| ---- | -------: | -------: | -------: | -------: | -------: | -------: | -------: | -------: | -------: | -------: |
|      | -36.4175 | -21.6949 | -16.2680 | -15.8262 | -24.0801 | -27.9334 | -29.6917 | -30.4527 | -30.6710 | -30.5629 |

| V    | 0.80     | 0.90     | 1.00     | 1.50     | 2.00     | 2.50     | 3.00     | 3.50    | 4.00    | 4.50    | 5.00    |
| ---- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | ------- | ------- | ------- | ------- |
|      | -30.2436 | -29.7801 | -21.2137 | -25.5380 | -21.2135 | -16.6230 | -11.8978 | -7.0949 | -2.2433 | -2.6411 | -7.5484 |

<small>Táboa 1. Datos para o cálculo do volumen molar de __Van der Waals__ do amoníaco a 250 ºC e 1013 kPa.</small>

## Iteración de punto fixo ou substitución directa

Para aplicar este método, a ecuación debe ser empregada na forma:
$$
f(x)=0
$$
ou, de xeito mais xeral,
$$
x^{i+1} = f(x^i)
$$
onde $i$ é o contador da iteración.
Hai que ter en conta que isto se pode conseguir engadindo $x$ a cada lado de $f(x) = 0$, se fora necesario.

A ecuacion de __Van der Walls__ pódese expresar na seguinte forma:
$$
V=b+\frac{R T}{\left(P+\frac{a}{V^{2}}\right)}
$$
A solucion é 4.23204 L<sup>.</sup>mol<sup>-1</sup>. Se se precisaren mais cifras significativas, poderíanse facer mais iteracións.

## M étodo de Newton-Raphson

A idea básica do algoritmo de Newton é a seguinte: dada unha suposición inicial, denominada $x^1$ é unha raíz de $f(x) = 0$. Unha segunda $x^2$, calcúlase en función do corte da tanxente a $f(x)$ en $x^1$ co eixo $x$. ́E dicir, considérase a  ecuación da liña tanxente a $f(x)$ en $x^1$ (esta é só a expansión da serie __Taylor__ da función, ignorando todos os termos lineais):
$$
f(x)=f\left(x^{1}\right)+f^{\prime}\left(x^{1}\right)\left(x-x^{1}\right)
$$
Esta é a ecuación punto-pendente dunha recta, onde $x^1$ é o punto base e $f(x^1)$ a pendente (derivada de $f(x)$ avaliada en $x^1$).
Resolvendo a ecuación anterior para $x$, na que $f(x) = 0$ dá:
$$
0=f\left(x^{1}\right)+f^{\prime}\left(x^{1}\right)\left(x^{2}-x^{1}\right)
$$

$$
x^{2}=x^{1}-\frac{f\left(x^{1}\right)}{f^{\prime}\left(x^{1}\right)}
$$

## Expresión xeral do método de Newton-Raphson

De xeito xeral:
$$
x^{i+1}=x^{i}-\frac{f\left(x^{i}\right)}{f^{\prime}\left(x^{i}\right)}
$$
O valor de $x^{i+1}$ é o novo valor adiviñado da raíz. O proceso repítese, computando sucesivamente $x^2$ ,$x^3$, $x^4$, ... ata $x^1$. atopándose que:
$$
\left|f\left(x^{\prime}\right)\right|<\text { tol }
$$
onde $tol$ e a tolerancia desexada.

## Caso Práctico 2.

Aplicaremos o método de __Newton__ ó caso do amoníaco a 1013 kPa e 250 ºC cunha suposición inicial para $V$ de un valor de 1 L<sup>.</sup>mol<sup>−1</sup>.
Para aplicar o método fai falla a derivada da ecuación de __Van der Waals__:
$$
f^{\prime}(V) = p - \frac {a}{V^{2}} + \frac{2ab}{V^{3}}
$$
Calcular o valor de $V$ con 5 cifras decimais.

En este caso o valor obtido é de 4.23204.

## Outro métodos propostos

Existen outros métodos para acadar este tipo de solucións de $f(x) = 0$. Algúns son numéricos:

- Método da bisección
- Método da secante

e outros aproveitan as capacidades das follas de cálculo:

- Buca de obxectivo
- Resolvedores

Calcular o valor de $V$ con estes outros métodos e comparalos cos anteriores. Facer unha táboa de algoritmos de solución e valores da solución.
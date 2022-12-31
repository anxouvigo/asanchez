---
title: "Tanque"
date: 2021-07-20T19:21:32+02:00
draft: true
toc: false
katex: true
images:
tags:
  - untagged
  - ODE solve
---



## Intercambio de calor en tanques en serie
### Solución dun sistema de ecuación diferenciais ordinarias simultáneas. 
#### Balances de enerxía en estado non estacionario, resposta dinámica de unha serie de tanques axitados de mestura perfecta.

Úsanse un tanques en serie para requentar unha mestura  multicomponente de disolventes antes de metela coma alimentación duna columna de destilación, tal como se amosa na figura. Cada tanque contén, inicialmente, 1000 kg da mestura a 20 °C. No serpentín condensa un vapor saturado á temperatura de 250 °C. A mestura entra no tanque a razón de 100 kg/min. A temperatura á que a mestura entra no tanque é de 20 °C. O tanque é de mestura perfecta, polo que a temperatura dentro del pódese considerar constante e á súa vez igual á temperatura de saída da mestura do tanque en cuestión.

A capacidade calorífica da mestura, $C_P$, é de 2,0 kJ⋅kg-1. A velocidade á que o calor é transferido do vapor á mestura de disolventes ven dada pola expresión:

$$
Q = UA \left ( T_{vapor} - T \right)  
$$

onde:  
$UA$ = 10 kJ⋅min-1⋅°C-1 é o produto do coeficiente de transmisión de calor e o área do serpentín de cada tanque  
$T$ = temperatura da mestura de disolventes no tanque, en °C  
$Q$ = velocidade de transmisión de calor en kJ⋅min-1.

Pódese realizar un balance individual de materia e enerxía para cada tanque. Nestes balances, o fluxo másico permanece constante. A masa do tanque pódese supor constante así coma o volume do tanque e a densidade da mestura de disolventes. Para cada tanque, o balance de enerxía xenérico pódese representar por:

$$
ACUMULACIÓN = ENTRADA - SAÍDA
$$

polo que:

$$
MC_P \frac {dT} {dt} = W C_P T_0 + UA \left ( T_{vapor} - T \right ) - W C_P T
$$

Obsérvese que o balance de materia en estado non estacionario non é necesario para ningún dos tanques xa que a masa neles non cambia co tempo. A ecuación anterior se pode arranxar e resolver explicitamente e expresala no xeito habitual das ecuacións diferenciais ordinarias:

Primeiro tanque:

$$
\frac {dT} {dt} = \frac {W C_P \left ( T_0 - T \right ) + U A \left ( T_{vapor} - T \right )} {M C_P} 
$$

1.	Determina-la temperatura do tanque en réxime estacionario. 
2.	Que tempo descorre para que a temperatura do tanque 1 acade un valor do 99% da estacionaria durante o quecemento?.

```python
import numpy as np
from scipy.integrate import odeint
import matplotlib.pyplot as plt 
```


```python
# función de retorno de dT/dt
T_vapor = 250.0  # C
T_0     = 20.0   # C
C_P     = 2.0    # 
UA      = 10.0   # kJ min-1 C-1
W       = 100.0 # kg/min
M       = 1000.0  # kg


def modelo(T,t):
    dTdt = ( W * C_P * (T_0 - T ) + UA * (T_vapor - T) ) / ( M * C_P )
    return dTdt
```

```python
# initial condition
T_0 = 20

# time points
t = np.linspace(0,100)
```

```python
# solve ODE
T = odeint(modelo,T_0,t)
print(t,T)
```
    [  0.           2.04081633   4.08163265   6.12244898   8.16326531
      10.20408163  12.24489796  14.28571429  16.32653061  18.36734694
      20.40816327  22.44897959  24.48979592  26.53061224  28.57142857
      30.6122449   32.65306122  34.69387755  36.73469388  38.7755102
      40.81632653  42.85714286  44.89795918  46.93877551  48.97959184
      51.02040816  53.06122449  55.10204082  57.14285714  59.18367347
      61.2244898   63.26530612  65.30612245  67.34693878  69.3877551
      71.42857143  73.46938776  75.51020408  77.55102041  79.59183673
      81.63265306  83.67346939  85.71428571  87.75510204  89.79591837
      91.83673469  93.87755102  95.91836735  97.95918367 100.        ] [[20.        ]
     [22.11251973]
     [23.81757188]
     [25.19374999]
     [26.30448765]
     [27.20098355]
     [27.92456196]
     [28.50857452]
     [28.97994146]
     [29.36039009]
     [29.66745701]
     [29.91529612]
     [30.11533143]
     [30.27678347]
     [30.40709428]
     [30.51227045]
     [30.59715986]
     [30.66567565]
     [30.72097602]
     [30.76560992]
     [30.80163475]
     [30.83071101]
     [30.85417898]
     [30.87312038]
     [30.88840834]
     [30.90074755]
     [30.91070673]
     [30.91874496]
     [30.92523276]
     [30.93046917]
     [30.93469558]
     [30.93810678]
     [30.94086001]
     [30.9430822 ]
     [30.94487577]
     [30.94632339]
     [30.94749179]
     [30.94843482]
     [30.94919597]
     [30.9498103 ]
     [30.95030611]
     [30.95070628]
     [30.95102929]
     [30.95129001]
     [30.95150042]
     [30.95167026]
     [30.95180734]
     [30.95191797]
     [30.95200727]
     [30.95207935]]



```python
# plot results
plt.plot(t,T)
plt.xlabel('tempo')
plt.ylabel('T1 (t)')
plt.grid(color='k', linestyle='-', linewidth=1)
plt.show()
```

![png](output_5_0.png)
    

```python
def modelo1(T2,t):
    dTdt = ( W * C_P * (T1 - T2 ) + UA * (T_vapor - T2) ) / ( M * C_P )
    return dT2dt

```

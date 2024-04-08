# Gráficos con ggplot2

## Diagrama de dispersión

``` r
library(ggplot2)
```

Crear un data frame con datos de ejemplo:

``` r
datos <- data.frame(x = c(1, 2, 3, 4, 5), y = c(2, 4, 6, 8, 10))
```

Crear un diagrama de dispersión:

``` r
ggplot(datos, aes(x = x, y = y)) +
  geom_point() +
  labs(title = "Diagrama de dispersión", x = "Eje X", y = "Eje Y")
```

## Histograma

Crear un histograma:

``` r
datos <- data.frame(valores = rnorm(100))

ggplot(datos, aes(x = valores)) +
  geom_histogram(binwidth = 0.2, fill = "blue", color = "black") +
  labs(title = "Histograma", x = "Valores", y = "Frecuencia")
```

## Diagrama de barras

Crear un diagrama de barras:

``` r
datos <- data.frame(categoria = c("A", "B", "C", "D"), valor = c(10, 20, 15, 25))

ggplot(datos, aes(x = categoria, y = valor)) +
  geom_bar(stat = "identity", fill = "green") +
  labs(title = "Diagrama de barras", x = "Categoría", y = "Valor")
```

## Gráfico de líneas

``` r
datos <- data.frame(x = 1:10, y = cumsum(rnorm(10)))

ggplot(datos, aes(x = x, y = y)) +
  geom_line(color = "red") +
  labs(title = "Gráfico de líneas", x = "Eje X", y = "Eje Y")
```

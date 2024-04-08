# Gráficos

En R, la visualización de datos es una parte fundamental del análisis exploratorio y comunicación de resultados. R ofrece una amplia variedad de paquetes y funciones para crear gráficos de alta calidad en diferentes estilos y para diferentes tipos de datos.

## Gráficos básicos con funciones base

R incluye funciones base para crear gráficos básicos, como diagramas de dispersión, histogramas, diagramas de barras, líneas, entre otros. Estas funciones incluyen `plot()`, `hist()`, `barplot()`, `boxplot()`, entre otros.

Por ejemplo, para crear un diagrama de dispersión:

``` r
x <- c(1, 2, 3, 4, 5)
y <- c(2, 4, 6, 8, 10)
plot(x, y, main = "Diagrama de dispersión", xlab = "Eje X", ylab = "Eje Y")
```

Para crear un histograma:

``` r
datos <- rnorm(100)  # Generar datos aleatorios con distribución normal
hist(datos, main = "Histograma", xlab = "Valor", ylab = "Frecuencia")
```

## Gráficos avanzados con ggplot2

El paquete `ggplot2` es uno de los paquetes más populares para crear gráficos en R.

Proporciona una interfaz más flexible para crear gráficos, basada en la gramática de gráficos. Con ggplot2, podemos crear gráficos con capas y personalizar prácticamente todos los aspectos del gráfico.

Por ejemplo, para crear un diagrama de dispersión con `ggplot2`:

``` r
library(ggplot2)

datos <- data.frame(x = c(1, 2, 3, 4, 5), y = c(2, 4, 6, 8, 10))
ggplot(datos, aes(x = x, y = y)) +
  geom_point() +
  labs(title = "Diagrama de dispersión", x = "Eje X", y = "Eje Y")
```

## Gráficos interactivos con plotly

plotly es un paquete que permite crear gráficos interactivos en R. Estos gráficos son visualizaciones web interactivas que permiten al usuario explorar y manipular los datos.

Por ejemplo, para generar datos aleatorios con distribución normal y crear un histograma interactivo con plotly:

``` r
library(plotly)

datos <- rnorm(100)  
plot_ly(x = ~datos, type = "histogram", name = "Histograma", xaxis = list(title = "Valor"), yaxis = list(title = "Frecuencia"))
```

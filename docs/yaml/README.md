# Estructura de un fichero YAML

Los ficheros YAML son una forma de representar datos estructurados mediante texto plano, con una sintaxis basada en indentación, ya que YAML utiliza la indentación para estructurar los datos. La indentación es crucial y se realiza mediante espacios (no tabulaciones). Los bloques de código se definen mediante la cantidad de espacios de indentación.

``` yaml
project_name: "NombreDelProyecto"

directories:
  frontend_directory: "ruta/directorio/frontend"
  backend_directory: "ruta/directorio/backend"
  api_directory: "ruta/directorio/api"
  doc_directory: "ruta/directorio/doc"
  src_directory: "ruta/directorio/src"
  components_directory: "ruta/directorio/components"

filenames:
  frontend_component_filename: "nombre_componente_frontend"
  backend_component_filename: "nombre_componente_backend"
  model_filename: "nombre_modelo"
  urls_filename: "nombre_urls"
  views_filename: "nombre_views"
  api_filename: "nombre_api"
  urls_api_filename: "nombre_urls_api"
  tasks_filename: "nombre_tareas"
  celery_filename: "nombre_celery"

vars:
  - name: "nombre_variable_1"
    type: "tipo_variable_1"
  - name: "nombre_variable_2"
    type: "tipo_variable_2"
  - name: "nombre_variable_3"
    type: "tipo_variable_3"
  # ... más variables
```

## Valores booleanos

``` yaml
activo: true
desactivado: false
```


## Listas y diccionarios

YAML admite listas y diccionarios para representar datos estructurados.

``` py
frutas:
  - manzana
  - naranja
  - plátano

persona:
  nombre: Alice
  edad: 25
```

## Comentarios

``` yaml
# Esto es un comentario
nombre: John Doe
```

## Referencias y anclajes

YAML permite anclar un fragmento de datos y hacer referencia a él en otro lugar del documento.

``` yaml
empleado: &empleado
  nombre: John Doe
  edad: 30

supervisor:
  <<: *empleado
  cargo: Gerente
```

# Leer fichero YAML en Python

Acceder a valores individuales:

``` py
import yaml

with open('tu_archivo.yaml', 'r') as file:
    config = yaml.safe_load(file)

path_frontend = config['directories']['frontend_directory']
path_backend = config['directories']['backend_directory']
# ... y así sucesivamente
```

Podemos recorrer iterables de YAML. En este ejemplo, vamos a acceder a las variables y sus tipos del primer ejemplo:

``` py
import yaml

with open('tu_archivo.yaml', 'r') as file:
    config = yaml.safe_load(file)

variables = config['vars']
for variable in variables:
    nombre_variable = variable['name']
    tipo_variable = variable['type']
    # Haz algo con la variable y su tipo
```

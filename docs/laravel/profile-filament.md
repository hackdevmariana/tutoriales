# Añadir un panel de perfil del usuario

Añadimos en `app/Providers/Filament/AdminPanelProvider.php` la llamada:

``` PHP
->profile()
```

Y añadirá la ruta `/profile` en la que poder cambiar los datos del usuario.

Para personalizar el componente profile: [https://filamentphp.com/docs/3.x/panels/tenancy#customizing-the-profile-link](https://filamentphp.com/docs/3.x/panels/tenancy#customizing-the-profile-link).

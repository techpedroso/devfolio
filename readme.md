# Engfolio



# CSS with BEM and prefixes

O foco é separar as responsabilidades quanto ao estilo do elemento HTML:

- Block
- Element
- Modifier

Exemplo:

```CSS
.button {
  padding: 8px 16px;
}

.button--primary {
  background: var(--color-primary);
}

.button--secondary {
  background: gray;
}

.button__icon {
  margin-right: 8px;
}
```

Com o uso de prefixos, potencializamos a rastrabilidade e intenção de cada um dos componentes de estilo utilizado em cada elemento:

```CSS
.l-header {}      /* layout */
.c-button {}      /* component */
.u-text-center {} /* utility */
```

Exemplo completo:

```CSS
<header class="l-header">
  <nav class="c-navbar">
    <a class="c-navbar__link c-navbar__link--active">Home</a>
  </nav>
</header>
```


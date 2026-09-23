# Calculadora 🧮

Proyecto de práctica de **git** para aprender a trabajar con ramas y fusionarlas (merge).

## Estructura del proyecto

- `index.html` — estructura de la calculadora
- `style.css` — estilos
- `calculadora.js` — lógica de la calculadora

## Ramas

| Rama | Contenido |
|------|-----------|
| `main` | Calculadora básica (+, −, ×, ÷, C, ⌫, =) |
| `feature/memoria` | Calculadora con botones de memoria (MC, MR, M+, M−) |

## Ejercicio: fusionar una rama

1. Ver las ramas existentes:

   ```bash
   git branch -a
   ```

2. Ir a la rama `main`:

   ```bash
   git checkout main
   ```

3. Fusionar la rama de la función adicional:

   ```bash
   git merge feature/memoria
   ```

4. Ver el historial de commits:

   ```bash
   git log --oneline --graph --all
   ```

> **Tip:** Si dos ramas modifican el mismo archivo en la misma zona, git genera un *conflicto*.
> Se resuelve editando el archivo para quedarte con lo que necesitas y luego haces:
> `git add archivo` y `git commit`.

## Comandos útiles

```bash
git init                      # crear un repositorio
git status                    # ver el estado
git add .                     # agregar archivos al área de preparación
git commit -m "mensaje"       # guardar un commit
git branch nombre             # crear rama
git checkout nombre           # cambiar de rama
git merge rama                # fusionar una rama en la actual
```
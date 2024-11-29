# Base de Datos

Este proyecto utiliza un esquema relacional con las siguientes tablas: **Usuarios**, **Proyectos**, **Tickets**, **UsuarioProyecto** y **UsuarioTicket**.

---

## **Descripción de las Tablas**

### **Usuarios**
Contiene la información de los usuarios registrados en el sistema.

- `id` (PK): Identificador único.
- `email`: Correo electrónico del usuario.
- `password`: Contraseña del usuario.

### **Proyectos**
Detalla los proyectos disponibles.

- `id` (PK): Identificador único.
- `titulo`: Título del proyecto.
- `descripcion`: Breve descripción del proyecto.
- `montoTotal`: Monto total asignado al proyecto.

### **Tickets**
Registra los gastos relacionados con cada proyecto.

- `id` (PK): Identificador único.
- `monto`: Monto del gasto.
- `fecha`: Fecha del gasto.
- `archivoNombre`: Nombre del archivo asociado al ticket.
- `archivoData`: Datos binarios del archivo.

### **UsuarioProyecto**
Tabla intermedia para la relación muchos a muchos entre **Usuarios** y **Proyectos**.

- `usuarioId` (FK): Relación con la tabla **Usuarios**.
- `proyectoId` (FK): Relación con la tabla **Proyectos**.

### **UsuarioTicket**
Tabla intermedia para la relación muchos a muchos entre **Usuarios** y **Tickets**.

- `usuarioId` (FK): Relación con la tabla **Usuarios**.
- `ticketId` (FK): Relación con la tabla **Tickets**.

---

## **Descripción de Relaciones**

### **Usuarios-Proyectos**
- Un **usuario** puede pertenecer a varios **proyectos**.
- Un **proyecto** puede tener varios **usuarios**.

### **Proyectos-Tickets**
- Cada **proyecto** puede tener varios **tickets**.
- Cada **ticket** pertenece a un **proyecto**.

### **Usuarios-Tickets**
- Un **usuario** puede estar asociado a varios **tickets**.
- Un **ticket** puede involucrar a varios **usuarios**.

---

## **Diagrama Entidad-Relación (DER)**

```mermaid
erDiagram
    Usuario {
        INT id PK
        STRING email
        STRING password
    }
    Proyecto {
        INT id PK
        STRING titulo
        STRING descripcion
        FLOAT montoTotal
    }
    Ticket {
        INT id PK
        FLOAT monto
        DATE fecha
        STRING archivoNombre
        TEXT archivoData
    }
    UsuarioProyecto {
        INT usuarioId FK
        INT proyectoId FK
    }
    UsuarioTicket {
        INT usuarioId FK
        INT ticketId FK
    }

    Usuario ||--o{ UsuarioProyecto : pertenece
    Proyecto ||--o{ UsuarioProyecto : incluye
    Proyecto ||--o{ Ticket : contiene
    Ticket ||--o{ UsuarioTicket : asociado
    Usuario ||--o{ UsuarioTicket : participa
```

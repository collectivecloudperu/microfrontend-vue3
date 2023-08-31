<script setup>
  /* */
</script>

<template>

  <div class="container">
    <div class="row mrgt">
      <div class="col-md-12">

        <h2>Formulario</h2>

        <form>

          <div class="mb-3">
            <label for="email" class="form-label fw-bold">Email</label>
            <input type="email" class="form-control" id="email" aria-describedby="email" required>
            <div id="email" class="form-text">Ejemplo: jrojas@miweb.com</div>
          </div>

          <div class="mb-3">
            <label for="nya" class="form-label fw-bold">Nombres y Apellidos</label>
            <input type="text" class="form-control" id="nya" required>
          </div>

          <div class="mb-3">
            <label for="direccion" class="form-label fw-bold">Dirección</label>
            <input type="text" class="form-control" id="direccion" required>
          </div>

          <div class="mb-3">
            <label for="mensaje" class="form-label fw-bold">Mensaje</label>
            <textarea class="form-control" id="mensaje" rows="3" required></textarea>
          </div>

          <button type="submit" class="btn btn-primary">Enviar</button>

        </form>
        
      </div>
    </div>
  </div>
  
</template>

<style scoped>
  /* */
</style> 
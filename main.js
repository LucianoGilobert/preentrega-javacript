// Función para validar el inicio de sesión
function login() {
    let username = prompt("Ingrese su nombre de usuario:");
    let password = prompt("Ingrese su contraseña:");
  
    // Validación del inicio de sesión
    if (username === "luciano" && password === "coderhouse") {
      alert("Inicio de sesión exitoso");
      redirectTo("index.html");
    } else if (username === "" || password === "") {
      alert("Por favor, ingrese nombre de usuario y contraseña.");
    } else {
      let attempts = 2;
      while (attempts > 0) {
        attempts--;
        alert(`Credenciales inválidas. Le quedan ${attempts} intentos.`);
        username = prompt("Ingrese su nombre de usuario:");
        password = prompt("Ingrese su contraseña:");
        if (username === "luciano" && password === "coderhouse") {
          alert("Inicio de sesión exitoso");
          redirectTo("index.html");
          break;
        }
      }
      if (attempts === 0) {
        alert("Has agotado tus intentos. Por favor, contacta al administrador.");
      }
    }
  }
  
  // Función para redirigir a otra página
  function redirectTo(page) {
    switch (page) {
      case "index.html":
        break;
    }
  }
  
  login();
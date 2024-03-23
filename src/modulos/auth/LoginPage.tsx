import { AuthInput } from "./componentes/AuthInput";

export function LoginPage() {
  return (
    <div>
      <h1>Iniciar sesión</h1>
      <p>Correo</p>
      <AuthInput />
      <p>Contraseña</p>
      <AuthInput />
    </div>
  );
}

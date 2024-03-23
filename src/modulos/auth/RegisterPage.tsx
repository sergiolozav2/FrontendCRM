import { AuthInput } from "./componentes/AuthInput";

export function RegisterPage() {
  return (
    <div>
      <h1>Registro de cuenta</h1>
      <p>Correo</p>
      <AuthInput />
      <p>Contraseña</p>
      <AuthInput />
    </div>
  );
}

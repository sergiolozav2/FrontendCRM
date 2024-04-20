import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
interface Props {
  valueLabel: string; //El valor de la opcion seleccionada que muestra ej: DELL (nombre)
  valueId: string; //El ID de la opcion seleccionada que guarda ej: 2 (marca_id)
  register: any;
  extraFunction?: (checked: boolean) => void;
}
export default function CheckBoxComponent({
  valueId,
  valueLabel,
  register,
  extraFunction,
}: Props) {
  const [checked, setChecked] = React.useState(false);
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            {...register(valueId, {})}
            checked={checked}
            onChange={() => {
              setChecked(!checked);
              extraFunction ? extraFunction(!checked) : null;
            }}
            value={valueId}
            //   key={agente.id}
          />
        }
        label={valueLabel}
      />
    </FormGroup>
  );
}

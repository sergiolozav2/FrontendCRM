import { Button, Grid } from "@mui/material";

interface Props {
  enviado: boolean;
  label: string;
  extraFuncion?:(e:any, opcion?:any)=>void;
  handleSubmit?:any;
  opcion?:any
}

export const ButtonSubmit = ({
  enviado,
  label,
  extraFuncion, handleSubmit, opcion
}: Props) => {
  return (
    <Grid item>
      <Button
        size="medium"
        variant="contained"
        type="submit"
        disabled={enviado}
        // onSubmit={()=>console.log("enviado")}
        onClick={extraFuncion?handleSubmit((e:any)=>extraFuncion(e, opcion)):()=>{}}
      >
        {label}
      </Button>
    </Grid>
  );
};

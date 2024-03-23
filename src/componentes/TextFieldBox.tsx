import { Grid, TextField, Typography } from "@mui/material";

interface Props {
    label:string;
    fieldValueName: string;
    useForm:any;
    variant?:any;
    disabled?:boolean;
    sm?:number;
    md?:number;
    xs?:number
    backgroundColor?:string
    messageError?:string;
    errors?:any;
    multiline?:boolean;
    rows?:number;
    onChangeField?:(e:any)=>void;
    // register:  any;
}

export const TextFieldBox= ({
    label, fieldValueName, messageError, onChangeField, useForm  ,errors, md, sm, disabled, xs, backgroundColor, multiline, variant, rows
}: Props) => {
  const {setValue, getValues, register}=useForm
   return (
    <Grid
    item
    xs={xs?xs:12} 
    md={md?md:6}
    sm={sm?sm:12}
  >
    <TextField
      label={label}
      defaultValue="---"
      sx={{ width: "100%", backgroundColor:backgroundColor?backgroundColor:"white" }}
      {...register(fieldValueName, {
        required: errors?true:false,
        minLength: { value: errors? 4:0, message: "error message" },
      })}
      disabled={disabled?disabled:false}
      required={errors?true:false}
      error={ errors?
        errors[fieldValueName]?.type === "required" ||
        errors[fieldValueName]?.type === "minLength"
          ? true
          : false:false
      }
      variant={variant??"outlined"}
      multiline={multiline??false}
      rows={rows??1}
      onFocus={() =>
        getValues(fieldValueName) === "---"
          ? setValue(fieldValueName, "")
          : null
      }
      onChange={(e)=>{
        onChangeField?onChangeField(e):null;
      }}
    />
    
    {errors?(errors[fieldValueName]?.type === "required" ||
      errors[fieldValueName]?.type === "minLength")  && (
      <Typography paddingLeft={2} paddingTop={1} fontSize={12.5} color={"#F36892"}>
       {messageError}
      </Typography>
    ):null}
  </Grid>
  );
};

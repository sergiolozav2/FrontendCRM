import { Grid, TextField, Typography, styled } from "@mui/material";

interface Props {
    label:string;
    name: string;
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

export const InputBox= ({
    label, name, messageError, onChangeField, useForm  ,errors, md, sm, disabled, xs, backgroundColor, multiline, variant, rows
}: Props) => {
  const {setValue, getValues, register}=useForm
   return (
    <Grid
    item
    xs={xs?xs:12} 
    md={md?md:6}
    sm={sm?sm:12}
    sx={{  }}
  >
    <Typography fontSize={10}>{label}</Typography>
    <TextField
      // label={label}
      defaultValue="---"
      sx={{ fontSize:"10px", width: "100%", backgroundColor:backgroundColor?backgroundColor:"#f9f9f9" }}
      {...register(name, {
        required: errors?true:false,
        minLength: { value: errors? 4:0, message: "error message" },
      })}
      disabled={disabled?disabled:false}
      required={errors?true:false}
      error={ errors?
        errors[name]?.type === "required" ||
        errors[name]?.type === "minLength"
          ? true
          : false:false
      }
      inputProps={
        {style:{fontSize:"11px", padding:"8px"}}
      }

      size="small"
      variant={variant??"standard"}
      multiline={multiline??false}
      rows={rows??1}
      onFocus={() =>
        getValues(name) === "---"
          ? setValue(name, "")
          : null
      }
      onChange={(e)=>{
        onChangeField?onChangeField(e):null;
      }}
    />
    
    {errors?(errors[name]?.type === "required" ||
      errors[name]?.type === "minLength")  && (
      <Typography paddingLeft={2} paddingTop={1} fontSize={12.5} color={"#F36892"}>
       {messageError}
      </Typography>
    ):null}
  </Grid>
  );
};

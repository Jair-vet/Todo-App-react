import { memo } from "react";

// Memo y enmarcamos todo el componente en parentesis
export const Small = memo(({ value }) => {

    console.log('Me volvi a dibujar ');

  return (
    <small>{ value }</small>
  )
})

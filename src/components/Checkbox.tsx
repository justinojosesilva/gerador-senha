import opcoes from "@/data/OpcoesCaracteres"
import { useState } from "react"

interface CheckboxProps {
  id: string
  texto: string
  selecionado: boolean
  lidaComMudanca: () => void
}

export default function Checkbox({id, texto, selecionado, lidaComMudanca}: CheckboxProps) {
  const checkboxId = `checkbox-${id}`
  return (
    <div className="flex text-xl gap-2">
      <input 
        type="checkbox" 
        id={checkboxId}
        checked={selecionado} 
        onChange={lidaComMudanca}/>
      <label htmlFor={checkboxId}>{texto}</label>
    </div>
  )
}
import { IconCopy } from "@tabler/icons-react"
import { useState } from "react"

interface ExibeSenhaProps {
  senha: string
}

export default function ExibeSenha({senha}: ExibeSenhaProps) {
  const [mostrarAviso, setMostrarAviso] = useState(false)

  const copiar = () => {
    navigator.clipboard.writeText(senha)
    setMostrarAviso(true)
    setTimeout(() => {
      setMostrarAviso(false)
    }, 2000)
  }

  return (
    <div className="mt-3">
      {senha.trim() !== "" && (
        <>
          <span className="font-bold text-lg">Senha Gerada:</span> 
          <div className="
            flex justify-between
            p-2 border bg-gray-100 rounded text-slate-800
          ">
            {senha}
            <IconCopy className="hover:text-blue-500 cursor-pointer" onClick={copiar}/>
          </div>
        </>
      )}

      {mostrarAviso && (
        <p className="mt-2 text-blue-500 text-center">Senha copiada para área de transferência!</p>
      )}
      
    </div>
  )
}
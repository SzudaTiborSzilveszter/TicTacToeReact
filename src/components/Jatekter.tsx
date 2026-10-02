import Elem from "./Elem";
import './JatekTer.css'

interface JatekterProps{
    lista: string[],
    kivalaszt:(index:number)=>void
}
function Jatekter({lista,kivalaszt}:JatekterProps){
    return(
        <>
            <div className="JatekTarolo">
            {
                lista.map((e,i)=>{
                    return (
                        <Elem elemem={e} index={i} key={i} kivalaszt={kivalaszt}/>
                    )
                })
            }
            </div>
        </>
    )
}

export default Jatekter
interface ElemProps{
    elemem: string,
    index: number,
    kivalaszt: (index: number) => void
}
function Elem({elemem,index, kivalaszt}:ElemProps){
    return(
        <>
            <button type="button" className="elem" onClick={() => { kivalaszt(index)}}>{elemem}</button>
        </>
    )
}

export default Elem
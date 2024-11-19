
/*
    TODO

    -titulos x
    -subtitulos x
    -distintos tamaños de texto x
    -texto de parrafos (normal) x
    -texto extragrande o destacado x

    -texto en diferentos pesos
*/


const Typography = () => {
  return (
    <div>
        {/* TITULOS */}
        <h1 className={"title-1"}>Titulo 1</h1>
        <h2 className={"title-2"}>Titulo 2</h2>
        {/* SUBTITULOS */}
        <h3 className={"subtitle-1"}>Subtitulo 1</h3>
        <h4 className={"subtitle-2"}>Subtitulo 2</h4>
        {/* TEXTO NORMAL */}
        <p className="text-normal">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit optio, earum ipsam corrupti mollitia, maxime, quia amet cupiditate facere ea sapiente harum repellendus ducimus reprehenderit! Sunt ad, voluptas dolorum delectus corrupti rerum exercitationem quos, assumenda, molestiae quia et. Qui, a culpa natus voluptatem veritatis nihil! Hic voluptatibus architecto eligendi earum?</p>
        {/* TAMAÑOS DE TEXTO */}
        {/* PEQUEÑO */}
        <div className="mt-7">
            <p className="text-small">Muestra de un texto pequeño</p>
            <p className="text-extra-small">Muestra de un texto extra pequeño</p>
        </div>
        {/* TEXTO EXTRA GRANDE */}
        <p className="text-jumbo">TEXTO EXTRAGRANDE BOLD</p>

        {/* EXTRA PEQUEÑO */}
    </div>
  )
}

export default Typography;
export default function GaleriaSorriso() {
  const destaque = {
    titulo: 'Exposição em Destaque',
    tema: 'Semana da Pátria',
    descricao:
      'Uma coleção inspirada na identidade brasileira, paisagens naturais e na força cultural do Brasil contemporâneo.',
    imagem:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop',
    botao: 'Visitar Exposição',
  };

  const colecoes = [
    {
      nome: 'Brasil Contemporâneo',
      imagem:
        'https://images.unsplash.com/photo-1516302350523-fec965b3ed97?q=80&w=1200&auto=format&fit=crop',
    },
    {
      nome: 'Vinhedos & Araucárias',
      imagem:
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    },
    {
      nome: 'Natureza Brasileira',
      imagem:
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop',
    },
    {
      nome: 'Agro & Terra',
      imagem:
        'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  return (
    <div className="bg-[#F4F0E8] text-[#2E2A26] min-h-screen font-serif">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#F4F0E8]/80 border-b border-[#DCCDB8]">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl tracking-[0.25em] uppercase font-light">
              Galeria Sorriso
            </h1>
          </div>

          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-[0.18em]">
            <a href="#home" className="hover:opacity-60 transition">
              Home
            </a>
            <a href="#destaque" className="hover:opacity-60 transition">
              Exposição
            </a>
            <a href="#colecoes" className="hover:opacity-60 transition">
              Coleções
            </a>
            <a href="#galeria360" className="hover:opacity-60 transition">
              Galeria 360°
            </a>
            <a href="#loja" className="hover:opacity-60 transition">
              Loja Online
            </a>
            <a href="#sobre" className="hover:opacity-60 transition">
              Sobre
            </a>
            <a href="#contato" className="hover:opacity-60 transition">
              Contato
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative h-screen overflow-hidden flex items-center justify-center"
      >
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1800&auto=format&fit=crop"
          alt="Galeria"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <p className="uppercase tracking-[0.35em] text-sm mb-6 opacity-80">
            Coleções Digitais Contemporâneas
          </p>

          <h2 className="text-5xl md:text-7xl leading-tight font-light mb-8">
            Arte para ambientes
            <br />
            com identidade
          </h2>

          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 leading-relaxed">
            Exposições digitais inspiradas no Brasil, na natureza e na
            sensibilidade contemporânea.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <a
              href="#colecoes"
              className="bg-[#F4F0E8] text-[#2E2A26] px-8 py-4 uppercase tracking-[0.2em] text-xs hover:bg-[#DCCDB8] transition"
            >
              Explorar Coleções
            </a>

            <a
              href="#loja"
              className="border border-white px-8 py-4 uppercase tracking-[0.2em] text-xs hover:bg-[#F4F0E8] hover:text-black transition"
            >
              Visitar Loja
            </a>
          </div>
        </div>
      </section>

      {/* DESTAQUE */}
      <section
        id="destaque"
        className="max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-16 items-center"
      >
        <div>
          <p className="uppercase tracking-[0.3em] text-xs text-[#667240] mb-4">
            {destaque.titulo}
          </p>

          <h3 className="text-5xl font-light mb-8 leading-tight">
            {destaque.tema}
          </h3>

          <p className="text-lg leading-relaxed text-neutral-700 mb-10">
            {destaque.descricao}
          </p>

          <a
            href="#loja"
            className="inline-block border border-[#667240] px-8 py-4 uppercase tracking-[0.2em] text-xs hover:bg-[#667240] hover:text-[#F4F0E8] transition"
          >
            {destaque.botao}
          </a>
        </div>

        <div className="overflow-hidden rounded-[2rem] shadow-2xl">
          <img
            src={destaque.imagem}
            alt={destaque.tema}
            className="w-full h-[650px] object-cover hover:scale-105 transition duration-700"
          />
        </div>
      </section>

      {/* COLEÇÕES */}
      <section id="colecoes" className="bg-[#EFE8DD] py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <p className="uppercase tracking-[0.3em] text-xs text-[#667240] mb-4">
              Coleções
            </p>

            <h3 className="text-5xl font-light mb-6">
              Exposições Permanentes
            </h3>

            <p className="max-w-2xl mx-auto text-neutral-600 leading-relaxed">
              Coleções digitais inspiradas na cultura brasileira, na natureza,
              nos vinhedos, no agronegócio e na estética contemporânea.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {colecoes.map((colecao, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[2rem]"
              >
                <img
                  src={colecao.imagem}
                  alt={colecao.nome}
                  className="w-full h-[520px] object-cover group-hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 bg-[#2E2A26]/30 group-hover:bg-[#2E2A26]/50 transition" />

                <div className="absolute bottom-0 left-0 p-10 text-white">
                  <h4 className="text-3xl font-light mb-4">
                    {colecao.nome}
                  </h4>

                  <button className="uppercase tracking-[0.2em] text-xs border border-white px-6 py-3 hover:bg-white hover:text-black transition">
                    Explorar Coleção
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA 360 */}
      <section
        id="galeria360"
        className="relative h-[85vh] overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1800&auto=format&fit=crop"
          alt="Galeria 360"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-6">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.3em] text-xs mb-6 opacity-80">
              Experiência Imersiva
            </p>

            <h3 className="text-5xl md:text-6xl font-light mb-8">
              Galeria Virtual 360°
            </h3>

            <p className="text-lg leading-relaxed opacity-90 mb-10">
              Explore ambientes artísticos panorâmicos e descubra coleções em
              uma experiência digital inspirada em galerias contemporâneas.
            </p>

            <button className="border border-white px-8 py-4 uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-black transition">
              Entrar na Galeria
            </button>
          </div>
        </div>
      </section>

      {/* LOJA */}
      <section id="loja" className="py-28 px-6 bg-[#DCCDB8]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-[#667240] mb-4">
            Loja Online
          </p>

          <h3 className="text-5xl font-light mb-8">
            Adquira as coleções digitais
          </h3>

          <p className="text-lg text-neutral-700 leading-relaxed mb-10 max-w-3xl mx-auto">
            As obras estão disponíveis para download digital imediato através da
            loja oficial na Etsy.
          </p>

          <a
            href="https://www.etsy.com"
            target="_blank"
            className="bg-[#667240] text-[#F4F0E8] px-10 py-5 uppercase tracking-[0.2em] text-xs hover:opacity-80 transition"
          >
            Visitar Loja na Etsy
          </a>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-[#667240] mb-4">
            Sobre
          </p>

          <h3 className="text-5xl font-light mb-8">
            Curadoria visual contemporânea
          </h3>

          <p className="text-lg leading-relaxed text-neutral-700 max-w-3xl mx-auto">
            Um espaço dedicado à criação de coleções digitais inspiradas na
            cultura brasileira, nos cenários naturais e na sensibilidade
            estética contemporânea.
          </p>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-28 px-6 bg-[#667240] text-[#F4F0E8]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-xs opacity-60 mb-4">
            Contato
          </p>

          <h3 className="text-5xl font-light mb-8">
            Entre em contato
          </h3>

          <p className="text-lg opacity-80 mb-10">
            Para colaborações, exposições, coleções especiais e informações.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6 text-sm uppercase tracking-[0.15em]">
            <a href="mailto:contato@galeriasorriso.com">
              contato@galeriasorriso.com
            </a>

            <span className="hidden md:block">•</span>

            <a href="https://instagram.com" target="_blank">
              Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

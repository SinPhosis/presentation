import GlassCard from "@/app/components/Glass_Card";

const Author = () => {
  return (
    <section
      id="author"
      className="relative mx-auto min-h-full max-w-7xl px-5 py-28 lg:px-12"
    >
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <p className="section-label">02 / ЗОХИОЛЧ</p>

          <h2 className="mt-5 text-5xl font-light tracking-tight sm:text-7xl">
            Л. Өлзийтөгс
          </h2>

          <p className="mt-8 max-w-xl text-base leading-8 text-white/55">
            Лувсандоржийн Өлзийтөгс нь 1972 онд Дархан хотод төрсөн Монголын
            зохиолч, яруу найрагч юм. Тэрээр 1996 онд Монгол мэдлэгийн их
            сургуулийг судлаач мэргэжлээр төгссөн бөгөөд яруу найраг, өгүүллэг,
            эсээ, романы төрлөөр уран бүтээл туурвисан.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
            <GlassCard>
              <p className="text-2xl">1972</p>
              <p className="mt-4 text-xs text-white/40">Төрсөн</p>
              <p className="mt-1 text-sm">Дархан хот</p>
            </GlassCard>

            <GlassCard>
              <p className="text-2xl">1996</p>
              <p className="mt-4 text-xs text-white/40">Боловсрол</p>
              <p className="mt-1 text-sm">Судлаач</p>
            </GlassCard>

            <GlassCard className="col-span-2 sm:col-span-1">
              <p className="text-2xl">✦</p>
              <p className="mt-4 text-xs text-white/40">Мэргэжил</p>
              <p className="mt-1 text-sm">Зохиолч, яруу найрагч</p>
            </GlassCard>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-cyan-200/10 via-blue-900/20 to-transparent p-8">
            <div className="flex h-full flex-col justify-between">
              <div className="text-right text-xs uppercase tracking-[0.3em] text-white/20">
                L. Ulziitugs
              </div>

              <div>
                <div className="mb-6 h-px w-20 bg-cyan-200/40" />
                <p className="text-3xl font-light leading-tight text-white/80">
                  Л. Өлзийтөгс
                </p>
                <p className="mt-3 max-w-sm text-sm leading-7 text-white/40">
                  Яруу найраг, хүүрнэл зохиолын олон бүтээлээрээ Монголын орчин
                  үеийн уран зохиолд өөрийн байр суурийг бий болгосон уран
                  бүтээлч.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -right-3 h-28 w-28 rounded-full border border-cyan-200/10 bg-cyan-200/5 blur-sm" />
        </div>
      </div>
    </section>
  );
};

export default Author;

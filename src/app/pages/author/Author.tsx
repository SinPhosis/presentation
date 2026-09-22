import Image from "next/image";
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

        <div className="relative mx-auto w-full max-w-md">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] border border-white/20 bg-[#041c2d] shadow-[0_30px_100px_rgba(0,0,0,0.4)]">
            <Image
              src="/images/yada.jpg"
              alt="Монголын зохиолч Л. Өлзийтөгс"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 460px"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#031827]/90 via-[#031827]/10 to-cyan-200/10" />

            <div className="absolute inset-x-7 top-7 flex items-center justify-between">
              <span className="rounded-full border border-white/20 bg-[#031827]/30 px-3 py-1 text-[9px] uppercase tracking-[0.25em] text-white/60 backdrop-blur-md">
                Монголын зохиолч
              </span>

              <span className="text-xs uppercase tracking-[0.25em] text-white/50">
                L. Ulziitugs
              </span>
            </div>

            <div className="absolute bottom-8 left-8 right-8">
              <div className="mb-4 h-px w-16 bg-cyan-200/60" />

              <p className="text-3xl font-light text-white">Л. Өлзийтөгс</p>

              <p className="mt-2 text-sm leading-6 text-white/65">
                Зохиолч, яруу найрагч
              </p>
            </div>
          </div>

          <div className="pointer-events-none absolute -bottom-6 -right-4 h-32 w-32 rounded-full border border-cyan-200/20 bg-cyan-200/10 blur-sm" />
          <div className="pointer-events-none absolute -left-5 top-1/3 h-20 w-20 rounded-full bg-blue-400/10 blur-2xl" />
        </div>
      </div>
    </section>
  );
};

export default Author;

"use client";

import GlassCard from "@/app/components/Glass_Card";

const Characters = () => {
  return (
    <section
      id="characters"
      className="relative mx-auto min-h-full max-w-7xl px-5 py-28 lg:px-12"
    >
      <div className="mb-14">
        <p className="section-label">04 / ДҮРҮҮД</p>

        <h2 className="mt-5 text-5xl font-light sm:text-7xl">
          Дүрийн <span className="text-cyan-200/60">ертөнц.</span>
        </h2>

        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
          “Аквариум” өгүүллэгийн дүрүүдээр дамжуулан хүний зан чанар, гэр бүлийн
          харилцаа болон хүмүүсийн далд талыг харуулна.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <GlassCard className="group min-h-[300px] transition duration-500 hover:-translate-y-2 hover:bg-white/[0.1]">
          <div className="flex h-full flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-cyan-200/40">
                Гол дүр
              </span>
              <h3 className="mt-6 text-3xl font-light">Өгүүлэгч эмэгтэй</h3>
              <p className="mt-5 text-sm leading-7 text-white/45">
                Зохиолын гол дүр бөгөөд гэнэт загас болон хувирч, аквариумд
                амьдрах болдог. Тэр гэр бүлээ ажиглахын зэрэгцээ хүмүүсийн далд
                тал болон өөрийнхөө тухай олон зүйлийг ойлгож эхэлдэг.
              </p>
            </div>
            <div className="mt-10 text-right text-5xl opacity-20 transition group-hover:opacity-40">
              🐟
            </div>
          </div>
        </GlassCard>

        <GlassCard className="group min-h-[300px] transition duration-500 hover:-translate-y-2 hover:bg-white/[0.1]">
          <div className="flex h-full flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-cyan-200/40">
                Гэр бүл
              </span>
              <h3 className="mt-6 text-3xl font-light">Нөхөр</h3>
              <p className="mt-5 text-sm leading-7 text-white/45">
                Эхнэрээ алга болсны дараа хүүхдүүддээ илүү их анхаарал тавьж,
                тэднийг халамжилдаг. Гэвч өгүүлэгчийн хамгийн сайн найзтай
                холбоотой нууц нь түүний өөр нэг талыг харуулдаг.
              </p>
            </div>
            <div className="mt-10 text-right text-5xl opacity-20 transition group-hover:opacity-40">
              ♡
            </div>
          </div>
        </GlassCard>

        <GlassCard className="group min-h-[300px] transition duration-500 hover:-translate-y-2 hover:bg-white/[0.1]">
          <div className="flex h-full flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-cyan-200/40">
                Гэр бүл
              </span>
              <h3 className="mt-6 text-3xl font-light">Охин</h3>
              <p className="mt-5 text-sm leading-7 text-white/45">
                Зургаан настай охин ээжийгээ алга болсны дараа загасыг ээжтэйгээ
                адилтган хардаг. Тэр ээжийгээ буцааж өгөхийг хүсэж, түүнд
                зориулан гурван хүсэл мөрөөддөг.
              </p>
            </div>
            <div className="mt-10 text-right text-5xl opacity-20 transition group-hover:opacity-40">
              ✦
            </div>
          </div>
        </GlassCard>

        <GlassCard className="group min-h-[300px] transition duration-500 hover:-translate-y-2 hover:bg-white/[0.1]">
          <div className="flex h-full flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-cyan-200/40">
                Гэр бүл
              </span>
              <h3 className="mt-6 text-3xl font-light">Хүү</h3>
              <p className="mt-5 text-sm leading-7 text-white/45">
                Арван хоёр настай хүү эхэндээ сахилгагүй боловч ээж нь алга
                болсны дараа илүү хариуцлагатай болдог. Тэр мөн шүлэг бичих
                сонирхолтой бөгөөд өөрийн гэсэн хүсэл, сонирхолтой болох нь
                илэрдэг.
              </p>
            </div>
            <div className="mt-10 text-right text-5xl opacity-20 transition group-hover:opacity-40">
              ✎
            </div>
          </div>
        </GlassCard>

        <GlassCard className="group min-h-[300px] transition duration-500 hover:-translate-y-2 hover:bg-white/[0.1]">
          <div className="flex h-full flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-cyan-200/40">
                Төрөл садан
              </span>
              <h3 className="mt-6 text-3xl font-light">Ах нар</h3>
              <p className="mt-5 text-sm leading-7 text-white/45">
                Өгүүлэгчийн ах нар түүнийг олохын тулд санаа тавьж, хувийн
                мөрдөгч хөлслөхөөр хүртэл оролддог. Харин дараа нь нөхөртэй нь
                зөрчилдөж, өөрсдийн өөр талыг харуулдаг.
              </p>
            </div>
            <div className="mt-10 text-right text-5xl opacity-20 transition group-hover:opacity-40">
              ◇
            </div>
          </div>
        </GlassCard>

        <GlassCard className="group min-h-[300px] transition duration-500 hover:-translate-y-2 hover:bg-white/[0.1]">
          <div className="flex h-full flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-cyan-200/40">
                Нууц харилцаа
              </span>
              <h3 className="mt-6 text-3xl font-light">Хамгийн сайн найз</h3>
              <p className="mt-5 text-sm leading-7 text-white/45">
                Өгүүлэгчийн хамгийн сайн найз боловч нөхөртэй нь нууц
                харилцаатай байдаг. Түүний үйлдэл нь хүний гаднаа харуулдаг дүр
                төрх болон дотоод үнэн хоёр өөр байж болохыг харуулдаг.
              </p>
            </div>
            <div className="mt-10 text-right text-5xl opacity-20 transition group-hover:opacity-40">
              ◌
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default Characters;

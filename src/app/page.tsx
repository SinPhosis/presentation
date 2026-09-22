"use client";

import { useEffect, useState, type ReactNode } from "react";
import GlassCard from "./components/Glass_Card";
import Header, { sections } from "./components/Header";
import Author from "./pages/author/Author";
import Characters from "./pages/characters/page";
import ReaderVideo from "./pages/YT/Yt";

function Bubble({
  left,
  delay,
  size,
}: {
  left: string;
  delay: string;
  size: number;
}) {
  return (
    <span
      className="bubble"
      style={{ left, width: size, height: size, animationDelay: delay }}
    />
  );
}

function Fish({
  className = "",
  flip = false,
  delay = "0s",
}: {
  className?: string;
  flip?: boolean;
  delay?: string;
}) {
  return (
    <div
      className={`fish ${flip ? "fish-flipped" : ""} ${className}`}
      style={{ animationDelay: delay }}
    >
      <div className="fish-body">
        <div className="fish-eye" />
        <div className="fish-fin" />
      </div>
      <div className="fish-tail" />
    </div>
  );
}

function Slide({ children, label }: { children: ReactNode; label: string }) {
  return (
    <div
      role="group"
      aria-roledescription="slide"
      aria-label={label}
      className="h-full w-full shrink-0 overflow-y-auto overscroll-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {children}
    </div>
  );
}

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSection = sections[activeIndex];

  const goToSlide = (id: string) => {
    const slideIndex = sections.findIndex((section) => section.id === id);

    if (slideIndex !== -1) {
      setActiveIndex(slideIndex);
    }
  };

  const nextSlide = () => {
    setActiveIndex((index) => Math.min(index + 1, sections.length - 1));
  };

  const previousSlide = () => {
    setActiveIndex((index) => Math.max(index - 1, 0));
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;

      // Keep normal keyboard behavior for interactive elements.
      if (
        target.closest(
          "button, a, input, textarea, select, [contenteditable='true']",
        )
      ) {
        return;
      }

      if (event.code === "ArrowRight" || event.code === "Space") {
        event.preventDefault();
        setActiveIndex((index) => Math.min(index + 1, sections.length - 1));
      }

      if (event.code === "ArrowLeft") {
        event.preventDefault();
        setActiveIndex((index) => Math.max(index - 1, 0));
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <main className="relative h-dvh overflow-hidden bg-[#031827] text-white">
      {/* Ambient water background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="water-gradient absolute inset-0" />
        <div className="water-light" />

        <div className="absolute inset-0 opacity-40">
          <Bubble left="8%" delay="0s" size={8} />
          <Bubble left="15%" delay="2s" size={5} />
          <Bubble left="27%" delay="4s" size={11} />
          <Bubble left="42%" delay="1s" size={6} />
          <Bubble left="57%" delay="5s" size={9} />
          <Bubble left="68%" delay="3s" size={5} />
          <Bubble left="79%" delay="6s" size={12} />
          <Bubble left="91%" delay="2.5s" size={7} />
        </div>

        <div className="absolute bottom-0 h-40 w-full bg-gradient-to-t from-[#02101b] to-transparent" />
      </div>

      <Header active={activeSection.id} onNavigate={goToSlide} />

      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="Аквариум"
        className="flex h-full transform-gpu will-change-transform transition-[transform] duration-[1700ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
        style={{
          transform: `translate3d(-${activeIndex * 100}%, 0, 0)`,
        }}
      >
        <Slide label="1 of 6: Аквариум">
          <section
            id="intro"
            className="relative flex min-h-full items-center px-5 pt-28 lg:px-12"
          >
            <Fish
              className="left-[-40px] top-[28%] scale-75 opacity-30 sm:left-[5%] sm:scale-100"
              delay="-2s"
            />
            <Fish
              className="right-[-20px] top-[60%] scale-50 opacity-20 sm:right-[8%] sm:scale-75"
              flip
              delay="-5s"
            />

            <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="relative z-10">
                <p className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-cyan-300/70">
                  <span className="h-px w-10 bg-cyan-300/40" />
                  Л. Өлзийтөгс · Өгүүллэг
                </p>

                <h1 className="max-w-4xl text-6xl font-light leading-[0.9] tracking-[-0.06em] sm:text-8xl lg:text-[9rem]">
                  АКВАРИУМ
                </h1>

                <p className="mt-8 max-w-xl text-base leading-8 text-white/50 sm:text-lg">
                  Л. Өлзийтөгсийн “Аквариум” өгүүллэг нь хүний дотоод ертөнц,
                  гэр бүлийн харилцаа, нууцлаг тал болон өөрийгөө танин мэдэх
                  тухай эргэцүүллийг нэгэн эмэгтэйн ер бусын хувиралтай холбон
                  өгүүлнэ.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {["Дотоод ертөнц", "Харилцаа", "Нууц", "Өөрийгөө таних"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-white/40 backdrop-blur-md"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>

                <button
                  onClick={nextSlide}
                  className="group mt-10 flex items-center gap-4 rounded-full border border-cyan-200/20 bg-cyan-200/10 px-6 py-3 text-sm backdrop-blur-md transition hover:bg-cyan-200/20"
                >
                  Зохиолчийн тухай
                  <span className="transition-transform group-hover:translate-x-2">
                    →
                  </span>
                </button>
              </div>

              <div className="relative mx-auto aspect-square w-full max-w-[500px]">
                <div className="aquarium-glass absolute inset-0 overflow-hidden rounded-[3rem] border border-white/20 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-b from-cyan-300/[0.08] to-blue-950/40" />

                  <div className="absolute inset-x-8 top-8 text-center">
                    <p className="text-[9px] uppercase tracking-[0.35em] text-white/25">
                      Дотоод ертөнц
                    </p>
                  </div>

                  <div className="absolute bottom-0 h-1/4 w-full bg-gradient-to-t from-[#031827] to-transparent" />
                  <Fish className="left-[12%] top-[35%] scale-90" delay="-1s" />
                  <Fish
                    className="right-[8%] top-[55%] scale-50"
                    flip
                    delay="-4s"
                  />
                  <div className="absolute bottom-0 left-[10%] h-20 w-20 rounded-full bg-cyan-200/10 blur-2xl" />
                  <div className="absolute bottom-0 right-[10%] h-32 w-32 rounded-full bg-blue-400/10 blur-3xl" />
                  <Bubble left="20%" delay="1s" size={7} />
                  <Bubble left="45%" delay="4s" size={10} />
                  <Bubble left="70%" delay="2s" size={6} />

                  <div className="absolute bottom-8 left-8 right-8 border-t border-white/10 pt-4">
                    <p className="text-center text-xs leading-6 text-white/30">
                      “Хүн бүрийн дотор бусдад харагддаггүй нэгэн ертөнц
                      байдаг.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Slide>
        <Slide label="2 of 6: Л. Өлзийтөгс">
          <Author />
        </Slide>
        <Slide label="3 of 7: Зохиолын уншлага">
          <ReaderVideo youtubeUrl="https://www.youtube.com/watch?v=W8ivqHA0wfA" />
        </Slide>
        <Slide label="3 of 6: Үйл явдал">
          <section
            id="story"
            className="relative mx-auto min-h-full max-w-6xl px-5 py-28 lg:px-12"
          >
            <div className="mx-auto max-w-3xl text-center">
              <p className="section-label justify-center">04 / ҮЙЛ ЯВДАЛ</p>

              <h2 className="mt-5 text-5xl font-light tracking-tight sm:text-7xl">
                Аквариумын
                <br />
                <span className="text-cyan-200/60">цаадах амьдрал.</span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
                Нэгэн эмэгтэй загас болон хувирч, гэр бүлийнхээ амьдралыг
                аквариумын цаанаас ажиглах болсон тухай өгүүллэг.
              </p>
            </div>

            <div className="mx-auto mt-14 grid max-w-5xl gap-4 md:grid-cols-2">
              {[
                {
                  title: "Загас болсон нь",
                  text: "Өгүүлэгч эмэгтэй өөрийн худалдаж авсан аквариумд орших ер бусын хувь тавилантай нүүр тулж, өөрийгөө загас болсноо ойлгоно. Тэр аквариумыг өөрийн шинэ орон зай болгон хүлээн авч эхэлдэг.",
                },
                {
                  title: "Гэр бүлээ ажиглах нь",
                  text: "Түүний гэр бүл ээж, эхнэр нь алга болсныг мэдэхгүй бөгөөд түүнийг хайж эхэлнэ. Харин өгүүлэгч загасны дүрээрээ гэрийнхнээ өдөр бүр ажиглаж, тэдний амьдралд гарч буй өөрчлөлтүүдийг харна.",
                },
                {
                  title: "Хүүхдүүдийн өөрчлөлт",
                  text: "Зургаан настай охин загасыг ээжтэйгээ адилтгаж, ээжийгээ буцааж өгөхийг хүссэн гурван хүслээ түүнд ярьдаг. Арван хоёр настай хүү ч мөн аажмаар илүү хариуцлагатай болж эхэлнэ.",
                },
                {
                  title: "Нуугдсан талууд",
                  text: "Өгүүлэгч гэр бүлийнхээ хүмүүсийг ажиглах тусам тэдний урьд нь анзаараагүй зан чанар, хүсэл сонирхол, нууцыг олж харна. Нөхрийнх нь болон хамгийн сайн найзынх нь харилцаа түүний ойлголтыг улам өөрчилнө.",
                },
                {
                  title: "Хүн бүрийн хоёр тал",
                  text: "Өгүүлэгч хүн бүр бусдад өөрийн сонгосон дүрээ харуулдаг болохыг ойлгож, хүний гадна харагдах байдал болон дотоод ертөнц үргэлж адил байдаггүйг эргэцүүлнэ.",
                },
                {
                  title: "Хүн болж сэрэх нь",
                  text: "Хэсэг хугацааны дараа өгүүлэгч дахин хүн болж сэрнэ. Гэвч аквариумд байхдаа харсан зүйлс нь түүний гэр бүл, амьдрал болон өөрийгөө өмнөхөөсөө өөрөөр харахад хүргэнэ.",
                },
                {
                  title: "Эцсийн ойлголт",
                  text: "Тэр аквариум бүх үнэнийг харуулсан мэт боловч үнэндээ бүхнийг харуулж чадаагүйг ойлгоно. Бусдын нууцыг тайлахын оронд өөрийгөө танин мэдэх нь илүү чухал байж болохыг ухаарна.",
                },
              ].map((item, index) => (
                <article
                  key={item.title}
                  className={`group relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-white/[0.1] via-cyan-200/[0.035] to-blue-950/[0.12] p-6 shadow-xl backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-cyan-200/30 hover:bg-white/[0.1] ${
                    index === 6 ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-cyan-200/10 blur-3xl transition group-hover:bg-cyan-200/20" />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="text-xs tracking-[0.25em] text-cyan-200/45">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="h-px w-10 bg-cyan-200/25" />
                    </div>

                    <h3 className="mt-8 text-2xl font-light text-white/90">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-white/45 sm:text-base">
                      {item.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </Slide>
        <Slide label="5 of 7: Дүрүүд">
          <Characters />
        </Slide>
        <Slide label="6 of 7: Гол санаа">
          <section
            id="themes"
            className="relative mx-auto min-h-full max-w-7xl px-5 py-28 lg:px-12"
          >
            <div className="mb-14">
              <p className="section-label">06 / ГОЛ САНАА</p>
              <h2 className="mt-5 max-w-3xl text-5xl font-light sm:text-7xl">
                Шилэн хананы
                <br />
                <span className="text-cyan-200/60">цаадах санаа.</span>
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                [
                  "01",
                  "Хязгаарлалт",
                  "Хүн өөрийн орчиндоо хэрхэн хязгаарлагддаг тухай.",
                ],
                [
                  "02",
                  "Эрх чөлөө",
                  "Харагдаж байгаа ертөнцөд хүрч чадах эсэх тухай.",
                ],
                [
                  "03",
                  "Тусгаарлалт",
                  "Бусдаас болон өөрөөсөө тусгаарлагдах мэдрэмж.",
                ],
                ["04", "Хувирал", "Хүний дотоод ертөнцөд гарч болох өөрчлөлт."],
              ].map(([number, title, text]) => (
                <GlassCard
                  key={number}
                  className="min-h-[260px] transition duration-500 hover:-translate-y-2"
                >
                  <span className="text-xs text-cyan-200/30">{number}</span>
                  <h3 className="mt-12 text-2xl font-light">{title}</h3>
                  <p className="mt-5 text-sm leading-7 text-white/40">{text}</p>
                </GlassCard>
              ))}
            </div>

            <div className="mt-16 rounded-[2rem] border border-cyan-200/10 bg-cyan-200/[0.04] p-8 text-center backdrop-blur-xl sm:p-12">
              <p className="mx-auto max-w-3xl text-lg font-light leading-8 text-white/65 sm:text-2xl">
                “Аквариум” гэдэг нь зөвхөн усан доторх жижиг ертөнц биш —
                <span className="text-cyan-200/80">
                  {" "}
                  хүний өөрийнх нь орших орон зайг
                </span>{" "}
                бодох боломжийг өгдөг бэлгэдэл юм.
              </p>
            </div>
          </section>
        </Slide>
        <Slide label="7 of 7: Дүгнэлт">
          <section
            id="ending"
            className="relative flex min-h-full items-center justify-center px-5 py-28"
          >
            <Fish
              className="left-[5%] top-[30%] scale-75 opacity-20"
              delay="-3s"
            />
            <Fish
              className="right-[5%] bottom-[30%] scale-50 opacity-20"
              flip
              delay="-7s"
            />

            <div className="relative z-10 mx-auto max-w-4xl text-center">
              <p className="section-label justify-center">07 / ДҮГНЭЛТ</p>
              <h2 className="mt-7 text-6xl font-light leading-[0.95] tracking-tight sm:text-8xl">
                Аквариумын
                <br />
                цаадах амьдрал.
              </h2>

              <p className="mx-auto mt-10 max-w-2xl text-base leading-8 text-white/45">
                “Аквариум” өгүүллэгт нэгэн эмэгтэй загас болон хувирч,
                аквариумын цаанаас гэр бүлийнхээ амьдралыг ажиглана. Энэ
                хугацаанд тэр нөхөр, хүүхдүүд, ах нар болон хамгийн сайн
                найзынхаа өөр өөр талыг олж харж, хүмүүсийн гаднаа харуулдаг дүр
                төрхөөс гадна нуугдсан ертөнц байдгийг ойлгоно.
              </p>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/45">
                Эцэст нь тэр хүн болж сэрсэн ч аквариумд байхдаа ойлгосон зүйлс
                нь түүний амьдралыг өөрөөр харахад хүргэнэ. Тэр бусдыг тайлахын
                оронд өөрийгөө танин мэдэхийн чухлыг ойлгож эхэлдэг.
              </p>
            </div>
          </section>

          <footer className="border-t border-white/5 px-5 py-10 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-white/20">
              Аквариум · Л. Өлзийтөгс
            </p>
          </footer>
        </Slide>
      </div>

      <button
        type="button"
        onClick={previousSlide}
        disabled={activeIndex === 0}
        aria-label="Previous slide"
        className="fixed left-4 top-1/2 z-50 -translate-y-1/2 rounded-full border border-white/20 bg-[#031827]/80 px-4 py-3 text-2xl backdrop-blur transition hover:bg-cyan-200/20 disabled:cursor-not-allowed disabled:opacity-30 sm:left-6"
      >
        ←
      </button>

      <button
        type="button"
        onClick={nextSlide}
        disabled={activeIndex === sections.length - 1}
        aria-label="Next slide"
        className="fixed right-4 top-1/2 z-50 -translate-y-1/2 rounded-full border border-white/20 bg-[#031827]/80 px-4 py-3 text-2xl backdrop-blur transition hover:bg-cyan-200/20 disabled:cursor-not-allowed disabled:opacity-30 sm:right-6"
      >
        →
      </button>

      <div className="pointer-events-none fixed bottom-5 left-1/2 z-40 -translate-x-1/2 text-center">
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/45">
          {activeSection.number} / {sections.length.toString().padStart(2, "0")}{" "}
          · {activeSection.title}
        </p>
      </div>
    </main>
  );
}

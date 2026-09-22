type ReaderVideoProps = {
  youtubeUrl: string;
};

function getYouTubeEmbedUrl(url: string) {
  try {
    const parsedUrl = new URL(url);
    let videoId = "";

    if (parsedUrl.hostname.includes("youtu.be")) {
      videoId = parsedUrl.pathname.replace("/", "");
    }

    if (parsedUrl.hostname.includes("youtube.com")) {
      videoId =
        parsedUrl.searchParams.get("v") ||
        parsedUrl.pathname.split("/embed/")[1] ||
        parsedUrl.pathname.split("/shorts/")[1] ||
        "";
    }

    if (!/^[a-zA-Z0-9_-]{11}$/.test(videoId)) {
      return null;
    }

    return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`;
  } catch {
    return null;
  }
}

export default function ReaderVideo({ youtubeUrl }: ReaderVideoProps) {
  const embedUrl = getYouTubeEmbedUrl(youtubeUrl);

  return (
    <section
      id="reader"
      className="relative mx-auto flex min-h-full max-w-6xl items-center px-5 py-28 lg:px-12"
    >
      <div className="mx-auto w-full">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label justify-center">03 / ЗОХИОЛЫН УНШЛАГА</p>

          <h2 className="mt-5 text-5xl font-light tracking-tight sm:text-7xl">
            Аквариумын
            <br />
            <span className="text-cyan-200/60">уншлага.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
            Л. Өлзийтөгсийн “Аквариум” өгүүллэгийн уншлагыг сонсож, зохиолын уур
            амьсгалыг мэдрээрэй.
          </p>
        </div>

        <div className="relative mx-auto mt-12 max-w-5xl overflow-hidden rounded-[2rem] border border-white/20 bg-gradient-to-br from-white/[0.12] via-cyan-200/[0.05] to-blue-950/[0.2] p-2 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
          <div className="pointer-events-none absolute -left-16 -top-16 h-44 w-44 rounded-full bg-cyan-200/15 blur-3xl" />

          <div className="relative aspect-video overflow-hidden rounded-[1.5rem] bg-[#020d17]">
            {embedUrl ? (
              <iframe
                src={embedUrl}
                title="Аквариум өгүүллэгийн уншлага"
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <div className="grid h-full place-items-center p-8 text-center">
                <p className="max-w-sm text-sm leading-7 text-white/50">
                  Please add a valid YouTube URL to the{" "}
                  <code className="text-cyan-200">youtubeUrl</code> prop.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

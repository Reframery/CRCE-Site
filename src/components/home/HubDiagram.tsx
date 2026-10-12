
export default function HubDiagram() {
  return (
    <div className="mx-auto my-12 max-w-3xl px-4">
      <div className="rounded-2xl border-2 border-[#7A003C] bg-white/60 p-6 text-center shadow-sm">
        <div className="rounded-xl bg-[#7A003C] px-6 py-5 text-white">
          <h3 className="text-xl font-bold">
            CRCE
          </h3>
          <p className="mt-1 text-sm text-white/85">
            Centre for Research on Community-oriented Entrepreneurship
          </p>
          <p className="mt-2 text-sm">
            Research · Mentorship · Interdisciplinary Learning
          </p>
        </div>

        <div className="mx-auto h-10 w-0.5 bg-[#7A003C]" />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-xl border-2 border-[#7A003C] bg-[#f5ede2] p-5">
            <h4 className="text-lg font-bold text-[#7A003C]">
              Reframery
            </h4>
            <p className="mt-2 text-sm text-[#4a4a4a]">
              Supporting inclusive and sustainable entrepreneurship.
            </p>
          </div>

          <div className="rounded-xl border-2 border-[#7A003C] bg-[#f5ede2] p-5">
            <h4 className="text-lg font-bold text-[#7A003C]">
              RISE
            </h4>
            <p className="mt-2 text-sm text-[#4a4a4a]">
              Empowering entrepreneurs through learning and mentorship.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

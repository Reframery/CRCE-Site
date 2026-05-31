export const SectionLabel = ({ text }: { text: string }) => (
  <div className="mb-4 flex items-center justify-center gap-3">
    <div className="bg-maroon h-px w-10 rounded-full" />
    <span className="text-maroon text-xs font-bold tracking-widest uppercase">
      {text}
    </span>
    <div className="bg-maroon h-px w-10 rounded-full" />
  </div>
)

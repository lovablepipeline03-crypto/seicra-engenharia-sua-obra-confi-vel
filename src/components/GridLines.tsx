const GridLines = () => {
  return (
    <div className="grid-lines pointer-events-none absolute inset-0 z-[1]" aria-hidden="true">
      <div className="container h-full relative">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-foreground/[0.04]" />
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-foreground/[0.04]" />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-foreground/[0.04]" />
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-foreground/[0.04]" />
        <div className="absolute right-0 top-0 bottom-0 w-px bg-foreground/[0.04]" />
      </div>
    </div>
  );
};

export default GridLines;

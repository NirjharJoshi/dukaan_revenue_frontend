function Link({ icon, title, href }) {
  return (
    <a
      href={href}
      className="flex gap-2 hover:bg-slate-400/15 group p-2 rounded-lg mb-2"
    >
      <span className="hover:text-slate-400">{icon}</span>
      <span className="font-bold group-hover:text-slate-300">{title}</span>
    </a>
  );
}

export default Link;

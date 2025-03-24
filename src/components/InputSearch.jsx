import { IconSearch } from "./Icons";

function InputSearch({ placeholder, variant = "default" }) {
  const variants = {
    default: "bg-neutral-200",
    transparent: "bg-transparent",
  };

  const style = variants[variant];
  return (
    <div className="relative rounded-md border-2 border-neutral-200">
      <input
        className={
          "pl-10 pr-4 h-11 w-fit placeholder:text-sm md:placeholder:text-normal md:w-sm md:placeholder:text-slate-500/60 " +
          style
        }
        type="text"
        placeholder={placeholder}
      />
      <div className="absolute pl-2 top-1/2 -translate-y-1/2 text-slate-500">
        <IconSearch />
      </div>
    </div>
  );
}

export default InputSearch;

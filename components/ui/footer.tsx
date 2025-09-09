import { EMAIL, PHONE_NUMBER } from "@/constants";
import { TbMail, TbPhone, TbRoute } from "react-icons/tb";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-black/5">
            <TbRoute className="h-5 w-5" />
          </div>
          <div>
            <div className="font-semibold">Studio HR</div>
            <div className="text-xs text-black/60">Recording • Mixing/Mastering • Production</div>
          </div>
        </div>
        <div className="text-sm text-black/70 flex items-center gap-6">
          <a className="flex items-center gap-2 hover:opacity-80" href={`tel:${PHONE_NUMBER}`}>
            <TbPhone className="h-4 w-4" /> {PHONE_NUMBER}
          </a>
          <a className="flex items-center gap-2 hover:opacity-80" href={`mailto:${EMAIL}`}>
            <TbMail className="h-4 w-4" /> {EMAIL}
          </a>
        </div>
      </div>
    </footer>
  );
}

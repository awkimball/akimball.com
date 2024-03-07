export default function Footer() {
    return (
        <div className="w-5/6 mx-auto mb-4 h-auto">
            <div className="border border-slate-600 rounded-xl p-1 px-4 text-xl sm:text-md text-center text-slate-400">
                <div className="">© 2024 Addison Kimball</div>
                <div className="flex flex-wrap justify-center text-nowrap">Made with&nbsp;
                    <a className="hover:underline" href="https://react.dev">React</a>
                    <span>,&nbsp;</span>
                    <a className="hover:underline" href="https://nextjs.org">Next.js</a>,
                    <span>&nbsp;and&nbsp;</span>
                    <a className="hover:underline" href="https://tailwindcss.com">Tailwind CSS</a>
                </div>
            </div>
         </div>
    )
}
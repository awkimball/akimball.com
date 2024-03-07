export default function Footer() {
    return (
        <div className="w-4/6 mx-auto mb-4 h-auto">
            <div className="border border-slate-500 rounded-xl p-1 px-4 text-xl sm:text-md text-center">
                <div className="text-slate-400">© 2024 Addison Kimball</div>
                <div className="flex flex-wrap justify-center text-nowrap text-slate-500 border-b-1 border-slate-600">
                    <span>Made with&nbsp;</span>
                    <a className="hover:underline" href="https://react.dev">React</a>
                    <span>,&nbsp;</span>
                    <span><a className="hover:underline" href="https://nextjs.org">Next.js</a>,</span>
                    <span>&nbsp;and&nbsp;</span>
                    <a className="hover:underline" href="https://tailwindcss.com">Tailwind CSS</a>
                </div>
            </div>
         </div>
    )
}
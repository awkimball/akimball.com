export default function Footer() {
    return (
        <div className="flex justify-center">
            <div className="absolute bottom-4 border border-slate-600 rounded-xl p-1 px-4 text-sm text-center text-slate-400 justify-evenly">
                <div className="">© 2024 Addison Kimball</div>
                {/* <span className="m-left-10">-</span> */}
                <div className="">Made with&nbsp;
                    <a className="no-underline hover:underline" href="https://react.dev">React</a>
                    ,&nbsp;
                    <a className="hover:underline" href="https://nextjs.org">Next.js</a>
                    <span>,&nbsp;and&nbsp;</span>
                    <a className="hover:underline" href="https://tailwindcss.com">Tailwind CSS</a>
                </div>
            </div>
        </div>
    )
}
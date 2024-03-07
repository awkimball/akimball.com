'use client'

import { TypeAnimation } from 'react-type-animation';
import GraphemeSplitter from 'grapheme-splitter';

const splitter = new GraphemeSplitter();


export default function WelcomeBlurb() {

    return (
        <div className="border-red-500 p-1 text-center h-[25vh] sm:h-[28vw] text-[14vw] sm:text-[9vw]">
            <TypeAnimation
                splitter={(str) => splitter.splitGraphemes(str)}
                sequence={[
                    'Hi... 👋',
                    1000,
                    'Hi... 👋\nI\'m Addy',
                    1000,
                    'Hi... 👋\nI\'m',
                    1000,
                    'Hi... 👋\nI\'m Addison',
                    2000,
                    () => {
                    console.log('Typewriter sequence completed');
                    },
                ]}
                wrapper="span"
                cursor={true}
                repeat={0}
                style={{  display: 'block', height: '100%', whiteSpace: 'pre'}}
            />
        </div>
    )
}
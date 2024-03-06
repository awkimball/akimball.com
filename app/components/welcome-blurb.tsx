'use client'

import { TypeAnimation } from 'react-type-animation';

export default function WelcomeBlurb() {

    return (
        <div className=" border-red-500 text-4xl p-1 text-center text-slate-400 sm:text-8xl sm:">
            <TypeAnimation
                sequence={[
                    'Hi...',
                    1000,
                    'Hi... I\'m Addy',
                    1000,
                    'Hi... I\'m',
                    1000,
                    'Hi... I\'m Addison',
                    2000,
                    () => {
                    console.log('Typewriter sequence completed');
                    },
                ]}
                wrapper="p"
                cursor={true}
                repeat={0}
                style={{  display: 'inline-block' }}
            />
        </div>
    )
}
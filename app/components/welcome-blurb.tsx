'use client'

import { TypeAnimation } from 'react-type-animation';

export default function WelcomeBlurb() {

    return (
        <div className="border border-red-300 text-4xl p-1 sm:text-5xl sm:">
            <TypeAnimation
                sequence={[
                    'Hi...',
                    1000,
                    'Hi... I\'m Addison Kimball',
                    2000,
                    () => {
                    console.log('Sequence completed');
                    },
                ]}
                wrapper="span"
                cursor={true}
                repeat={0}
                style={{  display: 'inline-block' }}
            />
        </div>
    )
}
'use client'

import { TypeAnimation } from 'react-type-animation';

export default function WelcomePage() {

    return (
        <div className=" border-red-300">
            <TypeAnimation
                sequence={[
                    'Hi...', // Types 'One'
                    1000, // Waits 1s
                    'Hi... I\'m Addison Kimball', // Deletes 'One' and types 'Two'
                    2000, // Waits 2s
                    () => {
                    console.log('Sequence completed');
                    },
                ]}
                wrapper="span"
                cursor={true}
                repeat={0}
                style={{ fontSize: '2em', display: 'inline-block' }}
            />
        </div>
    )
}
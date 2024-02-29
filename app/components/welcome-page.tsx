use client;

import { TypeAnimation } from 'react-type-animation';

export default function WelcomePage() {

    return (
        <div className="border border-red-300">
            <TypeAnimation
                sequence={[
                    'One', // Types 'One'
                    1000, // Waits 1s
                    'Two', // Deletes 'One' and types 'Two'
                    2000, // Waits 2s
                    'Two Three', // Types 'Three' without deleting 'Two'
                    () => {
                    console.log('Sequence completed');
                    },
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '2em', display: 'inline-block' }}
            />
            <p className="text-3xl">Hi... I'm Addison Kimball</p>
        </div>
    )
}
import React from 'react'
import ReactAudioPlayer from 'react-audio-player';

const TuneInfo = ({tuneInfo}) => {

    const TuneEntry = tuneInfo.feed.entry.map((tune, index) => {
        return(
            <>
                <div class="p-6 max-w-md mx-auto bg-white dark:bg-black rounded-xl shadow-md  mb-4 mt-4">
                <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                    <img src={tune["im:image"][2].label} alt="Song Artwork"/>
                </div>
                    <div>
                        <div class="text-xl font-medium text-black dark:text-white">{index + 1}. {tune["im:name"].label}</div>
                        <p class="text-gray-500">{tune["im:artist"].label}</p>
                        <p class="text-gray-400">{tune["im:collection"]["im:name"].label}</p>
                    </div> 
                </div>
                   
                <div class="mt-4">
                    <ReactAudioPlayer
                    src={tune.link[1].attributes.href}
                    autoPlay={false}
                    controls={true}
                    />
                    </div>  

                </div>
                    
            
        
    
            </>

            
        )
    })

    return (
        <>
            {TuneEntry}
        </>
    )
}

export default TuneInfo

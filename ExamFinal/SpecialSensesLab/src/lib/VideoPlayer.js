/**
 * A component that displays video content in an iframe.
 * Loads video URLs from the selected item's 'child_items'.
 *
 * @returns {JSX.Element} An iframe displaying video content or a "No data" message
 */

import { useState, useEffect } from 'react'
import { useSelectionContext } from '../context/SelectionContext.js';

export default function VideoPlayer(){

    const { selectedItem } = useSelectionContext();
    const [videoSource, setSource] = useState('')

    useEffect(() => {
        const newSource = selectedItem?.child_items?.[0]?.video_link;
        setSource(newSource)
    }, [selectedItem])

    return (
        <div className="flex justify-center items-center bg-black h-screen px-6 pb-16">
            {videoSource ? (
            <iframe id="kaltura_player" 
            src={videoSource} 
            allowFullScreen 
            allow="autoplay *; fullscreen *; encrypted-media *" 
            sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" 
            style={{ border: 'none', width: 'min(90vw, 1200px)', height: 'min(68vw, 760px)', maxHeight: '78vh' }}
            title="Lab Video Player">
            </iframe>) :
            (<div>No data</div>)}

        </div>
    )
    // <iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/1157612/sp/115761200/embedIframeJs/uiconf_id/41338032/partner_id/1157612?iframeembed=true&amp;playerId=kaltura_player&amp;entry_id=1_ihtaix6d&amp;flashvars[localizationCode]=en&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&amp;wid=1_mcfzu0dd" width="608" height="402" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen="" allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="Anterior View of the Skull - Anat &amp; Physiology BONES"></iframe>
} 
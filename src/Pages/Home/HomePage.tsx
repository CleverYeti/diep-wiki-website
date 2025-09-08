import "./HomePage.css"

export function HomePage() {
    return (
        <div id="home-page">
            <div className="banner">
                <img className="background" src="/banner/bannerBackground.png" alt="" draggable="false"/>
                <img className="text" src="/banner/bannerText.png" alt="" draggable="false"/>
                <img className="overlay" src="/banner/bannerOverlay.png" alt="" draggable="false"/>
                <a className="credit-text" target="_blank" href="https://youtube.com/@deception6">Banner By Deception</a>
            </div>
            <div className="partners-title">Check out our other projects:</div>
            <div className="partner-links">
                <a className="partner-banner" href="https://diepeditor.io" target="_blank">
                    <img src="/partners/diepEditorBanner.png" alt="" />
                </a>
                <a className="partner-banner" href="https://dieplobbypicker.io" target="_blank">
                    <img src="/partners/diepLobbyPickerBanner.png" alt="" />
                </a>
                <div className="partner-banner">
                    <div className="placeholder">Coming soon!</div>
                </div>
                {/*
                <a className="partner-banner" href="" target="_blank">
                    <img src="/partners/diepVerseBanner.png" alt="" />
                </a>
                */}
            </div>
        </div>
    )
}

import "./App.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Image from "./components/ImageWrapper/Image";
import WatchImage from "./components/WatchImageWrapper/WatchImage";
// import Carousel from "./components/Carousel";
import Footer from "./components/Footer/Footer";

// Importing Images
import iPad from "./Assets/iPad.png";
import iPhone14pro from "./Assets/iPhone14pro.png";
import iPhone14 from "./Assets/iPhone14.png";

import watchUltra from "./Assets/watchUltra.png";
import watch8 from "./Assets/watch8.png";

// Information for the Images

let imagesInfo = [
    [
        "iPad",
        "Lovable. Drawable. Magical.",
        "Available starting 10.26",
        "Order Now",
    ],
    ["iPhone 14 Pro", "Pro. Beyond.", "", "Buy"],
    ["iPhone 14", "Bigger and Better.", "", "Buy"],
];

let infoLinks = [
    [
        "https://www.apple.com/ipad-10.9/",
        "https://www.apple.com/us/shop/goto/buy_ipad/ipad",
    ],
    [
        "https://www.apple.com/iphone-14-pro/",
        "https://www.apple.com/us/shop/goto/buy_iphone/iphone_14_pro",
    ],
    [
        "https://www.apple.com/iphone-14/",
        "https://www.apple.com/us/shop/goto/buy_iphone/iphone_14",
    ],
];
let watchImageInfo = [
    ["WATCH", "ULTRA", "Adventure Awaits.", "Buy"],
    ["WATCH", "SERIES 8", "A healthy leap ahead.", "Buy"],
];

let watchLinks = [
    [
        "https://www.apple.com/apple-watch-ultra/",
        "https://www.apple.com/us/shop/goto/buy_watch/apple_watch_ultra",
    ],
    [
        "https://www.apple.com/apple-watch-series-8/",
        "https://www.apple.com/us/shop/goto/buy_watch/apple_watch_series_8",
    ],
];

function App() {
    return (
        <div>
            <NavigationBar />

            <div style={{ paddingTop: "2.9vh" }}>
                <Image
                    image={iPad}
                    imagesInfo={imagesInfo[0]}
                    infoPos={"center"}
                    bgColor={"rgba(251,251,251,255)"}
                    infoLinks={infoLinks[0]}
                />
            </div>

            <div id="14pro">
                <Image
                    image={iPhone14pro}
                    imagesInfo={imagesInfo[1]}
                    infoPos={"top"}
                    bgColor={"black"}
                    infoLinks={infoLinks[1]}
                />
            </div>

            <Image
                image={iPhone14}
                imagesInfo={imagesInfo[2]}
                infoPos={"top"}
                bgColor={"rgba(251,251,251,255)"}
                infoLinks={infoLinks[2]}
            />

            <div className="watch-images">
                <WatchImage
                    image={watchUltra}
                    watchImageInfo={watchImageInfo[0]}
                    infoPos="left"
                    bgColor="white"
                    typeColor="red"
                    watchLinks={watchLinks[0]}
                />

                <WatchImage
                    image={watch8}
                    watchImageInfo={watchImageInfo[1]}
                    infoPos="right"
                    bgColor="black"
                    typeColor="red"
                    watchLinks={watchLinks[1]}
                />
            </div>

            <Footer />
        </div>
    );
}

export default App;

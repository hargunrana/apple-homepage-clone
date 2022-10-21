import NavigationBar from "./components/NavigationBar/NavigationBar";
import Image from "./components/ImageWrapper/Image";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

import iPad from "./Assets/iPad.png";
import iPhone14 from "./Assets/iPhone14.png";
let imagesInfo = [
    [
        "iPad",
        "Lovable. Drawable. Magical",
        "Available starting 10.26",
        "Order Now",
    ],
    ["iPhone 14 Pro", "Pro. Beyond", "", "Buy"],
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
                />
            </div>

            <Image image={iPhone14} imagesInfo={imagesInfo[1]} infoPos="top" />
            {/* <Image /> */}
            <Carousel />
            <Footer />
        </div>
    );
}

export default App;

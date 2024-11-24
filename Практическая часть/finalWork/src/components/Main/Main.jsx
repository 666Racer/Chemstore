import About from "./Elements/About";
import BetweenGrids from "./Elements/BetweenGrids";
import BotttomContent from "./Elements/BottomContent";
import FirstGrid from "./Elements/FirstGrid";
import MiddleContent from "./Elements/MiddleContent";
import SecondGrid from "./Elements/SecondGrid";

const Main = () => {
	return (
        <div>
            <FirstGrid/>
            <BetweenGrids/>
            <SecondGrid/>
            <MiddleContent/>
            <About/>
            <BotttomContent/>
        </div>
    )
}

export default Main;
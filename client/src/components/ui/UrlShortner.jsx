import Description from "../home/Description";
import Heading from "../home/Heading";
import PassApi from "../home/PassApi";

const UrlShortner = () => {
  return (
    <div className="text-center">
      <Heading />
      <PassApi />
      <Description />
    </div>
  );
};

export default UrlShortner;

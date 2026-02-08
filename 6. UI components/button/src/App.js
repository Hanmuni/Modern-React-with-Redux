import Button from "./Button";
import { GiClick } from "react-icons/gi";
import { BiDollar, BiHide } from "react-icons/bi";
import { CiDiscount1 } from "react-icons/ci";
import { IoMdCloseCircleOutline } from "react-icons/io";

function App() {
  const handleClick = () => {
    console.log("Click!");
  };

  return (
    <div>
      <div>
        <Button primary rounded onClick={handleClick} className="m-8">
          <GiClick /> Click me!
        </Button>
      </div>
      <div>
        <Button primary outline onClick={handleClick} className="m-8">
          <GiClick />
          Click me!
        </Button>
      </div>
      <div>
        <Button secondary rounded onClick={handleClick} className="m-8">
          <BiDollar />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button secondary outline onClick={handleClick} className="m-8">
          <BiDollar />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button success rounded onClick={handleClick} className="m-8">
          <CiDiscount1 />
          See deal!
        </Button>
      </div>
      <div>
        <Button success outline onClick={handleClick} className="m-8">
          <CiDiscount1 />
          See deal!
        </Button>
      </div>
      <div>
        <Button warning rounded onClick={handleClick} className="m-8">
          <BiHide />
          Hide ads!
        </Button>
      </div>
      <div>
        <Button warning outline onClick={handleClick} className="m-8">
          <BiHide />
          Hide ads!
        </Button>
      </div>

      <div>
        <Button danger rounded onClick={handleClick} className="m-8">
          <IoMdCloseCircleOutline />
          Close page!
        </Button>
      </div>
      <div>
        <Button danger outline onClick={handleClick} className="m-8">
          <IoMdCloseCircleOutline />
          Close page!
        </Button>
      </div>
    </div>
  );
}

export default App;

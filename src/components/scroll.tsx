import ScrollArrow from "../assets/scroll_arrow.svg";

function Scroll() {
  return (
    <div className="flex bg-yellow px-16 py-7 justify-center">
        <img className="animate-bounce" src={ScrollArrow} alt="scroll_arrow" />
    </div>
  );
}

export default Scroll;

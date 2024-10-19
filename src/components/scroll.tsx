import ScrollArrow from "../assets/scroll_arrow.svg";

function Scroll() {
  return (
    <div className="flex p-10 justify-center">
        <img className="animate-bounce w-12" src={ScrollArrow} alt="scroll_arrow" />
    </div>
  );
}

export default Scroll;
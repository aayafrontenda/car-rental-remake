import ReactDOM from "react-dom";
export default function FastScroll() {
  //to create a portal, use the createPortal function:
  return ReactDOM.createPortal(
    <div className={`modal absolute mt-3 -ml-4 mb-0`}>scroll to top</div>,
    document.body
  );
}

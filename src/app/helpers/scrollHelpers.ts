import {
  Events,
  animateScroll as scroll,
  scroller,
  scrollSpy,
} from "react-scroll";

export function signToScrollEvents() {
  Events.scrollEvent.register("begin", function (to, element) {
    console.log("begin", arguments);
  });

  Events.scrollEvent.register("end", function (to, element) {
    console.log("end", arguments);
  });

  scrollSpy.update();
}

export function scrollToBooking() {
  scroller.scrollTo("bookingForScroll", {
    duration: 1000,
    delay: 100,
    smooth: true,
    offset: -100,
  });
}

export function scrollToTop() {
  scroll.scrollToTop();
}

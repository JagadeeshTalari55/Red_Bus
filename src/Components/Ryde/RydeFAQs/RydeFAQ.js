import React from "react";
import Collapsible from "react-collapsible";
import "./RydeFAQ.css";

export default function RydeFAQ() {
  return (
    <div style={{ width: "80vw", margin: "auto" }}>
      <h1>FAQs</h1>
      <Collapsible trigger="What is rYde?" triggerStyle={{ fontSize: "18px" }}>
        <div>
          What is rYde? rYde helps you rent a vehicle from the best operators in
          your city.
        </div>
      </Collapsible>
      <Collapsible
        trigger="Do I need to register on rYde website to book a cab online?"
        triggerStyle={{ fontSize: "18px" }}
      >
        <div>
          No, you can successfully book the cab without registering on our
          website.
        </div>
      </Collapsible>
      <Collapsible
        trigger="How does it work?"
        triggerStyle={{ fontSize: "18px" }}
      >
        <div>
          We ask you a few simple questions regarding your trip. We work with
          the best operators in your city to get you detailed quotations so that
          you get the best deal.
        </div>
      </Collapsible>
      <Collapsible
        trigger="What if the cab doesn't show up?"
        triggerStyle={{ fontSize: "18px" }}
      >
        <div>
          What if the cab doesn't show up? If the vehicle you booked does not
          arrive, we will immediately issue a complete refund.
        </div>
      </Collapsible>
      <Collapsible
        trigger="Which cities are you operational in?"
        triggerStyle={{ fontSize: "18px" }}
      >
        <div>
          If the vehicle you booked does not arrive, we will immediately issue a
          complete refund.
        </div>
      </Collapsible>
      <Collapsible
        trigger="Which cities are you operational in?"
        triggerStyle={{ fontSize: "18px" }}
      >
        <div>
          We are currently operational in many cities such as Bangalore, Mumbai,
          Pune, Chennai, Hyderabad, Delhi, Ahmedabad, Madurai, Mysore,
          Visakhapatnam, Surat, Vadodara, Vijayawada, Coimbatore, Goa,
          Pondicherry, Erode, Ooty, Udaipur, Jaipur, Guwahati, Trichy, Kolkata,
          and many more.
        </div>
      </Collapsible>
      <Collapsible
        trigger="What happens if the vehicle breaks down?"
        triggerStyle={{ fontSize: "18px" }}
      >
        <div>
          What happens if the vehicle breaks down? Since we work with the best
          operators, the vehicles are usually reliable. In case of a breakdown,
          it is the operator's responsibility to replace the vehicle during the
          journey.
        </div>
      </Collapsible>
      <Collapsible
        trigger="How are the Kilometers calculated?"
        triggerStyle={{ fontSize: "18px" }}
      >
        <div>
          How are the Kilometers calculated? The 'Kilometers' are calculated
          based on the return trip distance between the boarding point and the
          destination. Any additional distance covered within the city between
          the Garage and the pickup point is also included in it.
        </div>
      </Collapsible>
      <Collapsible
        trigger="Can I book a cab without credit/card or net banking option?"
        triggerStyle={{ fontSize: "18px" }}
      >
        <div>
          Yes, other payment options available are UPI(gpay, phone available)
          wallets (paytm,amazon pay), debit card.
        </div>
      </Collapsible>
      <Collapsible
        trigger="How is the total cab fare/price calculated for a local cab service?"
        triggerStyle={{ fontSize: "18px" }}
      >
        <div>
          How is the total cab fare/price calculated for a local cab service? 4
          packages available (4hrs & 40 kms, 8hrs & 80 kms, 12hrs & 120 kms,
          24hrs & 300kms). extra kms & extra hours charges applicable if usage
          exceeds the package taken
        </div>
      </Collapsible>
      <Collapsible
        trigger="How is the total cab fare calculated for an intercity cab service?"
        triggerStyle={{ fontSize: "18px" }}
      >
        <div>
          w is the total cab fare calculated for an intercity cab service? For
          outstation trips(intercity), mostly x kms included in fare. route wise
          charges will vary. Sometimes toll, state taxes might be included in
          the fare. certain cases, these won't be part of the original fare and
          user would have to pay at trip end whatever extra charges are
          applicable extra charges can be - Waiting charges Extra KMs charges
          Extra hours charges Night charges Airport Entry fee Airport Parking
          charges Toll charges State Tax Driver charges Parking charges
        </div>
      </Collapsible>
      <Collapsible
        trigger="Whom do I contact if I have additional questions?"
        triggerStyle={{ fontSize: "18px" }}
      >
        <div>
          You can write to us at ryde@redbus.in. Alternatively, you can request
          a call back by clicking on the 'Request a Callback' button on any of
          the quotes you've received. One of our customer service executives
          will reach out to you.
        </div>
      </Collapsible>
      <Collapsible
        trigger="What are the payment terms?"
        triggerStyle={{ fontSize: "18px" }}
      >
        <div>
          You can confirm your reservation by paying a small booking fee,
          typically up to to 25% of the base fare. The balance can be paid
          directly to us through online modes till two days before the start of
          the journey or to the operator in cash at the time of boarding.
        </div>
      </Collapsible>
      <Collapsible
        trigger="What if I need to cancel my trip?"
        triggerStyle={{ fontSize: "18px" }}
      >
        <div>
          The cancellation policy is specific to each operator and is listed
          against the quotes on the quotations page.
        </div>
      </Collapsible>
      <Collapsible
        trigger="How are tolls & taxes calculated?"
        triggerStyle={{ fontSize: "18px" }}
      >
        <div>
          Tolls and Interstate taxes are best estimates only. If these amounts
          are included in the fare, you'll be charged/reimbursed for any
          difference between the actuals and estimates, as applicable.
        </div>
      </Collapsible>
    </div>
  );
}

import React from 'react';
import Section from '../components/shared/Section';

const Terms = () => {
  return (
    <Section>
      <h1 className="my-8 flex text-center text-xl leading-[115%] md:text-2xl md:leading-[115%] font-semibold text-neutral-800 justify-center">
        Terms and Conditions
      </h1>
      <div className="px-4 md:px-8">
        <ul className="flex flex-col gap-2">
          <li>
            <p>
              <span className="font-semibold mb-1">Our Commitment: </span>
              I-C-I-D Pte Ltd values the importance of your passport and strives
              to make your experience with our visa service satisfying and
              efficient. We aim to save you time and reduce stress associated
              with the visa process.
            </p>
          </li>
          <li>
            <p>
              <span className="font-semibold mb-1">Our Services: </span>We offer
              advice, provide visa application forms, accept documents via
              courier, email, or in-person, and handle embassy interactions. Our
              contact details are available for inquiries. Processing times may
              vary during busy periods, and we prioritize completing visas
              before travel dates.
            </p>
          </li>
          <li>
            <p>
              <span className="font-semibold mb-1">Business Hours: </span>Our
              office operates Monday to Friday, 10:00 am to 8:00 pm, and we
              prefer appointments. We are closed on weekends and public
              holidays.
            </p>
          </li>
          <li>
            <p>
              <span className="font-semibold mb-1">Regulation Changes: </span>We
              make efforts to stay updated on visa regulations but cannot be
              held responsible for any inconvenience or loss resulting from
              unknown changes. Right to Refusal: I-C-I-D Pte Ltd reserves the
              right to reject any application without providing a reason.
            </p>
          </li>
          <li>
            <p>
              <span className="font-semibold mb-1">Service Charge: </span>Our
              service charge is quoted upfront and may change depending on the
              time of year. Additional fees apply to urgent applications, which
              we accept at our discretion. Charges may change if delays occur
              due to incomplete documentation.
            </p>
          </li>
          <li>
            <p>
              <span className="font-semibold mb-1">Embassy Visa Fees: </span>We
              are not responsible for any increases in embassy visa fees. The
              client will be responsible for covering additional costs.
            </p>
          </li>
          <li>
            <p>
              <span className="font-semibold mb-1">Additional Work: </span>If
              extra work is needed before submitting your visa application, such
              as hotel reservations or travel insurance, it will incur
              additional service charges.
            </p>
          </li>
          <li>
            <p>
              <span className="font-semibold mb-1">Payment: </span>Full payment
              is required before processing your application. Personal cheques
              must clear before documents are returned, while company cheques
              can be made upon passport collection. Make cheques payable to
              I-C-I-D Pte Ltd.
            </p>
          </li>
          <li>
            <p>
              <span className="font-semibold mb-1">
                Cancellations and Changes:{' '}
              </span>
              Cancellation fees apply under specific circumstances, and
              applications cannot be canceled or travel dates changed after
              documents are submitted to the embassy. Additional charges may
              apply for document changes or missing items.
            </p>
          </li>
          <li>
            <p>
              <span className="font-semibold mb-1">Processing Times: </span>
              Quoted processing times are a guide and may vary. We may accept
              urgent applications under certain conditions but cannot guarantee
              success or take responsibility for delays or issues.
            </p>
          </li>
          <li>
            <p>
              <span className="font-semibold mb-1">Communication: </span>We will
              communicate with you throughout the process, informing you of any
              updates or requirements. Please provide accurate contact
              information and ensure you can receive our messages.
            </p>
          </li>
          <li>
            <p>
              <span className="font-semibold mb-1">Future Communication: </span>
              We may retain your information for future communications about
              visa services but will not share your information with third
              parties.
            </p>
          </li>
          <li>
            <p>
              <span className="font-semibold mb-1">Document Tracking: </span>We
              carefully track and record the status of your documents throughout
              the process.
            </p>
          </li>
          <li>
            <p>
              <span className="font-semibold mb-1">
                Payment and Responsibility:{' '}
              </span>
              All service fees, including embassy fees, must be paid upfront and
              are non-refundable. We are not responsible for any expenses
              incurred due to delays or visa refusals. We cannot guarantee visa
              approval, as it is determined by the embassy.
            </p>
          </li>
          <li>
            <p>
              <span className="font-semibold mb-1">Disclosure: </span>You must
              disclose all relevant information before we collect your
              documents, including previous visa issues, application status,
              passport and visa expiration dates, and other relevant facts. If
              you fail to disclose information, our full service charge will
              apply for any visa refusal.
            </p>
          </li>
          <li>
            <p>
              <span className="font-semibold mb-1">Document Copies: </span>Keep
              copies of all your documents, including your passport, as we can
              only retain them for a limited time. Some documents may be
              retained by embassies, so it is essential to have copies for your
              records.
            </p>
          </li>
        </ul>
        <p className="my-8 font-semibold text-right">
          Date of last update: 05 April 2023.
        </p>
      </div>
    </Section>
  );
};

export default Terms;

import { useState } from "react";
import { CheckCircle } from "lucide-react";

function Reservations() {

  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="inner-page">

      <section className="page-hero">

        <div className="container">

          <span className="eyebrow">
            PASSENGER SUPPORT
          </span>

          <h1>Service Request</h1>

          <p>
            Submit a request to the airport information team.
          </p>

        </div>

      </section>

      <section className="section">

        <div className="container narrow">

          {!submitted ? (

            <form
              className="form-card"
              onSubmit={handleSubmit}
            >

              <div className="form-grid">

                <div className="form-group">
                  <label>Full Name</label>
                  <input required placeholder="Your name" />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    required
                    type="email"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="form-group">
                  <label>Phone</label>
                  <input
                    required
                    type="tel"
                    placeholder="+92"
                  />
                </div>

                <div className="form-group">

                  <label>Service</label>

                  <select required>

                    <option value="">
                      Select a service
                    </option>

                    <option>
                      General Information
                    </option>

                    <option>
                      Baggage Assistance
                    </option>

                    <option>
                      Accessibility Assistance
                    </option>

                    <option>
                      Lost & Found
                    </option>

                  </select>

                </div>

              </div>

              <div className="form-group">

                <label>Message</label>

                <textarea
                  rows="5"
                  placeholder="How can we help?"
                  required
                />

              </div>

              <button className="primary-btn">
                Submit Request
              </button>

            </form>

          ) : (

            <div className="success-card">

              <CheckCircle size={60} />

              <h2>Request Submitted!</h2>

              <p>
                Thank you. Your service request has been
                received successfully.
              </p>

              <button
                className="outline-btn"
                onClick={() => setSubmitted(false)}
              >
                Submit Another Request
              </button>

            </div>

          )}

        </div>

      </section>

    </div>
  );
}

export default Reservations;
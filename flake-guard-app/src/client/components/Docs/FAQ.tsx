import React from 'react';
import '../../../styles/docs.css';

const Faq = (): JSX.Element => {
  return (
    <div>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item faq-container" data-testid = 'faq container'>
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed custom-bg"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
              aria-label="faq-button"
            >
              What is a flaky test?
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" aria-label="faq-text">
              A flaky test is a test that sometimes passes and sometimes fails
              for the same code, often due to nondeterministic factors like
              timing issues, network variability, or reliance on external
              systems..
            </div>
          </div>
        </div>
        <div className="accordion-item faq-container">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed custom-bg"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
              aria-label="faq-button"
            >
              What causes flaky tests?
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body"
            aria-label="faq-text">
              Flaky tests can be caused by race conditions, timing issues,
              network instability, environmental dependencies, or inconsistent
              external service responses.
            </div>
          </div>
        </div>
        <div className="accordion-item faq-container">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed custom-bg"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
              aria-label="faq-button"
            >
              When should I use FlakeGuard?
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body"
            aria-label="faq-text">
              You should use a FlakeGuard when you notice intermittent test
              failures, to identify and address unstable tests, ensuring more
              reliable and consistent test results.
            </div>
          </div>
        </div>
        <div className="accordion-item faq-container">
          <h2 className="accordion-header" id="flush-headingFour">
            <button
              className="accordion-button collapsed custom-bg"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
              aria-label="faq-button"
            >
              What's the impact of flaky tests?
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingFour"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body"
            aria-label="faq-text">
              <p>
                <b>Reduced Confidence:</b>
                They undermine trust in the test suite, as developers can't rely
                on test results to reflect the true state of the code.
              </p>
              <p>
                <b>Wasted Time:</b>
                Developers spend time diagnosing and rerunning tests instead of
                focusing on new features or bug fixes.
              </p>
              <p>
                <b>Masked Issues:</b>
                Real bugs might be overlooked or ignored, assuming test failures
                are just flakiness.
              </p>
              <p>
                <b>Increased Maintenance:</b>
                More effort is needed to maintain and stabilize the test suite,
                which can slow down development cycles.
              </p>
              <p>
                <b>Continuous Integration Disruptions:</b>
                They can cause interruptions in automated build and deployment
                processes, delaying releases.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item faq-container">
          <h2 className="accordion-header" id="flush-headingFive">
            <button
              className="accordion-button collapsed custom-bg"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFive"
              aria-expanded="false"
              aria-controls="flush-collapseFive"
              aria-label="faq-button"
            >
              What are the best practices to prevent flaky tests?
            </button>
          </h2>
          <div
            id="flush-collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingFive"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body"
            aria-label="faq-text">
              To prevent flaky tests, ensure tests are isolated to avoid shared
              state dependencies. Control timing with fixed timeouts and avoid
              relying on fluctuating conditions. Mock external dependencies for
              consistent interactions and reduce variability. Use stable,
              controlled test data to prevent unexpected input changes. Run
              tests in a repeatable environment for consistency and
              reproducibility, boosting confidence in results and accelerating
              development cycles.
            </div>
          </div>
        </div>
        <div className="accordion-item faq-container">
          <h2 className="accordion-header" id="flush-headingSix">
            <button
              className="accordion-button collapsed custom-bg"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseSix"
              aria-expanded="false"
              aria-controls="flush-collapseSix"
              aria-label="faq-button"
            >
              How well does FlakeGuard “scale” in terms of performance?
            </button>
          </h2>
          <div
            id="flush-collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingSix"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body"
            aria-label="faq-text">....</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

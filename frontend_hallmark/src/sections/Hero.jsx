import React, { useState , useEffect} from 'react';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Hero.css'


const Hero = () => {
  const [employment, setEmployment] = useState('salaried');
  const [dob, setDob] = useState('');
  const [income, setIncome] = useState(50000);
  const [obligations, setObligations] = useState(10000);
  const [interest, setInterest] = useState(13);
  const [tenure, setTenure] = useState(60);
  const [loanAmount, setLoanAmount] = useState(0);
  const [emiAmount, setEmiAmount] = useState(0);


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);


  const calculateEligibility = () => {
    // Simple EMI Calculation
    const principal = income - obligations;
    const monthlyRate = interest / 12 / 100;
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
                (Math.pow(1 + monthlyRate, tenure) - 1);

    setLoanAmount(principal * 12); // example eligible amount
    setEmiAmount(Math.round(emi));
  };

  return (
    <section className="hero bg-dark text-white py-5">
      <Container>
        <Row className="align-items-center">


          <Col lg={6} data-aos="fade-up">
            <h1 className="display-5 fw-bold">Find The Best<br />Monthly Payment</h1>

            <p className="lead">Apply for our business loan in minutes, without painfull.</p>
<ul className="list-unstyled mt-4 hero-points">
  <li>✔ Instant Loan Approval</li>
  <li>✔ Low Interest Rates</li>
  <li>✔ Minimal Documentation</li>
  <li>✔ Quick Disbursal</li>
</ul>
            <Button href="/services" variant="success" className="me-2">Get Start</Button>
            {/* <Button variant="outline-light">How It Work</Button> */}
            <div className="d-flex gap-4 mt-4">
  
</div>
          </Col>

           {/* Right Card */}

          <Col lg={5} className="offset-lg-1" data-aos="fade-up">
            <Card className="p-4 shadow-lg">
              <h4 className="text-center mb-3">Check Loan Eligibility</h4>

              <div className="btn-group w-100 mb-3">
                <Button variant={employment === 'salaried' ? 'success' : 'outline-success'}
                        onClick={() => setEmployment('salaried')}>
                  Salaried
                </Button>
                <Button variant={employment === 'self' ? 'success' : 'outline-success'}
                        onClick={() => setEmployment('self')}>
                  Self Employed
                </Button>
              </div>

              <Form.Group className="mb-3">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control type="date" value={dob} onChange={e => setDob(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Net Monthly Income (₹)</Form.Label>
                <Form.Control type="number" value={income} onChange={e => setIncome(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Net Monthly Obligations (₹)</Form.Label>
                <Form.Control type="number" value={obligations} onChange={e => setObligations(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Interest Rate (%)</Form.Label>
                <Form.Control type="number" value={interest} onChange={e => setInterest(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Tenure (Months)</Form.Label>
                <Form.Control type="number" value={tenure} onChange={e => setTenure(e.target.value)} />
              </Form.Group>

              <div className="bg-light p-3 rounded mb-3 text-center">
                <p className="mb-1">Eligible Loan Amount</p>
                <h5 className="text-success">₹ {loanAmount}</h5>

                <p className="mb-1 mt-2">Estimated EMI</p>
                <h6 className="text-dark">₹ {emiAmount}</h6>
              </div>

              <Button variant="success" className="w-100" onClick={calculateEligibility}>Calculate Now</Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
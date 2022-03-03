import * as React from 'react';
import { shuffle } from 'lodash';
import styled from 'styled-components/macro';
import { TESTIMONIALS } from '../utils/constants';
import { logEvent } from '../utils/metrics';
import { MetricsEvents } from '../types/enums';

type Props = {
  className?: string;
  timeout?: number;
  delay?: number;
  onTestimonialChange?: (counter: number) => void;
};

const TESTIMONIAL_TIMEOUT = 5000;

const Testimonials = (props: Props) => {
  const [testimonialCounter, setTestimonialCounter] = React.useState(0);
  const [visible, setVisible] = React.useState(!props.delay);
  const shuffledTestimonials = React.useMemo(() => shuffle(TESTIMONIALS), []);
  const testimonialIndex = testimonialCounter % TESTIMONIALS.length;
  const randomTestimonial = shuffledTestimonials[testimonialIndex];
  const { onTestimonialChange: _onTestimonialChange, timeout, delay } = props;

  React.useEffect(() => {
    // start only if testimonial is visible (after optional delay)
    if (!visible) {
      return;
    }
    logEvent(MetricsEvents.TestimonialShown, {
      testimonial: randomTestimonial.quote
    });
    // setting timeout for testimonial rotation
    const to = setTimeout(() => {
      setTestimonialCounter(t => t + 1);
      if (_onTestimonialChange) {
        _onTestimonialChange(testimonialCounter + 1);
      }
    }, timeout || TESTIMONIAL_TIMEOUT);

    return () => {
      clearTimeout(to);
    };
  }, [
    testimonialCounter,
    visible,
    _onTestimonialChange,
    timeout,
    randomTestimonial.quote
  ]);

  React.useEffect(() => {
    let timeout;

    if (!visible) {
      timeout = setTimeout(() => setVisible(true), delay);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [visible, delay]);

  return (
    <Testimonial
      className={props.className}
      style={{ opacity: visible ? 1 : 0 }}
      tabIndex={0}
    >
      <TestimonialQuote>{randomTestimonial.quote}</TestimonialQuote>
      <TestimonialIcon
        src={randomTestimonial.iconUrl}
        alt={randomTestimonial.author}
      />
      <TestimonialAuthor>
        <b>{randomTestimonial.author}</b>
        <br />
        {randomTestimonial.authorDescription}
      </TestimonialAuthor>
    </Testimonial>
  );
};

export default Testimonials;

const Testimonial = styled.div`
  position: relative;
  background: ${p => p.theme.testimonialBgColor};
  padding: 25px;
  border-radius: 4px;
  transition: opacity 0.3s ease-out;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const TestimonialIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
  margin-left: -3px;
  object-fit: cover;
  object-position: center;
  border-radius: 50px;
  overflow: hidden;
`;

const TestimonialQuote = styled.blockquote`
  flex: 1 0 100%;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  color: ${p => p.theme.fgColor};
  margin: 0 0 20px;

  &::before {
    content: '“';
  }

  &::after {
    content: '”';
  }
`;

const TestimonialAuthor = styled.p`
  font-size: 15px;
  line-height: 20px;
  color: ${p => p.theme.dimmedFgColor};
  margin: 0;
`;

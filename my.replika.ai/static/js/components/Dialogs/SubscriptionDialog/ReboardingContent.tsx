import * as React from 'react';
import styled from 'styled-components/macro';
import SolidButton from '../../SolidButton';

const DESCRIPTION = `
  We’re updating the app with new exciting features, and want you to be part of this journey.️

  Enjoy 6 months of Replika Pro for free: new conversations, activities, and customization features. Our treat!
`;

const REPLIKA_PRO_HELP_URL =
  'https://help.replika.ai/hc/en-us/articles/360032500052-What-is-Replika-Pro-';

const ReboardingContent = ({ onClose }: { onClose: () => void }) => (
  <>
    <Description>{DESCRIPTION}</Description>
    <SolidButton onClick={onClose}>Get Replika Pro for free</SolidButton>
    <Link
      href={REPLIKA_PRO_HELP_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="what-is-replika-pro-link"
    >
      What is Replika Pro?
    </Link>
  </>
);

export default ReboardingContent;

const Description = styled.p`
  white-space: pre-wrap;
  max-width: 300px;
  text-align: center;
  font-size: 16px;
  line-height: 24px;
  color: ${p => p.theme.fgColor};
  margin: 0 0 48px;
`;

const Link = styled.a`
  margin-top: 32px;
  color: ${p => p.theme.dimmedFgColor};
  text-decoration: underline;
`;

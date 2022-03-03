import * as React from 'react';
import styled from 'styled-components/macro';
import { MediaPreview } from '../../types/models';
import { captureError } from '../../utils/initSentry';

type Props = {
  mediaPreviewUrl: string;
  mediaPreview: MediaPreview | undefined;
  className?: string;
};

const PreviewTitle = styled.div`
  margin-top: 10px;
  font-weight: bold;
  line-height: 1.18em;
`;

const CoverLink = styled.a`
  margin-top: 10px;
  margin-bottom: 8px;
  display: block;
  background-image: ${(p: { img: string }) =>
    !p.img
      ? `linear-gradient(
    to top,
    #020024 0%,
    #090979 40%,
    #197dc0 100%
  );`
      : `url(${p.img});`}
  background-size: cover;
  background-position: center;
  height: 25vh;
  max-height: 300px;
  width: 100%;
`;

const EmptyImage = styled.div`
  margin-top: 10px;
  margin-bottom: 8px;
  background-image: linear-gradient(
    to top,
    #020024 0%,
    #090979 40%,
    #197dc0 100%
  );
  height: 25vh;
  width: 100%;
`;

const PreviewDescription = styled.div`
  font-size: 13px;
  line-height: 1.54em;
  margin-top: 5px;
`;

const PreviewSiteName = styled.a`
  color: inherit;
  opacity: 0.4;
  font-size: 13px;
  line-height: 1.54em;
  margin-top: 5px;

  &:focus {
    opacity: 1;
  }
`;

const BubbleMediaPreview = ({
  mediaPreviewUrl,
  mediaPreview,
  className
}: Props) => {
  if (!mediaPreview) {
    return (
      <div className={className}>
        <EmptyImage />
        <PreviewTitle>...</PreviewTitle>
        <PreviewSiteName
          href={mediaPreviewUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {mediaPreviewUrl}
        </PreviewSiteName>
      </div>
    );
  }
  switch (mediaPreview.type) {
    case 'object':
      return (
        <div className={className}>
          <CoverLink
            aria-hidden
            tabIndex={-1}
            img={mediaPreview.content.preview_image}
            href={mediaPreview.content.url}
            target="_blank"
            rel="noopener noreferrer"
          />
          <PreviewTitle>{mediaPreview.content.title}</PreviewTitle>
          <PreviewDescription>
            {mediaPreview.content.description}
          </PreviewDescription>
          <PreviewSiteName
            href={mediaPreview.content.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={mediaPreview.content.description}
          >
            {mediaPreview.content.site_name}
          </PreviewSiteName>
        </div>
      );
    case 'video':
      return (
        <div className={className}>
          <CoverLink
            aria-hidden
            tabIndex={-1}
            img={mediaPreview.content.preview_image}
            href={mediaPreview.content.url}
            target="_blank"
            rel="noopener noreferrer"
          />
          <PreviewTitle>{mediaPreview.content.title}</PreviewTitle>
          <PreviewDescription>
            {mediaPreview.content.description}
          </PreviewDescription>
          <PreviewSiteName
            href={mediaPreview.content.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={mediaPreview.content.description}
          >
            {mediaPreview.content.site_name}
          </PreviewSiteName>
        </div>
      );
    case 'image':
      return (
        <div className={className}>
          <CoverLink
            img={mediaPreview.content.url}
            href={mediaPreview.content.url}
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
      );
    default:
      captureError(`Unknown media: ${JSON.stringify(mediaPreview)}`);
      return null;
  }
};

export default BubbleMediaPreview;

import React from 'react';
import DefaultLogo from '@/assets/logo.svg';
import {
  SystemConfigProfile,
  getSystemLogoSvgElement,
  getSystemLogoUrl,
  svgElementToDataUrl,
} from '@/utils/systemConfig';

type SystemLogoProps = {
  profile?: SystemConfigProfile | null;
  className?: string;
  alt?: string;
};

export default function SystemLogo({
  profile,
  className,
  alt,
}: SystemLogoProps) {
  const svgElement = getSystemLogoSvgElement(profile);
  const logoUrl = svgElement
    ? svgElementToDataUrl(svgElement)
    : getSystemLogoUrl(profile);

  if (logoUrl) {
    return <img className={className} src={logoUrl} alt={alt || ''} />;
  }

  return <DefaultLogo />;
}

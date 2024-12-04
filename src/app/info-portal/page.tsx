import React from 'react';

import { Section, Nav } from '@/components/index';

export default function InfoPortalPage() {
  return (
    <Section className="">
      <Nav
        title="Info Portal"
        buttonLabel="Add Folder"
        isRenderBackLink={false}
      />
    </Section>
  );
}

import React from 'react';

import { Section } from '@/components/index';
import { Nav } from '@/components/ui/Nav/Nav';

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

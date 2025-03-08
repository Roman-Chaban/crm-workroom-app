import React, { HTMLProps, type FC } from 'react';

import { Container, Div, Heading, Paragraph } from '@/index';
import { SwitchButton } from '../SwitchButton/SwitchButton';
import { NotificationClassNames } from '@/shared/interfaces/NotificationInterface';

interface NotificationProps extends HTMLProps<HTMLDivElement> {
  classNames: NotificationClassNames;
  heading?: string;
  paragraph?: string;
}

export const Notification: FC<NotificationProps> = ({
  classNames = {
    main: '',
    container: '',
    heading: '',
    paragraph: '',
    switcher: { button: '', circle: '', active: '' },
  },
  heading,
  paragraph,
}) => {
  return (
    <Container className={classNames.main || ''}>
      <Div className={classNames.container || ''}>
        {heading && (
          <Heading
            tag="h4"
            className={classNames.heading || ''}
          >
            {heading}
          </Heading>
        )}
        {paragraph && (
          <Paragraph className={classNames.paragraph || ''}>
            {paragraph}
          </Paragraph>
        )}
      </Div>
      <SwitchButton
        classNames={{
          button: classNames.switcher.button,
          circle: classNames.switcher.circle,
          active: classNames.switcher.active,
        }}
      />
    </Container>
  );
};

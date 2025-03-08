import React, { type FC } from 'react';

import { Container, Span } from '@/index';

interface ProjectsDayListProps {
  className: string;
  days: number;
  visibleDays: number;
}

export const ProjectsDayList: FC<ProjectsDayListProps> = ({
  className,
  days,
  visibleDays,
}) => {
  return (
    <Container
      style={{
        display: 'flex',
        gap: '0.25rem',
        maxWidth: `${visibleDays * 50}px`,
      }}
    >
      {Array.from({ length: days }, (_, index) => (
        <Span
          key={index + 1}
          style={{ minWidth: '1.75rem', textAlign: 'center' }}
          className={className}
        >
          {index + 1}
        </Span>
      ))}
    </Container>
  );
};

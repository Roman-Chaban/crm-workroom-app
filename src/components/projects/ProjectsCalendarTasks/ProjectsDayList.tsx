import React, { type FC } from 'react';

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
    <div
      style={{
        display: 'flex',
        gap: '0.25rem',
        maxWidth: `${visibleDays * 50}px`,
      }}
    >
      {Array.from({ length: days }, (_, index) => (
        <span
          key={index + 1}
          style={{ minWidth: '1.75rem', textAlign: 'center' }}
          className={className}
        >
          {index + 1}
        </span>
      ))}
    </div>
  );
};

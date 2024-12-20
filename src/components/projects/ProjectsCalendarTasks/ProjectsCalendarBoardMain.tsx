import React, { FC } from 'react';

import { Div } from '@/index';

import styles from './ProjectsCalendarTasks.module.scss';

export const ProjectsCalendarBoardMain: FC = () => {
  const rows = 8;
  const columns = 31;
  const visibleColumns = 20;

  return (
    <Div
      className={styles['tableContainer']}
      style={{
        overflowX: 'auto',
        maxWidth: `${visibleColumns * 50}px`,
      }}
    >
      <Div
        className={styles['scrollWrapper']}
        style={{
          minWidth: `${columns * 31}px`,
        }}
      >
        <table className={styles['projectsCalendarBoardTable']}>
          <thead className={styles['projectsCalendarBoardTableHeader']}>
            <tr className={styles['projectsCalendarBoardTableRow']}>
              {Array.from({ length: columns }, (_, colIndex) => (
                <th
                  key={colIndex}
                  className={styles['col']}
                ></th>
              ))}
            </tr>
          </thead>
          <tbody className={styles['projectsCalendarBoardTableBody']}>
            {Array.from({ length: rows }, (_, rowIndex) => (
              <tr
                key={rowIndex}
                className={styles['projectsCalendarBoardTableRow']}
              >
                {Array.from({ length: columns }, (_, colIndex) => (
                  <td
                    key={colIndex}
                    className={styles['projectsCalendarBoardTableData']}
                  ></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Div>
    </Div>
  );
};

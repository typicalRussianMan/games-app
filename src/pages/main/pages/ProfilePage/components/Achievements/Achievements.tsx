import { FC, memo } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';

import { AchievementFull } from '../../../../../../models/achievement-full';

import './style.css';

type Props = {

  /** Achievements. */
  readonly achievements: AchievementFull[];
};

const AchievementCard: FC<{ achievement: AchievementFull; }> = ({ achievement }) => (
  <div className={`achievement-card${achievement.isCollected ? '' : ' inactive'}`}>
    <img
      width={75}
      src="https://static.vecteezy.com/system/resources/previews/011/665/596/non_2x/3d-trophy-cup-icon-isolated-in-white-background-3d-rendering-png.png"
    />
    <div>
      <Typography variant='h5' component='div'>{achievement.title}</Typography>
      <Typography variant='body1' component='div'>{achievement.description}</Typography>
    </div>
  </div>
);

const AchievementsComponent: FC<Props> = ({ achievements }) => (
  <Accordion>
    <AccordionSummary>
      <Typography variant='h5'>Your Achievements</Typography>
    </AccordionSummary>
    <AccordionDetails>
      {achievements.map(achievement => (
        <AchievementCard achievement={achievement} key={achievement.id} />
      ))}
    </AccordionDetails>
  </Accordion>
);

/** Achievements. */
export const Achievements = memo(AchievementsComponent);

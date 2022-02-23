import { Button, Grid, Typography } from '@mui/material'
import {
  Close as RejectIcon,
  Check as AcceptIcon
} from '@mui/icons-material';

import SwipeableImage from 'components/SwipeableImage'

import { getMovieHeader } from './utils'
import { MovieRatingProps } from './types'

const MovieRating = ({
  movie,
  onAccept,
  onReject
}: MovieRatingProps) => {
  const {
    title,
    rating,
    summary,
    imageUrl
  } = movie;
  const movieHeader = getMovieHeader(title, rating);

  return (
    <Grid container display="flex" flexDirection="column" gap={2}>
      <Typography variant="h4">{movieHeader}</Typography>
      <Typography variant="subtitle1">{summary}</Typography>
      <SwipeableImage
        src={imageUrl}
        alt={title}
        onSwiped={onReject}
      />
      <Grid container display="flex" justifyContent="space-between">
        <Button
          variant="contained"
          color="success"
          startIcon={<AcceptIcon />}
          onClick={onAccept}
        >
          Accept
        </Button>
        <Button
          variant="contained"
          color="error"
          endIcon={<RejectIcon />}
          onClick={onReject}
        >
          Reject
        </Button>
      </Grid>
    </Grid>
  )
}

export default MovieRating;

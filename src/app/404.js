import * as React from 'react'
import { Button, Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

const styles = {
  heroImage: {
    width: '100%',
    height: "calc(90vh - 5px)",
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    opacity: 0.5
  },
  heroText: {
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#5d4128'
  },
  heroButton: {
    textAlign: 'center',
    position: 'absolute',
    top: '75%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#5d4128',
    '&:hover': {
      backgroundColor: '#5d4254',
  },
  }

}

export default function NotFound404 () {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <>
      <Box
        component='img'
        sx={styles.heroImage}
        alt='Random Image from Lorem picsum'
        src='https://picsum.photos/4200/4300'
      />
      <div>
      <Typography variant='h1' component='h1' sx={styles.heroText}>
            {t('pagenotfound')}
          </Typography>
        <Button
          variant='contained'
          color='primary'
          onClick={() => navigate(-1)}
          sx={styles.heroButton}
        >
          {t('goback')}
        </Button>
      </div>
    </>
  )
}

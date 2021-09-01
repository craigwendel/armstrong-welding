import React from 'react';
import { useRouter } from 'next/router';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    // marginTop: 5,
  },
});

export default function SocialLinks({ youTube, email, color }) {
  const classes = useStyles();
  const router = useRouter();
  return (
    <div className={classes.root}>
      <IconButton>
        <Link href="https://www.facebook.com/Armstrongweldfab" target="_blank">
          <FacebookIcon style={{ color: color }} />
        </Link>
      </IconButton>
      <IconButton>
        <Link
          href="https://www.instagram.com/armstrongweldfab/"
          target="_blank"
        >
          <InstagramIcon style={{ color: color }} />
        </Link>
      </IconButton>
      {/* <IconButton>
        <Link href="https://twitter.com/HomeStateBrew" target="_blank">
          <TwitterIcon
          
          />
        </Link>
      </IconButton> */}
      {youTube && (
        <IconButton>
          <Link href="https://youtube.com" target="_blank">
            <YouTubeIcon style={{ color: color }} />
          </Link>
        </IconButton>
      )}
      {email && (
        <IconButton onClick={() => router.push('/contact')}>
          <Link>
            <EmailIcon style={{ color: color }} />
          </Link>
        </IconButton>
      )}
    </div>
  );
}

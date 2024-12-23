import { IconButton, Stack, Link } from '@chakra-ui/react';
import { FaTiktok, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoMail } from 'react-icons/io5';

export const SocialIcons = () => {
  return (
    <Stack direction="row">
      <Link
        href="https://www.instagram.com/braintegral/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconButton aria-label="Instagram" variant="ghost">
          {' '}
          <FaInstagram />
        </IconButton>
      </Link>
      <Link
        href="https://www.tiktok.com/@braintegral"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconButton aria-label="TikTok" variant="ghost">
          <FaTiktok />
        </IconButton>
      </Link>
      <Link
        href="https://www.youtube.com/@braintegral?sub_confirmation=1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconButton aria-label="YouTube" variant="ghost">
          <FaYoutube />
        </IconButton>
      </Link>
      <Link
        href="https://www.facebook.com/braintegral"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconButton aria-label="Facebook" variant="ghost">
          <FaFacebook />
        </IconButton>
      </Link>
      <Link
        href="https://x.com/braintegral"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconButton aria-label="Twitter" variant="ghost">
          <FaXTwitter />
        </IconButton>
      </Link>
      <Link href="mailto:jorge@braintegral.com">
        <IconButton aria-label="Email" variant="ghost">
          <IoMail />
        </IconButton>
      </Link>
    </Stack>
  );
};

import {  Image } from 'theme-ui';
import { CustomLink } from './CustomLink';

export default function Logo({ src, ...rest }) {
  return (
    <CustomLink
      path="/"
      sx={{
        variant: 'links.logo',
        display: 'flex',
        cursor: 'pointer',
        mr: 15,
      }}
      {...rest}
    >
      <Image src={src} alt="startup landing logo" />
    </CustomLink>
  );
}

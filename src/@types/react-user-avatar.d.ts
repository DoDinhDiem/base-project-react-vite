// src/react-user-avatar.d.ts or types/react-user-avatar.d.ts
declare module 'react-user-avatar' {
  import React from 'react';

  interface UserAvatarProps {
    size?: number;
    name: string;
    src?: string;
    color?: string;
    style?: React.CSSProperties;
    className?: string;
  }

  const UserAvatar: React.FC<UserAvatarProps>;

  export default UserAvatar;
}

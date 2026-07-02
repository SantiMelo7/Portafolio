import { Button } from 'antd';
import type { GlobalToken } from 'antd/es/theme/interface';
import styled from 'styled-components';

interface GlobalProps {
  $token: GlobalToken;
}

export const ButtonTheme = styled(Button)<GlobalProps>`
  font-size: 16px;
  width: 64px;
  height: 64px;
  color: ${({ $token }) => $token.colorText} !important;
`;

export const ButtonLanguage = styled(Button)<GlobalProps>`
  font-size: 0.9rem;
  min-width: 50px;
  height: 30px;
  color: ${({ $token }) => $token.colorText} !important;
`;

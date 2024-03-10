import { useMutation } from '@tanstack/react-query';
import { AuthService, OpenAPI, TokenObtainPair, TokenRefresh } from '../api';
import { TOKEN_KEY } from '../../../shared-components/src/constants';

type LoginType = {
  username: string;
  password: string;
};

export const useLogin = () => {
  const login = useMutation({
    mutationFn: (data: TokenObtainPair) => AuthService.authTokenCreate(data),
  });

  const performLogin = (
    values: LoginType,
    onSuccess: (data: TokenRefresh) => void
  ) => {
    login.mutate(values, {
      onSuccess: (data) => {
        const token = (data as unknown as TokenRefresh).access || '';
        localStorage.setItem(
          TOKEN_KEY,
          token
        );
        OpenAPI.TOKEN = token;
        onSuccess(data as unknown as TokenRefresh);
      },
    });
  };

  return { ...login, performLogin }
};

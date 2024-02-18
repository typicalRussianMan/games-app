import { FC, PropsWithChildren, createContext, memo, useContext, useReducer } from 'react';

import { User } from '../models/user';

type UserState = {

  /** User. */
  readonly user: User | null;

  /** Whether is user loading. */
  readonly isLoading: boolean;

  /** Error message. */
  readonly error: string | null;
};

type UserActionLoading = {

  /** Action type. */
  readonly type: 'loading';
};

type UserActionUser = {

  /** Action type. */
  readonly type: 'user';

  /** User. */
  readonly user: User;
};

type UserActionError = {

  /** Action type. */
  readonly type: 'error';

  /** Error message. */
  readonly error: string;
};

type UserAction = UserActionError | UserActionLoading | UserActionUser;

type UserContext = {

  /** State. */
  readonly state: UserState;

  /** Dispatch function. */
  dispatch(action: UserAction): void;
};

/** User context. */
const UserContext = createContext<UserContext>({
  state: {
    error: null,
    isLoading: false,
    user: null,
  },
  dispatch() {
    return undefined;
  },
});

const userReducer = (_state: UserState, action: UserAction): UserState => {
  const { type } = action;

  switch (type) {
    case 'error':
      return { error: action.error, isLoading: false, user: null };
    case 'loading':
      return { error: null, isLoading: true, user: null };
    case 'user':
      return { error: null, isLoading: false, user: action.user };
    default:
      throw new Error(`Unknown action type: ${type}`);
  }
};

/** Use user context. */
export function useUser(): UserContext {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser() must be used within a UserContext.Provider');
  }

  return context;
}

const UserProviderComponent: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, {
    user: null,
    error: null,
    isLoading: false,
  });

  return (
    <UserContext.Provider value={{
      state,
      dispatch,
    }}>
      { children }
    </UserContext.Provider>
  );
};

/** User provider. */
export const UserProvider = memo(UserProviderComponent);

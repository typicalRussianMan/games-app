import { FC, PropsWithChildren, createContext, useContext, useReducer } from "react";
import { User } from "../models/user";

interface IUserState {

  readonly user: User | null;

  readonly isLoading: boolean;

  readonly error: string | null;
}

interface IUserActionLoading {

  readonly type: 'loading';
}

interface IUserActionUser {

  readonly type: 'user';

  readonly user: User;
}

interface IUserActionError {

  readonly type: 'error';

  readonly error: string;
}

type UserAction = IUserActionError | IUserActionLoading | IUserActionUser;

interface IUserContext {

  readonly state: IUserState;

  dispatch(action: UserAction): void;
}

/** User context. */
const UserContext = createContext<IUserContext>({
  state: {
    error: null,
    isLoading: false,
    user: null,
  },
  dispatch: () => {}
});

const userReducer = (_state: IUserState, action: UserAction): IUserState => {
  const { type } = action;

  switch (type) {
    case 'error':
      return { error: action.error, isLoading: false, user: null };
    case 'loading':
      return { error: null, isLoading: true, user: null };
    case 'user':
      return { error: null, isLoading: false, user: action.user };
  }
}

/** Use user context. */
export function useUser(): IUserContext {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser() must be used within a UserContext.Provider');
  }

  return context;
}

/** User provider. */
export const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, {
    user: null,
    error: null,
    isLoading: false,
  })

  return (
    <UserContext.Provider value={{
      state,
      dispatch,
    }}>
      { children }
    </UserContext.Provider>
  )
}

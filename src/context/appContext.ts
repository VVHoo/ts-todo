import * as React from 'react'
export interface IAppContext {
    todoList: todos.ITodoData[]
}

export type Action = {
    type: string;
    payload?: any;
}
interface IAppContextType {
    appState: IAppContext;
    appDispatch: React.Dispatch<Action>
}

export const AppContext = React.createContext<IAppContextType>({
    appState: {} as IAppContext,
    appDispatch: () => {/**/}
});

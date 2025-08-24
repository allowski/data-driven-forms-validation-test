import {PropsWithChildren, useEffect, useState} from "react";
import {Button} from "@mui/material";

export const LoadingExample = ({id, timeout = 3000}: PropsWithChildren<{id: string, timeout: number}>) => {

    const [state, setState] = useState<'loading'|'loaded'>("loading");

    const doSomething = () => {
        setState('loading');
        setTimeout(() => {
            setState('loaded');
        }, timeout);
    };

    useEffect(() => {
        setTimeout(() => {
            setState('loaded');
        }, timeout);
    }, []);

    if(state === 'loading'){
        return <div role={'progressbar'}></div>
    }

    return <div>
        <h3>This is a loading component id: {id}, current state is: {state}</h3>
        <Button onClick={doSomething}>Reload now: {id}</Button>
    </div>

}

import {act, render, screen} from "@testing-library/react";
import App from "./App.tsx";
import {userEvent} from "@testing-library/user-event";

describe('TestApp', () => {
    it(`should display name`, async () => {
        const container = render(<App />);
        const input = await screen.getByLabelText('Name *', {exact: true});
        await act(() => userEvent.type(input, "Abc"));
    })
});

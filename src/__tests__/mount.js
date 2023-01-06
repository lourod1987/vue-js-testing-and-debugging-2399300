/**
 * @jest-environment jsdom
 */
import { render, fireEvent } from '@testing-library/vue';
import Home from "../views/MainHome.vue";

test ("Render Home", async () => {
    const { getByText } = render(Home);
    getByText("Login to your account");

    const loginButton = getByText("Login");
    await fireEvent.click(loginButton);
    getByText("Please enter your email and password");
});
